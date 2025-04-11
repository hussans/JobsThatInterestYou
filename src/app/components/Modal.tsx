import React from 'react';

interface CompanyInfo {
  name: string;
  culture: string;
  skillsRequired: string;
  goals: string;
  currentSkills: string;
  logoSrc?: string;
  jobLink?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyInfo: CompanyInfo;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, companyInfo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 left-2 text-gray-500 hover:text-gray-800"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-2xl font-[NeueMontreal-Medium] text-center">{companyInfo.name}</h2>
        </div>
        
        <div className="space-y-3">
          <div>
            <h3 className="font-[NeueMontreal-Medium] text-gray-800">Culture & Benefits:</h3>
            <p className="font-[NeueMontreal-Regular] text-gray-700">{companyInfo.culture}</p>
          </div>
          
          <div>
            <h3 className="font-[NeueMontreal-Medium] text-gray-800">Skills Required:</h3>
            <p className="font-[NeueMontreal-Regular] text-gray-700">{companyInfo.skillsRequired}</p>
          </div>
          
          <div>
            <h3 className="font-[NeueMontreal-Medium] text-gray-800">Goals:</h3>
            <p className="font-[NeueMontreal-Regular] text-gray-700">{companyInfo.goals}</p>
          </div>
          
          <div>
            <h3 className="font-[NeueMontreal-Medium] text-gray-800">Current Skills:</h3>
            <p className="font-[NeueMontreal-Regular] text-gray-700">{companyInfo.currentSkills}</p>
          </div>
          
          {companyInfo.jobLink && (
            <div className="mt-4 text-center">
              <a 
                href={companyInfo.jobLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-[NeueMontreal-Medium] inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
              >
                View Job Posting
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;