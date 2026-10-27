// Pallino's commit history, newest first. Real commits, messages translated to English.
// To add an update, put a new line at the top: both the home page and log.html read this list.
window.PALLINO_LOG = [
  ["c9e210b", "2026-10-27", "fix: the first click on a full-screen nudge was lost"],
  ["6274de4", "2026-10-27", "full-screen nudges: secondary choices look like real buttons"],
  ["c40af0d", "2026-10-27", "knock when a paused session is forgotten, with a Resume button"],
  ["0b27f84", "2026-10-27", "stay quiet during calls; pick the minutes right from the nudge"],
  ["1941a95", "2026-10-26", "\"Pallino won't let go\": full-screen nudges and breaks; colorful menu bar icon"],
  ["492e9c0", "2026-10-26", "settings: tighter footer"],
  ["aff6c27", "2026-10-25", "iPhone: minute presets fit on narrow screens"],
  ["161ffb7", "2026-10-24", "settings: small \"by gioalberodev\" signature"],
  ["87b867a", "2026-10-24", "support and privacy pages in the gioalberodev style"],
  ["f03d90f", "2026-10-24", "report a problem, with on-device crash summaries"],
  ["81de1ad", "2026-10-24", "answer App Store review questions for 1.0"],
  ["e8c25aa", "2026-10-24", "iPad landscape layout checked"],
  ["7e4b5ca", "2026-10-24", "iCloud: never push defaults over your own settings"],
  ["7265fd3", "2026-10-24", "sync the nest through iCloud across Mac, iPhone and iPad"],
  ["c496ce9", "2026-10-24", "live activity: Dynamic Island and Lock Screen"],
  ["34c7f5b", "2026-10-24", "expanded island: one line per text"],
  ["f6f4b82", "2026-10-23", "redesign for iPhone and iPad, made for the screen"],
  ["afdd391", "2026-10-23", "ask for notifications on the first session, not at launch"],
  ["00b68a4", "2026-10-23", "go multiplatform"],
  ["112d8fa", "2026-10-23", "submit 1.0 to the Mac App Store"],
  ["14c7421", "2026-10-23", "publish support and privacy pages"],
  ["9346795", "2026-10-23", "store listing: texts and screenshots in two languages"],
  ["07200ee", "2026-10-23", "signing and archive for the App Store"],
  ["999e5e1", "2026-10-23", "final bundle id"],
  ["481c211", "2026-10-22", "pause the timer when the Mac goes to sleep"],
  ["54c62ff", "2026-10-22", "full test pass: celebration, cycle, streaks, notifications"],
  ["19e9970", "2026-10-22", "single instance, Xcode recommended settings"],
  ["3c5c431", "2026-10-22", "first commit: Pallino 1.0 for macOS"],
];

// Fills <ul class="log" data-limit="N"> with the newest N entries (all of them without data-limit).
(function () {
  const list = document.querySelector("ul.log");
  if (!list) return;
  const limit = Number(list.dataset.limit) || window.PALLINO_LOG.length;
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  list.innerHTML = window.PALLINO_LOG.slice(0, limit).map(([hash, date, msg], i) =>
    `<li${i === 0 ? ' class="head"' : ""}><span class="hash">${hash}</span>` +
    `<span class="date">${date}</span><span class="msg">${esc(msg)}</span></li>`
  ).join("");
  const more = document.querySelector(".log-more");
  if (more && list.dataset.limit) {
    const rest = window.PALLINO_LOG.length - limit;
    if (rest > 0) more.textContent = `see all ${window.PALLINO_LOG.length} commits`;
    else more.remove();
  }
})();
