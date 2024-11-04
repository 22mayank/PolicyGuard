import React from 'react';
import { Database, BarChart2, Clock, AlertTriangle } from 'lucide-react';

const VectorStoreManagement = () => {
  const stats = {
    totalVectors: 12458,
    indexSize: '256MB',
    lastUpdated: '2 mins ago',
    queryLatency: '80ms'
  };

  const recentOperations = [
    { operation: 'Vector Insert', count: 150, time: '1 min ago', status: 'success' },
    { operation: 'Index Update', count: 1, time: '2 mins ago', status: 'success' },
    { operation: 'Query', count: 25, time: '5 mins ago', status: 'success' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Database className="text-blue-600" />
            <h2 className="text-xl font-bold">Vector Store Management</h2>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Database Stats */}
            <div className="space-y-4">
              <h3 className="font-semibold">Database Status</h3>
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <span>Connected to: FAISS DB</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Active</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Vectors</span>
                    <span className="font-medium">{stats.totalVectors.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Index Size</span>
                    <span className="font-medium">{stats.indexSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Query Latency</span>
                    <span className="font-medium">{stats.queryLatency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Updated</span>
                    <span className="font-medium">{stats.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Operations */}
            <div className="space-y-4">
              <h3 className="font-semibold">Recent Operations</h3>
              <div className="border rounded-lg p-4">
                <div className="space-y-3">
                  {recentOperations.map((op, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-gray-500" />
                        <span>{op.operation}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{op.count}</span>
                        <span className="text-xs text-gray-400">{op.time}</span>
                        <span className={`w-2 h-2 rounded-full ${
                          op.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mt-6">
            <h3 className="font-semibold mb-4">Performance Metrics</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart2 size={20} className="text-blue-500" />
                  <h4>Query Performance</h4>
                </div>
                <p className="text-2xl font-semibold">98.5%</p>
                <p className="text-sm text-gray-600">Avg. accuracy</p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={20} className="text-blue-500" />
                  <h4>Response Time</h4>
                </div>
                <p className="text-2xl font-semibold">80ms</p>
                <p className="text-sm text-gray-600">Avg. latency</p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={20} className="text-blue-500" />
                  <h4>Error Rate</h4>
                </div>
                <p className="text-2xl font-semibold">0.02%</p>
                <p className="text-sm text-gray-600">Last 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VectorStoreManagement;