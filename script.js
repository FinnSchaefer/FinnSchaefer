// Replace YOUR_USERNAME with your GitHub username
const username = 'FinnSchaefer';

// Replace REPO_COUNT with the number of repositories you want to display
const repoCount = 3;
// Replace YOUR_WEBSITE_ID with the ID of the HTML element where you want to display your repositories
const websiteId = 'projects';

// Fetch your repositories from the GitHub API
fetch(`https://api.github.com/users/${username}/repos?per_page=${repoCount}`)
    .then(response => response.json())
    .then(repositories => {
        // Get the HTML element where you want to display your repositories
        const websiteElement = document.getElementById(websiteId);

        // Create an unordered list to display your repositories
        const repositoryList = document.createElement('ul');

        // Loop through your repositories and create a list item for each one
        repositories.forEach(repository => {
            const repositoryItem = document.createElement('li');

            // Create a link to your repository
            const repositoryLink = document.createElement('a');
            repositoryLink.href = repository.html_url;
            repositoryLink.textContent = repository.name;

            // Add the link to the list item
            repositoryItem.appendChild(repositoryLink);

            // Add the list item to the unordered list
            repositoryList.appendChild(repositoryItem);
        });

        // Add the unordered list to your website
        websiteElement.appendChild(repositoryList);
    })
    .catch(error => console.error(error));
