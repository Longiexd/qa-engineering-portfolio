# Public API automation demo

Seventeen executable Playwright API checks and one Chromium login/cart test against JSONPlaceholder: response contracts, identifiers, empty states, filters, nested relationships and negative lookup behavior. API coverage includes simulated POST/PUT/DELETE and read-only GET requests. The SauceDemo browser case uses its public demo login; no checkout or purchase is performed.

## Run

Use Node.js 22 or newer. In this directory run:

```sh
npm ci
npx playwright install chromium
npm test
npm run report
```

HTML and JUnit reports are generated on every run. GitHub Actions uploads them as the api-test-report artifact. Public demo availability and fixture changes can fail the suite; failures are retained and retries are disabled. Expected fixture sizes are explicit so dataset changes are visible.

## One-page test plan

**Objective:** Verify the documented read API and consistency across collection, detail, filtered and nested routes. **Target:** JSONPlaceholder public demonstration service. **Scope:** GET routes for posts, comments, users, todos and photos. **Excluded:** production authentication, tenant authorization, durable writes and load testing. SauceDemo UI covers login and adding an item to cart. This public service does not demonstrate tenant security.

**Risks:** response schema drift, incorrect filter results, mismatched parent relationships and misleading missing-record behavior. **Data:** stable demo IDs 1, user 1 and nonexistent ID 999999. **Entry:** network access and dependencies installed. **Exit:** all checks meet their stated outcome, with DEMO-01 explicitly tracked as an expected failure; any failure has a captured report and diagnosis. **Cleanup:** none; JSONPlaceholder writes are simulated and SauceDemo cart state stays in the isolated browser context. **Evidence:** HTML/JUnit artifacts and the CI run attached to the exact commit.

[Service guide](https://jsonplaceholder.typicode.com/guide/) · [Playwright API testing](https://playwright.dev/docs/api-testing)

## Known issue and timing scope

[DEMO-01](DEMO-01.md) tracks the expected malformed-JSON failure. The ten-second timing assertion is a generous smoke budget for one request, not a load test or service-level guarantee.
