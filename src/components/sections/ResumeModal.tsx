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
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="glass p-6 rounded-xl max-w-2xl w-full relative neon-accent"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-xl font-bold text-gray-300 hover:text-brand-400"
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4 font-semibold text-white">Resume Preview</h2>
        <iframe
          src="Veeranjaneyulu_SDE1.pdf"
          className="w-full h-96 border border-gray-800 rounded-md"
          title="Resume Preview"
        ></iframe>
        <a
          href="Veeranjaneyulu_SDE1.pdf"
          download
          className="inline-block mt-4 bg-brand-500 hover:bg-brand-600 text-black px-4 py-2 rounded-lg"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeModal;
