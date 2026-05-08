export const projects = [
  {
    id: 1,
    slug: 'skill-sphere',
    title: 'SkillSphere – Online Learning Platform',
    role: 'Frontend Web Developer',
    timeline: 'April 2026',

    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],

    description:
      "SkillSphere is a modern, full-stack online learning platform that enables users to explore skill-based courses, access detailed content, and manage personalized profiles. It delivers a seamless user experience with secure authentication, protected routes, dynamic search functionality, and a fully responsive interface across devices.",

    overview:
      "SkillSphere was developed to address common limitations in online learning platforms, such as poor user experience, lack of secure access control, and inefficient course discovery. The goal was to build a scalable and user-centric platform that simplifies learning and improves engagement.",

    overviewDetail:
      "SkillSphere is a full-stack application built with Next.js, Tailwind CSS, and MongoDB, focusing on performance, security, and modern UI/UX. It features secure authentication (including Google login), protected routes for restricted content, dynamic course search, and user profile management. The platform ensures fast performance, responsive design, and a smooth, intuitive learning experience across mobile, tablet, and desktop devices.",

    problem: [
      "Lack of intuitive and responsive UI in many learning platforms",
      "Insecure or limited authentication systems for user access",
      "No protected routes, allowing unauthorized access to premium content",
      "Inefficient course discovery due to weak or missing search functionality",
      "Limited user profile management and personalization options",
      "Poor user experience due to lack of proper loading and error handling"
    ],

    solution: [
      "Implemented secure authentication using BetterAuth with email and Google login",
      "Developed protected routes to restrict unauthorized access to course content",
      "Designed a fully responsive and modern UI using Tailwind CSS and HeroUI",
      "Built dynamic course search functionality for faster content discovery",
      "Added user profile management features for better personalization",
      "Integrated toast notifications, loading states, and error handling to enhance user experience"
    ],

    techHighlights: [
      "Implemented Server Components to reduce client-side JavaScript and improve performance",
      "Built secure authentication with protected routes for restricted content access",
      "Designed reusable component architecture for scalable UI development",
      "Implemented real-time search with dynamic filtering for improved UX"
    ],

    challenges: [
      "Managing authentication state across protected routes",
      "Optimizing search performance for dynamic queries",
      "Handling asynchronous data with proper loading and error states",
      "Maintaining consistent UI across dark and light themes",
      "Ensuring responsive design across all screen sizes and devices"
    ],

    features: [
      "User Authentication (Email & Google Login)",
      "Protected Course Details Page",
      "Search Courses by Title",
      "Fully Responsive Design",
      "User Profile Management",
      "Toast Notifications for Feedback",
      "Loading & Error State Handling",
      "Dynamic Course Listing"
    ],

    packages: [
      "better-auth",
      "mongodb",
      "swiper",
      "react-toastify",
      "framer-motion",
      "lottie-react",
      "react-icons"
    ],

    stats: [
      { label: 'Project Type', value: 'Full-Stack', color: 'primary' },
      { label: 'Authentication', value: 'Secure', color: 'secondary' },
      { label: 'Rendering', value: 'SSR / CSR', color: 'accent' },
      { label: 'Database', value: 'MongoDB', color: 'secondary' },
      { label: 'UI System', value: 'Responsive', color: 'primary' }
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
    id: 3,
    slug: 'dragon-news',
    title: 'Dragon News – Dynamic News Application',
    role: 'Full-Stack Web Developer',
    timeline: 'Not Specified',

    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],

    description:
      "Dragon News is a modern, dynamic, and fully responsive news application built with Next.js. It allows users to browse category-based news, read detailed articles, and access protected sections through authentication. The platform focuses on delivering a smooth user experience with clean UI, responsive design, and secure login functionality.",

    overview:
      "Dragon News was developed to provide a structured and user-friendly news experience where users can easily explore different news categories, read full articles, and access personalized content with authentication-based restrictions.",

    overviewDetail:
      "Dragon News is a full-stack Next.js application featuring category-based dynamic news loading, secure authentication (email/password and social login), protected routes, and MongoDB integration for user data storage. It includes responsive UI design, loading states, and smooth navigation between news categories and details pages.",

    problem: [
      "Lack of structured and category-based news browsing experience in traditional news apps",
      "No secure authentication system for protecting premium or restricted news content",
      "Poor user experience due to unorganized UI and inconsistent layouts",
      "Difficulty in dynamically filtering and loading news based on categories",
      "Absence of social login options for faster user onboarding",
      "Limited responsiveness across different devices in many news platforms"
    ],

    solution: [
      "Implemented dynamic category-based news system for organized content browsing",
      "Built secure authentication system using email/password and social logins (Google & GitHub)",
      "Developed protected routes for restricted access to news details and career section",
      "Integrated MongoDB for secure and scalable user data management",
      "Designed fully responsive UI using Tailwind CSS and DaisyUI",
      "Added loading states, transitions, and clean UI structure for better UX"
    ],

    features: [
      "Dynamic News Category Filtering",
      "Breaking News Marquee Section",
      "User Authentication (Email & Password)",
      "Google Login & GitHub Login",
      "Protected News Details Page",
      "Dynamic News Details Route",
      "Responsive Design (Mobile, Tablet, Desktop)",
      "Category-Based News Loading",
      "Loading & Global State Handling",
      "Navigation with Multiple Sections"
    ],

    techHighlights: [
      "Built with Next.js for fast and scalable rendering",
      "Implemented secure authentication system with social login",
      "Used MongoDB for user data storage and management",
      "Category-based API-driven dynamic content loading",
      "Fully responsive UI with Tailwind CSS and DaisyUI"
    ],

    challenges: [
      "Managing authentication flow across protected routes",
      "Handling dynamic category-based data fetching",
      "Ensuring smooth UX with loading and state management",
      "Maintaining consistent responsive layout across devices"
    ],

    stats: [
      { label: "Project Type", value: "Full-Stack", color: "primary" },
      { label: "Authentication", value: "Secure + Social Login", color: "secondary" },
      { label: "Rendering", value: "SSR / CSR", color: "accent" },
      { label: "Database", value: "MongoDB", color: "secondary" },
      { label: "UI System", value: "Responsive", color: "primary" }
    ],

    packages: [
      "next.js",
      "tailwindcss",
      "daisyui",
      "mongodb",
      "lucide-react",
      "date-fns"
    ],

    image: "https://i.ibb.co.com/WN0fByDZ/image-670b6915.png",

    showcaseImages: [
      "https://i.ibb.co.com/WN0fByDZ/image-670b6915.png",
      "https://i.ibb.co.com/WN0fByDZ/image-670b6915.png",
      "https://i.ibb.co.com/WN0fByDZ/image-670b6915.png"
    ],

    github: "https://github.com/toufiqweb/dragon-news",
    live: "https://dragon-news-ochre.vercel.app/category/01",

    developer: {
      name: "Taj Ahmed",
      project: "Dragon News – News Application"
    },

    nextProject: 3,
    nextTitle: 'Inwi.ma'
  },
  {
    id: 3,
    slug: 'skill-sphere',
    title: 'SkillSphere – Online Learning Platform',
    role: 'Frontend Web Developer',
    timeline: 'April 2026',

    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],

    description:
      "SkillSphere is a modern, full-stack online learning platform that enables users to explore skill-based courses, access detailed content, and manage personalized profiles. It delivers a seamless user experience with secure authentication, protected routes, dynamic search functionality, and a fully responsive interface across devices.",

    overview:
      "SkillSphere was developed to address common limitations in online learning platforms, such as poor user experience, lack of secure access control, and inefficient course discovery. The goal was to build a scalable and user-centric platform that simplifies learning and improves engagement.",

    overviewDetail:
      "SkillSphere is a full-stack application built with Next.js, Tailwind CSS, and MongoDB, focusing on performance, security, and modern UI/UX. It features secure authentication (including Google login), protected routes for restricted content, dynamic course search, and user profile management. The platform ensures fast performance, responsive design, and a smooth, intuitive learning experience across mobile, tablet, and desktop devices.",

    problem: [
      "Lack of intuitive and responsive UI in many learning platforms",
      "Insecure or limited authentication systems for user access",
      "No protected routes, allowing unauthorized access to premium content",
      "Inefficient course discovery due to weak or missing search functionality",
      "Limited user profile management and personalization options",
      "Poor user experience due to lack of proper loading and error handling"
    ],

    solution: [
      "Implemented secure authentication using BetterAuth with email and Google login",
      "Developed protected routes to restrict unauthorized access to course content",
      "Designed a fully responsive and modern UI using Tailwind CSS and HeroUI",
      "Built dynamic course search functionality for faster content discovery",
      "Added user profile management features for better personalization",
      "Integrated toast notifications, loading states, and error handling to enhance user experience"
    ],

    techHighlights: [
      "Implemented Server Components to reduce client-side JavaScript and improve performance",
      "Built secure authentication with protected routes for restricted content access",
      "Designed reusable component architecture for scalable UI development",
      "Implemented real-time search with dynamic filtering for improved UX"
    ],

    challenges: [
      "Managing authentication state across protected routes",
      "Optimizing search performance for dynamic queries",
      "Handling asynchronous data with proper loading and error states",
      "Maintaining consistent UI across dark and light themes",
      "Ensuring responsive design across all screen sizes and devices"
    ],

    features: [
      "User Authentication (Email & Google Login)",
      "Protected Course Details Page",
      "Search Courses by Title",
      "Fully Responsive Design",
      "User Profile Management",
      "Toast Notifications for Feedback",
      "Loading & Error State Handling",
      "Dynamic Course Listing"
    ],

    packages: [
      "better-auth",
      "mongodb",
      "swiper",
      "react-toastify",
      "framer-motion",
      "lottie-react",
      "react-icons"
    ],

    stats: [
      { label: 'Project Type', value: 'Full-Stack', color: 'primary' },
      { label: 'Authentication', value: 'Secure', color: 'secondary' },
      { label: 'Rendering', value: 'SSR / CSR', color: 'accent' },
      { label: 'Database', value: 'MongoDB', color: 'secondary' },
      { label: 'UI System', value: 'Responsive', color: 'primary' }
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
    id: 4,
    slug: 'skill-sphere',
    title: 'SkillSphere – Online Learning Platform',
    role: 'Frontend Web Developer',
    timeline: 'April 2026',

    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],

    description:
      "SkillSphere is a modern, full-stack online learning platform that enables users to explore skill-based courses, access detailed content, and manage personalized profiles. It delivers a seamless user experience with secure authentication, protected routes, dynamic search functionality, and a fully responsive interface across devices.",

    overview:
      "SkillSphere was developed to address common limitations in online learning platforms, such as poor user experience, lack of secure access control, and inefficient course discovery. The goal was to build a scalable and user-centric platform that simplifies learning and improves engagement.",

    overviewDetail:
      "SkillSphere is a full-stack application built with Next.js, Tailwind CSS, and MongoDB, focusing on performance, security, and modern UI/UX. It features secure authentication (including Google login), protected routes for restricted content, dynamic course search, and user profile management. The platform ensures fast performance, responsive design, and a smooth, intuitive learning experience across mobile, tablet, and desktop devices.",

    problem: [
      "Lack of intuitive and responsive UI in many learning platforms",
      "Insecure or limited authentication systems for user access",
      "No protected routes, allowing unauthorized access to premium content",
      "Inefficient course discovery due to weak or missing search functionality",
      "Limited user profile management and personalization options",
      "Poor user experience due to lack of proper loading and error handling"
    ],

    solution: [
      "Implemented secure authentication using BetterAuth with email and Google login",
      "Developed protected routes to restrict unauthorized access to course content",
      "Designed a fully responsive and modern UI using Tailwind CSS and HeroUI",
      "Built dynamic course search functionality for faster content discovery",
      "Added user profile management features for better personalization",
      "Integrated toast notifications, loading states, and error handling to enhance user experience"
    ],

    techHighlights: [
      "Implemented Server Components to reduce client-side JavaScript and improve performance",
      "Built secure authentication with protected routes for restricted content access",
      "Designed reusable component architecture for scalable UI development",
      "Implemented real-time search with dynamic filtering for improved UX"
    ],

    challenges: [
      "Managing authentication state across protected routes",
      "Optimizing search performance for dynamic queries",
      "Handling asynchronous data with proper loading and error states",
      "Maintaining consistent UI across dark and light themes",
      "Ensuring responsive design across all screen sizes and devices"
    ],

    features: [
      "User Authentication (Email & Google Login)",
      "Protected Course Details Page",
      "Search Courses by Title",
      "Fully Responsive Design",
      "User Profile Management",
      "Toast Notifications for Feedback",
      "Loading & Error State Handling",
      "Dynamic Course Listing"
    ],

    packages: [
      "better-auth",
      "mongodb",
      "swiper",
      "react-toastify",
      "framer-motion",
      "lottie-react",
      "react-icons"
    ],

    stats: [
      { label: 'Project Type', value: 'Full-Stack', color: 'primary' },
      { label: 'Authentication', value: 'Secure', color: 'secondary' },
      { label: 'Rendering', value: 'SSR / CSR', color: 'accent' },
      { label: 'Database', value: 'MongoDB', color: 'secondary' },
      { label: 'UI System', value: 'Responsive', color: 'primary' }
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
    id: 5,
    slug: 'skill-sphere',
    title: 'SkillSphere – Online Learning Platform',
    role: 'Frontend Web Developer',
    timeline: 'April 2026',

    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],

    description:
      "SkillSphere is a modern, full-stack online learning platform that enables users to explore skill-based courses, access detailed content, and manage personalized profiles. It delivers a seamless user experience with secure authentication, protected routes, dynamic search functionality, and a fully responsive interface across devices.",

    overview:
      "SkillSphere was developed to address common limitations in online learning platforms, such as poor user experience, lack of secure access control, and inefficient course discovery. The goal was to build a scalable and user-centric platform that simplifies learning and improves engagement.",

    overviewDetail:
      "SkillSphere is a full-stack application built with Next.js, Tailwind CSS, and MongoDB, focusing on performance, security, and modern UI/UX. It features secure authentication (including Google login), protected routes for restricted content, dynamic course search, and user profile management. The platform ensures fast performance, responsive design, and a smooth, intuitive learning experience across mobile, tablet, and desktop devices.",

    problem: [
      "Lack of intuitive and responsive UI in many learning platforms",
      "Insecure or limited authentication systems for user access",
      "No protected routes, allowing unauthorized access to premium content",
      "Inefficient course discovery due to weak or missing search functionality",
      "Limited user profile management and personalization options",
      "Poor user experience due to lack of proper loading and error handling"
    ],

    solution: [
      "Implemented secure authentication using BetterAuth with email and Google login",
      "Developed protected routes to restrict unauthorized access to course content",
      "Designed a fully responsive and modern UI using Tailwind CSS and HeroUI",
      "Built dynamic course search functionality for faster content discovery",
      "Added user profile management features for better personalization",
      "Integrated toast notifications, loading states, and error handling to enhance user experience"
    ],

    techHighlights: [
      "Implemented Server Components to reduce client-side JavaScript and improve performance",
      "Built secure authentication with protected routes for restricted content access",
      "Designed reusable component architecture for scalable UI development",
      "Implemented real-time search with dynamic filtering for improved UX"
    ],

    challenges: [
      "Managing authentication state across protected routes",
      "Optimizing search performance for dynamic queries",
      "Handling asynchronous data with proper loading and error states",
      "Maintaining consistent UI across dark and light themes",
      "Ensuring responsive design across all screen sizes and devices"
    ],

    features: [
      "User Authentication (Email & Google Login)",
      "Protected Course Details Page",
      "Search Courses by Title",
      "Fully Responsive Design",
      "User Profile Management",
      "Toast Notifications for Feedback",
      "Loading & Error State Handling",
      "Dynamic Course Listing"
    ],

    packages: [
      "better-auth",
      "mongodb",
      "swiper",
      "react-toastify",
      "framer-motion",
      "lottie-react",
      "react-icons"
    ],

    stats: [
      { label: 'Project Type', value: 'Full-Stack', color: 'primary' },
      { label: 'Authentication', value: 'Secure', color: 'secondary' },
      { label: 'Rendering', value: 'SSR / CSR', color: 'accent' },
      { label: 'Database', value: 'MongoDB', color: 'secondary' },
      { label: 'UI System', value: 'Responsive', color: 'primary' }
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
    id: 6,
    slug: 'skill-sphere',
    title: 'SkillSphere – Online Learning Platform',
    role: 'Frontend Web Developer',
    timeline: 'April 2026',

    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],

    description:
      "SkillSphere is a modern, full-stack online learning platform that enables users to explore skill-based courses, access detailed content, and manage personalized profiles. It delivers a seamless user experience with secure authentication, protected routes, dynamic search functionality, and a fully responsive interface across devices.",

    overview:
      "SkillSphere was developed to address common limitations in online learning platforms, such as poor user experience, lack of secure access control, and inefficient course discovery. The goal was to build a scalable and user-centric platform that simplifies learning and improves engagement.",

    overviewDetail:
      "SkillSphere is a full-stack application built with Next.js, Tailwind CSS, and MongoDB, focusing on performance, security, and modern UI/UX. It features secure authentication (including Google login), protected routes for restricted content, dynamic course search, and user profile management. The platform ensures fast performance, responsive design, and a smooth, intuitive learning experience across mobile, tablet, and desktop devices.",

    problem: [
      "Lack of intuitive and responsive UI in many learning platforms",
      "Insecure or limited authentication systems for user access",
      "No protected routes, allowing unauthorized access to premium content",
      "Inefficient course discovery due to weak or missing search functionality",
      "Limited user profile management and personalization options",
      "Poor user experience due to lack of proper loading and error handling"
    ],

    solution: [
      "Implemented secure authentication using BetterAuth with email and Google login",
      "Developed protected routes to restrict unauthorized access to course content",
      "Designed a fully responsive and modern UI using Tailwind CSS and HeroUI",
      "Built dynamic course search functionality for faster content discovery",
      "Added user profile management features for better personalization",
      "Integrated toast notifications, loading states, and error handling to enhance user experience"
    ],

    techHighlights: [
      "Implemented Server Components to reduce client-side JavaScript and improve performance",
      "Built secure authentication with protected routes for restricted content access",
      "Designed reusable component architecture for scalable UI development",
      "Implemented real-time search with dynamic filtering for improved UX"
    ],

    challenges: [
      "Managing authentication state across protected routes",
      "Optimizing search performance for dynamic queries",
      "Handling asynchronous data with proper loading and error states",
      "Maintaining consistent UI across dark and light themes",
      "Ensuring responsive design across all screen sizes and devices"
    ],

    features: [
      "User Authentication (Email & Google Login)",
      "Protected Course Details Page",
      "Search Courses by Title",
      "Fully Responsive Design",
      "User Profile Management",
      "Toast Notifications for Feedback",
      "Loading & Error State Handling",
      "Dynamic Course Listing"
    ],

    packages: [
      "better-auth",
      "mongodb",
      "swiper",
      "react-toastify",
      "framer-motion",
      "lottie-react",
      "react-icons"
    ],

    stats: [
      { label: 'Project Type', value: 'Full-Stack', color: 'primary' },
      { label: 'Authentication', value: 'Secure', color: 'secondary' },
      { label: 'Rendering', value: 'SSR / CSR', color: 'accent' },
      { label: 'Database', value: 'MongoDB', color: 'secondary' },
      { label: 'UI System', value: 'Responsive', color: 'primary' }
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
];
