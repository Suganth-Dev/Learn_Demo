// MTS Connect Global State & Interactive Controller (SPA Model)

// Default Seed Data
const InitialSeedData = {
  admins: [
    { email: 'admin@mts.edu', name: 'Admin Suresh Venkataraman', role: 'Super Admin', initials: 'SV' },
    { email: 'poornima@mts.edu', name: 'Admin Poornima Krishnan', role: 'Admin', initials: 'PK' }
  ],
  teachers: [
    { email: 'teacher@mts.edu', name: 'Mrs. Lakshmi Rajendran', role: 'Teacher', initials: 'LR', grades: 'Grade 3-A & 4-B' },
    { email: 'arun@mts.edu', name: 'Mr. Arun Prabhu', role: 'Teacher', initials: 'AP', grades: 'Grade 2-A' },
    { email: 'meena@mts.edu', name: 'Mrs. Meena Kumaravel', role: 'Teacher', initials: 'MK', grades: 'Grade 1-A' },
    { email: 'karthik@mts.edu', name: 'Mr. Karthik Murugan', role: 'Teacher (Pending)', initials: 'KM', grades: 'Grade 5-A' },
    { email: 'prabhavathi@mts.edu', name: 'Mrs. Prabhavathi Srinivasan', role: 'Teacher', initials: 'PS', grades: 'Grade 6-A' },
    { email: 'dinesh@mts.edu', name: 'Mr. Dinesh Chandrasekaran', role: 'Teacher', initials: 'DC', grades: 'Grades 7 & 8' }
  ],
  parents: [
    { email: 'parent@mts.edu', name: 'Priya Kumar', role: 'Parent', initials: 'PK', children: ['Anika Kumar', 'Rohan Kumar'], phone: '404-555-0245' },
    { email: 'anand@mts.edu', name: 'Anand Sharma', role: 'Parent', initials: 'AS', children: ['Rohan Sharma'], phone: '404-555-0122' },
    { email: 'meena.p@mts.edu', name: 'Meena Patel', role: 'Parent', initials: 'MP', children: ['Diya Patel'], phone: '404-555-0311' },
    { email: 'suma@mts.edu', name: 'Suma Rajan', role: 'Parent', initials: 'SR', children: ['Kavya Rajan'], phone: '404-555-0441' },
    { email: 'padma@mts.edu', name: 'Padma Subramaniam', role: 'Parent', initials: 'PS', children: ['Siddharth Nair'], phone: '404-555-0761' },
    { email: 'rajesh@mts.edu', name: 'Rajesh Govindasamy', role: 'Parent', initials: 'RG', children: ['Arun Govindasamy'], phone: '404-555-0981' }
  ],
  students: [
    { id: 'MTS-001', name: 'Anika Kumar', tamilName: 'அனிகா', grade: '3', section: '3-A', itaId: 'ITA-2301', guardian: 'Priya Kumar', status: 'Active', dob: '2017-01-14', enrollDate: '2024-08-15', phone: '404-555-0245', notes: 'Scholarship student. Prefers English notifications.' },
    { id: 'MTS-002', name: 'Rohan Kumar', tamilName: 'ரோஹன்', grade: '2', section: '2-A', itaId: 'ITA-2302', guardian: 'Priya Kumar', status: 'Active', dob: '2017-04-22', enrollDate: '2024-08-15', phone: '404-555-0245', notes: 'No special accommodations.' },
    { id: 'MTS-003', name: 'Diya Patel', tamilName: 'தியா', grade: '4', section: '4-B', itaId: 'ITA-2401', guardian: 'Meena Patel', status: 'Active', dob: '2016-09-08', enrollDate: '2024-08-15', phone: '404-555-0311', notes: 'Speaks Tamil at home.' },
    { id: 'MTS-004', name: 'Siddharth Nair', tamilName: 'சித்தார்த்', grade: '4', section: '4-B', itaId: 'ITA-2402', guardian: 'Padma Subramaniam', status: 'Pending', dob: '2016-11-30', enrollDate: '2025-01-10', phone: '404-555-0761', notes: 'ITA mismatch flags on review.' },
    { id: 'MTS-005', name: 'Kavya Rajan', tamilName: 'காவ்யா', grade: '5', section: '5-A', itaId: 'ITA-2501', guardian: 'Suma Rajan', status: 'Active', dob: '2015-05-18', enrollDate: '2024-08-15', phone: '404-555-0441', notes: 'Sibling in Grade 2.' }
  ],
  classes: [
    { code: 'Grade 1-A', teacher: 'Mrs. Meena Kumaravel', students: 14, lastAttendance: 'Jun 6 ✅', status: 'Active' },
    { code: 'Grade 2-A', teacher: 'Mr. Arun Prabhu', students: 16, lastAttendance: 'Jun 6 ✅', status: 'Active' },
    { code: 'Grade 3-A', teacher: 'Mrs. Lakshmi Rajendran', students: 18, lastAttendance: 'Jun 6 ✅', status: 'Active' },
    { code: 'Grade 4-B', teacher: 'Mrs. Lakshmi Rajendran', students: 15, lastAttendance: 'Not done 🔴', status: 'Active' },
    { code: 'Grade 5-A', teacher: 'Unassigned 🟡', students: 12, lastAttendance: '—', status: 'Pending Teacher' }
  ],
  homework: [
    { id: 1, title: 'Tamil Alphabets Practice', titleTa: 'உயிர் எழுத்துக்கள் பயிற்சி', classCode: 'Grade 3-A', due: '2025-06-15', stats: { submitted: 12, approved: 10, pending: 2, overdue: 4 }, status: 'Active', desc: 'Write each alphabet 5 times on paper, take a photo and upload.' },
    { id: 2, title: 'Thirukkural Ch.1 Memorization', titleTa: 'திருக்குறள் அதிகாரம் 1', classCode: 'Grade 3-A', due: '2025-06-08', stats: { submitted: 18, approved: 18, pending: 0, overdue: 0 }, status: 'Closed', desc: 'Recite first 5 Kurals without looking. Upload audio.' },
    { id: 3, title: 'Write 5 sentences in Tamil', titleTa: 'வாக்கியம் அமைத்தல்', classCode: 'Grade 3-A', due: '2025-06-01', stats: { submitted: 16, approved: 12, pending: 2, overdue: 2 }, status: 'Closed', desc: 'Create 5 simple sentences describing your family.' }
  ],
  submissions: [
    { id: 101, student: 'Anika Kumar', assignment: 'Tamil Alphabets Practice', date: 'Jun 9, 2:30 PM', file: 'anika_hw_jun9.jpg', status: 'Pending Review', comment: '', fileType: 'image' },
    { id: 102, student: 'Rohan Sharma', assignment: 'Thirukkural Ch.1 Memorization', date: 'Jun 9, 4:15 PM', file: 'rohan_reading.mp3', status: 'Pending Review', comment: '', fileType: 'audio' },
    { id: 103, student: 'Diya Patel', assignment: 'Write 5 sentences in Tamil', date: 'Jun 8, 6:00 PM', file: 'diya_sentences.pdf', status: 'Pending Review', comment: '', fileType: 'document' }
  ],
  announcements: [
    { id: 1, priority: 'urgent', badge: '🔴 URGENT', title: 'Annual Day Celebration — Venue Change', titleTa: 'ஆண்டு விழா நடைபெறும் இடம் மாற்றம்', body: 'Dear Parents, please note that Annual Day has been moved to Building B due to maintenance work in Building A. Timings remain same.', bodyTa: 'அன்பான பெற்றோர்களே, கட்டடம் A பராமரிப்பு பணி காரணமாக ஆண்டு விழா கட்டடம் B-க்கு மாற்றப்பட்டுள்ளது.', date: 'Jun 9, 2025', audience: 'All Parents', ackRequired: true, acknowledged: [] },
    { id: 2, priority: 'important', badge: '🟡 IMPORTANT', title: 'Friday Parking Update — Main Lot Open', titleTa: 'வாகனம் நிறுத்தும் இடம் அறிவிப்பு', body: 'Main dropoff parking zone A is open. Overflow parking is available in lot C.', bodyTa: 'வாகனம் நிறுத்தும் இடம் A திறக்கப்பட்டுள்ளது. உபரி வாகனங்களை C தளத்தில் நிறுத்தலாம்.', date: 'Jun 6, 2025', audience: 'All', ackRequired: false, acknowledged: [] },
    { id: 3, priority: 'info', badge: '🔵 INFO', title: 'Grade 3 Homework Reminder', titleTa: 'வகுப்பு 3 வீட்டுப்பாடம்', body: 'Please verify that students submit their basic vowel homework by Sunday June 15.', bodyTa: 'உயிர் எழுத்துக்கள் வீட்டுப்பாடத்தை ஜூன் 15-க்குள் சமர்ப்பிக்கவும்.', date: 'Jun 4, 2025', audience: 'Grade 3 Parents', ackRequired: false, acknowledged: [] }
  ],
  events: [
    { id: 1, name: 'Annual Day Practice', date: 'Jun 14, 2025', type: 'Rehearsal', audience: 'Grade 3-A & 4-B Students', capacity: 100, rsvps: { yes: 68, no: 12 }, status: 'RSVPs Open' },
    { id: 2, name: 'Parent-Teacher Meeting', date: 'Jun 21, 2025', type: 'Academic', audience: 'All Grade Parents', capacity: 60, rsvps: { yes: 34, no: 0 }, status: 'Booking Open' },
    { id: 3, name: 'Tamil Cultural Quiz', date: 'Jun 28, 2025', type: 'Competition', audience: 'All Grades', capacity: 200, rsvps: { yes: 85, no: 10 }, status: 'Scheduled' }
  ],
  messages: {
    1: [
      { type: 'received', text: "Good evening Priya! Anika did very well in today's Tamil recitation. Her pronunciation of 'ழ' (zha) has improved a lot 🎉", time: "Jun 9, 6:45 PM" },
      { type: 'sent', text: "Thank you so much Mrs. Lakshmi! She has been practicing every day.", time: "Jun 9, 7:00 PM" },
      { type: 'received', text: "Please also ensure she completes the Tamil Alphabets homework by Jun 15.", time: "Jun 9, 7:02 PM" }
    ],
    2: [
      { type: 'received', text: "Dear Priya Kumar, this is an automated reminder that the Marietta Tamil School tuition fee for term 2 is due by June 20, 2025.", time: "Yesterday, 10:00 AM" }
    ],
    3: [
      { type: 'sent', text: "Hello Mrs. Meena, I wanted to confirm if Rohan has completed his basic letter practice assignments.", time: "Jun 7, 3:00 PM" },
      { type: 'received', text: "Yes Priya! Thank you for the note about Rohan. He completed writing அ, ஆ neatly. I have approved it in the portal.", time: "Jun 7, 4:15 PM" }
    ]
  },
  schoolStatus: {
    status: 'green',
    statusText: '✅ CLASS ON',
    statusTextTa: '✅ வகுப்பு நடைபெறும்',
    venue: 'MTS Building A',
    parking: 'Main Lot Open',
    note: 'Friday drop-off zones active at 6:00 PM.'
  },
  sessions: [
    { id: 1, user: 'Admin Suresh V. (You)', device: 'Chrome browser · Windows 11', ip: '192.168.1.45', time: 'Just now', current: true },
    { id: 2, user: 'Admin Poornima K.', device: 'Safari browser · iOS Mobile', ip: '172.24.12.98', time: 'Yesterday, 4:00 PM', current: false }
  ],
  auditLog: [
    { timestamp: 'Jun 9, 10:15 AM', user: 'Admin Suresh', action: 'Student Import', target: '68 records roster', details: 'Database committed CSV data', ip: '192.168.1.45' },
    { timestamp: 'Jun 9, 11:00 AM', user: 'Mrs. Lakshmi', action: 'Attendance Session', target: 'Grade 3-A class', details: 'Finalized session for Friday, Jun 6', ip: 'mobile-network' },
    { timestamp: 'Jun 8, 3:00 PM', user: 'Priya Kumar', action: 'Homework Upload', target: 'Anika Kumar · Alphabets', details: 'Uploaded anika_hw_jun9.jpg successfully', ip: 'web-session' }
  ],
  notificationMatrix: {
    announcements: { push: true, email: true, inapp: true, wa: false },
    homework: { push: true, email: false, inapp: true, wa: false },
    attendance: { push: true, email: true, inapp: true, wa: true },
    messages: { push: true, email: false, inapp: true, wa: false }
  },
  approvals: [
    { id: 1, category: 'Teacher Reg', user: 'Mr. Karthik Murugan', details: 'Applied for Grade 5-A Class Teacher assignment', date: 'Jun 8, 2025', status: 'Pending' },
    { id: 2, category: 'Student Link', user: 'Mrs. Padma Subramaniam', details: 'Linking Siddharth Nair (ITA ID check matching required)', date: 'Jun 9, 2025', status: 'Pending' },
    { id: 3, category: 'Student Link', user: 'Mr. Rajesh Govindasamy', details: 'Linking Arun Govindasamy (New parent details verifications)', date: 'Jun 9, 2025', status: 'Pending' },
    { id: 4, category: 'Info Correction', user: 'Priya Kumar', details: 'Updating primary guardian contact phone number', date: 'Jun 7, 2025', status: 'Pending' },
    { id: 5, category: 'Support Ticket', user: 'Mrs. Meena Patel', details: 'Parent account password reset request assistance', date: 'Jun 9, 2025', status: 'Pending' }
  ],
  parentChecklist: { tuition: true, medical: false, photo: true },
  absenceReports: [
    { student: 'Anika Kumar', date: '2025-06-13', reason: 'Doctor appointment', notes: 'Dentist visit checkup.', status: 'Excused' }
  ],
  bookedPtSlot: null
};

// Database Initialization (Local Storage CRUD Layer)
// Version key - increment to force seed data reset
const DB_VERSION = 'mts_v6';

