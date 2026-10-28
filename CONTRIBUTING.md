# Maintaining the portfolio

Add each test as a separate Markdown file with ID, objective, preconditions, data, steps, expected/actual result, environment/build and evidence. Mark new scenarios Not run until executed. Preserve historical runs and add a new dated result when retesting. Do not silently replace failures with later passes. Link defects and test cases both ways. Redact personal data and inspect screenshots before committing.

Run `node tools/check-docs.cjs` before publishing. This verifies local documentation links only; it does not test Rental OS.
