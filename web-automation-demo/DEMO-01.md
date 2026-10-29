# DEMO-01 — Malformed JSON returns server error

Observed 29 October 2026 in the public JSONPlaceholder demo. Send POST /posts with Content-Type application/json and body `{"title":`. Expected: HTTP 400 client error. Actual: HTTP 500. API-16 retains the 400 assertion and is marked expected failure. An unexpected pass fails CI so this exception must be removed once corrected. This is a demo-service observation, not a defect fixed by this portfolio.
