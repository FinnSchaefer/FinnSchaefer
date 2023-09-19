const githubProjectsContainer = document.getElementById('github-projects');

// Fetch your GitHub projects using the GitHub API (replace with your GitHub username)
const githubUsername = 'FinnSchaefer';
const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            
            const projectName = document.createElement('h3');
            projectName.textContent = project.name;
            
            const projectDescription = document.createElement('p');
            projectDescription.textContent = project.description || 'No description available.';
            
            projectCard.appendChild(projectName);
            projectCard.appendChild(projectDescription);
            
            githubProjectsContainer.appendChild(projectCard);
        });
    })
    .catch(error => {
        console.error('Error fetching GitHub projects:', error);
    });
