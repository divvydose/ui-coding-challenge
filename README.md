# FE Coding Challenge

## Prompt

For this challenge, you will develop an interface that fetches and displays all PRs for the https://github.com/divvydose/fe-coding-challenge repository. Use v3 of Github's REST API documented here: https://docs.github.com/en/free-pro-team@latest/rest.

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
* Contain tests as you think are appropriate.

## Rules

* Use React but feel free to use any libraries you'd like.
* Your code must work as you document it in a README.md file; we will not fiddle with it to make it work.
* Have fun! This challenge is meant as a way for you to show your skills and start a conversation with the team about how to approach solving problems.

## Assessment

Your solution for this exercise will be used to evaluate your abilities in the following areas:

* **Maintainability.** We will be looking for well thought-out component design as well as appropriate code documentation to aid others that may be working on the code in the future.
* **Testability.** Writing testable code is important to build confidence that your application is working as intended as well as to prevent future regressions as more features are built out. We want to understand which areas of the application you deem to need testing and at what level.
* **UX Considerations.** When developing interfaces, it’s important to consider how your users will interact with your application. We want to know what decisions you made when building the interface in this regard and what questions you’d ask of a product team to better improve the user experience.
* **Performance.** Applications we build need to perform well in order to not frustrate our users. We want to see how you think about improving users’ perceived performance as well as taking steps to improve measured performance.

Be prepared to discuss any design decisions made in the above areas.
