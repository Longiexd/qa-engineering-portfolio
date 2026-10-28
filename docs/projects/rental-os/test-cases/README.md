# Test case catalogue

Each file separates the reconstructed repeatable procedure from its historical result. Pass results apply only to the exercised scope; unsaved UI checks do not establish backend persistence.

| ID | Area | Scenario | Historical result |
|---|---|---|---|
| [TC-001](TC-001.md) | Journey and UI | Cloudflare protection and authenticated staging access | Pass |
| [TC-002](TC-002.md) | Customers and search | Dashboard and rental/customer pages load | Pass |
| [TC-003](TC-003.md) | Journey and UI | Quotation filter | Pass |
| [TC-004](TC-004.md) | Customers and search | Customer search with no match | Pass |
| [TC-005](TC-005.md) | Customers and search | Blank/whitespace-only customer name | Pass |
| [TC-006](TC-006.md) | Customers and search | Invalid customer email | Fail |
| [TC-007](TC-007.md) | Customers and search | Create customer and CRM association | Pass |
| [TC-008](TC-008.md) | Customers and search | Booking customer lookup | Pass |
| [TC-009](TC-009.md) | Finance | Valid dated quotation with rental/deposit | Pass |
| [TC-010](TC-010.md) | Journey and UI | Reversed-date validation | Inconclusive |
| [TC-011](TC-011.md) | Journey and UI | Unpaid booking guard | Pass |
| [TC-012](TC-012.md) | Finance | Deposit balances before collection | Pass |
| [TC-013](TC-013.md) | Finance | Deposit-only draft invoice | Pass |
| [TC-014](TC-014.md) | Finance | Repeat deposit invoice action | Pass at UI level |
| [TC-015](TC-015.md) | Finance | Post deposit invoice | Pass |
| [TC-016](TC-016.md) | Finance | Negative receipt | Pass |
| [TC-017](TC-017.md) | Finance | TND millime receipt | Fail |
| [TC-018](TC-018.md) | Finance | Synthetic full receipt | Pass after recovery |
| [TC-019](TC-019.md) | Finance | Confirm booking after receipt | Pass |
| [TC-020](TC-020.md) | Journey and UI | Missing driver document gate | Pass |
| [TC-021](TC-021.md) | Finance | Deposit exclusion from sales analytics | Pass |
| [TC-022](TC-022.md) | Finance | Vehicle-filtered analytics | Pass |
| [TC-023](TC-023.md) | Finance | Monthly collection reconciliation | Fail |
| [TC-024](TC-024.md) | Finance | Dark analytics select styling | Pass for CSS |
| [TC-025](TC-025.md) | Fleet and returns | Existing return data and new checklist render | Pass for read |
| [TC-026](TC-026.md) | Finance | Legacy deposit refund guard | Pass |
| [TC-027](TC-027.md) | Fleet and returns | Inspection approval/damage controls | Pass for unsaved UI |
| [TC-028](TC-028.md) | Fleet and returns | Save inspection / actual return / refund / retention | Unverified |
| [TC-029](TC-029.md) | Fleet and returns | Quotation does not reserve vehicle | Pass |
| [TC-030](TC-030.md) | Fleet and returns | Fleet/Calendar availability reconciliation | Fail |
| [TC-031](TC-031.md) | Fleet and returns | Mobile Calendar and Fleet Care at 390×844 | Pass for layout |
| [TC-032](TC-032.md) | Journey and UI | Desktop at 1280×720 | Pass for inspected layout |
| [TC-033](TC-033.md) | Journey and UI | Missing rental ID | Pass for handling |
| [TC-034](TC-034.md) | Journey and UI | Runtime logs | No errors captured |
| [TC-035](TC-035.md) | Journey and UI | Live second-company isolation and viewer permissions | Unverified |
| [TC-036](TC-036.md) | Journey and UI | Logout/session expiry, offline recovery, rapid retries, full keyboard/accessibility audit | Unverified |
| [TC-037](TC-037.md) | Journey and UI | French/light mode | Partial |
| [TC-038](TC-038.md) | Customers and search | Global search | Pass |
