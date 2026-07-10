/* =========================================================
   TASKFLOW LEDGER — data layer (localStorage, client-side demo)
   Note: this is a front-end demo. Passwords are stored in
   plain text in the browser for simplicity — do not reuse
   this auth approach for a real production system.
   ========================================================= */

const DB_KEY = "taskflow_db_v1";

function seedDB() {
  return {
    admins: [
      { username: "admin", password: "admin123", name: "Admin" }
    ],
    employees: [
      { id: "IN26012541", name: "Shreyash Singh Raghuwanshi", password: "shreyash123", title: "Software Engineer" },
      { id: "EMP-1002", name: "Aditi Verma", password: "aditi123", title: "UI/UX Designer" },
      { id: "EMP-1003", name: "Rohan Mehta", password: "rohan123", title: "QA Analyst" }
    ],
    tasks: [
      { id: 1, employeeId: "IN26012541", title: "Set up authentication module", assignedDate: "2026-07-05", status: "completed" },
      { id: 2, employeeId: "IN26012541", title: "Build employee task ledger UI", assignedDate: "2026-07-08", status: "pending" },
      { id: 3, employeeId: "EMP-1002", title: "Design onboarding flow mockups", assignedDate: "2026-07-06", status: "pending" },
      { id: 4, employeeId: "EMP-1003", title: "Regression test v1.2 release", assignedDate: "2026-07-07", status: "completed" }
    ],
    nextTaskId: 5
  };
}

function loadDB() {
  const raw = localStorage.getItem(DB_KEY);
  if (!raw) {
    const fresh = seedDB();
    localStorage.setItem(DB_KEY, JSON.stringify(fresh));
    return fresh;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    const fresh = seedDB();
    localStorage.setItem(DB_KEY, JSON.stringify(fresh));
    return fresh;
  }
}

function saveDB(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function resetDB() {
  const fresh = seedDB();
  saveDB(fresh);
  return fresh;
}

function findEmployee(db, id) {
  return db.employees.find(e => e.id.toLowerCase() === String(id).toLowerCase());
}

function findAdmin(db, username) {
  return db.admins.find(a => a.username.toLowerCase() === String(username).toLowerCase());
}

function tasksForEmployee(db, employeeId) {
  return db.tasks.filter(t => t.employeeId.toLowerCase() === String(employeeId).toLowerCase());
}

function currentSession() {
  const raw = sessionStorage.getItem("taskflow_session");
  return raw ? JSON.parse(raw) : null;
}

function setSession(session) {
  sessionStorage.setItem("taskflow_session", JSON.stringify(session));
}

function clearSession() {
  sessionStorage.removeItem("taskflow_session");
}