function initializeDatabase() {
  const storedVersion = localStorage.getItem('mts_db_version');
  
  if (storedVersion !== DB_VERSION) {
    // New version or first load: reset to fresh seed data
    // Preserve any user CRUD changes within same version by merging
    localStorage.setItem('mts_data', JSON.stringify(InitialSeedData));
    localStorage.setItem('mts_db_version', DB_VERSION);
  } else if (!localStorage.getItem('mts_data')) {
    // Data missing even though version matches - restore seed
    localStorage.setItem('mts_data', JSON.stringify(InitialSeedData));
  }
}

// Fetch database records
function getDb() {
  const raw = localStorage.getItem('mts_data');
  if (!raw) {
    localStorage.setItem('mts_data', JSON.stringify(InitialSeedData));
    return JSON.parse(JSON.stringify(InitialSeedData));
  }
  try {
    const parsed = JSON.parse(raw);
    // Validate that core seed arrays exist; restore if corrupted
    if (!parsed.students || !parsed.announcements || !parsed.homework) {
      localStorage.setItem('mts_data', JSON.stringify(InitialSeedData));
      return JSON.parse(JSON.stringify(InitialSeedData));
    }
    return parsed;
  } catch(e) {
    localStorage.setItem('mts_data', JSON.stringify(InitialSeedData));
    return JSON.parse(JSON.stringify(InitialSeedData));
  }
}

// Save database changes
function saveDb(db) {
  localStorage.setItem('mts_data', JSON.stringify(db));
}

// State variables
let currentLanguage = localStorage.getItem('mts-lang') || 'en';
let activeChild = localStorage.getItem('mts-active-child') || 'Anika Kumar';
let activeThreadId = 1;
let activeTeacherThreadId = 1;
let activeClassRosterCode = 'Grade 3-A';
let activeHomeworkSubtab = 'active';
let activePeopleSubtab = 'students';

// On Page Load Orchestration
document.addEventListener('DOMContentLoaded', () => {
  // Always run first — ensures seed data is guaranteed present
  initializeDatabase();
  applyLanguage(currentLanguage);
  
  // Initialize theme
  const currentTheme = localStorage.getItem('theme') || 'light';
  applyTheme(currentTheme);

  // Set up language toggle clicks
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', toggleLanguage);
  });

  // Load profile settings trigger
  const profileTrigger = document.querySelector('.profile-trigger');
  const profileDropdown = document.querySelector('.profile-dropdown');
  if (profileTrigger && profileDropdown) {
    profileTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('show');
    });
    document.addEventListener('click', () => {
      profileDropdown.classList.remove('show');
    });
  }

  // Sidebar SPA click logic binding
  setupSidebarNavigation();

  // Floating login indicator
  if (window.location.pathname.indexOf('index.html') === -1 && window.location.pathname !== '/' && window.location.pathname !== '') {
    injectDemoControls();
  }

  // Page Specific Render Dispatchers
  const pagePath = window.location.pathname;
  if (pagePath.includes('parent-dashboard.html')) {
    renderParentSPA();
  } else if (pagePath.includes('teacher-dashboard.html')) {
    renderTeacherSPA();
  } else if (pagePath.includes('admin-dashboard.html')) {
    renderAdminSPA();
  }

  // Initialize bell notifications drawer
  setupNotificationDrawer();

  // Create Lucide vector icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

// Sidebar SPA Navigation Handler
function setupSidebarNavigation() {
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      let panelTarget = '';
      const textEn = link.querySelector('.lang-en').textContent.trim().toLowerCase();

      // Maps sidebar titles to corresponding panels
      if (textEn === 'home' || textEn === 'dashboard') panelTarget = 'panel-home';
      else if (textEn === 'my children') panelTarget = 'panel-children';
      else if (textEn === 'my classes') panelTarget = 'panel-classes';
      else if (textEn === 'attendance') panelTarget = 'panel-attendance';
      else if (textEn === 'homework') panelTarget = 'panel-homework';
      else if (textEn === 'announcements') panelTarget = 'panel-announcements';
      else if (textEn === 'calendar' || textEn === 'events') panelTarget = 'panel-calendar';
      else if (textEn === 'messages') panelTarget = 'panel-messages';
      else if (textEn === 'forms & checklist') panelTarget = 'panel-checklist';
      else if (textEn === 'account' || textEn === 'settings' || textEn === 'profile') panelTarget = 'panel-settings';
      else if (textEn === 'people') panelTarget = 'panel-people';
      else if (textEn === 'academic setup') panelTarget = 'panel-setup';
      else if (textEn === 'rosters') panelTarget = 'panel-rosters';
      else if (textEn === 'import / ita data') panelTarget = 'panel-import';
      else if (textEn === 'attendance reports') panelTarget = 'panel-attendance-reports';
      else if (textEn === 'homework reports') panelTarget = 'panel-homework-reports';
      else if (textEn === 'communications') panelTarget = 'panel-communications';
      else if (textEn === 'reports & exports') panelTarget = 'panel-reports';
      else if (textEn === 'audit log') panelTarget = 'panel-audit';


      if (panelTarget) {
        document.querySelectorAll('.sidebar-item').forEach(item => item.classList.remove('active'));
        link.parentElement.classList.add('active');

        document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
        const activePanel = document.getElementById(panelTarget);
        if (activePanel) {
          activePanel.classList.add('active');
          
          // Trigger breadcrumb header updates
          const parentText = document.getElementById('teacher-breadcrumb-active-text');
          if (parentText) parentText.textContent = link.querySelector('.lang-en').textContent.trim();
          
          const adminText = document.getElementById('admin-breadcrumb-active-text');
          if (adminText) adminText.textContent = link.querySelector('.lang-en').textContent.trim() + ' Console';
          
          if (panelTarget === 'panel-messages') {
            scrollChatToBottom();
          }
        }
        
        document.querySelector('.sidebar').classList.remove('open');
      }
    });
  });
}

// Dynamic Language Toggler
function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'ta' : 'en';
  localStorage.setItem('mts-lang', currentLanguage);
  applyLanguage(currentLanguage);
}

function applyLanguage(lang) {
  if (lang === 'ta') {
    document.body.classList.add('lang-tamil');
    document.querySelectorAll('.lang-btn-text').forEach(el => el.textContent = 'English');
  } else {
    document.body.classList.remove('lang-tamil');
    document.querySelectorAll('.lang-btn-text').forEach(el => el.textContent = 'தமிழ்');
  }
}

// Dynamic Theme Toggler
window.toggleTheme = function() {
  const theme = localStorage.getItem('theme') || 'light';
  const newTheme = theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
};

window.applyTheme = function(theme) {
  const moonIcons = document.querySelectorAll('.theme-icon-moon');
  const sunIcons = document.querySelectorAll('.theme-icon-sun');
  if (theme === 'dark') {
    document.documentElement.classList.add('dark-mode');
    document.body.classList.add('dark-mode');
    moonIcons.forEach(i => i.style.display = 'none');
    sunIcons.forEach(i => i.style.display = '');
  } else {
    document.documentElement.classList.remove('dark-mode');
    document.body.classList.remove('dark-mode');
    moonIcons.forEach(i => i.style.display = '');
    sunIcons.forEach(i => i.style.display = 'none');
  }
};

// ----------------------------------------------------
// PARENT SPA CONTROLLER & PERSISTENT CRUD
// ----------------------------------------------------
function renderParentSPA() {
  const db = getDb();
  
  // Render active child switcher variables
  const switcher = document.getElementById('child-selector-dropdown');
  if (switcher) {
    switcher.value = activeChild;
    switcher.onchange = (e) => {
      activeChild = e.target.value;
      localStorage.setItem('mts-active-child', activeChild);
      updateParentChildState(activeChild);
    };
    updateParentChildState(activeChild);
  }

  renderParentChildren();
  renderParentAttendanceGrid();
  renderParentHomeworkCenter();
  renderParentAnnouncements();
  renderParentEvents();
  renderParentPtSlots();
  renderParentChecklist();
  renderParentMatrix();
  renderActiveChat(activeThreadId);
}

function updateParentChildState(childName) {
  const db = getDb();
  const banner = document.getElementById('active-child-details-banner');
  const details = childName === 'Anika Kumar' 
    ? 'Viewing: <strong>Anika Kumar</strong> | Grade 3 | Class 3-A | Teacher: Mrs. Lakshmi R.'
    : 'Viewing: <strong>Rohan Kumar</strong> | Grade 2 | Class 2-A | Teacher: Mr. Arun P.';
  
  if (banner) banner.innerHTML = details;

  // Update Conic Donut Attendance calculations
  const percent = childName === 'Anika Kumar' ? 85 : 95;
  const present = childName === 'Anika Kumar' ? '17' : '19';
  const absent = childName === 'Anika Kumar' ? '3' : '1';
  const late = childName === 'Anika Kumar' ? '1' : '0';

  const chart = document.querySelector('.donut-chart-css');
  if (chart) {
    chart.style.background = `conic-gradient(var(--accent-cyan) ${percent}%, var(--border-color) 0)`;
  }
  
  const presentCountEl = document.getElementById('attendance-present');
  const absentCountEl = document.getElementById('attendance-absent');
  const lateCountEl = document.getElementById('attendance-late');
  
  if (presentCountEl) presentCountEl.textContent = present;
  if (absentCountEl) absentCountEl.textContent = absent;
  if (lateCountEl) lateCountEl.textContent = late;

  // Render child-specific homework lists
  const homeworkTbody = document.getElementById('homework-table-body');
  if (homeworkTbody) {
    if (childName === 'Anika Kumar') {
      homeworkTbody.innerHTML = `
        <tr>
          <td>Tamil Alphabets Practice</td>
          <td>Grade 3-A</td>
          <td>Jun 15</td>
          <td><span class="badge badge-red">Not Submitted</span></td>
        </tr>
        <tr>
          <td>Read Thirukkural Ch.1</td>
          <td>Grade 3-A</td>
          <td>Jun 8</td>
          <td><span class="badge badge-green">Approved</span></td>
        </tr>
      `;
    } else {
      homeworkTbody.innerHTML = `
        <tr>
          <td>Practice Writing Letters அ, ஆ</td>
          <td>Grade 2-A</td>
          <td>Jun 9</td>
          <td><span class="badge badge-green">Approved</span></td>
        </tr>
      `;
    }
  }

  // School status card sync
  const statusBadge = document.getElementById('school-status-badge');
  const statusVenue = document.getElementById('school-status-venue');
  const statusParking = document.getElementById('school-status-parking');
  
  if (statusBadge) {
    statusBadge.textContent = db.schoolStatus.statusText;
    statusBadge.className = `badge big-status-title ${db.schoolStatus.status === 'red' ? 'badge-red' : db.schoolStatus.status === 'amber' ? 'badge-amber' : 'badge-green'}`;
  }
  if (statusVenue) statusVenue.textContent = `Venue: ${db.schoolStatus.venue}`;
  if (statusParking) statusParking.textContent = `Parking: ${db.schoolStatus.parking}`;
}

