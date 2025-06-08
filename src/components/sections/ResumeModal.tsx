// components/ResumeModal.tsx
import React from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-xl max-w-2xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-xl font-bold text-gray-600 hover:text-red-500"
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4 font-semibold">Resume Preview</h2>
        <iframe
          src="Veeranjaneyulu's  full stack-2.pdf"
          className="w-full h-96 border"
          title="Resume Preview"
        ></iframe>
        <a
          href="Veeranjaneyulu's  full stack-2.pdf"
          download
          className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeModal;
