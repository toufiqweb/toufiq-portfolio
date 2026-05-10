import StatsClient from './StatsClient';

export default async function Stats() {
  let githubData = null;

  try {
    // Fetch on server with revalidation (1 hour)
    const res = await fetch('https://api.github.com/users/toufiqweb', {
      next: { revalidate: 3600 }
    });
    
    if (res.ok) {
      githubData = await res.json();
    }
  } catch (error) {
    console.error('GitHub server-side fetch error:', error);
  }

  return <StatsClient githubData={githubData} />;
}