function renderParentChildren() {
  const db = getDb();
  const parentChildrenList = document.getElementById('parent-children-cards-list');
  if (!parentChildrenList) return;

  parentChildrenList.innerHTML = '';
  // Show Priya Kumar's children Rohan Kumar and Anika Kumar
  const myChildrenData = db.students.filter(s => s.guardian === 'Priya Kumar' || s.guardian === 'Pending link');

  myChildrenData.forEach(c => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-title-group">
        <div>
          <span style="font-size:11px; text-transform:uppercase; font-weight:700; color:var(--text-secondary);">Marietta Student</span>
          <h4 style="font-weight:800; color:var(--primary-navy); margin-top:2px;">${c.name} (${c.tamilName})</h4>
        </div>
        <div style="display:inline-flex; gap:8px; align-items:center; justify-content:flex-end;">
          <span class="badge ${c.status === 'Active' ? 'badge-green' : 'badge-amber'}">${c.status}</span>
          <button class="btn btn-secondary btn-sm" onclick="viewChildDetails('${c.id}')" style="padding:4px 8px; font-size:12px; display:inline-flex; align-items:center;" title="View"><i data-lucide="eye" style="width:14px; height:14px;"></i></button>
          <button class="btn btn-secondary btn-sm" onclick="openChildForm('${c.id}')" style="padding:4px 8px; font-size:12px; display:inline-flex; align-items:center;" title="Edit"><i data-lucide="edit-2" style="width:14px; height:14px;"></i></button>
          <button class="btn btn-secondary btn-sm" onclick="deleteChildRecord('${c.id}')" style="padding:4px 8px; font-size:12px; color:var(--critical-red); border-color:rgba(239,68,68,0.2); display:inline-flex; align-items:center;" title="Delete"><i data-lucide="trash-2" style="width:14px; height:14px;"></i></button>
        </div>
      </div>
      <div class="card-content" style="font-size:13.5px; gap:6px;">
        <div><strong>ITA ID:</strong> ${c.itaId}</div>
        <div><strong>Grade / Class:</strong> Grade ${c.grade} | Section ${c.section}</div>
        <div><strong>Date of Birth:</strong> ${c.dob}</div>
        <div><strong>Enrollment Date:</strong> ${c.enrollDate}</div>
        <div><strong>Internal Notes:</strong> ${c.notes}</div>
      </div>
    `;
    parentChildrenList.appendChild(card);
  });
  if (typeof lucide !== 'undefined') lucide.createIcons({ node: parentChildrenList });
}

function renderParentAttendanceGrid() {
  const db = getDb();
  const tbody = document.getElementById('parent-attendance-log-tbody');
  if (!tbody) return;

  tbody.innerHTML = `
    <tr>
      <td>Jun 6, 2025</td>
      <td>Regular Friday Session (Grade 3-A)</td>
      <td><span class="badge badge-green">Present</span></td>
      <td>No notes</td>
    </tr>
    <tr>
      <td>May 30, 2025</td>
      <td>Regular Friday Session (Grade 3-A)</td>
      <td><span class="badge badge-green">Present</span></td>
      <td>Excellent participation</td>
    </tr>
    <tr>
      <td>May 23, 2025</td>
      <td>Regular Friday Session (Grade 3-A)</td>
      <td><span class="badge badge-red">Absent</span></td>
      <td>Excused (Parent reported sick)</td>
    </tr>
  `;

  // Append any submitted planned reports
  db.absenceReports.forEach(r => {
    tbody.innerHTML = `
      <tr style="background-color: var(--warning-amber-light);">
        <td>${r.date}</td>
        <td>Planned Absence Notice (${r.student})</td>
        <td><span class="badge badge-amber">${r.status}</span></td>
        <td>Reason: ${r.reason} | Note: ${r.notes}</td>
      </tr>
    ` + tbody.innerHTML;
  });
}

window.handleAbsenceReportSubmit = function(event) {
  event.preventDefault();
  const date = document.getElementById('absence-date').value;
  const reason = document.getElementById('absence-reason').value;
  const notes = document.getElementById('absence-notes').value;

  let db = getDb();
  db.absenceReports.push({
    student: activeChild,
    date: date,
    reason: reason,
    notes: notes,
    status: 'Pending'
  });
  saveDb(db);
  document.getElementById('absence-notes').value = '';
  renderParentAttendanceGrid();
  alert('Planned absence report registered. Roster updated.');
};

function renderParentHomeworkCenter() {
  const db = getDb();
  const tbody = document.getElementById('parent-homework-center-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  // Load Anika Kumar and Rohan submissions
  db.homework.forEach(hw => {
    // Find matching submission
    const sub = db.submissions.find(s => s.student === activeChild && s.assignment === hw.title);
    const statusBadge = sub 
      ? `<span class="badge ${sub.status === 'Approved' ? 'badge-green' : sub.status === 'Pending Review' ? 'badge-amber' : 'badge-red'}">${sub.status}</span>`
      : `<span class="badge badge-grey">Not Submitted</span>`;
    const comment = sub ? sub.comment || 'No feedback yet' : '&mdash;';
    
    tbody.innerHTML += `
      <tr>
        <td style="font-weight:700;">${hw.title}</td>
        <td>${hw.classCode}</td>
        <td>${hw.due}</td>
        <td>${statusBadge}</td>
        <td>${comment}</td>
      </tr>
    `;
  });

  // Populate upload assignment select box
  const select = document.getElementById('submit-hw-id');
  if (select) {
    select.innerHTML = '';
    db.homework.forEach(hw => {
      select.innerHTML += `<option value="${hw.title}">${hw.title}</option>`;
    });
  }
}

window.handleParentSubmitHomework = function(event) {
  event.preventDefault();
  const hwTitle = document.getElementById('submit-hw-id').value;
  const filename = document.getElementById('submit-hw-file').value;
  const comments = document.getElementById('submit-hw-comment').value;

  let db = getDb();
  const fileType = filename.endsWith('.jpg') ? 'image' : filename.endsWith('.mp3') ? 'audio' : 'document';
  
  // Update or append submission
  const subIndex = db.submissions.findIndex(s => s.student === activeChild && s.assignment === hwTitle);
  const time = new Date().toLocaleDateString([], { month: 'short', day: 'numeric' }) + ', ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  const subObject = {
    id: 100 + db.submissions.length + 1,
    student: activeChild,
    assignment: hwTitle,
    date: time,
    file: filename,
    status: 'Pending Review',
    comment: comments,
    fileType: fileType
  };

  if (subIndex > -1) {
    db.submissions[subIndex] = subObject;
  } else {
    db.submissions.push(subObject);
  }

  // update homework stats
  const hw = db.homework.find(h => h.title === hwTitle);
  if (hw) {
    hw.stats.submitted += 1;
    hw.stats.pending += 1;
  }

  saveDb(db);
  document.getElementById('submit-hw-comment').value = '';
  renderParentHomeworkCenter();
  updateParentChildState(activeChild);
  alert(`Homework submission successful: uploaded file ${filename}.`);
};

function renderParentAnnouncements() {
  const db = getDb();
  const list = document.getElementById('parent-announcements-list');
  const homeBox = document.getElementById('parent-home-announcement-box');
  if (!list) return;

  list.innerHTML = '';
  db.announcements.forEach(a => {
    const isAcked = a.acknowledged.includes('Priya Kumar');
    const btnHtml = a.ackRequired 
      ? `<button class="btn btn-primary btn-sm" ${isAcked ? 'disabled' : ''} onclick="acknowledgeAnnouncement(${a.id}, this)">${isAcked ? '✓ Acknowledged' : '✓ Acknowledge'}</button>` 
      : '';
    
    list.innerHTML += `
      <div class="card ${a.priority === 'urgent' ? 'status-card-red' : 'status-card-amber'}">
        <div class="card-title-group">
          <div>
            <span class="badge ${a.priority === 'urgent' ? 'badge-red' : 'badge-amber'}">${a.badge}</span>
            <h4 style="font-weight:800; color:var(--primary-navy); margin-top:6px;" class="lang-en">${a.title}</h4>
            <h4 style="font-weight:800; color:var(--primary-navy); margin-top:6px;" class="lang-ta">${a.titleTa}</h4>
          </div>
          <span style="font-size:12px; color:var(--text-secondary);">${a.date}</span>
        </div>
        <div class="card-content">
          <p class="lang-en">${a.body}</p>
          <p class="lang-ta tamil-font">${a.bodyTa}</p>
          <div style="display:flex; gap:12px; margin-top:8px;">
            ${btnHtml}
            <button class="btn btn-secondary btn-sm" onclick="alert('Viewing full details of: ${a.title}')">Read Notice Details</button>
          </div>
        </div>
      </div>
    `;
  });

  // Render on home dashboard card
  if (homeBox && db.announcements.length > 0) {
    const a = db.announcements[0];
    const isAcked = a.acknowledged.includes('Priya Kumar');
    const btnHtml = a.ackRequired 
      ? `<button class="btn btn-secondary btn-sm" style="margin-top:8px;" ${isAcked ? 'disabled' : ''} onclick="acknowledgeAnnouncement(${a.id}, this)">${isAcked ? '✓ Acknowledged' : '✓ Acknowledge'}</button>` 
      : '';
    homeBox.innerHTML = `
      <span class="badge badge-red">${a.badge}</span>
      <h4 style="font-weight:800; color:var(--primary-navy); margin-top:4px;">${a.title}</h4>
      <p style="font-size:13px; color:var(--text-secondary); margin-top:4px;">${a.body}</p>
      ${btnHtml}
    `;
  }
}

window.acknowledgeAnnouncement = function(id, btn) {
  let db = getDb();
  const ann = db.announcements.find(a => a.id === id);
  if (ann) {
    if (!ann.acknowledged.includes('Priya Kumar')) {
      ann.acknowledged.push('Priya Kumar');
      saveDb(db);
    }
  }
  btn.textContent = '✓ Acknowledged';
  btn.disabled = true;
  btn.style.opacity = '0.6';
  renderParentAnnouncements();
  alert('Announcement acknowledged.');
};

function renderParentPtSlots() {
  const db = getDb();
  const text = document.getElementById('booked-slot-text');
  const trigger = document.getElementById('book-slot-trigger-btn');
  if (text) {
    if (db.bookedPtSlot) {
      text.textContent = db.bookedPtSlot;
      text.style.color = 'var(--success-green)';
      if (trigger) trigger.textContent = 'Change Slot';
    } else {
      text.textContent = 'Not Booked';
      text.style.color = 'var(--critical-red)';
      if (trigger) trigger.textContent = 'Book Slot';
    }
  }

  // Populate Pt booking grid inside modal
  const grid = document.getElementById('pt-modal-slots-grid');
  if (grid) {
    grid.innerHTML = '';
    const slots = [
      { time: '7:00 PM', range: '7:00 PM - 7:15 PM', booked: false },
      { time: '7:15 PM', range: '7:15 PM - 7:30 PM', booked: true },
      { time: '7:30 PM', range: '7:30 PM - 7:45 PM', booked: false },
      { time: '7:45 PM', range: '7:45 PM - 8:00 PM', booked: true },
      { time: '8:00 PM', range: '8:00 PM - 8:15 PM', booked: false },
      { time: '8:15 PM', range: '8:15 PM - 8:30 PM', booked: false }
    ];

    slots.forEach(s => {
      const isCurrent = db.bookedPtSlot === s.range;
      const btn = document.createElement('button');
      btn.className = `slot-btn ${s.booked ? 'booked' : ''} ${isCurrent ? 'active' : ''}`;
      if (s.booked) btn.disabled = true;
      btn.textContent = s.range;
      btn.onclick = () => bookPtSlot(s.range);
      grid.appendChild(btn);
    });
  }
}

window.bookPtSlot = function(timeStr) {
  let db = getDb();
  db.bookedPtSlot = timeStr;
  saveDb(db);
  closeModal('pt-slot-modal');
  renderParentPtSlots();
  alert(`PT Conference meeting slot booked for: ${timeStr}`);
};

function renderParentEvents() {
  const db = getDb();
  const parentEventsContainer = document.getElementById('parent-events-rsvps');
  if (!parentEventsContainer) return;

  parentEventsContainer.innerHTML = '';
  db.events.forEach(ev => {
    const item = document.createElement('div');
    item.style.backgroundColor = 'var(--bg-light)';
    item.style.padding = '12px 16px';
    item.style.borderRadius = '8px';
    item.style.borderLeft = `4px solid ${ev.id === 1 ? 'var(--warning-amber)' : ev.id === 2 ? 'var(--accent-cyan)' : 'var(--success-green)'}`;
    
    // Check if Parent responded (simulated check)
    item.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:4px;">
        <h4 style="font-weight:700; color:var(--primary-navy); font-size:14px;">${ev.name}</h4>
        <span class="badge badge-grey" style="padding:2px 8px; font-size:10px;">${ev.date}</span>
      </div>
      <p style="font-size:12.5px; color:var(--text-secondary); margin-bottom:8px;">Type: ${ev.type} &bull; Capacity: ${ev.capacity} Seats</p>
      
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <span style="font-size:11.5px; font-weight:600;">RSVPs: <strong style="color:var(--accent-cyan);">${ev.rsvps.yes} Yes</strong></span>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-primary btn-sm" style="padding:3px 8px; font-size:11px;" onclick="submitEventRsvp(${ev.id}, 'yes')">Going</button>
          <button class="btn btn-secondary btn-sm" style="padding:3px 8px; font-size:11px;" onclick="submitEventRsvp(${ev.id}, 'no')">Decline</button>
        </div>
      </div>
    `;
    parentEventsContainer.appendChild(item);
  });
}

window.submitEventRsvp = function(eventId, response) {
  let db = getDb();
  const ev = db.events.find(e => e.id === eventId);
  if (ev) {
    if (response === 'yes') {
      ev.rsvps.yes += 1;
    } else {
      ev.rsvps.no += 1;
    }
    saveDb(db);
    renderParentEvents();
    alert(`Response submitted: RSVP registered.`);
  }
};

function renderParentChecklist() {
  const db = getDb();
  
  const tuitionChk = document.getElementById('chk-form-tuition');
  const medicalChk = document.getElementById('chk-form-medical');
  const photoChk = document.getElementById('chk-form-photo');

  if (tuitionChk) tuitionChk.checked = db.parentChecklist.tuition;
  if (medicalChk) medicalChk.checked = db.parentChecklist.medical;
  if (photoChk) photoChk.checked = db.parentChecklist.photo;
}

window.toggleChecklistForm = function(formKey, checkbox) {
  let db = getDb();
  db.parentChecklist[formKey] = checkbox.checked;
  saveDb(db);
  renderParentChecklist();
  alert(`Forms checklist updated: compliance state saved.`);
};

function renderParentMatrix() {
  const db = getDb();
  const tbody = document.getElementById('parent-matrix-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  const rows = [
    { key: 'announcements', name: 'Broadcast Announcement Notices' },
    { key: 'homework', name: 'Homework Assignment Published' },
    { key: 'attendance', name: 'Absentee Warning Alerts' },
    { key: 'messages', name: 'Chat Messages Notification' }
  ];

  rows.forEach(r => {
    const matrix = db.notificationMatrix[r.key];
    tbody.innerHTML += `
      <tr>
        <td style="text-align:left; font-weight:700;">${r.name}</td>
        <td><input type="checkbox" ${matrix.push ? 'checked' : ''} onchange="toggleMatrix('${r.key}', 'push', this)"></td>
        <td><input type="checkbox" ${matrix.email ? 'checked' : ''} onchange="toggleMatrix('${r.key}', 'email', this)"></td>
        <td><input type="checkbox" ${matrix.inapp ? 'checked' : ''} onchange="toggleMatrix('${r.key}', 'inapp', this)"></td>
        <td><input type="checkbox" ${matrix.wa ? 'checked' : ''} onchange="toggleMatrix('${r.key}', 'wa', this)"></td>
      </tr>
    `;
  });
}

window.toggleMatrix = function(category, channel, checkbox) {
  let db = getDb();
  db.notificationMatrix[category][channel] = checkbox.checked;
  saveDb(db);
};

window.handleParentContactSubmit = function(event) {
  event.preventDefault();
  const name = document.getElementById('parent-settings-name').value;
  const phone = document.getElementById('parent-settings-phone').value;

  let db = getDb();
  const p = db.parents.find(parent => parent.email === 'parent@mts.edu');
  if (p) {
    p.name = name;
    p.phone = phone;
  }
  
  // also update students phone links
  db.students.forEach(s => {
    if (s.guardian === 'Priya Kumar') s.phone = phone;
  });

  saveDb(db);
  renderParentSPA();
  alert('Guardian contact phone details updated successfully.');
};

window.handleParentMatrixSubmit = function(event) {
  event.preventDefault();
  alert('Dispatches notifications matrix preferences saved.');
};

