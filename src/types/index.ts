export interface ServiceStatus {
    name: string;
    status: 'active' | 'processing' | 'queued';
    latency: string;
    description: string;
  }
  
  export interface ConflictItem {
    title: string;
    description: string;
    impact: 'High' | 'Medium' | 'Low';
    sections: string[];
  }
  
  export interface SimilarityItem {
    section: string;
    score: number;
    matches: number;
  }