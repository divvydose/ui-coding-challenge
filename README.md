# Coding Challenge

## Prompt

For this challenge, you will develop an interface that fetches and displays all PRs for the https://github.com/divvydose/ui-coding-challenge repository. Use v3 of Github's REST API documented here: https://docs.github.com/en/free-pro-team@latest/rest.

## Objectives
A Single Page React App that: 
- Fetches all PRs from this repository and displays them in a list.
  - https://docs.github.com/en/rest/reference/pulls#list-pull-requests should be a good place to get your started 
- User should receive some sort of feedback when the page is loading
- Shows the following details for each pr:
  - Title
  - All labels
  - Date opened
  - A link to view the pull request
- Lets the user filter the pr list by their labels
  - e.g. if I select the `Bugs` label filter button, I would see only the pr for `DD-1002-fix-no-content | Fix issue where no content was displaying` in the list
- Has tests for any of the more complicated logic

## Rules

- Use React but feel free to use any libraries you'd like.
- Your code must work as you document it in your README.md.
- Have fun! This challenge is meant as a way for you to show your skills and start a conversation with the team about how to approach solving problems.

## Assessment

Your solution for this exercise will be used to evaluate your abilities in the following areas:

- **Coding strength, fluency, and style.** We will evaluate your solution in order to judge
  your programming style and level of competency. Solutions need not be perfect, "production-ready",
  or even bug-free. However, you should be able to discuss the decisions you made; if you make
  a conscious decision to exclude something you would normally want in a production-ready solution,
  or if you include a shortcut in the interest of time, be ready to talk about what you would
  do to to address these shortcomings and/or what you would change before you would consider
  something complete and ready for production.
- **Extensible design.** You will be asked if, and how, you might modify your solution to meet
  various hypothetical requirements including scalability, additional features, observability,
  and/or security considerations. Please note that you will not be asked to do any "live coding"
  as part of our interview process.
- **UX Considerations.** When developing interfaces, it’s important to consider how your users will interact with your application. We want to know what decisions you made when building the interface in this regard and what questions you’d ask of a product team to better improve the user experience.
- **Performance.** Applications we build need to perform well in order to not frustrate our users. We want to see how you think about improving users’ perceived performance as well as taking steps to improve measured performance.
- **Quality assurance.** You do not need to provide multiple comprehensive test suites along
  with your code sample, but you should be prepared to talk about its testability from a number
  of perspectives, and in general how you would ensure its quality prior to deployment.
- **Deployment infrastructure and strategy.** One of the components of our interview process
  includes a discussion regarding the deployment of your solution. You will be asked to explain
  your (hypothetical) approach to deploying this client in a variety of scenarios with different
  constraints.

Be prepared to discuss any design decisions made in the above areas.