// Message Stream Chat operations (Parent view thread switches)
window.switchActiveChatThread = function(threadId, name, role, initials) {
  activeThreadId = threadId;
  document.querySelectorAll('.thread-item').forEach(el => el.classList.remove('active'));
  event.currentTarget.classList.add('active');

  const dot = document.getElementById(`unread-dot-${threadId}`);
  if (dot) dot.style.display = 'none';

  document.getElementById('active-chat-name').textContent = name;
  document.getElementById('active-chat-role').textContent = role + ' &bull; Student Context: Anika Kumar';
  
  const avatar = document.getElementById('active-chat-avatar');
  avatar.textContent = initials;
  
  if (threadId === 1) avatar.style.backgroundColor = 'var(--accent-cyan)';
  else if (threadId === 2) avatar.style.backgroundColor = 'var(--primary-navy)';
  else avatar.style.backgroundColor = '#9B59B6';

  renderActiveChat(threadId);
};

window.handleSendMessage = function(event) {
  event.preventDefault();
  const input = document.getElementById('chat-message-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  let db = getDb();
  
  if (!db.messages[activeThreadId]) db.messages[activeThreadId] = [];
  
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  db.messages[activeThreadId].push({
    type: 'sent',
    text: text,
    time: `Today, ${time}`
  });

  saveDb(db);
  input.value = '';
  renderActiveChat(activeThreadId);
  
  // Mock response
  setTimeout(() => {
    let freshDb = getDb();
    if (!freshDb.messages[activeThreadId]) freshDb.messages[activeThreadId] = [];
    
    let replyText = 'Received your message. Thank you for the update.';
    if (activeThreadId === 1) replyText = 'Got it, Priya! Thanks for letting me know. I will make a note of this.';
    else if (activeThreadId === 2) replyText = 'This is school admin office auto-dispatch. We have logged your request. Thank you.';

    freshDb.messages[activeThreadId].push({
      type: 'received',
      text: replyText,
      time: `Today, ${time}`
    });
    saveDb(freshDb);
    renderActiveChat(activeThreadId);
  }, 2000);
};

function renderActiveChat(threadId) {
  const db = getDb();
  const chatStream = document.getElementById('chat-stream');
  if (!chatStream) return;

  chatStream.innerHTML = '';
  const chats = db.messages[threadId] || [];
  
  chats.forEach(c => {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble chat-bubble-${c.type}`;
    const checks = c.type === 'sent' ? ' <span style="color:#0EA5E9;">&check;&check;</span>' : '';
    bubble.innerHTML = `
      ${c.text}
      <span class="chat-meta">${c.time}${checks}</span>
    `;
    chatStream.appendChild(bubble);
  });

  scrollChatToBottom();
}

function scrollChatToBottom() {
  const chatStream = document.getElementById('chat-stream');
  if (chatStream) {
    chatStream.scrollTop = chatStream.scrollHeight;
  }
}

// ----------------------------------------------------
// TEACHER SPA CONTROLLER & PERSISTENT CRUD
// ----------------------------------------------------
function renderTeacherSPA() {
  const db = getDb();
  
  // Render active classes widgets on dashboard
  const classesContainer = document.getElementById('teacher-home-classes-grid');
  if (classesContainer) {
    classesContainer.innerHTML = '';
    // teacher Mrs. Lakshmi Rajendran handles Grade 3-A & Grade 4-B
    const LakshmiClasses = db.classes.filter(c => c.teacher.includes('Lakshmi'));
    
    LakshmiClasses.forEach(c => {
      classesContainer.innerHTML += `
        <div class="card" style="border-left: 6px solid ${c.code.includes('3-A') ? 'var(--accent-cyan)' : 'var(--warning-amber)'};">
          <div class="card-title-group">
            <div>
              <span style="font-size:11px; font-weight:700; color:var(--text-secondary); text-transform:uppercase;">Marietta Campus</span>
              <h3 style="font-size: 18px; font-weight: 800; color: var(--primary-navy); margin-top:2px;">${c.code}</h3>
            </div>
            <span class="badge ${c.lastAttendance.includes('✅') ? 'badge-green' : 'badge-amber'}">${c.lastAttendance.includes('✅') ? 'Completed' : 'Attendance Due'}</span>
          </div>
          <div class="card-content">
            <p style="font-size:13.5px; color:var(--text-secondary);">
              Enrolled students: ${c.students} Students &bull; Schedule: Friday Sessions
            </p>
            <div style="background-color: var(--bg-light); border-radius: 8px; padding:10px; display:flex; justify-content:space-around; text-align:center; font-size:13px;">
              <div><strong>${c.students}</strong><br>Registered</div>
              <div style="border-left: 1px solid var(--border-color);"></div>
              <div><strong>${c.lastAttendance}</strong><br>Last Attendance</div>
            </div>
            <div style="display:flex; gap:10px; margin-top:8px;">
              <button class="btn btn-primary btn-sm" style="flex:1;" onclick="goToTeacherAttendanceSession('${c.code}')">Take Attendance</button>
              <button class="btn btn-secondary btn-sm" onclick="switchClassRosterView('${c.code}')">View Roster</button>
            </div>
          </div>
        </div>
      `;
    });
  }

  renderTeacherRosterTable();
  renderTeacherAttendanceRoster();
  renderTeacherAssignments();
  renderTeacherSubmissions();
  renderTeacherAnnouncements();
  renderTeacherEvents();
  renderTeacherActiveChat(activeTeacherThreadId);
}

window.goToTeacherAttendanceSession = function(classCode) {
  // Switch to attendance panel
  document.querySelector('[data-lucide=calendar-check]').parentElement.click();
};

window.switchClassRosterView = function(classCode) {
  activeClassRosterCode = classCode;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.id === 'class-roster-tab-3a' && classCode === 'Grade 3-A') btn.classList.add('active');
    else if (btn.id === 'class-roster-tab-4b' && classCode === 'Grade 4-B') btn.classList.add('active');
    else btn.classList.remove('active');
  });

  // Toggle classes panel active
  document.querySelector('[data-lucide=book-open]').parentElement.click();
  renderTeacherRosterTable();
};

function renderTeacherRosterTable() {
  const db = getDb();
  const tbody = document.getElementById('teacher-roster-table-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  // filter students matching class code
  const sec = activeClassRosterCode.split(' ').pop();
  const students = db.students.filter(s => s.section === sec);

  students.forEach(s => {
    tbody.innerHTML += `
      <tr>
        <td>${s.id}</td>
        <td><strong>${s.name}</strong> <span style="font-size:12px; color:var(--text-secondary);">(${s.tamilName})</span></td>
        <td>${s.itaId}</td>
        <td>${s.guardian}</td>
        <td>${s.phone}</td>
        <td><span class="badge badge-green">${s.status}</span></td>
      </tr>
    `;
  });
}

function renderTeacherAttendanceRoster() {
  const db = getDb();
  const tbody = document.getElementById('teacher-attendance-taking-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  // Load Grade 3-A student records for marking (4 students for simplicity)
  const studentsToMark = db.students.filter(s => s.section === '3-A').slice(0, 4);

  studentsToMark.forEach((s, idx) => {
    const index = idx + 1;
    // Check if parent has reported absence
    const report = db.absenceReports.find(r => r.student === s.name && r.date === '2025-06-13');
    const reportBadge = report 
      ? `<span class="badge badge-amber">🟡 ${report.reason} (reported)</span>`
      : `&mdash;`;
    
    tbody.innerHTML += `
      <tr>
        <td>${index}</td>
        <td style="font-weight:700;">${s.name}</td>
        <td class="tamil-font">${s.tamilName}</td>
        <td>${reportBadge}</td>
        <td>
          <div class="attendance-radios">
            <label class="radio-label">
              <input type="radio" name="student-${index}-mark" value="present" onchange="updateAttendanceCounters()"> Present
            </label>
            <label class="radio-label">
              <input type="radio" name="student-${index}-mark" id="student-${index}-absent-radio" value="absent" onchange="updateAttendanceCounters()"> Absent
            </label>
            <label class="radio-label">
              <input type="radio" name="student-${index}-mark" value="late" onchange="updateAttendanceCounters()"> Late
            </label>
          </div>
        </td>
        <td>
          <input type="text" class="form-input" id="student-${index}-notes" placeholder="e.g. sick note" style="padding: 4px 8px; font-size:12.5px;">
        </td>
      </tr>
    `;
  });

  updateAttendanceCounters();
}

window.applyParentReport = function() {
  const radio = document.getElementById('student-1-absent-radio');
  if (radio) {
    radio.checked = true;
    document.getElementById('student-1-notes').value = 'Excused: Doctor appointment';
    updateAttendanceCounters();
    alert('Leave report applied: Student Anika Kumar marked as Absent.');
  }
};

window.markAllPresent = function() {
  const studentsToMarkCount = 4;
  for (let i = 1; i <= studentsToMarkCount; i++) {
    // skip student 1 if they have a leave report applied
    if (i === 1 && document.getElementById('student-1-absent-radio').checked) {
      continue;
    }
    const radios = document.getElementsByName(`student-${i}-mark`);
    radios.forEach(r => {
      if (r.value === 'present') r.checked = true;
    });
  }
  updateAttendanceCounters();
  alert('All students (except excused leave) marked as Present.');
};

window.updateAttendanceCounters = function() {
  let present = 0;
  let absent = 0;
  let late = 0;
  let unmarked = 0;

  for (let i = 1; i <= 4; i++) {
    const checked = document.querySelector(`input[name="student-${i}-mark"]:checked`);
    if (!checked) unmarked++;
    else {
      if (checked.value === 'present') present++;
      else if (checked.value === 'absent') absent++;
      else if (checked.value === 'late') late++;
    }
  }

  const pEl = document.getElementById('summary-present');
  const aEl = document.getElementById('summary-absent');
  const lEl = document.getElementById('summary-late');
  const uEl = document.getElementById('summary-unmarked');
  const frac = document.getElementById('marked-fraction-text');

  if (pEl) pEl.textContent = present;
  if (aEl) aEl.textContent = absent;
  if (lEl) lEl.textContent = late;
  if (uEl) uEl.textContent = unmarked;
  if (frac) frac.textContent = `${4 - unmarked} / 4 marked`;

  const btn = document.getElementById('finalise-attendance-btn');
  const statusBadge = document.getElementById('session-status-badge');
  if (btn) {
    if (unmarked === 0) {
      btn.removeAttribute('disabled');
      if (statusBadge) {
        statusBadge.textContent = '🟢 Complete';
        statusBadge.className = 'badge badge-green';
      }
    } else {
      btn.setAttribute('disabled', 'true');
      if (statusBadge) {
        statusBadge.textContent = '🟡 In Progress';
        statusBadge.className = 'badge badge-amber';
      }
    }
  }
};

window.finaliseAttendance = function() {
  let db = getDb();
  // Update class attendance flag inside DB class setup
  const cls = db.classes.find(c => c.code === 'Grade 3-A');
  if (cls) {
    cls.lastAttendance = 'Jun 13 ✅';
  }
  
  db.auditLog.unshift({
    timestamp: 'Just now',
    user: 'Mrs. Lakshmi',
    action: 'Attendance Session Finalise',
    target: 'Grade 3-A class',
    details: 'Attendance finalized for Friday June 13 session (Grade 3-A).',
    ip: 'teacher-classroom-network'
  });

  saveDb(db);
  alert('Roster finalized. Grade 3-A session state saved successfully.');
  
  // toggle dashboard active
  document.querySelectorAll('.sidebar-link')[0].click();
  renderTeacherSPA();
};

window.switchHomeworkSubtab = function(tabName) {
  activeHomeworkSubtab = tabName;
  document.getElementById('hw-tab-active').className = `tab-btn ${tabName === 'active' ? 'active' : ''}`;
  document.getElementById('hw-tab-reviews').className = `tab-btn ${tabName === 'reviews' ? 'active' : ''}`;
  
  document.getElementById('subpanel-hw-active').style.display = tabName === 'active' ? 'block' : 'none';
  document.getElementById('subpanel-hw-reviews').style.display = tabName === 'reviews' ? 'block' : 'none';

  renderTeacherAssignments();
  renderTeacherSubmissions();
};

function renderTeacherAssignments() {
  const db = getDb();
  const container = document.getElementById('teacher-active-assignments-container');
  if (!container) return;

  container.innerHTML = '';
  db.homework.forEach(hw => {
    container.innerHTML += `
      <div class="card" style="border-top: 5px solid ${hw.status === 'Active' ? 'var(--success-green)' : 'var(--info-blue)'}">
        <div class="card-title-group">
          <div>
            <h4 style="font-weight:700; color:var(--primary-navy); font-size:16px;">${hw.title}</h4>
            <p style="font-size:12px; color:var(--text-secondary); margin-top:2px;">${hw.classCode} &bull; Due: ${hw.due}</p>
          </div>
          <span class="badge ${hw.status === 'Active' ? 'badge-green' : 'badge-grey'}">${hw.status}</span>
        </div>
        <div class="card-content">
          <p style="font-size:13.5px;"><strong>Instructions:</strong> ${hw.desc}</p>
          <div style="background-color: var(--bg-light); border-radius:8px; padding:10px; display:grid; grid-template-columns:repeat(4,1fr); text-align:center; font-size:12px; margin: 8px 0;">
            <div><strong style="color:var(--info-blue);">${hw.stats.submitted}</strong><br>Sub</div>
            <div><strong style="color:var(--success-green);">${hw.stats.approved}</strong><br>App</div>
            <div><strong style="color:var(--warning-amber);">${hw.stats.pending}</strong><br>Pend</div>
            <div><strong style="color:var(--critical-red);">${hw.stats.overdue}</strong><br>Oved</div>
          </div>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-secondary btn-sm" style="flex:1;" onclick="alert('Editing homework details...')">Edit Instructions</button>
            <button class="btn btn-primary btn-sm" style="flex:1;" onclick="switchHomeworkSubtab('reviews')">Review submissions</button>
          </div>
        </div>
      </div>
    `;
  });
}

function renderTeacherSubmissions() {
  const db = getDb();
  
  // Update submissions badge count in subtab header
  const reviewsCountHeader = document.getElementById('submission-reviews-count-header');
  const pendingCount = db.submissions.filter(s => s.status === 'Pending Review').length;
  if (reviewsCountHeader) {
    reviewsCountHeader.textContent = `Homework Submissions Review Queue (${pendingCount} Pending)`;
  }

  const container = document.getElementById('teacher-submissions-cards-list');
  if (!container) return;

  container.innerHTML = '';
  db.submissions.forEach(s => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.opacity = s.status !== 'Pending Review' ? '0.7' : '1';
    
    card.innerHTML = `
      <div class="card-title-group">
        <div>
          <h4 style="font-weight:700; color:var(--primary-navy); font-size:15px;">${s.student}</h4>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:2px;">Assignment: ${s.assignment}</p>
        </div>
        <span class="badge ${s.status === 'Approved' ? 'badge-green' : s.status === 'Pending Review' ? 'badge-amber' : 'badge-red'}">${s.status}</span>
      </div>
      <div class="card-content">
        <p style="font-size:12.5px; color:var(--text-secondary);">Submitted: ${s.date}</p>
        
        <div class="hw-file-mock">
          <div class="hw-file-icon"><i data-lucide="${s.fileType === 'audio' ? 'music' : s.fileType === 'document' ? 'file-text' : 'image'}"></i></div>
          <div style="flex-grow:1;">
            <div style="font-size:13.5px; font-weight:600;">${s.file}</div>
            <div style="font-size:11.5px; color:var(--text-secondary);">File size check verified ✅</div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="alert('Displaying attachment file content preview for ${s.file}.')">Preview Attachment</button>
        </div>

        <div class="form-group">
          <label class="form-label" style="font-size:12.5px;">Add Feedback Comments:</label>
          <input type="text" class="form-input" id="feedback-comment-${s.id}" placeholder="Good job, etc." value="${s.comment || ''}" style="font-size:13px; padding:6px 10px;">
        </div>

        <div class="comment-tags-container">
          <span class="comment-tag" onclick="insertTeacherFeedbackTag(${s.id}, 'Excellent effort!')">Excellent effort</span>
          <span class="comment-tag" onclick="insertTeacherFeedbackTag(${s.id}, 'Clear handwriting!')">Clear handwriting</span>
          <span class="comment-tag" onclick="insertTeacherFeedbackTag(${s.id}, 'Please rewrite and submit.')">Rewrite work</span>
        </div>

        <div style="display:flex; justify-content:flex-end; gap:8px; border-top:1px solid var(--border-color); padding-top:12px; margin-top:8px;">
          <button class="btn btn-secondary btn-sm" onclick="evaluateSubmission(${s.id}, 'Needs Correction')">Needs Work</button>
          <button class="btn btn-primary btn-sm" style="background-color:var(--success-green);" onclick="evaluateSubmission(${s.id}, 'Approved')">Approve Work</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  if (typeof lucide !== 'undefined') lucide.createIcons({ node: container });
}

window.insertTeacherFeedbackTag = function(subId, tagText) {
  const input = document.getElementById(`feedback-comment-${subId}`);
  if (input) {
    input.value = tagText;
  }
};

window.evaluateSubmission = function(subId, newStatus) {
  let db = getDb();
  const sub = db.submissions.find(s => s.id === subId);
  const feedbackInput = document.getElementById(`feedback-comment-${subId}`);
  
  if (sub) {
    sub.status = newStatus;
    if (feedbackInput) {
      sub.comment = feedbackInput.value;
    }
    
    // adjust homework metrics
    const hw = db.homework.find(h => h.title === sub.assignment);
    if (hw) {
      if (newStatus === 'Approved') {
        hw.stats.approved += 1;
        if (hw.stats.pending > 0) hw.stats.pending -= 1;
      } else {
        hw.stats.overdue += 1;
        if (hw.stats.pending > 0) hw.stats.pending -= 1;
      }
    }
    
    saveDb(db);
    renderTeacherSubmissions();
    alert(`Roster evaluation for ${sub.student} completed: marked ${newStatus}`);
  }
};

window.handleNewHomeworkSubmit = function(event) {
  event.preventDefault();
  const title = document.getElementById('hw-title').value;
  const titleTa = document.getElementById('hw-title-ta').value;
  const classCode = document.getElementById('hw-class').value;
  const due = document.getElementById('hw-due').value;
  const desc = document.getElementById('hw-desc').value;

  let db = getDb();
  const newId = db.homework.length + 1;
  
  db.homework.push({
    id: newId,
    title: title,
    titleTa: titleTa || title,
    classCode: classCode,
    due: due,
    stats: { submitted: 0, approved: 0, pending: 0, overdue: 0 },
    status: 'Active',
    desc: desc
  });

  saveDb(db);
  closeModal('new-hw-modal');
  renderTeacherAssignments();
  alert(`Assignment "${title}" has been published and sent to parent dashboards.`);
};

function renderTeacherAnnouncements() {
  const db = getDb();
  const list = document.getElementById('teacher-announcements-list');
  if (!list) return;

  list.innerHTML = '';
  db.announcements.forEach(a => {
    list.innerHTML += `
      <div class="card ${a.priority === 'urgent' ? 'status-card-red' : 'status-card-amber'}">
        <div class="card-title-group">
          <div>
            <span class="badge ${a.priority === 'urgent' ? 'badge-red' : 'badge-amber'}">${a.badge}</span>
            <h4 style="font-weight:800; color:var(--primary-navy); margin-top:4px;">${a.title}</h4>
          </div>
          <span style="font-size:12px; color:var(--text-secondary);">${a.date}</span>
        </div>
        <p style="font-size:13.5px;">${a.body}</p>
      </div>
    `;
  });
}

function renderTeacherEvents() {
  const db = getDb();
  const tbody = document.getElementById('teacher-calendar-events-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  db.events.forEach(ev => {
    tbody.innerHTML += `
      <tr>
        <td><strong>${ev.date}</strong></td>
        <td>${ev.name}</td>
        <td>${ev.audience}</td>
        <td>Building A Room 102</td>
        <td><strong style="color:var(--success-green);">${ev.rsvps.yes} Going</strong> / ${ev.rsvps.no} Decline</td>
      </tr>
    `;
  });
}

// Teacher Messaging chat dispatches
window.switchTeacherChatThread = function(threadId, name, role, initials) {
  activeTeacherThreadId = threadId;
  document.querySelectorAll('.thread-item').forEach(el => el.classList.remove('active'));
  event.currentTarget.classList.add('active');

  document.getElementById('teacher-active-chat-name').textContent = name;
  document.getElementById('teacher-active-chat-role').textContent = role;
  
  const avatar = document.getElementById('teacher-active-chat-avatar');
  avatar.textContent = initials;
  
  renderTeacherActiveChat(threadId);
};

window.handleTeacherSendMessage = function(event) {
  event.preventDefault();
  const input = document.getElementById('teacher-chat-message-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  let db = getDb();
  if (!db.messages[activeTeacherThreadId]) db.messages[activeTeacherThreadId] = [];
  
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  db.messages[activeTeacherThreadId].push({
    type: 'sent',
    text: text,
    time: `Today, ${time}`
  });

  saveDb(db);
  input.value = '';
  renderTeacherActiveChat(activeTeacherThreadId);
  
  // mock response
  setTimeout(() => {
    let freshDb = getDb();
    freshDb.messages[activeTeacherThreadId].push({
      type: 'received',
      text: 'Thank you for the message! I will make sure we practice this at home.',
      time: `Today, ${time}`
    });
    saveDb(freshDb);
    renderTeacherActiveChat(activeTeacherThreadId);
  }, 2000);
};

function renderTeacherActiveChat(threadId) {
  const db = getDb();
  const chatStream = document.getElementById('teacher-chat-stream');
  if (!chatStream) return;

  chatStream.innerHTML = '';
  const chats = db.messages[threadId] || [];
  
  chats.forEach(c => {
    const bubble = document.createElement('div');
    // Swap received/sent for teacher thread because sent by parent is received by teacher
    const bubbleType = c.type === 'sent' ? 'sent' : 'received';
    bubble.className = `chat-bubble chat-bubble-${bubbleType}`;
    
    const readReceipt = bubbleType === 'sent' ? ' <span style="color:#0EA5E9;">&check;&check;</span>' : '';
    bubble.innerHTML = `
      ${c.text}
      <span class="chat-meta">${c.time}${readReceipt}</span>
    `;
    chatStream.appendChild(bubble);
  });
  
  chatStream.scrollTop = chatStream.scrollHeight;
}

// ----------------------------------------------------
// ADMIN SPA CONTROLLER & PERSISTENT CRUD
// ----------------------------------------------------
function renderAdminSPA() {
  renderAdminKPIs();
  renderAdminApprovals();
  renderAdminStudentsTable();
  renderAdminTeachersTable();
  renderAdminParentsTable();
  renderAdminRosterList();
  renderAdminEventsList();
  renderAdminSessions();
  renderAdminAuditLogs();
}

function renderAdminKPIs() {
  const db = getDb();
  const totalStudents = db.students.length + 63; // seed offset total 68
  const totalTeachers = db.teachers.length + 16; // seed offset total 22
  const totalParents = db.parents.length + 104; // seed offset total 112
  
  const stuCount = document.getElementById('kpi-students-count');
  const teaCount = document.getElementById('kpi-teachers-count');
  const parCount = document.getElementById('kpi-parents-count');
  
  if (stuCount) stuCount.textContent = totalStudents;
  if (teaCount) teaCount.textContent = totalTeachers;
  if (parCount) parCount.textContent = totalParents;
}

function renderAdminApprovals() {
  const db = getDb();
  const tbody = document.getElementById('admin-approvals-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  db.approvals.forEach(a => {
    const isPending = a.status === 'Pending';
    tbody.innerHTML += `
      <tr id="approval-row-${a.id}" style="opacity: ${isPending ? '1' : '0.4'}">
        <td>${a.id}</td>
        <td><span class="badge ${a.category.includes('Link') ? 'badge-amber' : 'badge-blue'}">${a.category}</span></td>
        <td style="font-weight:700;">${a.user}</td>
        <td>${a.details}</td>
        <td>${a.date}</td>
        <td style="text-align:right;">
          ${isPending ? `
            <div style="display:inline-flex; gap:6px;">
              <button class="btn btn-primary btn-sm" style="background-color:var(--success-green);" onclick="approveLinkageItem(${a.id}, '${a.user}')">Approve</button>
              <button class="btn btn-secondary btn-sm" onclick="rejectLinkageItem(${a.id})">Reject</button>
            </div>
          ` : `
            <span class="badge ${a.status === 'Approved' ? 'badge-green' : 'badge-red'}">${a.status}</span>
          `}
        </td>
      </tr>
    `;
  });
}

window.approveLinkageItem = function(rowId, name) {
  let db = getDb();
  const item = db.approvals.find(a => a.id === rowId);
  if (item) {
    item.status = 'Approved';
    
    // If it is a student link approval, update status of student
    if (name.includes('Padma Subramaniam') || name.includes('Siddharth Nair')) {
      const stud = db.students.find(s => s.name === 'Siddharth Nair');
      if (stud) stud.status = 'Active';
    }

    db.auditLog.unshift({
      timestamp: 'Just now',
      user: 'Admin Suresh',
      action: 'Linkage Approval',
      target: name,
      details: `Approved linkage request for ${name}.`,
      ip: '192.168.1.45'
    });

    saveDb(db);
    renderAdminSPA();
    alert(`Linkage registration profile for "${name}" approved successfully.`);
  }
};

window.rejectLinkageItem = function(rowId) {
  if (confirm('Are you sure you want to reject this linkage registration request?')) {
    let db = getDb();
    const item = db.approvals.find(a => a.id === rowId);
    if (item) {
      item.status = 'Rejected';
      saveDb(db);
      renderAdminSPA();
    }
  }
};

window.handleStatusCardSubmit = function(event) {
  event.preventDefault();
  const status = document.querySelector('input[name="school-status"]:checked').value;
  const venue = document.getElementById('stat-venue').value;
  const parking = document.getElementById('stat-parking').value;

  let db = getDb();
  db.schoolStatus = {
    status: status,
    statusText: status === 'red' ? '🔴 CLASS CANCELLED' : status === 'amber' ? '⚠️ MODIFIED' : '✅ CLASS ON',
    statusTextTa: status === 'red' ? '🔴 வகுப்பு ரத்து செய்யப்பட்டுள்ளது' : status === 'amber' ? '⚠️ மாற்றியமைக்கப்பட்ட வகுப்பு' : '✅ வகுப்பு நடைபெறும்',
    venue: venue,
    parking: parking,
    note: 'Friday zones updated.'
  };

  saveDb(db);
  alert('School Status Card updated. Changes pushed immediately to parent dashboards.');
};

window.updateAdminLivePreview = function() {
  const priority = document.querySelector('input[name="priority"]:checked').value;
  const titleEn = document.getElementById('comp-title-en').value || 'New Announcement';
  const bodyEn = document.getElementById('comp-body-en').value || 'Body text content...';
  
  const pushTitle = document.getElementById('p-push-title');
  const pushBody = document.getElementById('p-push-body');

  if (pushTitle && pushBody) {
    pushBody.textContent = bodyEn.length > 70 ? bodyEn.substring(0, 67) + '...' : bodyEn;
    if (priority === 'urgent') {
      pushTitle.textContent = `MTS Connect (Urgent)`;
    } else if (priority === 'important') {
      pushTitle.textContent = `MTS Connect (Important)`;
    } else {
      pushTitle.textContent = `MTS Connect (Info)`;
    }
  }
};

window.handlePublishAnnouncement = function(event) {
  event.preventDefault();
  const priority = document.querySelector('input[name="priority"]:checked').value;
  const titleEn = document.getElementById('comp-title-en').value;
  const titleTa = document.getElementById('comp-title-ta').value;
  const bodyEn = document.getElementById('comp-body-en').value;
  const bodyTa = document.getElementById('comp-body-ta').value;
  const audience = document.getElementById('comp-audience').value;
  const ack = document.getElementById('comp-ack').checked;

  let db = getDb();
  const newId = db.announcements.length + 1;
  const dateStr = new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });

  db.announcements.unshift({
    id: newId,
    priority: priority,
    badge: priority === 'urgent' ? '🔴 URGENT' : priority === 'important' ? '🟡 IMPORTANT' : '🔵 INFO',
    title: titleEn,
    titleTa: titleTa || titleEn,
    body: bodyEn,
    bodyTa: bodyTa || bodyEn,
    date: dateStr,
    audience: audience === 'all' ? 'All Parents & Teachers' : 'All Parents',
    ackRequired: ack,
    acknowledged: []
  });

  saveDb(db);
  alert('Broadcast Announcement published successfully.');
  
  // Clear composer fields
  document.getElementById('comp-title-en').value = '';
  document.getElementById('comp-title-ta').value = '';
  document.getElementById('comp-body-en').value = '';
  document.getElementById('comp-body-ta').value = '';

  document.querySelector('[data-lucide=home]').parentElement.click();
  renderAdminSPA();
};

