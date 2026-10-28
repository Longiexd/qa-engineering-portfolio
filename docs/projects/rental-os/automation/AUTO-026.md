# AUTO-026 — initialization errors are useful and redact all supplied secrets

**Source module:** backend/tests/test_provisioning.py
**Exact test function:** test_initialization_errors_are_useful_and_redact_all_supplied_secrets
**Evidence:** Retained historical source inspected during portfolio compilation
**Execution status:** Not run during compilation; individual historical result not established

## Regression intent

Initialization errors are useful and redact all supplied secrets. Inspect the original test assertions and fixtures before changing its expected behavior.

## Reuse and evidence requirements

Use the original private project harness and compatible dependency versions. Record the source revision, complete test command, outcome and skipped prerequisites. Mocked Odoo calls do not prove real database isolation. Public documentation intentionally excludes private application source and credentials.
