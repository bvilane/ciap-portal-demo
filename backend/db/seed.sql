INSERT INTO users (name, email, role) VALUES
  ('Admin User', 'admin@ciap.local', 'admin'),
  ('Viewer User', 'viewer@ciap.local', 'viewer');

INSERT INTO news (title, summary, date, image, link) VALUES
('SA Connect: Community Wi-Fi Expansions Announced',
 'Government programme highlights new community hotspots and digital skills drives.',
 '2025-10-06',
 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
 'https://www.gov.za/newsroom'),
('Matric Study Support Portals (Zero-Rated)',
 'Learners can access revision materials and past papers without data on select networks.',
 '2025-10-05',
 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop',
 'https://www.education.gov.za/'),
('Local Clinic Adds Digital Health Guidelines Kiosk',
 'Offline kiosk provides maternal, child health and emergency reference guides.',
 '2025-10-04',
 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
 'https://www.health.gov.za/'),
('Small Biz Corner: Grants & Tender Alerts',
 'Weekly summary of opportunities for youth and women-owned businesses.',
 '2025-10-03',
 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
 'https://www.dsbd.gov.za/');

INSERT INTO tutorials (title, url) VALUES
('Use Kiwix to browse Wikipedia offline', 'https://www.youtube.com/embed/eGXCI65uERc'),
('WhatsApp Business basics for vendors', 'https://www.youtube.com/embed/xNuGOJYzDZQ'),
('Job Search & CV tips using free tools', 'https://www.youtube.com/embed/H6g2wy_eTFM'),
('Digital safety: avoid scams & protect your phone', 'https://www.youtube.com/embed/qgj0Ieqc3Hc'),
('Learn to use Gmail offline & low-data', 'https://www.youtube.com/embed/jY_7RVU_c6E'),
('Intro to Google Drive for students', 'https://www.youtube.com/embed/FuOlYKAbIhI');

INSERT INTO pdfs (title, url) VALUES
('Community Guidelines (PDF)', '/static/pdfs/ciap-guidelines.pdf'),
('Student Study Pack (PDF)', '/static/pdfs/study-pack.pdf'),
('Digital Safety Checklist', 'https://www.owasp.org/images/3/3f/OWASP_Secure_Online_Safety_Checklist.pdf'),
('Small Business Starter Pack', 'https://www.gov.za/sites/default/files/gcis_document/2023-02/smmestarterpack.pdf');