window.switchPeopleSubtab = function(tabName) {
  activePeopleSubtab = tabName;
  document.getElementById('people-tab-students').className = `tab-btn ${tabName === 'students' ? 'active' : ''}`;
  document.getElementById('people-tab-teachers').className = `tab-btn ${tabName === 'teachers' ? 'active' : ''}`;
  const parentTab = document.getElementById('people-tab-parents');
  if (parentTab) parentTab.className = `tab-btn ${tabName === 'parents' ? 'active' : ''}`;
  
  document.getElementById('subpanel-people-students').style.display = tabName === 'students' ? 'block' : 'none';
  document.getElementById('subpanel-people-teachers').style.display = tabName === 'teachers' ? 'block' : 'none';
  const parentSubpanel = document.getElementById('subpanel-people-parents');
  if (parentSubpanel) parentSubpanel.style.display = tabName === 'parents' ? 'block' : 'none';

  renderAdminStudentsTable();
  renderAdminTeachersTable();
  if (typeof renderAdminParentsTable === 'function') {
    renderAdminParentsTable();
  }
};

function renderAdminStudentsTable() {
  const db = getDb();
  const tbody = document.getElementById('admin-people-students-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  const searchVal = (document.getElementById('student-search-input')?.value || '').toLowerCase();
  const gradeFilter = document.getElementById('student-grade-filter')?.value || 'all';

  db.students.forEach(s => {
    // Search filtering
    const matchesSearch = s.name.toLowerCase().includes(searchVal) || s.itaId.toLowerCase().includes(searchVal);
    const matchesGrade = gradeFilter === 'all' || s.grade === gradeFilter;

    if (matchesSearch && matchesGrade) {
      tbody.innerHTML += `
        <tr>
          <td>${s.id}</td>
          <td><strong>${s.name}</strong> <span style="font-size:12px; color:var(--text-secondary);">(${s.tamilName})</span></td>
          <td>${s.grade}</td>
          <td>${s.section}</td>
          <td>${s.itaId}</td>
          <td>${s.guardian}</td>
          <td><span class="badge ${s.status === 'Active' ? 'badge-green' : 'badge-amber'}">${s.status}</span></td>
          <td style="text-align:right;">
            <button class="btn btn-secondary btn-sm" onclick="openStudentSlideover('${s.id}')">View Details</button>
          </td>
        </tr>
      `;
    }
  });
}

window.filterAdminStudentsRoster = function() {
  renderAdminStudentsTable();
};

window.openStudentSlideover = function(studentId) {
  const db = getDb();
  const s = db.students.find(stud => stud.id === studentId);
  if (!s) return;

  document.getElementById('so-student-name').textContent = s.name;
  document.getElementById('so-detail-name').textContent = s.name;
  document.getElementById('so-detail-id').textContent = s.id;
  document.getElementById('so-detail-grade').textContent = s.section;
  document.getElementById('so-tamil-name').textContent = s.tamilName;
  document.getElementById('so-ita-id').textContent = s.itaId;
  document.getElementById('so-dob').textContent = s.dob;
  document.getElementById('so-enroll-date').textContent = s.enrollDate;
  document.getElementById('so-local-notes').value = s.notes;
  document.getElementById('so-guardian-name').textContent = s.guardian;
  
  // Find matching parent phone details
  const p = db.parents.find(parent => parent.name === s.guardian);
  const parentDetailsText = p 
    ? `Relationship: Parent / Mother<br>Email: ${p.email}<br>Phone: ${p.phone}`
    : `Relationship: Guardian Link<br>Contact Phone: ${s.phone}`;
  document.getElementById('so-guardian-details').innerHTML = parentDetailsText;

  // Set avatar letters
  const initials = s.name.split(' ').map(n => n[0]).join('');
  document.getElementById('so-avatar-letters').textContent = initials;

  // Save student context to window for save action
  window.currentSlideoverStudentId = studentId;

  // Open as modal
  openModal('profile-modal');
  
  // Reset tabs to default active
  switchStudentProfileTab('so-profile-tab');
};

window.closeSlideover = function() {
  closeModal('profile-modal');
};

window.switchStudentProfileTab = function(tabId) {
  document.querySelectorAll('.slideover-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-stab') === tabId);
  });
  document.querySelectorAll('.slideover-tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === tabId);
  });
};

