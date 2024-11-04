import React from 'react';
import { 
  Upload, Search, Database, BarChart2, 
  Book, Settings 
} from 'lucide-react';

const navigationItems = [
  { icon: Upload, label: 'Document Input', value: 'input' },
  { icon: Search, label: 'Processing', value: 'processing' },
  { icon: Database, label: 'Vector Store', value: 'vectorstore' },
  { icon: BarChart2, label: 'Analysis', value: 'analysis' },
  { icon: Book, label: 'Results', value: 'results' },
  { icon: Settings, label: 'Settings', value: 'settings' }
];

const ProcessTracker = () => {
  const steps = [
    { label: 'Document Upload', status: 'completed' },
    { label: 'OCR Processing', status: 'in-progress' },
    { label: 'Semantic Chunking', status: 'pending' },
    { label: 'Embedding', status: 'pending' },
    { label: 'Analysis', status: 'pending' }
  ];

  return (
    <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Processing Status</h3>
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step.label} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step.status === 'completed' ? 'bg-green-100 text-green-800' :
              step.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className="w-24 h-1 bg-gray-200 mx-2">
                <div 
                  className={`h-full ${
                    step.status === 'completed' ? 'bg-green-500' :
                    step.status === 'in-progress' ? 'bg-blue-500' : ''
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-4 text-sm">
        {steps.map((step) => (
          <div key={step.label} className="text-center">
            <span className={
              step.status === 'completed' ? 'text-green-600' :
              step.status === 'in-progress' ? 'text-blue-600' :
              'text-gray-600'
            }>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Navigation = ({ activeSection, setActiveSection }: any) => {
  return (
    <div className="h-full w-64 border-r bg-gray-50 p-4 fixed">
      <div className="flex items-center gap-2 mb-6">
        <Database className="text-blue-600" />
        <h2 className="text-xl font-bold">Policy Guard</h2>
      </div>
      
      <nav className="space-y-2">
        {navigationItems.map((item) => (
          <button
            key={item.value}
            onClick={() => setActiveSection(item.value)}
            className={`w-full flex items-center gap-2 p-2 rounded transition-colors ${
              activeSection === item.value 
                ? 'bg-blue-100 text-blue-800' 
                : 'hover:bg-gray-100'
            }`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;