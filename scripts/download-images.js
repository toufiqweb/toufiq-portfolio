const fs = require('fs');
const path = require('path');
const https = require('https');

const IMAGES = {
  hero: {
    avatar: 'https://i.ibb.co.com/mrWNYwXy/port.png'
  },
  about: {
    portrait: 'https://i.ibb.co.com/dsFdfcJG/file-000000004e507208947e386ddb652090.png'
  },
  experience: [
    'https://i.ibb.co.com/chYrb0mX/file-00000000af00720894a50c454fc49a67.png',
    'https://i.ibb.co.com/xqxF3qHc/file-000000002ce47208b1e97bf1850bf5e2.png',
    'https://i.ibb.co.com/N03dj3t/file-00000000b8e471fabef8c703bb12abc6.png',
    'https://i.ibb.co.com/HpYnDC8z/file-00000000eb7471fabe9b3313d8e98a4b.png',
    'https://i.ibb.co.com/LXNd40FX/Picsart-26-05-08-15-13-45-157-jpg.jpg',
    'https://i.ibb.co.com/cXSTG7rX/file-00000000e3e071f890d8d82717f49ae9.png'
  ],
  projects: [
    {
      id: 1,
      image: 'https://i.ibb.co.com/V0PjcqrB/skill-sphere-mockup.png',
      showcases: [
        'https://i.ibb.co.com/JjWsV40V/skill-sphere-ecru-ten-vercel-app-3.png',
        'https://i.ibb.co.com/2Yhtg7vJ/skill-sphere-ecru-ten-vercel-app-1.png',
        'https://i.ibb.co.com/JRPDSLFw/skill-sphere-ecru-ten-vercel-app-4.png'
      ]
    },
    {
      id: 2,
      image: 'https://i.ibb.co.com/rRxbFd6k/dragon-news-mockup.png',
      showcases: [
        'https://i.ibb.co.com/V0LcN7VK/dragon-news-ochre-vercel-app-category-01.png',
        'https://i.ibb.co.com/67mNv2XL/dragon-news-ochre-vercel-app-about.png',
        'https://i.ibb.co.com/PZvXpmdf/dragon-news-ochre-vercel-app-register.png'
      ]
    },
    {
      id: 3,
      image: 'https://i.ibb.co.com/63fx9Mb/keen-Keeper-Mockup.png',
      showcases: [
        'https://i.ibb.co.com/wrLyjx2P/localhost-3000.png',
        'https://i.ibb.co.com/ccWDGGJM/keen-keeper-liard-vercel-app-friends-2.png',
        'https://i.ibb.co.com/cXgm1S9m/keen-keeper-liard-vercel-app-1.png'
      ]
    },
    {
      id: 4,
      image: 'https://i.ibb.co.com/spBjSh9z/Digi-Tools-digital-platform-mockup.png',
      showcases: [
        'https://i.ibb.co.com/sJJjkNSH/Screenshot-2026-05-08-123428.png',
        'https://i.ibb.co.com/Ps3Nfx2C/Screenshot-2026-05-08-123506.png',
        'https://i.ibb.co.com/TqYqSnYr/Screenshot-2026-05-08-123543.png'
      ]
    },
    {
      id: 5,
      image: 'https://i.ibb.co.com/Xkd41TGY/Chat-GPT-Image-May-8-2026-12-51-53-PM.png',
      showcases: [
        'https://i.ibb.co.com/NMdmb6Y/Screenshot-2026-05-08-124739.png',
        'https://i.ibb.co.com/xqY8kpq1/Screenshot-2026-05-08-124823.png',
        'https://i.ibb.co.com/bMwwWwMj/Screenshot-2026-05-08-124847.png'
      ]
    },
    {
      id: 6,
      image: 'https://i.ibb.co.com/RkhCRSB2/Chat-GPT-Image-May-8-2026-01-18-08-PM.png',
      showcases: [
        'https://i.ibb.co.com/JFFCczwm/books-vibe-khaki-vercel-app.png',
        'https://i.ibb.co.com/Q7zb6LbF/books-vibe-khaki-vercel-app-2.png',
        'https://i.ibb.co.com/1GVfW6vy/books-vibe-khaki-vercel-app-1.png'
      ]
    }
  ]
};

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

// Create folders if they don't exist
const makeDirs = () => {
  const dirs = [
    IMAGES_DIR,
    path.join(IMAGES_DIR, 'hero'),
    path.join(IMAGES_DIR, 'about'),
    path.join(IMAGES_DIR, 'experience'),
    path.join(IMAGES_DIR, 'projects')
  ];
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

const download = (url, destPath) => {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    };

    https.get(url, options, (res) => {
      if (res.statusCode !== 200) {
        // If it returns 403 or 500, we'll try a fallback or log it
        reject(new Error(`Failed to download: Status Code ${res.statusCode} for ${url}`));
        return;
      }

      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${url} -> ${destPath}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
};

const run = async () => {
  makeDirs();

  console.log('Starting images download...');

  // Download hero avatar
  try {
    await download(IMAGES.hero.avatar, path.join(IMAGES_DIR, 'hero', 'port.png'));
  } catch (err) {
    console.error('Hero download failed:', err.message);
  }

  // Download about portrait
  try {
    await download(IMAGES.about.portrait, path.join(IMAGES_DIR, 'about', 'portrait.png'));
  } catch (err) {
    console.error('About download failed:', err.message);
  }

  // Download experience timeline images
  for (let i = 0; i < IMAGES.experience.length; i++) {
    const url = IMAGES.experience[i];
    const dest = path.join(IMAGES_DIR, 'experience', `step-${i + 1}.png`);
    try {
      await download(url, dest);
    } catch (err) {
      console.error(`Experience ${i + 1} download failed:`, err.message);
    }
  }

  // Download project mockups and showcase images
  for (const project of IMAGES.projects) {
    const pDir = path.join(IMAGES_DIR, 'projects', `project-${project.id}`);
    if (!fs.existsSync(pDir)) {
      fs.mkdirSync(pDir, { recursive: true });
    }

    // Main Mockup image
    try {
      await download(project.image, path.join(pDir, 'mockup.png'));
    } catch (err) {
      console.error(`Project ${project.id} mockup download failed:`, err.message);
    }

    // Showcase images
    for (let j = 0; j < project.showcases.length; j++) {
      const url = project.showcases[j];
      const dest = path.join(pDir, `showcase-${j + 1}.png`);
      try {
        await download(url, dest);
      } catch (err) {
        console.error(`Project ${project.id} showcase ${j + 1} download failed:`, err.message);
      }
    }
  }

  console.log('All downloads completed!');
};

run().catch(console.error);