window.saveInternalStudentNotes = function() {
  const notes = document.getElementById('so-local-notes').value;
  const studentId = window.currentSlideoverStudentId;

  if (studentId) {
    let db = getDb();
    const s = db.students.find(stud => stud.id === studentId);
    if (s) {
      s.notes = notes;
      saveDb(db);
      renderAdminStudentsTable();
      closeSlideover();
      alert('Internal local student Notes updated and saved.');
    }
  }
};

window.handleAdminAddStudentSubmit = function(event) {
  event.preventDefault();
  const name = document.getElementById('as-name').value;
  const tamilName = document.getElementById('as-tamil-name').value;
  const grade = document.getElementById('as-grade').value;
  const section = document.getElementById('as-section').value;
  const itaId = document.getElementById('as-ita-id').value;
  const guardian = document.getElementById('as-guardian').value;

  let db = getDb();
  const newId = 'MTS-0' + (db.students.length + 1);
  const time = new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });

  db.students.push({
    id: newId,
    name: name,
    tamilName: tamilName || name,
    grade: grade,
    section: section,
    itaId: itaId,
    guardian: guardian,
    status: 'Active',
    dob: '2017-06-15',
    enrollDate: '2025-06-09',
    phone: '404-555-9000',
    notes: 'Manually created student profile.'
  });

  db.auditLog.unshift({
    timestamp: 'Just now',
    user: 'Admin Suresh',
    action: 'Student Add',
    target: name,
    details: `Added new student ${name} manually to directory.`,
    ip: '192.168.1.45'
  });

  saveDb(db);
  closeModal('add-student-modal');
  renderAdminSPA();
  alert(`Student profile for "${name}" registered successfully.`);
};

function renderAdminTeachersTable() {
  const db = getDb();
  const tbody = document.getElementById('admin-people-teachers-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  const searchVal = (document.getElementById('teacher-search-input')?.value || '').toLowerCase();
  
  db.teachers.forEach(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchVal) || t.email.toLowerCase().includes(searchVal);
    if (matchesSearch) {
      const isPending = t.role.includes('Pending');
      tbody.innerHTML += `
        <tr>
          <td><div class="user-avatar" style="background-color: var(--primary-navy); width:32px; height:32px; font-size:12px;">${t.initials}</div></td>
          <td style="font-weight:700;">${t.name}</td>
          <td>${t.email}</td>
          <td>${t.grades}</td>
          <td><span class="badge ${isPending ? 'badge-amber' : 'badge-green'}">${isPending ? 'Pending Approval' : 'Active'}</span></td>
          <td style="text-align:right;">
            <div style="display:inline-flex; gap:8px; justify-content:flex-end;">
              <button class="btn btn-secondary btn-sm" onclick="viewTeacher('${t.email}')" style="padding:4px 8px; font-size:12px; display:inline-flex; align-items:center;" title="View"><i data-lucide="eye" style="width:14px; height:14px;"></i></button>
              <button class="btn btn-secondary btn-sm" onclick="openTeacherForm('${t.email}')" style="padding:4px 8px; font-size:12px; display:inline-flex; align-items:center;" title="Edit"><i data-lucide="edit-2" style="width:14px; height:14px;"></i></button>
              <button class="btn btn-secondary btn-sm" onclick="deleteTeacherRecord('${t.email}')" style="padding:4px 8px; font-size:12px; color:var(--critical-red); border-color:rgba(239,68,68,0.2); display:inline-flex; align-items:center;" title="Delete"><i data-lucide="trash-2" style="width:14px; height:14px;"></i></button>
            </div>
          </td>
        </tr>
      `;
    }
  });
  if (typeof lucide !== 'undefined') lucide.createIcons({ node: tbody });
}

window.approveTeacherAccount = function(email) {
  let db = getDb();
  const teacher = db.teachers.find(t => t.email === email);
  if (teacher) {
    teacher.role = 'Teacher';
    db.auditLog.unshift({
      timestamp: 'Just now',
      user: 'Admin Suresh',
      action: 'Teacher Approval',
      target: teacher.name,
      details: `Approved classroom access for ${teacher.name}.`,
      ip: '192.168.1.45'
    });
    saveDb(db);
    renderAdminSPA();
    alert(`Teacher account for ${teacher.name} approved.`);
  }
};

function renderAdminRosterList() {
  const db = getDb();
  const tbody = document.getElementById('admin-roster-list-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  db.classes.forEach(c => {
    tbody.innerHTML += `
      <tr>
        <td><strong>${c.code}</strong></td>
        <td>${c.teacher}</td>
        <td>${c.students} Students</td>
        <td>${c.lastAttendance}</td>
        <td><span class="badge ${c.status === 'Active' ? 'badge-green' : 'badge-amber'}">${c.status}</span></td>
      </tr>
    `;
  });
}

// Admin CSV Importer Wizard simulation controls
window.simulateAdminCsvUpload = function() {
  document.getElementById('admin-file-upload-status').style.display = 'block';
  document.getElementById('admin-btn-next-1').removeAttribute('disabled');
  alert('Roster CSV file selected: ita_june_roster.csv loaded.');
};

window.goToAdminImportStep = function(stepNum) {
  document.querySelectorAll('.wizard-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active', 'completed'));

  document.getElementById(`wp-${stepNum}`).classList.add('active');
  
  for (let i = 1; i <= 4; i++) {
    const step = document.getElementById(`ws-${i}`);
    if (i < stepNum) step.classList.add('completed');
    else if (i === stepNum) step.classList.add('active');
  }
};

window.toggleAdminCommitButton = function() {
  const chk = document.getElementById('admin-import-confirm-chk');
  const commitBtn = document.getElementById('admin-commit-import-btn');
  if (chk.checked) {
    commitBtn.removeAttribute('disabled');
  } else {
    commitBtn.setAttribute('disabled', 'true');
  }
};

window.executeAdminRosterCommit = function() {
  let db = getDb();
  
  // Append imported preview students
  const imports = [
    { id: 'MTS-010', name: 'Arun Balakrishnan', tamilName: 'அருண்', grade: '3', section: '3-A', itaId: 'ITA-2601', guardian: 'Deepa Balakrishnan', status: 'Active', dob: '2017-06-15', enrollDate: '2025-06-09', phone: '404-555-0922', notes: 'Imported via CSV.' },
    { id: 'MTS-011', name: 'Siddharth Nair', tamilName: 'சித்தார்த்', grade: '4', section: '4-B', itaId: 'ITA-2602', guardian: 'Padma Subramaniam', status: 'Active', dob: '2016-11-30', enrollDate: '2025-06-09', phone: '404-555-0761', notes: 'Imported link corrected via CSV.' },
    { id: 'MTS-012', name: 'Arun Govindasamy', tamilName: 'அருண் கோவிந்தசாமி', grade: '2', section: '2-A', itaId: 'ITA-2603', guardian: 'Rajesh Govindasamy', status: 'Active', dob: '2018-02-14', enrollDate: '2025-06-09', phone: '404-555-0981', notes: 'Imported via CSV.' }
  ];

  imports.forEach(imp => {
    // Avoid double inserts
    if (!db.students.find(s => s.itaId === imp.itaId)) {
      db.students.push(imp);
    }
  });

  // Update counts
  const cls3 = db.classes.find(c => c.code === 'Grade 3-A');
  if (cls3) cls3.students += 1;

  db.auditLog.unshift({
    timestamp: 'Just now',
    user: 'Admin Suresh',
    action: 'Student Import',
    target: '3 records batch',
    details: 'Database committed imported CSV data successfully.',
    ip: '192.168.1.45'
  });

  saveDb(db);
  
  // Reset wizard steps
  goToAdminImportStep(1);
  document.getElementById('admin-file-upload-status').style.display = 'none';
  document.getElementById('admin-btn-next-1').setAttribute('disabled', 'true');
  document.getElementById('admin-import-confirm-chk').checked = false;
  document.getElementById('admin-commit-import-btn').setAttribute('disabled', 'true');

  document.querySelector('[data-lucide=home]').parentElement.click();
  renderAdminSPA();
  alert('Roster imported and database committed successfully! Linked parent profiles updated.');
};

