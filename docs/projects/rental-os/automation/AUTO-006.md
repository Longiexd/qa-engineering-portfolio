# AUTO-006 — parallel requests cannot switch tenant via headers or query

**Source module:** backend/tests/test_tenancy.py
**Exact test function:** test_parallel_requests_cannot_switch_tenant_via_headers_or_query
**Evidence:** Retained historical source inspected during portfolio compilation
**Execution status:** Not run during compilation; individual historical result not established

## Regression intent

Parallel requests cannot switch tenant via headers or query. Inspect the original test assertions and fixtures before changing its expected behavior.

## Reuse and evidence requirements

Use the original private project harness and compatible dependency versions. Record the source revision, complete test command, outcome and skipped prerequisites. Mocked Odoo calls do not prove real database isolation. Public documentation intentionally excludes private application source and credentials.
