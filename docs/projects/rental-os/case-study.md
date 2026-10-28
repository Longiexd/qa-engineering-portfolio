# Klynx Rental OS — Financial and Operational QA

**Author:** Sara Longo · **Project:** Own application · **Method:** AI-assisted QA · **Compiled:** 28 October 2026

## Problem

A booking moves through quotation, invoicing, payment, confirmation, documents, pickup and return. Refundable deposits must stay separate from rental revenue, and staff need consistent vehicle availability across screens. A successful local test run cannot alone establish that the deployed workflow works.

## Approach

Prioritize money and state transitions; compare linked screens and persisted records; challenge field validation with invalid and boundary input; inspect existing regression results; preserve incomplete and failed checks in the report. Use clearly labelled synthetic records in authenticated staging.

## Findings

Deposit-only invoicing, a single synthetic receipt and booking confirmation worked in the exercised scenarios. Refundable deposits were excluded from rental revenue. Four functional issues remained: inconsistent availability totals, monthly collection values that did not reconcile, rejected millime precision and persisted invalid email addresses.

## Engineering judgment

During an uncertain browser interaction, the payment action was not resubmitted. Later payment history confirmed exactly one receipt. This avoided turning an automation failure into a duplicate financial operation. Inspection controls were exercised without saving changes to an existing return; those checks establish UI behavior only.

## Outcome

The historical recommendation was a conditional release hold pending defect fixes and targeted retesting. No claim is made that all bugs are fixed. Full return/refund/retention accounting and live company/role isolation still need evidence.

## Earlier work

Earlier records cover billing-day boundaries, contract blockers, document eligibility, CRM stage synchronization, responsive layouts and deployment test diagnosis. See the [history](history.md) for dates, counts, limitations and a possible recurring availability regression.

## Lessons

Keep test results tied to a version and environment. Distinguish a test defect from an application defect. Reconcile financial summaries against their detail rows. Preserve staging deployment checks even when local tests pass. Explain what was not verified as clearly as what passed.
