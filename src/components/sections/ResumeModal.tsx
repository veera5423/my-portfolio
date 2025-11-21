// components/ResumeModal.tsx
import React from "react";
import Button from '../ui/Button';

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
          className="absolute top-2 right-4 text-xl font-bold text-gray-300 hover:text-brand-500"
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4 font-semibold text-gray-200">Resume Preview</h2>
        <iframe
          src="Veeranjaneyulu_SDE1.pdf"
          className="w-full h-96 border border-brand-500/10 rounded-md bg-black"
          title="Resume Preview"
        ></iframe>
        <div className="mt-4">
          <a href="Veeranjaneyulu_SDE1.pdf" download>
            <Button variant="primary">Download Resume</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
