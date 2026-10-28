# Public API automation demo

Twelve executable Playwright API checks against JSONPlaceholder: response contracts, identifiers, empty states, filters, nested relationships and negative lookup behavior. No credentials, browser download or writes required.

## Run

Use Node.js 22 or newer. In this directory run:

```sh
npm ci
npm test
npm run report
```

HTML and JUnit reports are generated on every run. GitHub Actions uploads them as the api-test-report artifact. Public demo availability and fixture changes can fail the suite; failures are retained and retries are disabled. Expected fixture sizes are explicit so dataset changes are visible.

## One-page test plan

**Objective:** Verify the documented read API and consistency across collection, detail, filtered and nested routes. **Target:** JSONPlaceholder public demonstration service. **Scope:** GET routes for posts, comments, users, todos and photos. **Excluded:** authentication, authorization, durable writes, load testing and UI. This public service does not demonstrate tenant security.

**Risks:** response schema drift, incorrect filter results, mismatched parent relationships and misleading missing-record behavior. **Data:** stable demo IDs 1, user 1 and nonexistent ID 999999. **Entry:** network access and dependencies installed. **Exit:** all twelve checks pass; any failure has a captured report and diagnosis. **Cleanup:** none; all requests are read-only. **Evidence:** HTML/JUnit artifacts and the CI run attached to the exact commit.

[Service guide](https://jsonplaceholder.typicode.com/guide/) · [Playwright API testing](https://playwright.dev/docs/api-testing)
