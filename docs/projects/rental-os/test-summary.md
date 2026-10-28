# QA Test Report
## Klynx Rental OS — Rental Operations and Security Deposits

| Report information | Details |
|---|---|
| Report ID | QA-KLYNX-2026-1028 |
| Test date | 28 October 2026 |
| Environment | Authenticated staging |
| Application | Multi-company vehicle rental management platform |
| Test type | Exploratory, functional, regression, UI and validation testing |
| Overall result | **Partial — defects identified; further validation required** |

## 1. Executive Summary

Testing assessed the rental booking workflow, security deposit handling, analytics, vehicle availability, customer management, and responsive interface.

The tested deposit workflow successfully supported separate invoicing, payment recording, and booking confirmation. Refundable deposits were correctly excluded from rental revenue. Document requirements and vehicle inspection controls enforced the expected restrictions in the scenarios exercised.

Four functional defects were identified, affecting availability consistency, monthly collection reporting, currency precision, and email validation. Additional usability and localization issues were observed.

Automated regression checks passed. However, complete pickup-to-refund processing and live cross-company access isolation were not verified. The application therefore did not receive an unrestricted release recommendation.

## 2. Test Objectives

- Verify that refundable deposits remain separate from rental revenue.
- Validate quotation, invoice, payment, and booking state transitions.
- Check required-field validation and invalid-input handling.
- Compare operational and financial information across application pages.
- Assess return inspection and damage approval controls.
- Review responsive layouts, branding, and localization.
- Identify reproducible defects and document remaining risks.

## 3. Scope

**Included**

Customer creation and search; quotation creation and confirmation; deposit-only invoicing; payment validation and recording; booking confirmation; document gates; inspection controls; analytics; fleet availability; calendar; global search; selected desktop and mobile layouts.

**Not fully covered**

Actual vehicle pickup and return; completed deposit refunds and damage retention; live access checks between two companies; viewer-role restrictions; session expiration; external email delivery; performance/load testing; comprehensive accessibility testing.

Production was outside the test scope.

## 4. Test Approach

A risk-based exploratory approach prioritized financial correctness and operational state consistency.

Testing combined:

- User-interface interaction in the staging application.
- Positive, negative, boundary-value, and repeated-action scenarios.
- Comparison of related screens and persisted records.
- Source inspection to corroborate observed defects.
- Execution of existing automated regression checks.

Clearly labelled QA records were created to distinguish test activity from pre-existing records. No external emails or real fund transfers were initiated.

A temporary browser interaction failure interrupted testing. The uncertain payment action was not resubmitted. After recovery, payment history confirmed that exactly one receipt had been recorded.

## 5. Test Execution Summary

| Area | Scenario | Result |
|---|---|---|
| Customer management | Empty search displays a useful empty state | Pass |
| Customer validation | Whitespace-only name prevents creation | Pass |
| Customer validation | Invalid email is rejected | **Fail** |
| Booking creation | Customer, dates, vehicle, rental product, and deposit persist | Pass |
| Quotation calculation | 32 days × 90 TND + 500 TND deposit = 3,380 TND | Pass |
| Deposit invoicing | Deposit-only invoice contains 500 TND | Pass |
| Duplicate prevention | Repeated action reuses the existing draft invoice | Pass |
| Payment validation | Negative payment is rejected | Pass |
| Currency precision | Payment accepts 0.005 TND | **Fail** |
| Payment processing | One synthetic 500 TND receipt is recorded | Pass |
| Booking confirmation | Payment enables reservation confirmation | Pass |
| Document requirements | Missing driver documents block contract preparation | Pass |
| Return inspection | Three basic checks enable condition approval | Pass — unsaved UI |
| Damage controls | Marking damage clears and disables approval | Pass — unsaved UI |
| Historical deposits | Incorrectly classified legacy deposit cannot be refunded | Pass |
| Revenue analytics | Refundable deposit is excluded from rental revenue | Pass |
| Analytics filters | Vehicle-specific totals reconcile | Pass |
| Collection reporting | Monthly values reconcile with the collected total | **Fail** |
| Fleet availability | Calendar and Fleet show consistent availability | **Fail** |
| Global search | Finds the QA customer, booking, and linked leads | Pass |
| Responsive interface | Selected mobile pages have no horizontal overflow | Pass |
| Branding | Appropriate logo loads in light and dark themes | Pass |
| Localization | French interface is consistently translated | Partial |
| Missing record | Application displays a controlled “not found” state | Pass |

## 6. Defect Register

### QA-01 — Inconsistent Vehicle Availability Counts

**Severity:** Medium  
**Priority:** P2  
**Status:** Open  
**Affected areas:** Calendar, Fleet

**Steps to reproduce**

1. Sign into the staging company.
2. Open Fleet and record the availability totals.
3. Open Fleet Care and compare the totals.
4. Open Calendar and compare its availability summary.

