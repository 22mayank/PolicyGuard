import React, { useState } from 'react';
import Navigation from './components/navigation/Navigation';
import DocumentInput from './components/input/DocumentInput';
import ProcessingStatus from './components/processing/ProcessingStatus';
import AnalysisComponent from './components/analysis/AnalysisComponent';
import VectorStoreManagement from './components/vectorstore/VectorStoreManagement';
import ResultsComponent from './components/results/ResultsComponent';

const App = () => {
  const [activeSection, setActiveSection] = useState('input');

  const renderContent = () => {
    switch (activeSection) {
      case 'input':
        return <DocumentInput />;
      case 'processing':
        return <ProcessingStatus />;
      case 'vectorstore':
        return <VectorStoreManagement />;
      case 'analysis':
        return <AnalysisComponent />;
      case 'results':
        return <ResultsComponent />;
      default:
        return <DocumentInput />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content */}
      <div className="flex-1 ml-64"> {/* ml-64 matches the width of navigation */}
        <div className="p-6">
          {/* Process Tracker */}
          <div className="mb-6">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="text-lg font-semibold mb-4">Processing Status</h3>
              <div className="grid grid-cols-5 gap-4">
                {['Document Upload', 'OCR Processing', 'Semantic Chunking', 'Embedding', 'Analysis'].map((step, index) => (
                  <div key={step} className="text-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                      index === 0 ? 'bg-green-100 text-green-800' :
                      index === 1 ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {index + 1}
                    </div>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Section Content */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;