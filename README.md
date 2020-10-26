# FE Coding Challenge

## Challenge

For this challenge, you will develop an interface that fetches and displays all PRs for this repository. Use v3 of Github's REST API documented here: https://docs.github.com/en/free-pro-team@latest/rest.

Your solution needs to achieve the following:

* Fetch all PRs from this repository and display them in a list format (similar to how Github displays pull requests).
  * Display a loading indicator while pull requests are loading.
  * Display error messages if API requests fail.
* For each PR, display the following (at least):
  * Title
  * All labels
  * Date opened
* Each PR's title should be clickable and bring the user to a page that displays details about the PR including the summary of changes.
* Allow the user to filter PRs by typing into an input and clicking a search button.

## Rules of Engagement

* Use React but feel free to use any libraries you'd like.
* Your code must work as you document it in a README.md file; we will not fiddle with it to make it work.
* You should document (docstrings, comments, etc) your code to the level you feel it makes it maintainable.
* Your code should have tests or stubbed out "what you'd want to test" in your documentation.
* Have fun! This challenge is meant as a way for you to show your skills and start a conversation with the team about how to approach solving problems.
