// script.js

document.addEventListener('DOMContentLoaded', function () {
    const headerFull = document.querySelector('.header-full');
    const headerScroll = document.querySelector('.header-scroll');
    const about = document.querySelector('.about');
    const projects = document.querySelector('.projects');
    const bio = document.querySelector('.bio');
    const githubProjectsContainer = document.getElementById('github-projects');

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

    // Toggle the "show-bio" class for bio reveal
    function toggleBio() {
        const scrollY = window.scrollY;
        if (scrollY >= headerFull.offsetHeight) {
            headerScroll.style.transform = 'translateY(0)';
            about.classList.add('show-bio');
        } else {
            headerScroll.style.transform = 'translateY(-100%)';
            about.classList.remove('show-bio');
        }
    }

    // Toggle the "show-projects" class for projects reveal
    function toggleProjects() {
        const scrollY = window.scrollY;
        if (scrollY >= about.offsetTop + about.offsetHeight) {
            projects.classList.add('show-projects');
        } else {
            projects.classList.remove('show-projects');
        }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', function () {
        toggleBio();
        toggleProjects();
    });

    // Fetch your GitHub projects using the GitHub API (replace with your GitHub username)
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
});