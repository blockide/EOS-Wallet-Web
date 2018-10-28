# Contributing to EOS Wallet

:+1::tada: Thanks for taking the time to contribute! :tada::+1:

Please take the time to read everything below.

## Our Development Process

The core team for this project works on Github, however we may be split other forks of the repo.

### `master` is safe

Master is the release version of the site and should remain free of any work in progress. We are considering individual release branches. This also means that master is out of date with work that is currently happening, `develop` is our branch for ongoing work.

## Your first contribution

Every contribution to the project starts with a Trello card that's on the board. __Any discussion around an issue or enhancement must be itemized in the form of Trello cards before any work takes place. Not every card will be available to work on, also check to ensure the card does not have an owner before starting a task.__

_Before_ submitting a pull request, please make sure the following is done:

1. Clone the repo and branch from `develop`
2. Make sure your code runs, in the future tests will be required
3. Link the Trello card associated with the PR
4. Make sure you assign yourself to the PR as well as a reviewer
    * If you don't feel comfortable choosing a reviewer, be sure to ask for one in the `dev-eos-wallet` channel
5. Add any details or clarifying materials to make the review go more smoothly.
    * For instance, if you are proposing an UI change, please be sure to add screenshots for before and after
    * Clarify the solution that your PR provides, when appropriate. We may infer from the title what is being proposed, however for large changes we must note additional details, it is also helpful to reference conversations or decisions that have occurred.
6. Any conflicts or request changes must be managed and resolved by the assignee (the one who opened the PR)
    * Failure to conform with this may result in your PR being closed within 24 hours.
    * Please reply in the conversation in Github, not in Slack to keep the context up to date

*Please keep in mind:*

* All dependencies and techniques demonstrated in this demo app should remain uniquely familiar and simple to a broad audience
* Due to CI not yet being set up, tests will not catch git artifacts, etc., ensure your code is properly running before merging.
* If you are working on an item, be sure your branch and ongoing work is visible (`git push` your new branches)
* Again, we are not using Github issues

### Documentation

...is a work in progress. We are still in the process of developing the API. Any new developments may have accompanying documentation.

### Tests

For every feature and nearly every file, there should be an accompanying test, at the very least to check if it runs without issue. As logic and new requirements are added, please be sure to update tests as well. Some features of this app do not concern business logic, however they do impact the performance and experience of using the app, for this reason, it is recommended to choose a wise workflow, TDD is not dictated but recommended. :smile:

The file structure of all tests should resemble the line(s) below:

`component/Navbar/Navbar.test.js`

### Releases :point_left: !important

:warning: Make sure you base your branch from develop! We only merge develop into master when we are doing releases.

![](https://user-images.githubusercontent.com/1743355/29464834-cf9a291c-83fc-11e7-9d98-0434fb1aab27.png)

**NOTE** CI is not set up yet, so we do not deploy to a particular location, nor enforce passing tests before running.

## Discussions

All discussion takes place on our [Slack channel](https://tandemly.slack.com).

* Use the `dev-eos-wallet` channel to discuss all concerns around this project
* The `project-eos-wallet` channel is to monitor project updates, please refrain from posting here
* Generally any decisions about the design of the project will be documented in conversation, check Trello or look for pinned items in the Slack channel
* If there's any concerns or questions, reach out to the committer directly on Slack or post on the `dev-eos-wallet` channel

## Reporting Bugs

We are deprecating the use of Github issues in favor of Trello. If you find an issue, post it to the [board](https://trello.com/c/X4P2y40U/12-api-layer). Every issue should have a clear description, no matter how concise it may be. For images requesting UI changes or fixes, please be sure to include a screenshot.

## JavaScript style

Our JavaScript is formatted in the [AirBnB JS style](https://github.com/airbnb/javascript).

## CSS style

Our CSS style is in [AirBnB CSS styleguide](https://github.com/airbnb/css).

