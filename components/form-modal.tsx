"use client";
import { useEffect, useRef } from "react";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormModal({ isOpen, onClose }: FormModalProps) {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Load JotForm script
      const script = document.createElement('script');
      script.src = 'https://form.jotform.com/jsform/251424314179555';
      script.async = true;
      
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = ''; // Clear previous content
        formContainerRef.current.appendChild(script);
      }
      
      return () => {
        if (formContainerRef.current) {
          formContainerRef.current.innerHTML = '';
        }
      };
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-gray-500"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Book a Free Strategy Call</h2>
            <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you shortly.</p>
          </div>
          <div 
            ref={formContainerRef}
            className="w-full min-h-[500px] flex items-center justify-center"
          >
            <p className="text-gray-500">Loading form...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
