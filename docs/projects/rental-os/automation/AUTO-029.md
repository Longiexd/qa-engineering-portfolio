# AUTO-029 — integration smoke diagnostics are bounded and redacted

**Source module:** backend/tests/test_provisioning.py
**Exact test function:** test_integration_smoke_diagnostics_are_bounded_and_redacted
**Evidence:** Retained historical source inspected during portfolio compilation
**Execution status:** Not run during compilation; individual historical result not established

## Regression intent

Integration smoke diagnostics are bounded and redacted. Inspect the original test assertions and fixtures before changing its expected behavior.

## Reuse and evidence requirements

Use the original private project harness and compatible dependency versions. Record the source revision, complete test command, outcome and skipped prerequisites. Mocked Odoo calls do not prove real database isolation. Public documentation intentionally excludes private application source and credentials.
