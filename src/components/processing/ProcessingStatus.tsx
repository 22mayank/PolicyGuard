import React from 'react';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

const ProcessingStatus = () => {
  const services = [
    { 
      name: 'Azure OCR', 
      status: 'active', 
      latency: '120ms',
      description: 'Document text extraction',
      processed: 45,
      total: 50
    },
    { 
      name: 'Semantic Chunking', 
      status: 'processing', 
      latency: '350ms',
      description: 'Content segmentation',
      processed: 30,
      total: 50
    },
    { 
      name: 'Text Embedding', 
      status: 'queued', 
      latency: '-',
      description: 'Vector conversion',
      processed: 0,
      total: 50
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'processing':
        return <Clock className="text-yellow-500" size={20} />;
      default:
        return <AlertCircle className="text-gray-500" size={20} />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Processing Status</h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 gap-4">
            {services.map((service) => (
              <div key={service.name} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="font-semibold">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block font-medium">{service.latency}</span>
                    <span className="text-sm text-gray-600">{service.status}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{service.processed} / {service.total} documents</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 rounded-full h-2 transition-all"
                      style={{ width: `${(service.processed / service.total) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold mb-4">System Performance</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <h4 className="text-sm text-gray-600 mb-1">Average Processing Time</h4>
            <p className="text-2xl font-semibold">1.2s</p>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-sm text-gray-600 mb-1">Success Rate</h4>
            <p className="text-2xl font-semibold">99.8%</p>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="text-sm text-gray-600 mb-1">Documents Processed</h4>
            <p className="text-2xl font-semibold">1,234</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingStatus;