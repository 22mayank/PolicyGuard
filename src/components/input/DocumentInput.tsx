import React, { useState } from 'react';
import { Upload, FileText, Mic } from 'lucide-react';

const DocumentInput = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [isRecording, setIsRecording] = useState(false);

  const renderUploadSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border-2 border-dashed rounded-lg p-4">
        <h3 className="font-semibold mb-2">Existing Policies</h3>
        <div className="flex items-center justify-center h-32 bg-gray-50 rounded hover:bg-gray-100 transition-colors cursor-pointer">
          <div className="text-center">
            <Upload className="mx-auto mb-2" />
            <p className="text-sm text-gray-600">Drag & drop or click to upload</p>
          </div>
        </div>
      </div>
      <div className="border-2 border-dashed rounded-lg p-4">
        <h3 className="font-semibold mb-2">New Policies</h3>
        <div className="flex items-center justify-center h-32 bg-gray-50 rounded hover:bg-gray-100 transition-colors cursor-pointer">
          <div className="text-center">
            <Upload className="mx-auto mb-2" />
            <p className="text-sm text-gray-600">Upload new documents</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTextInput = () => (
    <div className="space-y-4">
      <textarea 
        className="w-full h-64 p-4 border rounded-lg resize-none"
        placeholder="Enter or paste policy text here..."
      />
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Process Text
        </button>
      </div>
    </div>
  );

  const renderVoiceInput = () => (
    <div className="text-center p-8">
      <button 
        onClick={() => setIsRecording(!isRecording)}
        className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${
          isRecording ? 'bg-red-100 hover:bg-red-200' : 'bg-blue-100 hover:bg-blue-200'
        }`}
      >
        <Mic size={32} className={isRecording ? 'text-red-800' : 'text-blue-800'} />
      </button>
      <p>{isRecording ? 'Recording... Click to stop' : 'Click to start recording'}</p>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Document Input</h2>
      </div>

      <div className="border-b">
        <div className="flex">
          {['upload', 'text', 'voice'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {activeTab === 'upload' && renderUploadSection()}
        {activeTab === 'text' && renderTextInput()}
        {activeTab === 'voice' && renderVoiceInput()}
      </div>
    </div>
  );
};

export default DocumentInput;