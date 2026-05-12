import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch dynamic GitHub statistics
 * @param {string} username - GitHub username
 * @returns {object} - { streak, totalContributions, publicRepos, loading, error }
 */
export const useGithubStats = (username) => {
  const [stats, setStats] = useState({
    streak: 0,
    totalContributions: 0,
    publicRepos: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!username) return;

    const fetchStats = async () => {
      setStats(prev => ({ ...prev, loading: true, error: null }));
      
      try {
        // 1. Fetch User Profile Data (for total public repos count)
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error('Failed to fetch user data');
        const userData = await userRes.json();

        // 2. Fetch Contribution Data (from a reliable public API)
        const contributionsRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
        if (!contributionsRes.ok) throw new Error('Failed to fetch contribution data');
        const contributionsData = await contributionsRes.json();

        // Calculate Total Contributions across all years
        const total = Object.values(contributionsData.total).reduce((acc, curr) => acc + (curr || 0), 0);

        // Calculate Current Streak
        const contributions = contributionsData.contributions; // Array ordered by date ASC
        let currentStreak = 0;
        
        // Get today's date in YYYY-MM-DD format (local time)
        const now = new Date();
        const offset = now.getTimezoneOffset();
        const localNow = new Date(now.getTime() - (offset * 60 * 1000));
        const todayStr = localNow.toISOString().split('T')[0];
        
        // Find index of today in the contributions array
        let index = contributions.findIndex(day => day.date === todayStr);
        
        // If today is not in the list (rare), start from the end
        if (index === -1) index = contributions.length - 1;

        // If today has 0 contributions, the streak might still be active from yesterday
        // So we check if we should start counting from yesterday instead
        if (index >= 0 && contributions[index].count === 0) {
          index--;
        }

        // Count backwards as long as there are contributions
        while (index >= 0 && contributions[index].count > 0) {
          currentStreak++;
          index--;
        }

        setStats({
          streak: currentStreak,
          totalContributions: total,
          publicRepos: userData.public_repos || 0,
          loading: false,
          error: null,
        });
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        setStats({
          streak: 0,
          totalContributions: 0,
          publicRepos: 0,
          loading: false,
          error: err.message,
        });
      }
    };

    fetchStats();
  }, [username]);

  return stats;
};
