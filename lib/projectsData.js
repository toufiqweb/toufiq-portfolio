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
      "SkillSphere was developed to create a scalable and user-friendly online learning platform focused on performance, security, and accessibility. The project emphasizes smooth course exploration, secure user authentication, and responsive design for all devices.",

    overviewDetail:
      "SkillSphere is a full-stack application built with Next.js, Tailwind CSS, and MongoDB, focusing on modern UI/UX, performance optimization, and secure authentication. It includes Google login, protected routes, dynamic course search, responsive layouts, and personalized profile management to provide an engaging learning experience across mobile, tablet, and desktop devices.",

    techHighlights: [
      "Implemented Server Components to reduce client-side JavaScript and improve performance",
      "Built secure authentication with protected routes for restricted content access",
      "Designed reusable component architecture for scalable UI development",
      "Implemented dynamic course search with optimized filtering functionality"
    ],

    challenges: [
      "Managing authentication state across protected routes",
      "Optimizing search performance for dynamic queries",
      "Handling asynchronous data with proper loading and error states",
      "Maintaining consistent UI across different screen sizes",
      "Improving overall performance and user experience"
    ],

    futureUpdates: [
      "Add course progress tracking system",
      "Implement video-based learning modules",
      "Introduce instructor dashboard and course management",
      "Add payment gateway integration for premium courses",
      "Implement bookmarking and wishlist functionality",
      "Add multilingual support for global accessibility",
      "Develop real-time discussion and community features",
      "Integrate AI-powered course recommendations"
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

    image: '/images/projects/project-1/mockup.png',

    showcaseImages: [
      '/images/projects/project-1/showcase-1.png',
      '/images/projects/project-1/showcase-2.png',
      '/images/projects/project-1/showcase-3.png'
    ],

    github: 'https://github.com/toufiqweb/skill-sphere',
    live: 'https://skill-sphere-ecru-ten.vercel.app',

    developer: {
      name: 'Toufiq Alahe',
      project: 'SkillSphere – Online Learning Platform'
    },

    nextProject: 2,
    nextTitle: 'Inwi.ma'
  },
  {
    id: 2,
    slug: 'dragon-news',
    title: 'Dragon News – Dynamic News Application',
    role: 'Frontend Web Developer',
    timeline: 'April 2026',

    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],

    description:
      "Dragon News is a modern, dynamic, and fully responsive news application built with Next.js. It allows users to browse category-based news, read detailed articles, and access protected sections through authentication. The platform focuses on delivering a smooth user experience with clean UI, responsive design, and secure login functionality.",

    overview:
      "Dragon News was developed to create a structured and user-friendly digital news platform where users can easily explore category-based content, read full news articles, and securely access protected sections.",

    overviewDetail:
      "Dragon News is a full-stack Next.js application featuring dynamic category-wise news loading, secure authentication with email/password and social login, protected routes, responsive UI design, and MongoDB integration for user management. The project emphasizes performance, smooth navigation, and clean user experience across all devices.",

    techHighlights: [
      "Implemented dynamic category-based content loading with optimized rendering",
      "Built secure authentication system with Google and GitHub social login",
      "Developed protected routes for authenticated-only content access",
      "Designed reusable and responsive UI components using Tailwind CSS and DaisyUI",
      "Implemented loading states and smooth navigation for improved user experience"
    ],

    challenges: [
      "Managing authentication flow across protected pages",
      "Handling dynamic category-based data fetching efficiently",
      "Maintaining responsive layouts across multiple screen sizes",
      "Optimizing loading states and user experience during API requests",
      "Managing route-based dynamic news details rendering"
    ],

    futureUpdates: [
      "Add real-time breaking news updates",
      "Implement bookmark and save news functionality",
      "Introduce dark and light theme switching",
      "Add user comments and discussion system",
      "Implement personalized news recommendations",
      "Add search and advanced filtering system",
      "Introduce admin dashboard for news management",
      "Add multilingual support for wider accessibility"
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

    stats: [
      { label: 'Project Type', value: 'Full-Stack', color: 'primary' },
      { label: 'Authentication', value: 'Secure + Social Login', color: 'secondary' },
      { label: 'Rendering', value: 'SSR / CSR', color: 'accent' },
      { label: 'Database', value: 'MongoDB', color: 'secondary' },
      { label: 'UI System', value: 'Responsive', color: 'primary' }
    ],

    packages: [
      'next.js',
      'tailwindcss',
      'daisyui',
      'mongodb',
      'lucide-react',
      'date-fns'
    ],

    image: '/images/projects/project-2/mockup.png',

    showcaseImages: [
      '/images/projects/project-2/showcase-1.png',
      '/images/projects/project-2/showcase-2.png',
      '/images/projects/project-2/showcase-3.png'

    ],

    github: 'https://github.com/toufiqweb/dragon-news',

    live: 'https://dragon-news-ochre.vercel.app/category/01',

    developer: {
      name: 'Toufiq Alahe',
      project: 'Dragon News – Dynamic News Application'
    },

    nextProject: 3,
    nextTitle: 'Inwi.ma'
  },
  {
    id: 3,
    slug: 'keen-keeper',
    title: 'KeenKeeper – Friendship Management Platform',
    role: 'Frontend Web Developer',
    timeline: 'April 2026',

    tech: ['Next.js', 'Tailwind CSS', 'JavaScript'],

    description:
      "KeenKeeper is a modern and AI-inspired friendship management platform built with Next.js. It helps users intentionally stay connected with important people by tracking interactions such as calls, texts, and video calls while visualizing engagement trends through interactive analytics.",

    overview:
      "KeenKeeper was developed to create a clean and meaningful social relationship management experience where users can organize friends, monitor interactions, and maintain stronger personal connections through data-driven insights.",

    overviewDetail:
      "KeenKeeper is a responsive Next.js application featuring dynamic friend management, interaction tracking, advanced filtering, beautiful analytics visualization, and smooth user interactions. The project focuses on modern UI/UX, fast performance, reusable component architecture, and responsive design across all devices.",

    techHighlights: [
      "Built dynamic friend management system with reusable card components",
      "Implemented interaction tracking for calls, texts, and video calls",
      "Developed advanced timeline filtering and search functionality",
      "Integrated Recharts for beautiful engagement analytics visualization",
      "Designed fully responsive UI using Tailwind CSS and DaisyUI",
      "Implemented toast notifications and loading states for improved UX"
    ],

    challenges: [
      "Managing dynamic interaction history efficiently",
      "Designing responsive layouts for multiple device sizes",
      "Creating reusable and scalable component structures",
      "Implementing smooth filtering and search functionality",
      "Visualizing engagement analytics with clean chart representation"
    ],

    futureUpdates: [
      "Add authentication and personalized user accounts",
      "Implement real-time reminders for reconnecting with friends",
      "Introduce AI-powered friendship insights and suggestions",
      "Add dark and light theme switching",
      "Enable cloud data persistence with database integration",
      "Add friend grouping and tagging system",
      "Implement calendar-based interaction scheduling",
      "Add social media integration and sync support"
    ],

    features: [
      "Dynamic Friend Management",
      "Interactive Friend Cards",
      "Call, Text & Video Interaction Actions",
      "Advanced Interaction Timeline",
      "Search & Filter Functionality",
      "Real-Time Toast Notifications",
      "Engagement Analytics Visualization",
      "Responsive Design (Mobile, Tablet, Desktop)",
      "Loading States & Smooth Navigation",
      "Modern Minimal UI/UX"
    ],

    stats: [
      { label: 'Project Type', value: 'Frontend', color: 'primary' },
      { label: 'Architecture', value: 'Component-Based', color: 'secondary' },
      { label: 'Visualization', value: 'Recharts Analytics', color: 'accent' },
      { label: 'Rendering', value: 'CSR / App Router', color: 'secondary' },
      { label: 'UI System', value: 'Responsive', color: 'primary' }
    ],

    packages: [
      'next.js',
      'react',
      'tailwindcss',
      'daisyui',
      'react-icons',
      'react-toastify',
      'recharts'
    ],

    image: '/images/projects/project-3/mockup.png',

    showcaseImages: [
      '/images/projects/project-3/showcase-1.png',
      '/images/projects/project-3/showcase-2.png',
      '/images/projects/project-3/showcase-3.png',
    ],

    github: 'https://github.com/toufiqweb/keen-keeper',

    live: 'https://keen-keeper-liard.vercel.app/',

    developer: {
      name: 'Toufiq Alahe',
      project: 'KeenKeeper – Friendship Management Platform'
    },

    nextProject: 4,
    nextTitle: 'Inwi.ma'
  },
  {
    id: 4,
    slug: 'digital-tools',
    title: 'Digital Tools – Digital Products Marketplace',
    role: 'Frontend Web Developer',
    timeline: 'March 2026',

    tech: ['React.js', 'Tailwind CSS', 'DaisyUI'],

    description:
      "Digital Tools is a modern and responsive digital products marketplace built with React. It allows users to explore premium AI tools, templates, design assets, and productivity software through a clean and interactive shopping experience.",

    overview:
      "Digital Tools was developed to create a sleek and user-friendly marketplace interface where users can browse digital products, manage carts dynamically, and enjoy a smooth modern e-commerce experience.",

    overviewDetail:
      "Digital Tools is a fully responsive React application featuring a dynamic product catalog, real-time cart management, reusable product card architecture, interactive UI states, and responsive layouts across all devices. The project focuses on modern frontend development practices, clean component structure, and polished user experience.",

    techHighlights: [
      "Built dynamic product catalog using reusable React components",
      "Implemented fully functional real-time cart management system",
      "Developed responsive UI using Tailwind CSS and DaisyUI",
      "Integrated toast notifications for user interaction feedback",
      "Used JSON-based product architecture for scalable data management",
      "Created smooth navigation and conditional rendering system"
    ],

    challenges: [
      "Managing dynamic cart state efficiently",
      "Designing reusable and scalable component structures",
      "Creating responsive layouts for all screen sizes",
      "Handling conditional rendering between product and cart views",
      "Maintaining clean UI/UX while displaying multiple product details"
    ],

    futureUpdates: [
      "Add authentication and user dashboard system",
      "Implement payment gateway integration",
      "Add wishlist and favorites functionality",
      "Introduce product search and advanced filtering",
      "Implement dark and light theme switching",
      "Add backend database integration for persistent cart storage",
      "Enable product reviews and ratings system",
      "Add admin dashboard for product management"
    ],

    features: [
      "Dynamic Product Catalog",
      "Interactive Product Cards",
      "Real-Time Cart Management",
      "Cart Count in Navbar",
      "Dedicated Cart View",
      "Toast Notifications",
      "Responsive Design (Mobile, Tablet, Desktop)",
      "Conditional Product & Cart Rendering",
      "JSON-Based Product Data System",
      "Modern Minimal UI/UX"
    ],

    stats: [
      { label: 'Project Type', value: 'Frontend', color: 'primary' },
      { label: 'Architecture', value: 'Component-Based', color: 'secondary' },
      { label: 'Cart System', value: 'Dynamic State Management', color: 'accent' },
      { label: 'UI System', value: 'Responsive', color: 'primary' }
    ],

    packages: [
      'react',
      'react-dom',
      'react-router-dom',
      'tailwindcss',
      'daisyui',
      'lucide-react',
      'react-toastify'
    ],

    image: '/images/projects/project-4/mockup.png',

    showcaseImages: [
      '/images/projects/project-4/showcase-1.png',
      '/images/projects/project-4/showcase-2.png',
      '/images/projects/project-4/showcase-3.png',
    ],

    github: 'https://github.com/toufiqweb/Digital-Tools',

    live: 'https://digital-tools-m.netlify.app/',

    developer: {
      name: 'Toufiq Alahe',
      project: 'Digital Tools – Digital Products Marketplace'
    },

    nextProject: 5,
    nextTitle: 'Inwi.ma'
  },
  {
    id: 5,
    slug: 'ai-model-hub',
    title: 'AI Model Hub – Multi AI Models Marketplace',
    role: 'Frontend Web Developer',
    timeline: 'April 2026',

    tech: ['React.js', 'Tailwind CSS', 'DaisyUI'],

    description:
      'AI Model Hub is a modern platform that allows users to explore, browse, and subscribe to multiple AI models like ChatGPT, Claude, Gemini, and more in a unified interface.',

    overview:
      'AI Model Hub simplifies access to multiple AI tools by providing a clean, responsive, and user-friendly marketplace for AI model discovery and subscription.',

    overviewDetail:
      'AI Model Hub is a fully responsive React application built with Vite, featuring a dynamic AI model catalog, cart system, subscription flow, and real-time UI updates. It focuses on modern frontend architecture, reusable components, and smooth UX for managing AI model subscriptions.',

    techHighlights: [
      'Built unified AI model marketplace with reusable React components',
      'Implemented smart cart system with real-time updates',
      'Added duplicate prevention with toast notifications',
      'Created subscription flow with visual feedback states',
      'Designed responsive UI using Tailwind CSS + DaisyUI',
      'Managed dynamic state for cart and subscription logic'
    ],

    challenges: [
      'Managing cart state with real-time updates',
      'Preventing duplicate model subscriptions efficiently',
      'Designing clean UI for multiple AI model cards',
      'Handling subscription state transitions smoothly',
      'Maintaining consistent UX across all devices'
    ],

    futureUpdates: [
      'Add authentication system',
      'Implement user dashboard for subscribed models',
      'Add payment gateway integration',
      'Introduce model search and filtering system',
      'Add dark/light theme toggle',
      'Backend integration for persistent subscriptions',
      'Add AI model reviews and ratings system',
      'Admin panel for managing AI models'
    ],

    features: [
      'Unified AI Model Marketplace',
      'AI Model Cards with details and tags',
      'Smart Cart System',
      'Duplicate Prevention with Toast Alerts',
      'Subscription Flow with Visual Feedback',
      'Live Cart Counter',
      'Responsive Design (Mobile, Tablet, Desktop)',
      'Empty Cart State UI',
      'Modern Clean UI/UX'
    ],

    stats: [
      { label: 'Project Type', value: 'Frontend', color: 'primary' },
      { label: 'Architecture', value: 'Component-Based', color: 'secondary' },
      { label: 'State Management', value: 'React State', color: 'accent' },
      { label: 'UI System', value: 'Responsive + DaisyUI', color: 'primary' }
    ],

    packages: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-toastify',
      'tailwindcss',
      'daisyui',

    ],

    image:
      '/images/projects/project-5/mockup.png',

    showcaseImages: [

      '/images/projects/project-5/showcase-1.png',
      '/images/projects/project-5/showcase-2.png',
      '/images/projects/project-5/showcase-3.png',
    ],

    github: 'https://github.com/toufiqweb/AI-Model-Hub',

    live: 'https://ai-model-hub-m.netlify.app/',

    developer: {
      name: 'Toufiq Alahe',
      project: 'AI Model Hub – Multi AI Models Marketplace'
    },

    nextProject: 6,
    nextTitle: 'Inwi.ma'
  },
  {
    id: 6,
    slug: 'book-vibe',
    title: 'Book Vibe – A Modern Book Management App',

    role: 'Frontend Web Developer',
    timeline: '2026',

    tech: ['React', 'Tailwind CSS', 'DaisyUI'],

    description:
      'Book Vibe is a modern web application that allows users to explore books, view detailed information, and manage their personal reading lists using a clean and responsive interface.',

    overview:
      'Book Vibe helps users discover books, manage reading lists, and track their reading preferences in one simple and modern platform.',

    overviewDetail:
      'Book Vibe is a fully responsive React (Vite) application built with modern frontend practices. It includes dynamic book listing, detailed book pages, and personal reading list management using Context API and Local Storage for persistent user experience.',

    techHighlights: [
      'Built dynamic book exploration system using React',
      'Implemented React Router for smooth navigation',
      'Used Context API for global state management',
      'Integrated Local Storage for persistent Read & Wish lists',
      'Designed responsive UI with Tailwind CSS + DaisyUI',
      'Ensured duplicate prevention in reading lists'
    ],

    challenges: [
      'Managing global state for Read List and Wish List',
      'Handling persistent data with Local Storage',
      'Preventing duplicate book entries efficiently',
      'Designing clean UI for book details and listings',
      'Ensuring smooth navigation between pages'
    ],

    futureUpdates: [
      'Add authentication system',
      'Add backend API for dynamic book data',
      'Implement book rating and review system',
      'Add search and filter functionality',
      'Add dark/light theme toggle',
      'User dashboard for reading progress tracking'
    ],

    features: [
      'Book Exploration from external API',
      'Detailed Book Information Pages',
      'React Router Navigation',
      'Read List Management',
      'Wish List Management',
      'Duplicate Prevention System',
      'Persistent Storage using Local Storage',
      'Responsive UI Design'
    ],

    stats: [
      { label: 'Project Type', value: 'Frontend', color: 'primary' },
      { label: 'Architecture', value: 'Component-Based', color: 'secondary' },
      { label: 'State Management', value: 'Context API', color: 'accent' },
      { label: 'Storage', value: 'Local Storage', color: 'primary' }
    ],

    packages: [
      'react',
      'react-dom',
      'react-router-dom',
      'tailwindcss',
      'daisyui',
      'vite'
    ],

    image:
      '/images/projects/project-6/mockup.png',

    showcaseImages: [
      '/images/projects/project-6/showcase-1.png',
      '/images/projects/project-6/showcase-2.png',
      '/images/projects/project-6/showcase-3.png',

    ],

    github: 'https://github.com/toufiqweb/Books-Vibe',

    live: 'https://books-vibe-khaki.vercel.app/',

    developer: {
      name: 'Toufiq Alahe',
      project: 'Book Vibe – A Modern Book Management App'
    },

    nextProject: 1,
    nextTitle: 'Inwi.ma'
  },
];
