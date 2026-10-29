# Execution evidence

The previously uploaded 12-test API suite passed GitHub Actions on commit 7c01e30080fea41668b2f85c5bd8e23c0b4f326b.

[Verified successful CI run](https://github.com/Longiexd/qa-engineering-portfolio/actions/runs/40742866441)

The expanded API and browser tests are a new revision. Their local execution is recorded below after validation; the successful linked CI run applies to the earlier revision.

## Expanded local run — 29 October 2026

`npm test` exited 0: 18 cases met their configured outcomes in 3.7 seconds. Seventeen passed normally; API-16 failed as expected for DEMO-01 (HTTP 500 instead of expected 400). The browser login/cart case passed. An earlier rerun exposed a cart-navigation assertion race; waiting for cart.html resolved it. HTML and JUnit reports contain the final run. The expanded revision has not yet run on GitHub.

## Coverage expansion — 29 October 2026

Full local run: 21 configured outcomes completed in 5.9 seconds (20 normal passes, one expected failure for DEMO-01). Added invalid credentials, cart removal and price sorting UI cases. CI baseline separately verified at 4ef1ef1949adbdecd5d086ca7850f80e9d17cb09; expanded coverage awaits upload and CI.