function renderAdminEventsList() {
  const db = getDb();
  const tbody = document.getElementById('admin-events-list-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  db.events.forEach(ev => {
    tbody.innerHTML += `
      <tr style="cursor:pointer;" onclick="toggleRsvpDetails(${ev.id})">
        <td><i data-lucide="chevron-down" id="chevron-${ev.id}" style="width:16px; height:16px;"></i></td>
        <td style="font-weight:700; color:var(--primary-navy);">${ev.name}</td>
        <td>${ev.date}</td>
        <td><span class="badge badge-grey">${ev.type}</span></td>
        <td>${ev.audience}</td>
        <td>${ev.capacity} Seats</td>
        <td><strong>${ev.rsvps.yes} Yes</strong> / ${ev.rsvps.no} No</td>
        <td><span class="badge badge-green">Active</span></td>
      </tr>
      <tr class="rsvp-details-row" id="rsvp-details-${ev.id}">
        <td colspan="8">
          <div class="details-box">
            <h5 style="font-weight:700; color:var(--primary-navy); margin-bottom:8px;">RSVP Guest Responses Breakdown log:</h5>
            <p style="font-size:13px;">Total registered attendees: ${ev.rsvps.yes}. Details synced from parent feedback forms.</p>
          </div>
        </td>
      </tr>
    `;
  });
  if (typeof lucide !== 'undefined') lucide.createIcons({ node: tbody });
}

window.toggleRsvpDetails = function(id) {
  const row = document.getElementById(`rsvp-details-${id}`);
  const chevron = document.getElementById(`chevron-${id}`);
  if (row) {
    row.classList.toggle('open');
    if (row.classList.contains('open')) {
      chevron.setAttribute('data-lucide', 'chevron-up');
    } else {
      chevron.setAttribute('data-lucide', 'chevron-down');
    }
    if (typeof lucide !== 'undefined') lucide.createIcons({ node: chevron.parentElement });
  }
};

window.handleCreateEventSubmit = function(event) {
  event.preventDefault();
  const name = document.getElementById('ev-name').value;
  const date = document.getElementById('ev-date').value;
  const type = document.getElementById('ev-type').value;
  const capacity = document.getElementById('ev-capacity').value || 100;
  const audience = document.getElementById('ev-audience').value;

  let db = getDb();
  const newId = db.events.length + 1;
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  db.events.push({
    id: newId,
    name: name,
    date: formattedDate,
    type: type,
    audience: audience,
    capacity: parseInt(capacity),
    rsvps: { yes: 0, no: 0 },
    status: 'RSVPs Open'
  });

  saveDb(db);
  closeModal('create-event-modal');
  renderAdminEventsList();
  alert(`Event "${name}" scheduled successfully.`);
};

function renderAdminSessions() {
  const db = getDb();
  const tbody = document.getElementById('admin-sessions-list-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  db.sessions.forEach(s => {
    tbody.innerHTML += `
      <tr id="session-row-${s.id}">
        <td><strong>${s.device}</strong></td>
        <td>${s.ip}</td>
        <td>${s.time}</td>
        <td style="text-align:right;">
          ${s.current ? `
            <span class="badge badge-green">Current Session</span>
          ` : `
            <button class="btn btn-danger btn-sm" style="padding:2px 8px; font-size:11px;" onclick="terminateAdminSession(${s.id})">Force Out</button>
          `}
        </td>
      </tr>
    `;
  });
}

window.terminateAdminSession = function(id) {
  if (confirm('Force terminate this device connection profiles?')) {
    let db = getDb();
    db.sessions = db.sessions.filter(s => s.id !== id);
    saveDb(db);
    renderAdminSessions();
    alert('Active device profiles logged out successfully.');
  }
};

function renderAdminAuditLogs() {
  const db = getDb();
  const tbody = document.getElementById('admin-audit-logs-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  db.auditLog.forEach(l => {
    tbody.innerHTML += `
      <tr>
        <td>${l.timestamp}</td>
        <td><strong>${l.user}</strong></td>
        <td>${l.action}</td>
        <td>${l.target}</td>
        <td>${l.details}</td>
        <td>${l.ip}</td>
      </tr>
    `;
  });
}

// ----------------------------------------------------
// GENERAL NOTIFICATIONS DRAWER
// ----------------------------------------------------
function setupNotificationDrawer() {
  const bellBtn = document.getElementById('notification-bell-btn');
  if (!bellBtn) return;

  let backdrop = document.getElementById('notif-drawer-backdrop');
  let drawer = document.getElementById('notif-drawer');

  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    backdrop.id = 'notif-drawer-backdrop';
    document.body.appendChild(backdrop);
  }

  if (!drawer) {
    drawer = document.createElement('div');
    drawer.className = 'drawer';
    drawer.id = 'notif-drawer';
    drawer.innerHTML = `
      <div class="drawer-header">
        <div class="drawer-title">
          <i data-lucide="bell"></i>
          <span class="lang-en">Notifications</span>
          <span class="lang-ta">அறிவிப்புகள்</span>
        </div>
        <button class="drawer-close" id="notif-drawer-close">&times;</button>
      </div>
      <div class="drawer-tabs">
        <button class="drawer-tab-btn active" data-tab="all">All</button>
        <button class="drawer-tab-btn" data-tab="urgent">Urgent</button>
      </div>
      <div class="drawer-content" id="notif-drawer-list"></div>
      <div class="drawer-footer">
        <button class="btn btn-primary btn-sm" style="width: 100%;" onclick="markAllNotificationsRead()">
          <span class="lang-en">Mark All as Read</span>
          <span class="lang-ta">அனைத்தும் படித்ததாக குறிக்கவும்</span>
        </button>
      </div>
    `;
    document.body.appendChild(drawer);
  }

  bellBtn.addEventListener('click', () => {
    renderDrawerNotifications('all');
    backdrop.style.display = 'block';
    setTimeout(() => drawer.classList.add('open'), 10);
  });

  const closeBtn = document.getElementById('notif-drawer-close');
  const closeDrawer = () => {
    drawer.classList.remove('open');
    setTimeout(() => { backdrop.style.display = 'none'; }, 300);
  };
  
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  const tabs = drawer.querySelectorAll('.drawer-tab-btn');
  tabs.forEach(t => {
    t.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      t.classList.add('active');
      renderDrawerNotifications(t.dataset.tab);
    });
  });
}

function renderDrawerNotifications(filter) {
  const db = getDb();
  const list = document.getElementById('notif-drawer-list');
  if (!list) return;

  list.innerHTML = '';
  // Seeding realistic notifications
  let items = [
    { badge: '🔴 URGENT', type: 'urgent', text: 'Annual Day venue changed to Building B classroom hall.', time: '10m ago' },
    { badge: '🟡 WARNING', type: 'warning', text: 'Excused Leave reported for student Anika Kumar.', time: '1h ago' },
    { badge: '🔵 INFO', type: 'info', text: 'Roster CSV batch import committed successfully.', time: '3h ago' }
  ];

  if (filter === 'urgent') {
    items = items.filter(n => n.type === 'urgent');
  }

  items.forEach(n => {
    const item = document.createElement('div');
    item.className = 'notification-item';
    const borderClass = n.type === 'urgent' ? 'badge-red' : n.type === 'warning' ? 'badge-amber' : 'badge-blue';
    const iconName = n.type === 'urgent' ? 'alert-triangle' : n.type === 'warning' ? 'file-text' : 'bell';
    
    item.innerHTML = `
      <div class="notif-icon badge ${borderClass}" style="width:32px; height:32px; border-radius:50%; padding:0; display:flex; align-items:center; justify-content:center;">
        <i data-lucide="${iconName}" style="width:16px; height:16px;"></i>
      </div>
      <div class="notif-body">
        <div class="notif-header">
          <span class="notif-priority">${n.badge}</span>
          <span class="notif-time">${n.time}</span>
        </div>
        <p class="notif-text">${n.text}</p>
      </div>
    `;
    list.appendChild(item);
  });

  if (typeof lucide !== 'undefined') lucide.createIcons({ node: list });
}

window.markAllNotificationsRead = function() {
  const badge = document.querySelector('.badge-count');
  if (badge) badge.style.display = 'none';
  alert('All notifications marked as read.');
};

// Inject Floating demo bar helper
function injectDemoControls() {
  let bar = document.querySelector('.floating-demo-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.className = 'floating-demo-bar';
    bar.innerHTML = `
      <a href="index.html" class="demo-back-login">
        <i data-lucide="log-out"></i>
        <span class="lang-en">🏫 Back to Login</span>
        <span class="lang-ta">🏫 உள்நுழைவு பக்கம்</span>
      </a>
    `;
    document.body.appendChild(bar);
  }
}

// Global modal operations
// Global modal operations
window.openModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
};

window.closeModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
};

// ──────────────────────────────────────────────────────────────────
// TOAST NOTIFICATION & CONFIRM DIALOG SYSTEM
// ──────────────────────────────────────────────────────────────────
const TOAST_ICONS = {
  success: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  error:   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
  info:    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
};

window.showToast = function(message, type = 'success', duration = 3500) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${TOAST_ICONS[type] || TOAST_ICONS.info}</span>
    <span class="toast-msg">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">&#x2715;</button>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  }, duration);
};

let _confirmResolve = null;
window.showConfirm = function(title, message, onConfirm) {
  const overlay = document.getElementById('toast-confirm-overlay');
  if (!overlay) {
    if (confirm(message)) onConfirm();
    return;
  }
  document.getElementById('toast-confirm-title').textContent = title;
  document.getElementById('toast-confirm-msg').textContent = message;
  overlay.classList.add('open');
  _confirmResolve = (confirmed) => {
    overlay.classList.remove('open');
    _confirmResolve = null;
    if (confirmed && typeof onConfirm === 'function') onConfirm();
  };
};

window._confirmResolve = function(confirmed) {
  if (typeof _confirmResolve === 'function') {
    _confirmResolve(confirmed);
  }
};

// Derive Initials
function getInitials(name) {
  if (!name) return '??';
  return name.split(' ').map(n => n[0]).join('').slice(0, 3).toUpperCase();
}

// ──────────────────────────────────────────────────────────────────
// ADMIN TEACHER CRUD OPERATIONS
// ──────────────────────────────────────────────────────────────────
window.openTeacherForm = function(email = null) {
  const db = getDb();
  const title = document.getElementById('teacher-modal-title');
  const formEmail = document.getElementById('tch-email');
  if (email) {
    const t = db.teachers.find(x => x.email === email);
    if (!t) return;
    title.textContent = 'Edit Teacher';
    document.getElementById('teacher-form-original-email').value = t.email;
    document.getElementById('tch-name').value = t.name;
    formEmail.value = t.email;
    formEmail.disabled = true;
    document.getElementById('tch-grades').value = t.grades || '';
    document.getElementById('tch-role').value = t.role || 'Teacher';
  } else {
    title.textContent = 'Add Teacher';
    document.getElementById('teacher-form-original-email').value = '';
    document.getElementById('tch-name').value = '';
    formEmail.value = '';
    formEmail.disabled = false;
    document.getElementById('tch-grades').value = '';
    document.getElementById('tch-role').value = 'Teacher';
  }
  openModal('add-teacher-modal');
};

window.handleAdminTeacherSubmit = function(event) {
  event.preventDefault();
  const db = getDb();
  const origEmail = document.getElementById('teacher-form-original-email').value;
  const name = document.getElementById('tch-name').value.trim();
  const email = document.getElementById('tch-email').value.trim();
  const grades = document.getElementById('tch-grades').value.trim();
  const role = document.getElementById('tch-role').value;
  
  if (origEmail) {
    const idx = db.teachers.findIndex(x => x.email === origEmail);
    if (idx >= 0) {
      db.teachers[idx].name = name;
      db.teachers[idx].grades = grades;
      db.teachers[idx].role = role;
      db.teachers[idx].initials = getInitials(name);
    }
    db.auditLog.unshift({
      timestamp: new Date().toLocaleDateString([], { month: 'short', day: 'numeric' }) + ', ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      user: 'admin@mts.edu',
      action: 'Teacher Edit',
      target: name,
      details: `Updated teacher profile: ${email}`
    });
    showToast(`✏️ Teacher "${name}" updated successfully.`, 'success');
  } else {
    if (db.teachers.some(x => x.email.toLowerCase() === email.toLowerCase())) {
      showToast('A teacher with this email already exists.', 'error');
      return;
    }
    const newT = {
      email,
      name,
      role,
      initials: getInitials(name),
      grades
    };
    db.teachers.push(newT);
    db.auditLog.unshift({
      timestamp: new Date().toLocaleDateString([], { month: 'short', day: 'numeric' }) + ', ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      user: 'admin@mts.edu',
      action: 'Teacher Add',
      target: name,
      details: `Created new teacher profile: ${email}`
    });
    showToast(`✅ Teacher "${name}" added successfully.`, 'success');
  }
  saveDb(db);
  closeModal('add-teacher-modal');
  renderAdminTeachersTable();
};

window.viewTeacher = function(email) {
  const db = getDb();
  const t = db.teachers.find(x => x.email === email);
  if (!t) return;
  document.getElementById('view-tch-name').textContent = t.name;
  document.getElementById('view-tch-role').textContent = t.role || 'Teacher Profile';
  document.getElementById('view-tch-email').textContent = t.email;
  document.getElementById('view-tch-grades').textContent = t.grades || 'None';
  document.getElementById('view-tch-avatar').textContent = t.initials;
  openModal('view-teacher-modal');
};

window.deleteTeacherRecord = function(email) {
  const db = getDb();
  const t = db.teachers.find(x => x.email === email);
  if (!t) return;
  showConfirm('Delete Teacher', `Are you sure you want to permanently remove "${t.name}"?`, () => {
    let freshDb = getDb();
    freshDb.teachers = freshDb.teachers.filter(x => x.email !== email);
    freshDb.auditLog.unshift({
      timestamp: new Date().toLocaleDateString([], { month: 'short', day: 'numeric' }) + ', ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      user: 'admin@mts.edu',
      action: 'Teacher Delete',
      target: t.name,
      details: `Deleted teacher profile: ${email}`
    });
    saveDb(freshDb);
    showToast(`🗑️ Teacher "${t.name}" deleted successfully.`, 'warning');
    renderAdminTeachersTable();
  });
};

