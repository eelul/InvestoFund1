import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Check, FileText, Pen, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ESignatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (signatureData: ESignatureData) => void;
  document: {
    title: string;
    content: string;
    type: 'investment' | 'merchant' | 'iso';
  };
  userInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

interface ESignatureData {
  signature: string;
  dateSigned: string;
  ipAddress: string;
  fullName: string;
  email: string;
  documentHash: string;
}

export default function ESignatureModal({ 
  isOpen, 
  onClose, 
  onComplete, 
  document, 
  userInfo 
}: ESignatureModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [signature, setSignature] = useState("");
  const [isDrawing, setIsDrawing] = useState(false);
  const [signatureType, setSignatureType] = useState<'typed' | 'drawn'>('typed');
  const [fullName, setFullName] = useState(`${userInfo.firstName} ${userInfo.lastName}`);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    setFullName(`${userInfo.firstName} ${userInfo.lastName}`);
  }, [userInfo]);

  const steps = [
    { number: 1, title: "Review Document", icon: FileText },
    { number: 2, title: "Add Signature", icon: Pen },
    { number: 3, title: "Complete Signing", icon: Check },
  ];

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#1e40af';
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const getSignatureData = (): string => {
    if (signatureType === 'typed') {
      return fullName;
    } else {
      const canvas = canvasRef.current;
      return canvas ? canvas.toDataURL() : '';
    }
  };

  const generateDocumentHash = (content: string): string => {
    // Simple hash generation for demo purposes
    let hash = 0;
    for (let i = 0; i < content.length; i++) {
      const char = content.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(16);
  };

  const handleComplete = async () => {
    const signatureData = getSignatureData();
    
    if (!signatureData || signatureData.trim() === '') {
      toast({
        title: "Signature Required",
        description: "Please add your signature before completing.",
        variant: "destructive",
      });
      return;
    }

    const esignatureData: ESignatureData = {
      signature: signatureData,
      dateSigned: new Date().toISOString(),
      ipAddress: 'xxx.xxx.xxx.xxx', // Would get real IP in production
      fullName,
      email: userInfo.email,
      documentHash: generateDocumentHash(document.content),
    };

    onComplete(esignatureData);
    
    toast({
      title: "Document Signed Successfully!",
      description: "Your electronic signature has been recorded and the document is now legally binding.",
    });

    onClose();
  };

  const nextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      const signatureData = getSignatureData();
      if (!signatureData || signatureData.trim() === '') {
        toast({
          title: "Signature Required",
          description: "Please add your signature before proceeding.",
          variant: "destructive",
        });
        return;
      }
      setCurrentStep(3);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto mx-4" aria-describedby="esignature-description">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-dark">
            Electronic Document Signing
          </DialogTitle>
          <DialogDescription id="esignature-description" className="sr-only">
            Complete the electronic signature process for {document.title}
          </DialogDescription>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex items-center justify-center space-x-8 py-6 border-b">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;
            
            return (
              <div key={step.number} className="flex flex-col items-center space-y-2">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                    {
                      "bg-gradient-to-r from-brand-teal to-brand-blue border-brand-teal text-white": isActive,
                      "bg-green-500 border-green-500 text-white": isCompleted,
                      "bg-white border-gray-300 text-gray-500": !isActive && !isCompleted,
                    }
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}
                </div>
                <span className={cn(
                  "text-sm font-medium",
                  {
                    "text-brand-dark": isActive || isCompleted,
                    "text-gray-500": !isActive && !isCompleted,
                  }
                )}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Step 1: Document Review */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-blue-900">{document.title}</h3>
              </div>
              <p className="text-blue-700 text-sm">
                Please review the document carefully before proceeding to sign.
              </p>
            </div>

            <div className="max-h-96 overflow-y-auto border rounded-lg p-6 bg-gray-50">
              <div className="prose prose-sm max-w-none">
                <div dangerouslySetInnerHTML={{ __html: document.content.replace(/\n/g, '<br>') }} />
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Document Date: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        )}

        {/* Step 2: Add Signature */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="fullName">Full Legal Name</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full legal name"
              />
            </div>

            <div className="space-y-4">
              <Label>Signature Method</Label>
              <div className="flex space-x-4">
                <Button
                  type="button"
                  variant={signatureType === 'typed' ? 'default' : 'outline'}
                  onClick={() => setSignatureType('typed')}
                  className="flex-1"
                >
                  <Pen className="w-4 h-4 mr-2" />
                  Type Signature
                </Button>
                <Button
                  type="button"
                  variant={signatureType === 'drawn' ? 'default' : 'outline'}
                  onClick={() => setSignatureType('drawn')}
                  className="flex-1"
                >
                  <Pen className="w-4 h-4 mr-2" />
                  Draw Signature
                </Button>
              </div>
            </div>

            {signatureType === 'typed' ? (
              <div className="space-y-2">
                <Label>Your Signature</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                  <div 
                    className="text-3xl font-script text-brand-dark"
                    style={{ fontFamily: 'cursive' }}
                  >
                    {fullName || 'Your signature will appear here'}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Draw Your Signature</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={clearCanvas}
                  >
                    Clear
                  </Button>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                  <canvas
                    ref={canvasRef}
                    width={600}
                    height={200}
                    className="w-full h-48 cursor-crosshair"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Click and drag to draw your signature above
                </p>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Complete Signing */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-900">Ready to Complete</h3>
                  <p className="text-green-700">Review your signature and complete the signing process.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Signer Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <span>{fullName}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 text-center">@</span>
                    <span>{userInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{new Date().toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Your Signature</h4>
                <div className="border rounded-lg p-4 bg-white">
                  {signatureType === 'typed' ? (
                    <div 
                      className="text-2xl font-script text-brand-dark"
                      style={{ fontFamily: 'cursive' }}
                    >
                      {fullName}
                    </div>
                  ) : (
                    <div className="h-16 flex items-center">
                      <span className="text-gray-500">Drawn signature preview</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Legal Notice:</strong> By clicking "Complete Signing" below, you agree that your electronic signature 
                is legally binding and equivalent to a handwritten signature. This document will be securely stored 
                and timestamped for legal compliance.
              </p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t">
          <Button
            type="button"
            variant="outline"
            onClick={currentStep === 1 ? onClose : prevStep}
          >
            {currentStep === 1 ? 'Cancel' : 'Previous'}
          </Button>

          <Button
            type="button"
            onClick={currentStep === 3 ? handleComplete : nextStep}
            className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-teal/90 hover:to-brand-blue/90"
          >
            {currentStep === 3 ? 'Complete Signing' : 'Next Step'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}