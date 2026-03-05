"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfPath: string;
  title: string;
}

export function PDFViewerModal({
  isOpen,
  onClose,
  pdfPath,
  title,
}: PDFViewerModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [fallbackView, setFallbackView] = useState(false);

  // Reset states when the modal opens or PDF changes
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setHasError(false);
      setFallbackView(false);

      // Check if the PDF exists
      fetch(pdfPath)
        .then((response) => {
          if (!response.ok) {
            setHasError(true);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching PDF:", error);
          setHasError(true);
          setIsLoading(false);
        });
    }
  }, [isOpen, pdfPath]);

  // Try alternate viewing method if primary fails
  const handlePrimaryViewError = () => {
    console.log("Primary view failed, trying fallback");
    setFallbackView(true);
  };

  const handleViewError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Direct download link for the PDF
  const handleDownload = () => {
    window.open(pdfPath, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[90vw] h-[90vh] p-0">
        <DialogHeader className="p-4 border-b flex justify-between items-center">
          <DialogTitle>{title}</DialogTitle>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download
            </button>
            <button
              onClick={onClose}
              className="rounded-full bg-gray-100 p-1 hover:bg-gray-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </DialogHeader>

        <div className="relative w-full h-full flex-1">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
              <div className="text-center">
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
                <p className="mt-2 text-gray-600">Loading PDF...</p>
              </div>
            </div>
          )}

          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  PDF Not Found
                </h3>
                <p className="text-gray-600 mb-4">
                  Sorry, we couldn't load the roadmap PDF for this course.
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Download PDF
                  </button>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {!fallbackView ? (
            <object
              data={`${pdfPath}#toolbar=1&navpanes=1`}
              type="application/pdf"
              className="w-full h-full"
              style={{ height: "calc(90vh - 60px)" }}
              onError={handlePrimaryViewError}
            >
              <p>
                Your browser does not support PDFs. Please download the PDF to
                view it.
              </p>
            </object>
          ) : (
            <iframe
              src={pdfPath}
              className="w-full h-full"
              style={{ height: "calc(90vh - 60px)" }}
              title={title}
              onError={handleViewError}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
