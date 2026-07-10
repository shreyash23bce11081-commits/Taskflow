# TaskFlow Ledger
 
A lightweight employee task management site with separate **Employee** and **Admin** logins. Built with plain HTML, CSS, and JavaScript — no backend, no build tools, no npm install. Just open it in a browser.
 
Data (employees, tasks, login credentials) is stored in the browser's `localStorage`, so it persists across page reloads on the same device/browser.
 
---
 
## Features
 
**Login page (`index.html`)**
- Tabbed login: switch between Employee and Admin sign-in.
- Demo credentials shown on the page itself.
**Employee dashboard (`employee.html`)**
- Shows the logged-in employee's ID, name, and job title.
- Lists their assigned tasks with title, assigned date, and status.
- Employee can mark a task as **Complete** or reopen it.
- Quick stats: total assigned, pending, completed.
**Admin dashboard (`admin.html`)**
- Sees every employee's tasks in one ledger.
- Assign a new task to any employee (pick employee, date, task title).
- Mark tasks complete/pending or delete them.
- Add new employees (auto-assigned a default password).
- Quick stats: total employees, pending tasks, completed tasks.
---
 
## File structure
 
```
taskflow/
├── index.html      # Login page (Employee / Admin tabs)
├── employee.html    # Employee dashboard
├── admin.html        # Admin dashboard
├── data.js          # Seed data + localStorage helper functions
├── style.css        # Shared design system / styling
└── README.md
```
 
All files must stay in the same folder — the pages link to `style.css` and `data.js` using relative paths.
 
---
 
## How to run it
 
### Option 1 — VS Code + Live Server (recommended)
1. Open the `taskflow` folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel.
3. Right-click `index.html` → **Open with Live Server**.
4. Your browser opens at something like `http://127.0.0.1:5500/index.html`.
### Option 2 — Just open the file
Double-click `index.html` to open it directly in your browser. Everything works the same way, though some browsers are stricter about local file access — Live Server avoids that entirely.
 
---
 
## Demo credentials
 
| Role     | Login              | Password      |
|----------|---------------------|----------------|
| Employee | `IN26012541`         | `shreyash123`  |
| Admin    | `admin`               | `admin123`     |
 
Two more sample employees (`EMP-1002`, `EMP-1003`) are seeded in `data.js` if you want more test data.
 
---
 
## Adding your own data
 
- **New employees**: use the "Add employee" form in the admin dashboard. New employees get the default password `welcome123` — share it with them directly, or edit `data.js` before first load to set a custom one.
- **Reset all data**: open the browser console on any page and run:
```js
  localStorage.removeItem("taskflow_db_v1");
```
  Then reload the page — it will reseed with the original demo data.
 
---
 
## Known limitations (this is a front-end demo)
 
- **No real backend.** All data lives in each browser's `localStorage`. Two people opening the site on different computers will each get their own independent copy of the data — changes don't sync between them.
- **Passwords are stored in plain text** inside the browser's storage and in `data.js`. This is fine for practice/prototyping, but should not be reused as-is for a real system handling real employee data.
- If you outgrow this and want multi-user syncing, real authentication, and a shared database, the next step would be adding a small backend (e.g. Node/Express + a database) — happy to help build that out when you're ready.
---
 
## Customizing the look
 
All colors, fonts, and spacing are defined as CSS variables at the top of `style.css`:
 
```css
:root {
  --bg: #10151b;
  --panel: #1a2129;
  --amber: #e0a458;
  --green: #5fae82;
  --red: #c1666b;
  ...
}
```
 
Change these values to re-theme the whole site without touching any HTML.
 
