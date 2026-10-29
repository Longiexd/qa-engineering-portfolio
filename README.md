# Sara Longo | QA Engineering Portfolio

[![Test automation](https://github.com/Longiexd/qa-engineering-portfolio/actions/workflows/api-tests.yml/badge.svg)](https://github.com/Longiexd/qa-engineering-portfolio/actions/workflows/api-tests.yml)

I test Klynx Rental OS, a rental management application I build. My work focuses on booking state transitions, financial reconciliation, input validation and regression testing.

## Start here

**[Executable automation: 17 API + 4 UI tests](web-automation-demo/README.md)** — Playwright, JavaScript, GitHub Actions, HTML and JUnit reports.

**CI-verified baseline: 17 API + 1 UI test.** [Successful run at commit 4ef1ef1](https://github.com/Longiexd/qa-engineering-portfolio/actions/runs/40885606561). The additional invalid-login, cart-removal and sorting cases pass locally and await CI after upload. One API case is an expected failure for the documented [malformed-JSON response defect](web-automation-demo/DEMO-01.md).

| Sample | What to inspect |
|---|---|
| [Automation code](web-automation-demo/tests/api.spec.js) | Response contracts, filters, write methods, invalid input and a request-time smoke budget |
| [Browser tests](web-automation-demo/tests/ui.spec.js) | Login, cart contents, removal, invalid credentials and numeric sorting |
| [Rental OS case study](docs/projects/rental-os/case-study.md) | Test approach, findings and release decision |
| [Availability defect](docs/projects/rental-os/bugs/QA-01.md) | Cross-screen mismatch with original screenshot excerpts |
| [Test cases](docs/projects/rental-os/test-cases/README.md) | Preconditions, test data, steps and expected results |
| [Latest rental QA report](docs/projects/rental-os/test-summary.md) | Results, defects and outstanding integration coverage |

## Skills demonstrated

Test design; exploratory, negative and boundary testing; API testing with Playwright; browser automation; JavaScript; pytest result analysis; GitHub Actions; defect reporting and requirements traceability.

## Rental OS evidence

The 28 October staging assessment found four functional defects. Historical local checks recorded 517 backend/deployment passes, 13 skips and 84 frontend passes. These are separate suites, not a cumulative coverage total. Full deposit settlement and live cross-company checks remained outstanding.

Earlier work is documented in the [debugging register](docs/projects/rental-os/deep-history/README.md), [historical verification records](docs/projects/rental-os/history.md) and [evidence register](docs/projects/rental-os/evidence.md). The [automation inventory](docs/projects/rental-os/automation/README.md) describes retained private-project tests; the public executable examples are in web-automation-demo.

## About this work

This is an own-application portfolio developed with AI assistance. Rental OS records were recovered from earlier reports, logs and discussions; the public automation has executable source and run reports. This portfolio does not represent employment or certification.

[GitHub profile](https://github.com/Longiexd) · [Test strategy](docs/projects/rental-os/test-strategy.md) · [Traceability](docs/projects/rental-os/traceability.md) · [GitBook setup](docs/gitbook-setup.md) · [Changelog](CHANGELOG.md)
