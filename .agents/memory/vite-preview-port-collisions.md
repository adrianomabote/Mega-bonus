---
name: Vite preview port collisions
description: Distinguishes a failed duplicate workflow launch from an actually unavailable Vite preview.
---

When the application workflow reports that port 5000 is occupied, an earlier Vite process may still be serving the current app.

**Why:** Repeated workflow starts in this workspace have failed with a port-in-use error while the existing preview continued to return HTTP 200 and served current source.

**How to apply:** Check the live HTTP response and current Vite source before restarting. If the app responds and reflects changes, avoid restart loops; if a restart is needed, stop only the exact workspace Vite process before starting the workflow again.
