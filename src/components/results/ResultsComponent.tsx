import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, FileText, AlertCircle } from 'lucide-react';

const ResultsComponent = () => {
  const [activeTab, setActiveTab] = useState('conflicts');

  const conflicts = [
    {
      id: 1,
      severity: 'high',
      title: 'Claim Filing Deadline Conflict',
      description: 'New policy states 30 days, existing policy allows 45 days',
      impact: 'Process change required',
      recommendations: [
        'Update all claim processing documentation',
        'Notify all stakeholders of the change',
        'Update automated validation rules'
      ]
    },
    {
      id: 2,
      severity: 'medium',
      title: 'Documentation Requirements',
      description: 'Inconsistent documentation requirements detected',
      impact: 'Documentation process update needed',
      recommendations: [
        'Standardize documentation requirements',
        'Update documentation templates'
      ]
    }
  ];

  const changes = [
    {
      type: 'addition',
      description: 'New clause added for digital signature requirements',
      section: 'Section 3.2',
      impact: 'Medium'
    },
    {
      type: 'modification',
      description: 'Updated payment terms and conditions',
      section: 'Section 4.1',
      impact: 'High'
    }
  ];

  const recommendations = [
    {
      priority: 'high',
      title: 'Update Claim Processing Timeline',
      description: 'Implement new 30-day claim filing deadline across all systems',
      effort: 'Medium',
      timeline: '2-3 weeks',
      dependencies: ['IT Systems', 'Training', 'Documentation']
    },
    {
      priority: 'medium',
      title: 'Standardize Documentation',
      description: 'Create unified documentation requirements',
      effort: 'Low',
      timeline: '1-2 weeks',
      dependencies: ['Legal Review', 'Documentation']
    }
  ];

  const renderConflicts = () => (
    <div className="space-y-4">
      {conflicts.map((conflict) => (
        <div key={conflict.id} className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              {conflict.severity === 'high' ? 
                <AlertTriangle className="text-red-500" size={20} /> : 
                <AlertCircle className="text-yellow-500" size={20} />
              }
              <h3 className="font-semibold">{conflict.title}</h3>
            </div>
            <span className={`px-2 py-1 rounded text-sm ${
              conflict.severity === 'high' 
                ? 'bg-red-100 text-red-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {conflict.severity.toUpperCase()}
            </span>
          </div>
          <p className="text-gray-600 mb-3">{conflict.description}</p>
          <div className="mb-3">
            <h4 className="font-medium mb-2">Impact:</h4>
            <p className="text-gray-600">{conflict.impact}</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Recommendations:</h4>
            <ul className="list-disc list-inside space-y-1">
              {conflict.recommendations.map((rec, index) => (
                <li key={index} className="text-gray-600">{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );

  const renderChanges = () => (
    <div className="space-y-4">
      {changes.map((change, index) => (
        <div key={index} className="border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <FileText size={20} className="text-blue-500" />
            <span className="font-semibold">
              {change.type.charAt(0).toUpperCase() + change.type.slice(1)}
            </span>
          </div>
          <p className="text-gray-600 mb-2">{change.description}</p>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">{change.section}</span>
            <span className={`px-2 py-1 rounded text-sm ${
              change.impact === 'High' 
                ? 'bg-red-100 text-red-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {change.impact} Impact
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderRecommendations = () => (
    <div className="space-y-4">
      {recommendations.map((rec, index) => (
        <div key={index} className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} />
              <h3 className="font-semibold">{rec.title}</h3>
            </div>
            <span className={`px-2 py-1 rounded text-sm ${
              rec.priority === 'high'
                ? 'bg-red-100 text-red-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {rec.priority.toUpperCase()} Priority
            </span>
          </div>
          <p className="text-gray-600 mb-3">{rec.description}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-1">Effort</h4>
              <p className="text-gray-600">{rec.effort}</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Timeline</h4>
              <p className="text-gray-600">{rec.timeline}</p>
            </div>
          </div>
          <div className="mt-3">
            <h4 className="font-medium mb-2">Dependencies:</h4>
            <div className="flex flex-wrap gap-2">
              {rec.dependencies.map((dep, depIndex) => (
                <span 
                  key={depIndex}
                  className="px-2 py-1 bg-gray-100 rounded text-sm"
                >
                  {dep}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Analysis Results</h2>
      </div>

      <div className="border-b">
        <div className="flex">
          <button
            onClick={() => setActiveTab('conflicts')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'conflicts'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent hover:border-gray-300'
            }`}
          >
            Conflicts
          </button>
          <button
            onClick={() => setActiveTab('changes')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'changes'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent hover:border-gray-300'
            }`}
          >
            Changes
          </button>
          <button
            onClick={() => setActiveTab('recommendations')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'recommendations'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent hover:border-gray-300'
            }`}
          >
            Recommendations
          </button>
        </div>
      </div>

      <div className="p-6">
        {activeTab === 'conflicts' && renderConflicts()}
        {activeTab === 'changes' && renderChanges()}
        {activeTab === 'recommendations' && renderRecommendations()}
      </div>

      <div className="p-4 bg-gray-50 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            <span className="text-sm text-gray-600">
              Analysis completed • Last updated 5 minutes ago
            </span>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Export Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsComponent;