export const analyzeGithub = async (req, res) => {
  const { username } = req.body;

  // Dummy response (later we connect real GitHub API)
  res.json({
    username,
    repos: 10,
    score: 75
  });
};