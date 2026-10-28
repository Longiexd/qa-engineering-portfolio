# AUTO-031 — cannot emit diagnostic output when secret file is missing

**Source module:** backend/tests/test_provisioning.py
**Exact test function:** test_cannot_emit_diagnostic_output_when_secret_file_is_missing
**Evidence:** Retained historical source inspected during portfolio compilation
**Execution status:** Not run during compilation; individual historical result not established

## Regression intent

Cannot emit diagnostic output when secret file is missing. Inspect the original test assertions and fixtures before changing its expected behavior.

## Reuse and evidence requirements

Use the original private project harness and compatible dependency versions. Record the source revision, complete test command, outcome and skipped prerequisites. Mocked Odoo calls do not prove real database isolation. Public documentation intentionally excludes private application source and credentials.
