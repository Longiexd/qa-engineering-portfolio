# AUTO-020 — image tags cannot silently change on next onboarding

**Source module:** backend/tests/test_provisioning.py
**Exact test function:** test_image_tags_cannot_silently_change_on_next_onboarding
**Evidence:** Retained historical source inspected during portfolio compilation
**Execution status:** Not run during compilation; individual historical result not established

## Regression intent

Image tags cannot silently change on next onboarding. Inspect the original test assertions and fixtures before changing its expected behavior.

## Reuse and evidence requirements

Use the original private project harness and compatible dependency versions. Record the source revision, complete test command, outcome and skipped prerequisites. Mocked Odoo calls do not prove real database isolation. Public documentation intentionally excludes private application source and credentials.
