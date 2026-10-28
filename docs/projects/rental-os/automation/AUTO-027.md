# AUTO-027 — private shell output is withheld even when diagnostics requested

**Source module:** backend/tests/test_provisioning.py
**Exact test function:** test_private_shell_output_is_withheld_even_when_diagnostics_requested
**Evidence:** Retained historical source inspected during portfolio compilation
**Execution status:** Not run during compilation; individual historical result not established

## Regression intent

Private shell output is withheld even when diagnostics requested. Inspect the original test assertions and fixtures before changing its expected behavior.

## Reuse and evidence requirements

Use the original private project harness and compatible dependency versions. Record the source revision, complete test command, outcome and skipped prerequisites. Mocked Odoo calls do not prove real database isolation. Public documentation intentionally excludes private application source and credentials.
