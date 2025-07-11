import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Download, FileText, Shield, Users, Building, Scale, Eye, AlertTriangle } from "lucide-react";
import { legalDocuments, type DocumentTemplate } from "@shared/documents";

interface DocumentDownloadCenterProps {
  userType?: 'investor' | 'merchant' | 'broker' | 'admin';
}

export default function DocumentDownloadCenter({ userType = 'admin' }: DocumentDownloadCenterProps) {
  const [selectedDocument, setSelectedDocument] = useState<DocumentTemplate | null>(null);
  const [previewMode, setPreviewMode] = useState(false);

  const getCategoryIcon = (category: DocumentTemplate['category']) => {
    switch (category) {
      case 'investor': return <Users className="w-5 h-5" />;
      case 'merchant': return <Building className="w-5 h-5" />;
      case 'broker': return <FileText className="w-5 h-5" />;
      case 'platform': return <Shield className="w-5 h-5" />;
      case 'compliance': return <Scale className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: DocumentTemplate['category']) => {
    switch (category) {
      case 'investor': return 'bg-blue-100 text-blue-800';
      case 'merchant': return 'bg-green-100 text-green-800';
      case 'broker': return 'bg-purple-100 text-purple-800';
      case 'platform': return 'bg-orange-100 text-orange-800';
      case 'compliance': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getFilteredDocuments = (category?: DocumentTemplate['category']) => {
    let filtered = legalDocuments;
    
    if (category) {
      filtered = filtered.filter(doc => doc.category === category);
    }

    // Filter based on user type permissions
    if (userType !== 'admin') {
      filtered = filtered.filter(doc => {
        if (userType === 'investor') return ['investor', 'platform'].includes(doc.category);
        if (userType === 'merchant') return ['merchant', 'platform'].includes(doc.category);
        if (userType === 'broker') return ['broker', 'platform'].includes(doc.category);
        return true;
      });
    }

    return filtered;
  };

  const downloadDocument = (document: DocumentTemplate) => {
    // Create a blob with the document content
    const content = document.content.replace(/\[([A-Z_]+)\]/g, '___$1___');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create download link
    const link = document.createElement('a');
    link.href = url;
    link.download = `${document.title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const previewDocument = (document: DocumentTemplate) => {
    setSelectedDocument(document);
    setPreviewMode(true);
  };

  const DocumentCard = ({ document }: { document: DocumentTemplate }) => (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            {getCategoryIcon(document.category)}
            <CardTitle className="text-lg leading-tight">{document.title}</CardTitle>
          </div>
          <Badge className={getCategoryColor(document.category)}>
            {document.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          {document.description}
        </p>
        
        {document.requiredFields.length > 0 && (
          <div>
            <p className="text-xs font-medium text-gray-700 mb-1">Required Fields:</p>
            <div className="flex flex-wrap gap-1">
              {document.requiredFields.slice(0, 3).map(field => (
                <Badge key={field} variant="outline" className="text-xs">
                  {field}
                </Badge>
              ))}
              {document.requiredFields.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{document.requiredFields.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}

        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-yellow-800">
              {document.legalNotice}
            </p>
          </div>
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => previewDocument(document)}
            className="flex-1"
          >
            <Eye className="w-4 h-4 mr-1" />
            Preview
          </Button>
          <Button
            onClick={() => downloadDocument(document)}
            size="sm"
            className="flex-1"
          >
            <Download className="w-4 h-4 mr-1" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-dark mb-2">
          Legal Document Center
        </h1>
        <p className="text-gray-600">
          Download comprehensive legal documentation for the InvestoFund platform. 
          All documents are professionally drafted and regulation-compliant.
        </p>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="all">All Documents</TabsTrigger>
          <TabsTrigger value="investor">Investor</TabsTrigger>
          <TabsTrigger value="merchant">Merchant</TabsTrigger>
          <TabsTrigger value="broker">Broker/ISO</TabsTrigger>
          <TabsTrigger value="platform">Platform</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredDocuments().map(document => (
              <DocumentCard key={document.id} document={document} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="investor" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredDocuments('investor').map(document => (
              <DocumentCard key={document.id} document={document} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="merchant" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredDocuments('merchant').map(document => (
              <DocumentCard key={document.id} document={document} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="broker" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredDocuments('broker').map(document => (
              <DocumentCard key={document.id} document={document} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="platform" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredDocuments('platform').map(document => (
              <DocumentCard key={document.id} document={document} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredDocuments('compliance').map(document => (
              <DocumentCard key={document.id} document={document} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Document Preview Modal */}
      <Dialog open={previewMode} onOpenChange={setPreviewMode}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" aria-describedby="document-preview-description">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              {selectedDocument && getCategoryIcon(selectedDocument.category)}
              <span>{selectedDocument?.title}</span>
            </DialogTitle>
            <DialogDescription id="document-preview-description">
              Preview of {selectedDocument?.title} - {selectedDocument?.description}
            </DialogDescription>
          </DialogHeader>
          
          {selectedDocument && (
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-yellow-800 mb-1">Legal Notice</p>
                    <p className="text-sm text-yellow-800">
                      {selectedDocument.legalNotice}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Required Fields:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDocument.requiredFields.map(field => (
                    <Badge key={field} variant="outline">
                      {field}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-white">
                <h4 className="font-medium mb-3">Document Content Preview:</h4>
                <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-4 rounded border max-h-96 overflow-y-auto">
                  {selectedDocument.content.slice(0, 2000)}
                  {selectedDocument.content.length > 2000 && '\n\n... (truncated for preview)'}
                </pre>
              </div>

              <div className="flex justify-end space-x-2">
                <Button 
                  variant="outline" 
                  onClick={() => setPreviewMode(false)}
                >
                  Close Preview
                </Button>
                <Button 
                  onClick={() => {
                    downloadDocument(selectedDocument);
                    setPreviewMode(false);
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Document
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}