# AUTO-023 — interrupted user creation can resume without enabling partial account

**Source module:** backend/tests/test_provisioning.py
**Exact test function:** test_interrupted_user_creation_can_resume_without_enabling_partial_account
**Evidence:** Retained historical source inspected during portfolio compilation
**Execution status:** Not run during compilation; individual historical result not established

## Regression intent

Interrupted user creation can resume without enabling partial account. Inspect the original test assertions and fixtures before changing its expected behavior.

## Reuse and evidence requirements

Use the original private project harness and compatible dependency versions. Record the source revision, complete test command, outcome and skipped prerequisites. Mocked Odoo calls do not prove real database isolation. Public documentation intentionally excludes private application source and credentials.
