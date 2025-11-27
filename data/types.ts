export interface BlogMeta {
  title: string;
  slug: string;
  date: string;
  updated?: string;
  tags?: string[];
  summary?: string;
}

export interface Service {
  title: string;
  desc: string;
  icon: string;
  banner: string;              // URL to hero banner image
  slug: string;                // derived from title, used for dynamic routing
  longText: string;            // detailed explanation
  howItHelps: string;          // summary of business value
  businessGoals: string[];     // list of goals this service enables
  keyPoints: string[];         // bullets for capabilities/features
}
export interface CaseStudy {
  title: string,
  subtitle: string,
  impact: string,
  href: string
}

export interface ServicesData {
  services: Service[];
}