**Expected result**

All pages use the same operational definition of availability, including required-document and eligibility restrictions.

**Actual result**

At the comparison checkpoint, Fleet and Fleet Care displayed **a lower available count than Calendar**. Calendar displayed **9 available and 1 cleaning**.

**Business impact**

Staff may overestimate the number of vehicles ready for rental.

**Recommended direction**

Use the existing authoritative eligibility calculation consistently across all availability summaries.

---

### QA-02 — Monthly Collection Values Remain Zero

**Severity:** Medium  
**Priority:** P2  
**Status:** Open  
**Affected area:** Analytics

**Steps to reproduce**

1. Open Analytics.
2. Select the 2026 reporting period and all vehicles.
3. Compare the Collected summary with the monthly breakdown.
4. Repeat with a vehicle that has recorded collections.

**Expected result**

Monthly collection values reconcile with the aggregate using a clearly defined reporting-date basis.

**Actual result**

The aggregate displayed **a nonzero aggregate TND collected**, while all twelve monthly collection values displayed **0 TND**. A filtered vehicle showed the same inconsistency.

**Business impact**

Monthly collection reporting is unreliable for operational review.

**Recommended direction**

Populate monthly collection values and add a regression check comparing their sum with the corresponding aggregate.

*The recorded figures reflect the checkpoint before the additional QA receipt.*

---

### QA-03 — Payment Form Rejects TND Millime Precision

**Severity:** Medium  
**Priority:** P2  
**Status:** Open  
**Affected area:** Invoice payment form

**Steps to reproduce**

1. Open an unpaid staging invoice.
2. Select a payment account.
3. Enter **0.005 TND** as the amount received.
4. Submit the payment.

**Expected result**

The form accepts amounts supported by the invoice currency’s precision.

**Actual result**

Browser validation rejects the amount because the input uses a minimum and increment of **0.01**.

**Business impact**

Users cannot record valid three-decimal amounts or settle small residual balances.

**Recommended direction**

Derive input constraints, formatting, and server validation from the currency’s rounding configuration.

---

### QA-04 — Invalid Email Address Is Persisted

**Severity:** Low  
**Priority:** P3  
**Status:** Open  
**Affected area:** Customer creation

**Steps to reproduce**

1. Open Customers → Add customer.
2. Enter a valid customer name.
3. Enter `invalid-email` in the email field.
4. Create the customer.

**Expected result**

The application displays a validation message and prevents submission until the address is corrected or cleared.

**Actual result**

The customer is created, and the invalid address appears in the directory and customer detail.

**Business impact**

Invalid contact data can enter CRM and disrupt subsequent email workflows.

**Recommended direction**

Validate optional email addresses in both the interface and backend.

## 7. Additional Observations

- Agency-facing help text exposes the underlying backend product name.
- French screens contain some untranslated English labels and warnings.
- Product and payment-account options intermittently failed to load; the precise cause was not established.
- An expanded payment-history panel temporarily showed an empty state after booking confirmation. Refetching displayed the receipt.
- A completed rental retained “Ready for pickup” contract wording.

These observations require targeted follow-up before being classified as additional functional defects.

## 8. Automated Verification

| Check | Result |
|---|---|
| Backend and deployment tests | **517 passed, 13 skipped** |
| Additional subtests | **11 passed** |
| Frontend regression tests | **84 passed** |
| TypeScript checking | **Passed** |

These checks ran locally against sources matching the fetched staging reference. They supplement live testing but do not establish complete live accounting or tenant-isolation correctness.

## 9. Test Data and Environment State

The session created:

- One labelled QA customer and associated CRM records.
- Booking **QA-BOOKING-A**.
- A **500 TND** security deposit invoice.
- One synthetic **500 TND** cash receipt.

The booking remains confirmed for **11 November–13 December 2026**, with **500 TND held as a deposit**. These records affect staging availability and reporting and remain available for review.

Existing return inspection changes were not saved. Language, theme, and viewport settings were restored.

## 10. Release Recommendation

**Conditional hold pending corrective work and targeted retesting.**

Before release approval:

1. Resolve and retest the four functional defects.
2. Complete a disposable rental through pickup, return, refund, and damage retention.
3. Verify accounting entries and reconciliation for deposit settlements.
4. Test access isolation using two staging companies and restricted user roles.
5. Recheck intermittent option-loading and payment-history behaviour.

No source fixes or production changes were performed during this QA assessment.

## Publication and evidence note

This is a sanitized historical report supplied by the portfolio owner and checked against the retained detailed QA record. It describes agent-executed staging and local checks. Preparation of this portfolio did not rerun the application. Financial examples use staging values, not production results. Raw screenshots and private infrastructure identifiers are withheld. The source record treats the branding-copy item as QA-05; this portfolio tracks it separately from the four functional defects. See the [evidence register](evidence.md).
