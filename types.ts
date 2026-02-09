
export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullContent: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
