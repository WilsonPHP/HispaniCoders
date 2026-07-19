export type BlogPostSection = {
  title: string
  paragraphs: string[]
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  description: string
  category: string
  readTime: string
  publishedAt: string
  intro: string
  takeaways: string[]
  sections: BlogPostSection[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-evaluate-latam-engineers',
    title: 'How to Evaluate LATAM Engineers',
    excerpt:
      'A role-based framework for technical depth, communication clarity, and delivery ownership.',
    description:
      'A practical evaluation framework for US teams hiring LATAM engineers with confidence.',
    category: 'Technical Evaluation',
    readTime: '7 min read',
    publishedAt: 'July 2026',
    intro:
      'Strong hiring outcomes come from clear criteria, not intuition alone. This framework helps US teams evaluate technical capability, communication quality, and execution reliability in a consistent way.',
    takeaways: [
      'Define role outcomes before launching interviews',
      'Use practical technical validation over trivia tests',
      'Evaluate communication through real delivery scenarios',
      'Score candidates with a shared rubric to reduce bias',
    ],
    sections: [
      {
        title: 'Start with role outcomes, not stack labels',
        paragraphs: [
          'Many teams begin by listing tools and years of experience. A better approach is to define what success looks like in the first 90 days: ownership expectations, quality standards, and collaboration rhythm.',
          'When interview criteria map directly to delivery outcomes, hiring decisions become faster and more accurate.',
        ],
      },
      {
        title: 'Use realistic technical validation',
        paragraphs: [
          'Short practical exercises and architecture discussions reveal far more than generic quizzes. Focus on problem decomposition, tradeoff reasoning, and production readiness.',
          'Strong candidates explain why they choose one approach over another and how they would protect quality under timeline pressure.',
        ],
      },
      {
        title: 'Test communication in context',
        paragraphs: [
          'For distributed teams, communication is part of technical performance. Evaluate how candidates present status, ask clarifying questions, and align with stakeholders in English.',
          'A candidate who communicates clearly across functions reduces execution risk and onboarding time.',
        ],
      },
    ],
  },
  {
    slug: 'hiring-timeline-blueprint',
    title: 'Hiring Timeline Blueprint',
    excerpt: 'A step-by-step timeline to reduce hiring friction across distributed US-LATAM teams.',
    description:
      'How to design a realistic hiring timeline that improves speed without sacrificing quality.',
    category: 'Hiring Strategy',
    readTime: '6 min read',
    publishedAt: 'July 2026',
    intro:
      'Speed matters, but rushing without structure creates costly mis-hires. This timeline blueprint helps you move quickly while maintaining strong quality control.',
    takeaways: [
      'Set decision owners before sourcing starts',
      'Batch interviews to keep momentum high',
      'Use fast post-interview debrief loops',
      'Protect candidate experience with clear communication',
    ],
    sections: [
      {
        title: 'Week 1: Alignment and role calibration',
        paragraphs: [
          'Clarify role scope, interview stages, evaluation scorecard, and non-negotiable signals. Assign one final decision owner to avoid bottlenecks.',
          'Define a realistic start date based on onboarding bandwidth, not only urgency.',
        ],
      },
      {
        title: 'Week 2: Sourcing and shortlisting',
        paragraphs: [
          'Prioritize quality filters early: relevant domain exposure, communication strength, and practical technical experience.',
          'A focused shortlist reduces interview fatigue and increases close rate.',
        ],
      },
      {
        title: 'Week 3 and beyond: Interview, decide, onboard',
        paragraphs: [
          'Keep feedback windows tight and avoid long decision silences. High-quality candidates usually move fast in the market.',
          'Once selected, run a structured onboarding plan with clear first-week outcomes and communication routines.',
        ],
      },
    ],
  },
  {
    slug: 'scale-from-1-to-10-hires',
    title: 'Scale From 1 to 10 Hires',
    excerpt: 'Operating patterns to sustain candidate quality while increasing hiring velocity.',
    description:
      'How US engineering organizations scale hiring volume without compromising technical standards.',
    category: 'Team Operations',
    readTime: '8 min read',
    publishedAt: 'July 2026',
    intro:
      'Scaling from one strategic hire to multi-role expansion requires repeatable systems. The goal is to increase speed while keeping the quality bar consistent.',
    takeaways: [
      'Standardize scorecards across interviewers',
      'Build reusable role profiles for recurring needs',
      'Separate must-have signals from nice-to-have preferences',
      'Track quality-of-hire indicators after onboarding',
    ],
    sections: [
      {
        title: 'Turn good hiring into a repeatable process',
        paragraphs: [
          'One successful hire does not guarantee repeat success. Document what worked: sourcing channels, interview design, and decision logic.',
          'Process maturity becomes a strategic asset when roadmap demands accelerate.',
        ],
      },
      {
        title: 'Protect quality during high-volume cycles',
        paragraphs: [
          'Without clear standards, fast growth creates inconsistent evaluations. Use shared criteria and calibration sessions across interviewers.',
          'This keeps technical expectations stable while expanding hiring capacity.',
        ],
      },
      {
        title: 'Measure post-hire performance',
        paragraphs: [
          'Track onboarding speed, ownership maturity, and collaboration reliability over the first 90 days.',
          'These metrics help refine your hiring model and improve future close rates.',
        ],
      },
    ],
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
