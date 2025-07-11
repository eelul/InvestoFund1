import DocumentDownloadCenter from "@/components/DocumentDownloadCenter";

export default function LegalDocuments() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DocumentDownloadCenter userType="admin" />
    </div>
  );
}