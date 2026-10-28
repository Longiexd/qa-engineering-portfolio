# AUTO-019 — invalid names cannot reach docker or sql

**Source module:** backend/tests/test_provisioning.py
**Exact test function:** test_invalid_names_cannot_reach_docker_or_sql
**Evidence:** Retained historical source inspected during portfolio compilation
**Execution status:** Not run during compilation; individual historical result not established

## Regression intent

Invalid names cannot reach docker or sql. Inspect the original test assertions and fixtures before changing its expected behavior.

## Reuse and evidence requirements

Use the original private project harness and compatible dependency versions. Record the source revision, complete test command, outcome and skipped prerequisites. Mocked Odoo calls do not prove real database isolation. Public documentation intentionally excludes private application source and credentials.
