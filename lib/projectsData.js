export const projects = [
  {
    id: 1,
    slug: 'skill-sphere',
    title: 'SkillSphere – Online Learning Platform',
    role: 'Lead Frontend Engineer',
    timeline: '4 Months (Q1 2024)',

    tech: ['NEXTJS', 'TAILWIND', 'MONGODB'],

    description:
      'SkillSphere is a modern and fully responsive online learning platform where users can explore skill-based courses, view detailed course information, and manage their profiles. The platform provides a smooth learning experience with secure authentication, protected routes, search functionality, and an intuitive user interface.',

    overview:
      'SkillSphere was conceived to solve the fragmented online-learning experience. Traditional platforms often present data in ways that make course discovery and progress tracking cumbersome for learners.',

    overviewDetail:
      'As Lead Frontend Engineer, I architected a modular component system powered by Next.js App Router, enabling sub-second page transitions and server-side rendering for SEO-critical course pages.',

    problem:
      'Learners were juggling multiple tabs, losing progress context, and battling slow-loading course pages. The absence of a unified dashboard led to poor course-completion rates.',

    solution:
      'SkillSphere solves this by offering fast navigation, protected routes, intelligent search, and a unified dashboard for managing learning progress.',

    techHighlights: [
      'Server Components for zero-JS course listing pages',
      'Optimistic UI updates for enrolment actions',
      'MongoDB aggregation pipeline for personalised recommendations'
    ],

    features: [
      'User Authentication (Email + Google Login)',
      'Protected Course Details Page',
      'Search Courses by Title',
      'Responsive Design',
      'Profile Update Feature',
      'Toast Notifications',
      'Loading & Error Handling',
      'Dynamic Course Listing'
    ],

    packages: [
      'better-auth',
      'mongodb',
      'swiper',
      'react-toastify',
      'motion',
      'lottie-react',
      'react-icons'
    ],

    stats: [
      { label: 'Active Daily Learners', value: '8k+', color: 'secondary' },
      { label: 'Platform Type', value: 'E-Learning', color: 'primary' },
      { label: 'Authentication', value: 'Secure', color: 'secondary' },
      { label: 'UI/UX', value: 'Responsive', color: 'accent' },
      { label: 'Tech Stack', value: 'Modern', color: 'primary' }
    ],

    image: 'https://i.ibb.co.com/V0PjcqrB/skill-sphere-mockup.png',

    showcaseImages: [
      'https://i.ibb.co.com/V0PjcqrB/skill-sphere-mockup.png',
      'https://i.ibb.co.com/V0PjcqrB/skill-sphere-mockup.png',
      'https://i.ibb.co.com/V0PjcqrB/skill-sphere-mockup.png'
    ],

    github: 'https://github.com/toufiqweb/skill-sphere',
    live: 'https://skill-sphere-ecru-ten.vercel.app',

    developer: {
      name: 'Taj Ahmed',
      project: 'SkillSphere – Online Learning Platform'
    },

    nextProject: 2,
    nextTitle: 'Inwi.ma'
  },
  {
    id: 2,
    slug: 'inwi-ma',
    title: 'Inwi.ma',
    role: 'Frontend Architect',
    timeline: '3 Months (Q2 2024)',
    tech: ['NEXTJS', 'TAILWIND', 'MONGODB'],
    description:
      'Enterprise-level self-care portal redesign for one of the leading telecom providers.',
    overview:
      'Inwi.ma is a large-scale self-care portal that serves millions of telecom subscribers. The redesign focused on simplifying complex account management flows into clean, intuitive interfaces.',
    overviewDetail:
      'As Frontend Architect, I led the migration from a legacy monolithic stack to a modern Next.js micro-frontend architecture, significantly reducing deployment complexity.',
    problem:
      'Customers were abandoning high-value tasks such as plan upgrades mid-funnel due to a confusing, slow legacy interface that hadn\'t been updated in years.',
    techHighlights: [
      'Micro-frontend architecture with Module Federation',
      'Real-time bill data via WebSocket streaming',
      'Accessibility-first component library (WCAG 2.1 AA)',
    ],
    stats: [{ label: 'Subscribers Served', value: '2M+', color: 'tertiary' }],
    image:
      'https://lh3.googleusercontent.com/aida/ADBb0ugjzfwIDcGYU7mEXl4yR998tNBrc4-YORGfTAN5k0Y2KCxx26E8A_S9UOrmDsFZdeETocq6fevNlHwnP1wdmkgTOBZJyvnLE22p7kgj81PFgqLw7oA81nMo6mwyRIH3RrSuPn4o42CGGZaEvE5tSZSp-BwpTG2ZOyEnEpqCLFbKOFOM5v_0NFM14u3BvLbU9LS78FZXIYSApQvA-7GIg3UUGDCq7T3FRG2PG_FmhXjLwaqxHRAy-03ipKNvgQ_8lfclW4UBcq7CYw',
    showcaseImages: [
      'https://lh3.googleusercontent.com/aida/ADBb0ugjzfwIDcGYU7mEXl4yR998tNBrc4-YORGfTAN5k0Y2KCxx26E8A_S9UOrmDsFZdeETocq6fevNlHwnP1wdmkgTOBZJyvnLE22p7kgj81PFgqLw7oA81nMo6mwyRIH3RrSuPn4o42CGGZaEvE5tSZSp-BwpTG2ZOyEnEpqCLFbKOFOM5v_0NFM14u3BvLbU9LS78FZXIYSApQvA-7GIg3UUGDCq7T3FRG2PG_FmhXjLwaqxHRAy-03ipKNvgQ_8lfclW4UBcq7CYw',
      'https://lh3.googleusercontent.com/aida/ADBb0ugjzfwIDcGYU7mEXl4yR998tNBrc4-YORGfTAN5k0Y2KCxx26E8A_S9UOrmDsFZdeETocq6fevNlHwnP1wdmkgTOBZJyvnLE22p7kgj81PFgqLw7oA81nMo6mwyRIH3RrSuPn4o42CGGZaEvE5tSZSp-BwpTG2ZOyEnEpqCLFbKOFOM5v_0NFM14u3BvLbU9LS78FZXIYSApQvA-7GIg3UUGDCq7T3FRG2PG_FmhXjLwaqxHRAy-03ipKNvgQ_8lfclW4UBcq7CYw',
      'https://lh3.googleusercontent.com/aida/ADBb0ugjzfwIDcGYU7mEXl4yR998tNBrc4-YORGfTAN5k0Y2KCxx26E8A_S9UOrmDsFZdeETocq6fevNlHwnP1wdmkgTOBZJyvnLE22p7kgj81PFgqLw7oA81nMo6mwyRIH3RrSuPn4o42CGGZaEvE5tSZSp-BwpTG2ZOyEnEpqCLFbKOFOM5v_0NFM14u3BvLbU9LS78FZXIYSApQvA-7GIg3UUGDCq7T3FRG2PG_FmhXjLwaqxHRAy-03ipKNvgQ_8lfclW4UBcq7CYw',
    ],
    github: '#',
    live: '#',
    nextProject: 3,
    nextTitle: 'Chat-Bot Assistant',
  },
  {
    id: 3,
    slug: 'chat-bot-assistant',
    title: 'Chat-Bot Assistant',
    role: 'Full-Stack Developer',
    timeline: '2 Months (Q3 2024)',
    tech: ['NEXTJS', 'TAILWIND', 'MONGODB'],
    description:
      'Intelligent conversational AI integrated with custom knowledge bases for specialized support.',
    overview:
      'An AI-powered chat assistant that connects to domain-specific knowledge bases, enabling businesses to provide accurate, instant support without human intervention.',
    overviewDetail:
      'I built the full pipeline — from the chat UI to the RAG (Retrieval-Augmented Generation) backend — delivering sub-200ms response latency at scale.',
    problem:
      'Support teams were overwhelmed by repetitive queries. Existing chatbot solutions lacked domain knowledge, producing generic and unhelpful answers.',
    techHighlights: [
      'RAG pipeline with vector similarity search',
      'Streaming responses via Server-Sent Events',
      'Context-window management for long conversations',
    ],
    stats: [{ label: 'Queries Resolved / Day', value: '5k+', color: 'primary' }],
    image:
      'https://lh3.googleusercontent.com/aida/ADBb0uhaGoZicpE4VTY3DS6e3L-m8t3U_OE7WDcyQ4Hk9izde2p7vPEQ8Ak21FNBcqL0t65BFJJmHHrxPPk3H2nImM7NUMAHA1RviI7DR30EqeFk7N5cjNmE4G8ClBrsUiC1TzXCl2WS_n-QdAYwPgtaXeBrtkFb8aXQ_avpfC7Wp7pyOi6rfwwEqd8siNojO3zIoIkQyj0d6fZNR_ClU4xUpBVAPJ2TFStnNuOTok9XdUYuBqW9na06KD24KFISbiTQ-HJv-a3ulxHXGQ',
    showcaseImages: [
      'https://lh3.googleusercontent.com/aida/ADBb0uhaGoZicpE4VTY3DS6e3L-m8t3U_OE7WDcyQ4Hk9izde2p7vPEQ8Ak21FNBcqL0t65BFJJmHHrxPPk3H2nImM7NUMAHA1RviI7DR30EqeFk7N5cjNmE4G8ClBrsUiC1TzXCl2WS_n-QdAYwPgtaXeBrtkFb8aXQ_avpfC7Wp7pyOi6rfwwEqd8siNojO3zIoIkQyj0d6fZNR_ClU4xUpBVAPJ2TFStnNuOTok9XdUYuBqW9na06KD24KFISbiTQ-HJv-a3ulxHXGQ',
      'https://lh3.googleusercontent.com/aida/ADBb0uhaGoZicpE4VTY3DS6e3L-m8t3U_OE7WDcyQ4Hk9izde2p7vPEQ8Ak21FNBcqL0t65BFJJmHHrxPPk3H2nImM7NUMAHA1RviI7DR30EqeFk7N5cjNmE4G8ClBrsUiC1TzXCl2WS_n-QdAYwPgtaXeBrtkFb8aXQ_avpfC7Wp7pyOi6rfwwEqd8siNojO3zIoIkQyj0d6fZNR_ClU4xUpBVAPJ2TFStnNuOTok9XdUYuBqW9na06KD24KFISbiTQ-HJv-a3ulxHXGQ',
      'https://lh3.googleusercontent.com/aida/ADBb0uhaGoZicpE4VTY3DS6e3L-m8t3U_OE7WDcyQ4Hk9izde2p7vPEQ8Ak21FNBcqL0t65BFJJmHHrxPPk3H2nImM7NUMAHA1RviI7DR30EqeFk7N5cjNmE4G8ClBrsUiC1TzXCl2WS_n-QdAYwPgtaXeBrtkFb8aXQ_avpfC7Wp7pyOi6rfwwEqd8siNojO3zIoIkQyj0d6fZNR_ClU4xUpBVAPJ2TFStnNuOTok9XdUYuBqW9na06KD24KFISbiTQ-HJv-a3ulxHXGQ',
    ],
    github: '#',
    live: '#',
    nextProject: 4,
    nextTitle: 'Resume-Matcher',
  },
  {
    id: 4,
    slug: 'resume-matcher',
    title: 'Resume-Matcher',
    role: 'Backend & ML Engineer',
    timeline: '6 Weeks (Q4 2024)',
    tech: ['NEXTJS', 'TAILWIND', 'MONGODB'],
    description:
      'Smart recruitment tool using NLP to rank and match resumes against job descriptions.',
    overview:
      'Resume-Matcher automates the first stage of hiring by scoring and ranking candidate CVs against a job description, surfacing the best fits instantly.',
    overviewDetail:
      'I designed the NLP pipeline and built the Next.js dashboard that lets recruiters upload JDs, review ranked candidates, and download shortlists — all in one place.',
    problem:
      'Recruiters were manually reviewing hundreds of CVs per role. The process was slow, inconsistent, and prone to unconscious bias.',
    techHighlights: [
      'TF-IDF + semantic embeddings for similarity scoring',
      'PDF parsing with structured data extraction',
      'Batch-processing queue for large applicant pools',
    ],
    stats: [{ label: 'Time Saved Per Hire', value: '70%', color: 'tertiary' }],
    image:
      'https://lh3.googleusercontent.com/aida/ADBb0ug55Ltlb0sVWuH62AcxZYh2PYZupLlJojC_2sPzwK56iuCWTvK1Jt7vFv0F51-ic94H-McXHk05zJ4ZJHZp60mTKJuCyILuJCl9ZrkJcID5YdexBL0xhuC43FL5axtcQDVYkleluG8yGLjtdyntxqvLBKrW1oV-jWNhD_oDSWMDHFOE_fweF1njxw2mdQuSan5QXN2XOKWnS72Mk2Y881Pwv52RA1FQDA6fwyrfjfP2ZQHJjXeFxsB_X1iwGbY3_xqcjtdNZS441Q',
    showcaseImages: [
      'https://lh3.googleusercontent.com/aida/ADBb0ug55Ltlb0sVWuH62AcxZYh2PYZupLlJojC_2sPzwK56iuCWTvK1Jt7vFv0F51-ic94H-McXHk05zJ4ZJHZp60mTKJuCyILuJCl9ZrkJcID5YdexBL0xhuC43FL5axtcQDVYkleluG8yGLjtdyntxqvLBKrW1oV-jWNhD_oDSWMDHFOE_fweF1njxw2mdQuSan5QXN2XOKWnS72Mk2Y881Pwv52RA1FQDA6fwyrfjfP2ZQHJjXeFxsB_X1iwGbY3_xqcjtdNZS441Q',
      'https://lh3.googleusercontent.com/aida/ADBb0ug55Ltlb0sVWuH62AcxZYh2PYZupLlJojC_2sPzwK56iuCWTvK1Jt7vFv0F51-ic94H-McXHk05zJ4ZJHZp60mTKJuCyILuJCl9ZrkJcID5YdexBL0xhuC43FL5axtcQDVYkleluG8yGLjtdyntxqvLBKrW1oV-jWNhD_oDSWMDHFOE_fweF1njxw2mdQuSan5QXN2XOKWnS72Mk2Y881Pwv52RA1FQDA6fwyrfjfP2ZQHJjXeFxsB_X1iwGbY3_xqcjtdNZS441Q',
      'https://lh3.googleusercontent.com/aida/ADBb0ug55Ltlb0sVWuH62AcxZYh2PYZupLlJojC_2sPzwK56iuCWTvK1Jt7vFv0F51-ic94H-McXHk05zJ4ZJHZp60mTKJuCyILuJCl9ZrkJcID5YdexBL0xhuC43FL5axtcQDVYkleluG8yGLjtdyntxqvLBKrW1oV-jWNhD_oDSWMDHFOE_fweF1njxw2mdQuSan5QXN2XOKWnS72Mk2Y881Pwv52RA1FQDA6fwyrfjfP2ZQHJjXeFxsB_X1iwGbY3_xqcjtdNZS441Q',
    ],
    github: '#',
    live: '#',
    nextProject: 5,
    nextTitle: 'tor-movies',
  },
  {
    id: 5,
    slug: 'tor-movies',
    title: 'tor-movies',
    role: 'Frontend Developer',
    timeline: '3 Weeks (Q4 2024)',
    tech: ['NEXTJS', 'TAILWIND', 'MONGODB'],
    description:
      'A lightweight movie discovery engine with real-time search and detailed media insights.',
    overview:
      'tor-movies is a sleek movie discovery app powered by the TMDB API, letting users search, filter, and explore films with rich metadata and trailers in one place.',
    overviewDetail:
      'I focused on making the search experience feel instant by debouncing requests, caching results, and pre-fetching detail pages on hover.',
    problem:
      'Existing movie sites are bloated with ads and slow to navigate. Users wanted a clean, fast alternative to explore what to watch next.',
    techHighlights: [
      'TMDB API integration with SWR caching',
      'Debounced real-time search with infinite scroll',
      'YouTube trailer embed with lazy loading',
    ],
    stats: [{ label: 'Avg. Session Duration', value: '6 min', color: 'secondary' }],
    image:
      'https://lh3.googleusercontent.com/aida/ADBb0uje9cBBZZGO26sgNGw02lYB7GJClaPy0o1m4F5_qDc8Vhz-UQvHt68ackOX-RPffuOA5e3za3KBYmPX7RW-JzYKotf8JDnUR1lGxugra4z_eGRc73UYBtNTgK1_4Zdbj2EfDlrLgOpox-Kwk0yAJGovAFnsTe6iYvHC8VGSFDu2C7zmQceDY4vODESgcHjjjEGpVHgPeU1jcmx4qh5-xYlzz5P_4Y1sufnaoY6A5UhCkGgajMaS0vqfXOyEhfQiLmU2SJbRS5ftSpM',
    showcaseImages: [
      'https://lh3.googleusercontent.com/aida/ADBb0uje9cBBZZGO26sgNGw02lYB7GJClaPy0o1m4F5_qDc8Vhz-UQvHt68ackOX-RPffuOA5e3za3KBYmPX7RW-JzYKotf8JDnUR1lGxugra4z_eGRc73UYBtNTgK1_4Zdbj2EfDlrLgOpox-Kwk0yAJGovAFnsTe6iYvHC8VGSFDu2C7zmQceDY4vODESgcHjjjEGpVHgPeU1jcmx4qh5-xYlzz5P_4Y1sufnaoY6A5UhCkGgajMaS0vqfXOyEhfQiLmU2SJbRS5ftSpM',
      'https://lh3.googleusercontent.com/aida/ADBb0uje9cBBZZGO26sgNGw02lYB7GJClaPy0o1m4F5_qDc8Vhz-UQvHt68ackOX-RPffuOA5e3za3KBYmPX7RW-JzYKotf8JDnUR1lGxugra4z_eGRc73UYBtNTgK1_4Zdbj2EfDlrLgOpox-Kwk0yAJGovAFnsTe6iYvHC8VGSFDu2C7zmQceDY4vODESgcHjjjEGpVHgPeU1jcmx4qh5-xYlzz5P_4Y1sufnaoY6A5UhCkGgajMaS0vqfXOyEhfQiLmU2SJbRS5ftSpM',
      'https://lh3.googleusercontent.com/aida/ADBb0uje9cBBZZGO26sgNGw02lYB7GJClaPy0o1m4F5_qDc8Vhz-UQvHt68ackOX-RPffuOA5e3za3KBYmPX7RW-JzYKotf8JDnUR1lGxugra4z_eGRc73UYBtNTgK1_4Zdbj2EfDlrLgOpox-Kwk0yAJGovAFnsTe6iYvHC8VGSFDu2C7zmQceDY4vODESgcHjjjEGpVHgPeU1jcmx4qh5-xYlzz5P_4Y1sufnaoY6A5UhCkGgajMaS0vqfXOyEhfQiLmU2SJbRS5ftSpM',
    ],
    github: '#',
    live: '#',
    nextProject: 6,
    nextTitle: 'HealthSEO-Auditor',
  },
  {
    id: 6,
    slug: 'healthseo-auditor',
    title: 'HealthSEO-Auditor',
    role: 'Full-Stack Developer',
    timeline: '5 Weeks (Q4 2024)',
    tech: ['NEXTJS', 'TAILWIND', 'MONGODB'],
    description:
      'Automated SEO auditing tool specifically designed for healthcare and medical websites.',
    overview:
      'HealthSEO-Auditor crawls medical websites and generates compliance-aware SEO reports, flagging issues specific to YMYL (Your Money Your Life) content guidelines.',
    overviewDetail:
      'I built the crawler, scoring engine, and dashboard so healthcare marketers can identify and fix critical SEO gaps without needing technical expertise.',
    problem:
      'Generic SEO tools miss healthcare-specific signals like E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) and medical schema mark-up, leaving providers invisible in search.',
    techHighlights: [
      'Custom crawler with rate-limiting and politeness rules',
      'Medical schema validation against Schema.org',
      'Automated PDF/CSV report generation',
    ],
    stats: [{ label: 'Avg. Score Improvement', value: '45%', color: 'primary' }],
    image:
      'https://lh3.googleusercontent.com/aida/ADBb0uhljSneqrj_5BU5kvuB9cOWnaXl3Nbng958us854E84DTj1zMnXCxBvAHTxGaf8J3lQdjmnbmvgB3Fq-jdX1BWTihBZlt4jynIf5pl7dv6N0tHN_4OkdshMd4x09RTHnVKiyKnpDDrMcDdCgG7A7FsWnxXwzaCSeTPPe1Cx4hZnijwNsZ48teSmryX28viCQcO0wh6fVFjiZ4ORFLiZ2famOFmZy16GGdCb-YzE5vlwAOWuxYGA3l5raK-IiC8BVCcNV5XavG0Z4bA',
    showcaseImages: [
      'https://lh3.googleusercontent.com/aida/ADBb0uhljSneqrj_5BU5kvuB9cOWnaXl3Nbng958us854E84DTj1zMnXCxBvAHTxGaf8J3lQdjmnbmvgB3Fq-jdX1BWTihBZlt4jynIf5pl7dv6N0tHN_4OkdshMd4x09RTHnVKiyKnpDDrMcDdCgG7A7FsWnxXwzaCSeTPPe1Cx4hZnijwNsZ48teSmryX28viCQcO0wh6fVFjiZ4ORFLiZ2famOFmZy16GGdCb-YzE5vlwAOWuxYGA3l5raK-IiC8BVCcNV5XavG0Z4bA',
      'https://lh3.googleusercontent.com/aida/ADBb0uhljSneqrj_5BU5kvuB9cOWnaXl3Nbng958us854E84DTj1zMnXCxBvAHTxGaf8J3lQdjmnbmvgB3Fq-jdX1BWTihBZlt4jynIf5pl7dv6N0tHN_4OkdshMd4x09RTHnVKiyKnpDDrMcDdCgG7A7FsWnxXwzaCSeTPPe1Cx4hZnijwNsZ48teSmryX28viCQcO0wh6fVFjiZ4ORFLiZ2famOFmZy16GGdCb-YzE5vlwAOWuxYGA3l5raK-IiC8BVCcNV5XavG0Z4bA',
      'https://lh3.googleusercontent.com/aida/ADBb0uhljSneqrj_5BU5kvuB9cOWnaXl3Nbng958us854E84DTj1zMnXCxBvAHTxGaf8J3lQdjmnbmvgB3Fq-jdX1BWTihBZlt4jynIf5pl7dv6N0tHN_4OkdshMd4x09RTHnVKiyKnpDDrMcDdCgG7A7FsWnxXwzaCSeTPPe1Cx4hZnijwNsZ48teSmryX28viCQcO0wh6fVFjiZ4ORFLiZ2famOFmZy16GGdCb-YzE5vlwAOWuxYGA3l5raK-IiC8BVCcNV5XavG0Z4bA',
    ],
    github: '#',
    live: '#',
    nextProject: 1,
    nextTitle: 'SkillSphere',
  },
];