window.filterAdminTeachersRoster = function() {
  renderAdminTeachersTable();
};

// ──────────────────────────────────────────────────────────────────
// ADMIN PARENT CRUD OPERATIONS
// ──────────────────────────────────────────────────────────────────
window.openParentForm = function(email = null) {
  const db = getDb();
  const title = document.getElementById('parent-modal-title');
  const formEmail = document.getElementById('prn-email');
  if (email) {
    const p = db.parents.find(x => x.email === email);
    if (!p) return;
    title.textContent = 'Edit Parent';
    document.getElementById('parent-form-original-email').value = p.email;
    document.getElementById('prn-name').value = p.name;
    formEmail.value = p.email;
    formEmail.disabled = true;
    document.getElementById('prn-phone').value = p.phone || '';
    document.getElementById('prn-children').value = (p.children || []).join(', ');
  } else {
    title.textContent = 'Add Parent';
    document.getElementById('parent-form-original-email').value = '';
    document.getElementById('prn-name').value = '';
    formEmail.value = '';
    formEmail.disabled = false;
    document.getElementById('prn-phone').value = '';
    document.getElementById('prn-children').value = '';
  }
  openModal('add-parent-modal');
};

window.handleAdminParentSubmit = function(event) {
  event.preventDefault();
  const db = getDb();
  const origEmail = document.getElementById('parent-form-original-email').value;
  const name = document.getElementById('prn-name').value.trim();
  const email = document.getElementById('prn-email').value.trim();
  const phone = document.getElementById('prn-phone').value.trim();
  const kidsStr = document.getElementById('prn-children').value.trim();
  const children = kidsStr ? kidsStr.split(',').map(x => x.trim()).filter(Boolean) : [];

  if (origEmail) {
    const idx = db.parents.findIndex(x => x.email === origEmail);
    if (idx >= 0) {
      db.parents[idx].name = name;
      db.parents[idx].phone = phone;
      db.parents[idx].children = children;
      db.parents[idx].initials = getInitials(name);
    }
    db.auditLog.unshift({
      timestamp: new Date().toLocaleDateString([], { month: 'short', day: 'numeric' }) + ', ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      user: 'admin@mts.edu',
      action: 'Parent Edit',
      target: name,
      details: `Updated parent profile: ${email}`
    });
    showToast(`✏️ Parent "${name}" updated successfully.`, 'success');
  } else {
    if (db.parents.some(x => x.email.toLowerCase() === email.toLowerCase())) {
      showToast('A parent with this email already exists.', 'error');
      return;
    }
    const newP = {
      email,
      name,
      role: 'Parent',
      initials: getInitials(name),
      phone,
      children
    };
    db.parents.push(newP);
    db.auditLog.unshift({
      timestamp: new Date().toLocaleDateString([], { month: 'short', day: 'numeric' }) + ', ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      user: 'admin@mts.edu',
      action: 'Parent Add',
      target: name,
      details: `Created new parent profile: ${email}`
    });
    showToast(`✅ Parent "${name}" added successfully.`, 'success');
  }
  saveDb(db);
  closeModal('add-parent-modal');
  renderAdminParentsTable();
};

window.viewParent = function(email) {
  const db = getDb();
  const p = db.parents.find(x => x.email === email);
  if (!p) return;
  document.getElementById('view-prn-name').textContent = p.name;
  document.getElementById('view-prn-email').textContent = p.email;
  document.getElementById('view-prn-phone').textContent = p.phone || 'None';
  document.getElementById('view-prn-children').textContent = (p.children || []).join(', ') || 'None';
  document.getElementById('view-prn-avatar').textContent = p.initials;
  openModal('view-parent-modal');
};

window.deleteParentRecord = function(email) {
  const db = getDb();
  const p = db.parents.find(x => x.email === email);
  if (!p) return;
  showConfirm('Delete Parent', `Are you sure you want to permanently remove "${p.name}"?`, () => {
    let freshDb = getDb();
    freshDb.parents = freshDb.parents.filter(x => x.email !== email);
    freshDb.auditLog.unshift({
      timestamp: new Date().toLocaleDateString([], { month: 'short', day: 'numeric' }) + ', ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      user: 'admin@mts.edu',
      action: 'Parent Delete',
      target: p.name,
      details: `Deleted parent profile: ${email}`
    });
    saveDb(freshDb);
    showToast(`🗑️ Parent "${p.name}" deleted successfully.`, 'warning');
    renderAdminParentsTable();
  });
};

window.filterAdminParentsRoster = function() {
  renderAdminParentsTable();
};

window.renderAdminParentsTable = function() {
  const db = getDb();
  const tbody = document.getElementById('admin-people-parents-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  const searchVal = (document.getElementById('parent-search-input')?.value || '').toLowerCase();
  
  db.parents.forEach(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchVal) || p.email.toLowerCase().includes(searchVal);
    if (matchesSearch) {
      tbody.innerHTML += `
        <tr>
          <td><div class="user-avatar" style="background-color: var(--accent-cyan); width:32px; height:32px; font-size:12px;">${p.initials}</div></td>
          <td style="font-weight:700;">${p.name}</td>
          <td>${p.email}</td>
          <td>${p.phone || '—'}</td>
          <td>${(p.children || []).join(', ') || '—'}</td>
          <td style="text-align:right;">
            <div style="display:inline-flex; gap:8px; justify-content:flex-end;">
              <button class="btn btn-secondary btn-sm" onclick="viewParent('${p.email}')" style="padding:4px 8px; font-size:12px; display:inline-flex; align-items:center;" title="View"><i data-lucide="eye" style="width:14px; height:14px;"></i></button>
              <button class="btn btn-secondary btn-sm" onclick="openParentForm('${p.email}')" style="padding:4px 8px; font-size:12px; display:inline-flex; align-items:center;" title="Edit"><i data-lucide="edit-2" style="width:14px; height:14px;"></i></button>
              <button class="btn btn-secondary btn-sm" onclick="deleteParentRecord('${p.email}')" style="padding:4px 8px; font-size:12px; color:var(--critical-red); border-color:rgba(239,68,68,0.2); display:inline-flex; align-items:center;" title="Delete"><i data-lucide="trash-2" style="width:14px; height:14px;"></i></button>
            </div>
          </td>
        </tr>
      `;
    }
  });
  if (typeof lucide !== 'undefined') lucide.createIcons({ node: tbody });
};

// ──────────────────────────────────────────────────────────────────
// PARENT CHILD CRUD OPERATIONS
// ──────────────────────────────────────────────────────────────────
window.openChildForm = function(studentId = null) {
  const db = getDb();
  const title = document.getElementById('child-modal-title');
  if (studentId) {
    const s = db.students.find(x => x.id === studentId);
    if (!s) return;
    title.textContent = 'Edit Child';
    document.getElementById('child-form-id').value = s.id;
    document.getElementById('ch-name').value = s.name;
    document.getElementById('ch-tamil').value = s.tamilName || '';
    document.getElementById('ch-grade').value = s.grade;
    document.getElementById('ch-section').value = s.section;
    document.getElementById('ch-ita').value = s.itaId;
    document.getElementById('ch-dob').value = s.dob || '';
    document.getElementById('ch-photo').value = s.photoConsent || 'Approved';
    document.getElementById('ch-medical').value = s.medicalForm || 'Submitted';
    document.getElementById('ch-notes').value = s.notes || '';
  } else {
    title.textContent = 'Add Child';
    document.getElementById('child-form-id').value = '';
    document.getElementById('ch-name').value = '';
    document.getElementById('ch-tamil').value = '';
    document.getElementById('ch-grade').value = '3';
    document.getElementById('ch-section').value = '3-A';
    document.getElementById('ch-ita').value = 'ITA-2605';
    document.getElementById('ch-dob').value = '2017-05-15';
    document.getElementById('ch-photo').value = 'Approved';
    document.getElementById('ch-medical').value = 'Submitted';
    document.getElementById('ch-notes').value = '';
  }
  openModal('add-child-modal');
};

window.handleParentChildSubmit = function(event) {
  event.preventDefault();
  const db = getDb();
  const id = document.getElementById('child-form-id').value;
  const name = document.getElementById('ch-name').value.trim();
  const tamilName = document.getElementById('ch-tamil').value.trim();
  const grade = document.getElementById('ch-grade').value;
  const section = document.getElementById('ch-section').value;
  const itaId = document.getElementById('ch-ita').value.trim();
  const dob = document.getElementById('ch-dob').value;
  const photo = document.getElementById('ch-photo').value;
  const medical = document.getElementById('ch-medical').value;
  const notes = document.getElementById('ch-notes').value.trim();

  if (id) {
    const idx = db.students.findIndex(x => x.id === id);
    if (idx >= 0) {
      db.students[idx].name = name;
      db.students[idx].tamilName = tamilName;
      db.students[idx].grade = grade;
      db.students[idx].section = section;
      db.students[idx].itaId = itaId;
      db.students[idx].dob = dob;
      db.students[idx].photoConsent = photo;
      db.students[idx].medicalForm = medical;
      db.students[idx].notes = notes;
    }
    db.auditLog.unshift({
      timestamp: new Date().toLocaleDateString([], { month: 'short', day: 'numeric' }) + ', ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      user: 'parent@mts.edu',
      action: 'Child Profile Edit',
      target: name,
      details: `Updated child details for: ${name}`
    });
    showToast(`✏️ Child details for "${name}" updated successfully.`, 'success');
  } else {
    const newId = 'MTS-' + String(db.students.length + 1).padStart(3, '0');
    const newKid = {
      id: newId,
      name,
      tamilName,
      grade,
      section,
      itaId,
      guardian: 'Priya Kumar',
      status: 'Active',
      dob,
      enrollDate: new Date().toISOString().split('T')[0],
      phone: '404-555-0245',
      notes,
      photoConsent: photo,
      medicalForm: medical
    };
    db.students.push(newKid);
    db.auditLog.unshift({
      timestamp: new Date().toLocaleDateString([], { month: 'short', day: 'numeric' }) + ', ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      user: 'parent@mts.edu',
      action: 'Child Profile Add',
      target: name,
      details: `Registered child to parent roster: ${name}`
    });
    showToast(`✅ Child "${name}" added successfully.`, 'success');
  }
  saveDb(db);
  closeModal('add-child-modal');
  renderParentChildren();

  // Add kid to active child dropdown if not exists
  const switcher = document.getElementById('child-selector-dropdown');
  if (switcher) {
    let exists = false;
    for (let i = 0; i < switcher.options.length; i++) {
      if (switcher.options[i].value === name) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name;
      switcher.appendChild(opt);
    }
  }
};

window.viewChildDetails = function(studentId) {
  const db = getDb();
  const s = db.students.find(x => x.id === studentId);
  if (!s) return;
  document.getElementById('view-ch-name-header').textContent = s.name;
  document.getElementById('view-ch-ita-header').textContent = `ID: ${s.id} | ITA ID: ${s.itaId}`;
  document.getElementById('view-ch-tamil').textContent = s.tamilName || '—';
  document.getElementById('view-ch-grade-sec').textContent = `Grade ${s.grade} (${s.section})`;
  document.getElementById('view-ch-ita').textContent = s.itaId;
  document.getElementById('view-ch-dob').textContent = s.dob || '—';
  document.getElementById('view-ch-enroll').textContent = s.enrollDate || '—';
  
  const photoEl = document.getElementById('view-ch-photo');
  photoEl.textContent = s.photoConsent || 'Not Selected';
  photoEl.className = `badge ${s.photoConsent === 'Approved' ? 'badge-green' : s.photoConsent === 'Pending Signature' ? 'badge-amber' : 'badge-red'}`;
  
  const medEl = document.getElementById('view-ch-medical');
  medEl.textContent = s.medicalForm || 'Not Selected';
  medEl.className = `badge ${s.medicalForm === 'Submitted' ? 'badge-green' : s.medicalForm === 'Pending Attachment' ? 'badge-amber' : 'badge-red'}`;

  document.getElementById('view-ch-notes').textContent = s.notes || 'No notes.';
  document.getElementById('view-ch-avatar').textContent = s.name.split(' ').map(x => x[0]).join('').slice(0, 2).toUpperCase();
  openModal('view-child-modal');
};

window.deleteChildRecord = function(studentId) {
  const db = getDb();
  const s = db.students.find(x => x.id === studentId);
  if (!s) return;
  
  const seedIds = ['MTS-001', 'MTS-002', 'MTS-003', 'MTS-004', 'MTS-005'];
  if (seedIds.includes(studentId)) {
    showToast(`⛔ Cannot delete seed child profile "${s.name}".`, 'error');
    return;
  }
  
  showConfirm('Delete Child', `Are you sure you want to permanently remove "${s.name}"?`, () => {
    let freshDb = getDb();
    freshDb.students = freshDb.students.filter(x => x.id !== studentId);
    freshDb.auditLog.unshift({
      timestamp: new Date().toLocaleDateString([], { month: 'short', day: 'numeric' }) + ', ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      user: 'parent@mts.edu',
      action: 'Child Profile Delete',
      target: s.name,
      details: `Deleted student profile: ${studentId}`
    });
    saveDb(freshDb);
    showToast(`🗑️ Child "${s.name}" deleted successfully.`, 'warning');
    renderParentChildren();
    
    const switcher = document.getElementById('child-selector-dropdown');
    if (switcher) {
      for (let i = 0; i < switcher.options.length; i++) {
        if (switcher.options[i].value === s.name) {
          switcher.remove(i);
          break;
        }
      }
      if (activeChild === s.name) {
        activeChild = 'Anika Kumar';
        switcher.value = 'Anika Kumar';
        localStorage.setItem('mts-active-child', 'Anika Kumar');
        updateParentChildState('Anika Kumar');
      }
    }
  });
};

