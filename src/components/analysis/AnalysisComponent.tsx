import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

const AnalysisComponent = () => {
  const [activeTab, setActiveTab] = useState('similarity');

  const similarities = [
    { section: 'Claims Process', score: 89, matches: 12 },
    { section: 'Eligibility Criteria', score: 76, matches: 8 },
    { section: 'Coverage Terms', score: 65, matches: 15 }
  ];

  const conflicts = [
    {
      type: 'Critical',
      items: [
        {
          title: 'Filing Deadline Mismatch',
          description: '30 days vs 45 days claim filing window',
          impact: 'High',
          sections: ['Section 2.1', 'Section 3.4']
        }
      ]
    },
    {
      type: 'Warning',
      items: [
        {
          title: 'Documentation Requirements',
          description: 'Additional requirements in new policy',
          impact: 'Medium',
          sections: ['Section 4.2']
        }
      ]
    }
  ];

  const renderSimilarityAnalysis = () => (
    <div className="space-y-6 p-4">
      {similarities.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium">{item.section}</span>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {item.matches} matches
              </span>
              <span className="font-semibold">{item.score}%</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 rounded-full h-2 transition-all"
              style={{ width: `${item.score}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderConflictAnalysis = () => (
    <div className="space-y-6 p-4">
      {conflicts.map((category, index) => (
        <div key={index} className="space-y-4">
          <div className="flex items-center gap-2">
            {category.type === 'Critical' ? 
              <AlertTriangle className="text-red-500" size={20} /> : 
              <Info className="text-yellow-500" size={20} />
            }
            <h3 className="font-semibold">{category.type} Conflicts</h3>
          </div>
          <div className="space-y-4">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{item.title}</h4>
                  <span className={`px-2 py-1 rounded text-sm ${
                    item.impact === 'High' 
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.impact}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <div className="flex gap-2">
                  {item.sections.map((section, sectionIndex) => (
                    <span 
                      key={sectionIndex}
                      className="px-2 py-1 bg-gray-100 rounded text-sm"
                    >
                      {section}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Policy Analysis</h2>
      </div>

      <div className="border-b">
        <div className="flex">
          <button
            onClick={() => setActiveTab('similarity')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'similarity'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent hover:border-gray-300'
            }`}
          >
            Similarity Analysis
          </button>
          <button
            onClick={() => setActiveTab('conflicts')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'conflicts'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent hover:border-gray-300'
            }`}
          >
            Conflict Detection
          </button>
        </div>
      </div>

      {activeTab === 'similarity' ? renderSimilarityAnalysis() : renderConflictAnalysis()}

      <div className="p-4 bg-gray-50 border-t">
        <div className="flex items-center gap-2">
          <CheckCircle className="text-green-500" size={20} />
          <span className="text-sm text-gray-600">
            Analysis completed • Last updated 5 minutes ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnalysisComponent;