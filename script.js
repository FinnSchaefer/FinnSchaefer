const githubProjectsContainer = document.getElementById('github-projects');
// Fetch  GitHub projects using the GitHub API
const githubUsername = 'your-github-username';
const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Filter out the "FinnSchaefer" repo
        const filteredProjects = data.filter(project => project.name !== 'FinnSchaefer');

        filteredProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            const projectNameLink = document.createElement('a'); // Create an anchor tag
            projectNameLink.textContent = project.name;
            projectNameLink.href = project.html_url; // Set the href to the GitHub repository URL
            projectNameLink.target = '_blank'; // Open the link in a new tab

            const projectDescription = document.createElement('p');
            projectDescription.textContent = project.description || 'No description available.';

            projectCard.appendChild(projectNameLink); // Add the anchor tag
            projectCard.appendChild(projectDescription);

            githubProjectsContainer.appendChild(projectCard);
        });
    })
    .catch(error => {
        console.error('Error fetching GitHub projects:', error);
    });


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
