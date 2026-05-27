const fs = require('fs');
const path = require('path');

const URL_MAP = {
  // Project 1
  'https://i.ibb.co.com/V0PjcqrB/skill-sphere-mockup.png': '/images/projects/project-1/mockup.png',
  'https://i.ibb.co.com/JjWsV40V/skill-sphere-ecru-ten-vercel-app-3.png': '/images/projects/project-1/showcase-1.png',
  'https://i.ibb.co.com/2Yhtg7vJ/skill-sphere-ecru-ten-vercel-app-1.png': '/images/projects/project-1/showcase-2.png',
  'https://i.ibb.co.com/JRPDSLFw/skill-sphere-ecru-ten-vercel-app-4.png': '/images/projects/project-1/showcase-3.png',

  // Project 2
  'https://i.ibb.co.com/rRxbFd6k/dragon-news-mockup.png': '/images/projects/project-2/mockup.png',
  'https://i.ibb.co.com/V0LcN7VK/dragon-news-ochre-vercel-app-category-01.png': '/images/projects/project-2/showcase-1.png',
  'https://i.ibb.co.com/67mNv2XL/dragon-news-ochre-vercel-app-about.png': '/images/projects/project-2/showcase-2.png',
  'https://i.ibb.co.com/PZvXpmdf/dragon-news-ochre-vercel-app-register.png': '/images/projects/project-2/showcase-3.png',

  // Project 3
  'https://i.ibb.co.com/63fx9Mb/keen-Keeper-Mockup.png': '/images/projects/project-3/mockup.png',
  'https://i.ibb.co.com/wrLyjx2P/localhost-3000.png': '/images/projects/project-3/showcase-1.png',
  'https://i.ibb.co.com/ccWDGGJM/keen-keeper-liard-vercel-app-friends-2.png': '/images/projects/project-3/showcase-2.png',
  'https://i.ibb.co.com/cXgm1S9m/keen-keeper-liard-vercel-app-1.png': '/images/projects/project-3/showcase-3.png',

  // Project 4
  'https://i.ibb.co.com/spBjSh9z/Digi-Tools-digital-platform-mockup.png': '/images/projects/project-4/mockup.png',
  'https://i.ibb.co.com/sJJjkNSH/Screenshot-2026-05-08-123428.png': '/images/projects/project-4/showcase-1.png',
  'https://i.ibb.co.com/Ps3Nfx2C/Screenshot-2026-05-08-123506.png': '/images/projects/project-4/showcase-2.png',
  'https://i.ibb.co.com/TqYqSnYr/Screenshot-2026-05-08-123543.png': '/images/projects/project-4/showcase-3.png',

  // Project 5
  'https://i.ibb.co.com/Xkd41TGY/Chat-GPT-Image-May-8-2026-12-51-53-PM.png': '/images/projects/project-5/mockup.png',
  'https://i.ibb.co.com/NMdmb6Y/Screenshot-2026-05-08-124739.png': '/images/projects/project-5/showcase-1.png',
  'https://i.ibb.co.com/xqY8kpq1/Screenshot-2026-05-08-124823.png': '/images/projects/project-5/showcase-2.png',
  'https://i.ibb.co.com/bMwwWwMj/Screenshot-2026-05-08-124847.png': '/images/projects/project-5/showcase-3.png',

  // Project 6
  'https://i.ibb.co.com/RkhCRSB2/Chat-GPT-Image-May-8-2026-01-18-08-PM.png': '/images/projects/project-6/mockup.png',
  'https://i.ibb.co.com/JFFCczwm/books-vibe-khaki-vercel-app.png': '/images/projects/project-6/showcase-1.png',
  'https://i.ibb.co.com/Q7zb6LbF/books-vibe-khaki-vercel-app-2.png': '/images/projects/project-6/showcase-2.png',
  'https://i.ibb.co.com/1GVfW6vy/books-vibe-khaki-vercel-app-1.png': '/images/projects/project-6/showcase-3.png'
};

const FILES = [
  path.join(__dirname, '..', 'data', 'projects.js'),
  path.join(__dirname, '..', 'lib', 'projectsData.js')
];

FILES.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.warn(`File does not exist: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let replacedCount = 0;

  for (const [remoteUrl, localPath] of Object.entries(URL_MAP)) {
    if (content.includes(remoteUrl)) {
      content = content.split(remoteUrl).join(localPath);
      replacedCount++;
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}: Replaced ${replacedCount} URLs.`);
});
