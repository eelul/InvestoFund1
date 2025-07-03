import { useState, useRef } from "react";
import { Upload, File, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in bytes
  onFilesChange?: (files: File[]) => void;
  className?: string;
}

export function FileUpload({ 
  accept, 
  multiple = false, 
  maxSize = 10 * 1024 * 1024, // 10MB default
  onFilesChange,
  className = ""
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;

    const validFiles = Array.from(newFiles).filter(file => {
      if (file.size > maxSize) {
        alert(`File ${file.name} is too large. Maximum size is ${maxSize / 1024 / 1024}MB.`);
        return false;
      }
      return true;
    });

    const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className={className}>
      <div
        className={`file-upload-area ${isDragOver ? "dragover" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className="w-12 h-12 text-gray-400 mb-4 mx-auto" />
        <p className="text-gray-600 mb-2">
          Drag and drop your files here, or click to browse
        </p>
        <p className="text-sm text-gray-500">
          {accept ? `Accepted formats: ${accept}` : "All file types accepted"}
          {" • "}
          Maximum size: {formatFileSize(maxSize)}
        </p>
        <Button type="button" className="mt-4 bg-brand-blue hover:bg-blue-600">
          Choose Files
        </Button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => handleFiles(e.target.files)}
        className="hidden"
      />

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          <h4 className="font-medium text-sm text-gray-700">Uploaded Files:</h4>
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <File className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeFile(index)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
