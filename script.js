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

 // script.js

// Function to check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scrolling effect
function handleScroll() {
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');

    if (isElementInViewport(aboutSection)) {
        aboutSection.classList.add('scroll-in-view');
    }

    if (isElementInViewport(projectsSection)) {
        projectsSection.classList.add('scroll-in-view');
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);
