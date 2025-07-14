import React, { useEffect, useState } from "react";
import "../css/component/GitContribution.css";

const GitContribution = () => {
  const username = "SAMUVELREEGAN";
  const [repos, setRepos] = useState([]);

  // Fetch latest repos
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=9`)
      .then((res) => res.json())
      .then(setRepos)
      .catch(console.error);
  }, [username]);

  return (
    <div className="git-section">
      <h2>GitHub Contributions</h2>

      <div className="stats-grid">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true`}
          alt="GitHub Stats"
          className="stats-img"
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact`}
          alt="Top Languages"
          className="stats-img"
        />
        {/* <img
          src={`https://github-readme-activity-graph.cyclic.app/graph?username=${username}&theme=light`}
          alt="Contribution Graph"
          className="graph-img"
        /> */}
      </div>

      <h3 className="projects-title">Recent Repositories</h3>
      <div className="repos-grid">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            className="repo-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 style={{wordWrap:"break-word"}}>{repo.name}</h4>
            <p className="repo-date">
              Created: {new Date(repo.created_at).toLocaleDateString()}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GitContribution;
