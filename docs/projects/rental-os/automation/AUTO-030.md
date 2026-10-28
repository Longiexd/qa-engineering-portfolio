# AUTO-030 — runtime user repair preserves stack configuration and data

**Source module:** backend/tests/test_provisioning.py
**Exact test function:** test_runtime_user_repair_preserves_stack_configuration_and_data
**Evidence:** Retained historical source inspected during portfolio compilation
**Execution status:** Not run during compilation; individual historical result not established

## Regression intent

Runtime user repair preserves stack configuration and data. Inspect the original test assertions and fixtures before changing its expected behavior.

## Reuse and evidence requirements

Use the original private project harness and compatible dependency versions. Record the source revision, complete test command, outcome and skipped prerequisites. Mocked Odoo calls do not prove real database isolation. Public documentation intentionally excludes private application source and credentials.
