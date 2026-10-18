import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(cors());
app.use(express.json({ limit: '30kb' }));

const profile = {
  name: 'Mohit Kumar Singh',
  headline: 'E-commerce & Quick Commerce Account Manager | Performance Marketing | CSE Graduate',
  location: 'Bengaluru, Karnataka, India',
  email: 'mohitkumarsingh7050@gmail.com',
  phone: '+91 7050189007',
  cgpa: '7.56',
  twelfth: '75.4%',
  summary: 'E-commerce and Quick Commerce Account Manager with hands-on experience managing brand accounts across marketplaces including Swiggy Instamart, Blinkit, Zepto, Amazon, Meesho and Flipkart. Experienced in marketplace operations, catalog management, inventory planning, PO coordination, advertising campaigns, pricing, discount optimization and sales analysis. Combines business execution with a Computer Science & Engineering foundation and a data-driven approach.',
  links: {
    linkedin: 'https://www.linkedin.com/in/mohit-kumar-singh-1b6498270/',
    github: 'https://github.com/MohitKumarSingh01',
    email: 'mailto:mohitkumarsingh7050@gmail.com'
  }
};

const experience = [
  { id: 'dgseller', role: 'E-commerce & Quick Commerce Account Manager', company: 'DGSELLER', period: 'March 2026 – Present', location: 'Bengaluru, India', type: 'Full-time', details: ['Manage brand accounts across quick-commerce and e-commerce marketplaces.', 'Support product listing, catalog management and inventory planning.', 'Coordinate purchase orders from supply-chain planning through warehouse and dark-store delivery.', 'Work with cross-functional teams to resolve operational issues and support ad campaigns.', 'Contribute to pricing, discount optimization and sales analysis.'], skills: ['Account Management', 'Quick Commerce', 'Marketplace Operations', 'PO Management', 'Inventory Planning', 'Performance Marketing'] },
  { id: 'highradius', role: 'Sales & Marketing Intern', company: 'HighRadius', period: 'May 2025', location: 'Virtual / Remote', type: 'Internship', details: ['Completed the Highway to HighRadius – Business Essentials Program in Sales & Marketing.', 'Built foundational skills in sales strategy, marketing principles and client engagement.', 'Earned the opportunity through a Chandigarh University campus recruitment drive.'], skills: ['Business Marketing', 'Sales Strategy', 'CRM', 'Communication'] },
  { id: 'bharat-intern', role: 'Full Stack Web Development Intern', company: 'Bharat Intern', period: 'February 2024 – March 2024', location: 'Remote', type: 'Internship', details: ['Completed a virtual full-stack web development internship.', 'Built responsive and interactive web pages using HTML, CSS and JavaScript.'], skills: ['HTML', 'CSS', 'JavaScript', 'Web Development'] },
  { id: 'orbitor', role: 'Full Stack Web Development Intern', company: 'Orbitor', period: 'Details to confirm', location: 'Details to confirm', type: 'Internship / learning experience', details: ['Your supplied skills list associates Programming and Problem Solving with this experience. Add verified dates and responsibilities before publishing.'], skills: ['Programming', 'Problem Solving'] }
];

const skillGroups = {
  'Industry Knowledge': [
    ['Amazon Ads Management', 'Planning, managing and reviewing sponsored advertising campaigns on Amazon.'],
    ['Account Management', 'Managing brand relationships, marketplace operations, issue resolution and business performance.'],
    ['E-commerce & Quick Commerce', 'Marketplace operations across platforms such as Instamart, Blinkit, Zepto, Amazon, Meesho and Flipkart.'],
    ['Business Marketing', 'Marketing fundamentals, campaign support and business growth initiatives.'],
    ['Marketing Support', 'Coordination, campaign execution support and operational follow-through.'],
    ['Sales Strategy', 'Supporting sales goals through account planning, campaign review and business analysis.'],
    ['Customer Relationship Management (CRM)', 'Client engagement, stakeholder coordination and relationship management.'],
    ['Inventory Planning', 'Monitoring inventory and coordinating replenishment and purchase orders.'],
    ['Product Listing & Catalog Management', 'Supporting accurate product content, attributes, availability and catalog visibility.'],
    ['Pricing & Discount Strategy', 'Reviewing price and discount setup to support conversion and competitiveness.'],
    ['Business Analytics', 'Using descriptive, exploratory and explanatory analysis to understand performance.'],
    ['Sales Analysis', 'Reviewing sales, orders, units, ad spend and return on ad spend/ROI metrics.'],
    ['Artificial Intelligence (AI)', 'Foundational exposure to AI concepts and related learning.'],
    ['Machine Learning', 'Foundational knowledge and project/course exposure.'],
    ['5G Mobile Networks', 'Academic exposure to 5G mobile network concepts.'],
    ['Network Engineering', 'Foundational networking concepts from computer science studies.'],
    ['Mobile Security', 'Introductory concepts around mobile security.'],
    ['Technical Writing', 'Structuring clear technical explanations and documentation.'],
    ['Writing White Papers', 'Learning to structure research-led and explanatory documents.'],
    ['Leadership', 'Leadership principles, collaboration and ownership.'],
    ['People Management', 'Foundational learning in supporting and coordinating people.']
  ],
  'Tools & Technologies': [
    ['C', 'Programming language covered in Computer Science & Engineering studies.'],
    ['C++', 'Programming language used for problem solving and data structures.'],
    ['Java', 'Object-oriented programming language.'],
    ['Python', 'Programming language used in coursework and project work.'],
    ['HTML', 'Markup language for structuring web pages.'],
    ['CSS', 'Styling and responsive layout for web pages.'],
    ['JavaScript', 'Web programming for interactive interfaces.'],
    ['React.js', 'Component-based library for building user interfaces.'],
    ['Next.js', 'React framework listed in the supplied technical profile.'],
    ['Node.js', 'JavaScript runtime listed in the supplied technical profile.'],
    ['Express.js', 'Node.js web framework listed in project/technical profile.'],
    ['SQL', 'Relational database querying and data manipulation.'],
    ['MySQL', 'Relational database technology from academic/technical experience.'],
    ['Oracle Database', 'Relational database technology listed in the technical profile.'],
    ['MongoDB', 'Document database listed in project/technical experience.'],
    ['Git', 'Version control for source code.'],
    ['GitHub', 'Hosting and sharing code repositories.'],
    ['MS Excel', 'Spreadsheet-based reporting and analysis.'],
    ['Google Sheets', 'Collaborative spreadsheet work and tracking.'],
    ['MS Word', 'Document creation and editing.'],
    ['PowerPoint', 'Presentation creation.'],
    ['DSA', 'Data structures and algorithms fundamentals.'],
    ['OOP', 'Object-oriented programming fundamentals.'],
    ['DBMS / RDBMS', 'Database management and relational database fundamentals.'],
    ['REST APIs', 'API concepts listed in the technical profile.'],
    ['JSON', 'Data interchange format for web applications.'],
    ['Amazon Ads', 'Advertising platform knowledge and campaign management.']
  ],
  'Interpersonal Skills': [
    ['Communication Skill', 'Clear communication with brand partners and internal stakeholders.'],
    ['Interpersonal Communication', 'Constructive day-to-day communication across teams.'],
    ['Problem Solving', 'Breaking down operational or technical issues and working toward resolution.'],
    ['Critical Thinking', 'Evaluating information and choosing practical next steps.'],
    ['Team Leadership', 'Collaborating with teams and taking ownership of tasks.'],
    ['Time Management', 'Prioritizing multiple operational tasks and deadlines.'],
    ['Adaptability', 'Adjusting to changing priorities and marketplace requirements.'],
    ['Career Management', 'Professional development and career planning.'],
    ['Workplace Culture', 'Awareness of respectful and inclusive workplace practices.'],
    ['Diversity & Inclusion', 'Inclusive communication and awareness of bias.'],
    ['Gender Bias Awareness Training', 'Learning about identifying and preventing workplace bias.'],
    ['Women’s Leadership', 'Course-based learning in leadership strategies.'],
    ['Inspiring Leadership', 'Foundational learning in motivational leadership.']
  ]
};

const projects = [
  { id:'readymade', name:'Singh Readymade Vastralaya', year:'2026', stack:['TypeScript','Full-stack E-commerce'], description:'Full-stack dynamic e-commerce website for Singh Readymade Vastralaya.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/singh-readymade-vastralaya'}] },
  { id:'growthbasket', name:'The Growth Basket', year:'2026', stack:['HTML','Marketing Website','Vercel'], description:'Marketing agency website for full account-management services.', links:[{label:'Live website',url:'https://the-growth-basket.vercel.app/'},{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/the-growth-basket'}] },
  { id:'brainhive', name:'BrainHive', year:'2025', stack:['TypeScript','Next.js','React'], description:'Collaborative social media platform for researchers and innovators.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/BrainHive'}] },
  { id:'brainhive1', name:'Brainhive1', year:'2025', stack:['Repository'], description:'Additional Brainhive repository shared on GitHub.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/Brainhive1'}] },
  { id:'space-shooter', name:'Space Shooter', year:'2025', stack:['C++','Game Development'], description:'Space shooter game project implemented in C++.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/Space-Shooter'}] },
  { id:'chat-java', name:'Java Chat Application', year:'2025', stack:['Java','Networking'], description:'Chat application project implemented in Java.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/Chat-Application_java'}] },
  { id:'bajaj-challenge', name:'Bajaj Finserv Challenge', year:'2025', stack:['JavaScript'], description:'JavaScript challenge repository.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/bajaj-finserv-challenge'}] },
  { id:'snake-game', name:'Snake Game Using C++', year:'2025', stack:['C++','Game Development'], description:'Classic Snake game implemented in C++.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/Snake-Game-Using-Cpp'}] },
  { id:'tictactoe', name:'Tic Tac Toe AI', year:'2024', stack:['Python','AI','Minimax'], description:'Tic Tac Toe AI project using Python and the Minimax algorithm.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/Tic_Tac_Toe_Ai'}] },
  { id:'maze-solver', name:'Maze Solver', year:'2024', stack:['JavaScript','Algorithms'], description:'Maze-solving project implemented in JavaScript.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/Maze-Solver'}] },
  { id:'nqueens', name:'N-Queens Solver', year:'2024', stack:['JavaScript','Algorithms'], description:'N-Queens puzzle solver project.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/N-Queens-Solver'}] },
  { id:'smart-contract-frontend', name:'Smart Contract Management — Frontend', year:'2024', stack:['JavaScript','Blockchain'], description:'Frontend for a smart-contract management project.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/Smart-Contract-Management_Function-Frontend'}] },
  { id:'mint-token', name:'Create and Mint Token', year:'2024', stack:['Solidity','Blockchain'], description:'Smart contract project for creating and minting tokens.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/Create-and-Mint-Token'}] },
  { id:'degen-token', name:'Degen Token', year:'2024', stack:['Solidity','Blockchain'], description:'Token contract project implemented in Solidity.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/Degen-Token'}] },
  { id:'smart-contract', name:'Smart Contract', year:'2024', stack:['Solidity','Blockchain'], description:'Solidity smart contract repository.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/Smart-Contract'}] },
  { id:'restaurant-optimization', name:'Restaurant Operation and Optimization System', year:'2024', stack:['HTML','CSS','JavaScript'], description:'Restaurant operations and optimization system.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/Restaurant-operation-and-OPtimization-System'}] },
  { id:'nft-collection', name:'NFT Collection', year:'2024', stack:['JavaScript','NFT','Blockchain'], description:'NFT collection project.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/NFT-Collection'}] },
  { id:'mytoken', name:'MyToken Solidity', year:'2024', stack:['Solidity','Blockchain'], description:'ERC-style token learning project in Solidity.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/MyToken-Solidity'}] },
  { id:'restaurant-management', name:'Restaurant Management System', year:'2024', stack:['HTML','Web Development'], description:'Restaurant management system repository.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/Restaurant-Management-System-'}] },
  { id:'library', name:'Library Management System', year:'2024', stack:['Python','SQLite','Tkinter'], description:'Library management project using Python and SQLite.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/Library-management-System'}] },
  { id:'node-mongo-registration', name:'Node MongoDB Registration', year:'2024', stack:['JavaScript','Node.js','MongoDB'], description:'Registration application using Node.js and MongoDB.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/NodeMongoDB-Registration'}] },
  { id:'money-tracker', name:'Money Tracker', year:'2024', stack:['JavaScript','Node.js','MongoDB'], description:'Money tracking application using Node.js and MongoDB.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/MoneyTracker1_NodeMongoDB'}] },
  { id:'smart-contract-misc', name:'Blockchain / Smart Contract Projects', year:'2024', stack:['Solidity','JavaScript'], description:'Additional blockchain coursework and smart contract work.', links:[{label:'GitHub profile',url:profile.links.github}] },
  { id:'nexacart', name:'NexaCart E-Commerce Web Application', year:'2024', stack:['React.js','Node.js','Express.js','MongoDB'], description:'E-commerce web application project focused on product browsing and online shopping.', links:[{label:'GitHub profile',url:profile.links.github}] },
  { id:'lab-mst', name:'Lab MST Assignment', year:'2025', stack:['Coursework'], description:'GitHub Classroom assignment repository.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/lab-mst-assignment-MohitKumarSingh01'}] },
  { id:'pblj-exp4', name:'PBLJ Experiment 4', year:'2025', stack:['Coursework'], description:'GitHub Classroom PBLJ experiment repository.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/pblj-experiment-4-MohitKumarSingh01'}] },
  { id:'pblj-exp3', name:'PBLJ Experiment 3', year:'2025', stack:['Coursework'], description:'GitHub Classroom PBLJ experiment repository.', links:[{label:'GitHub repository',url:'https://github.com/MohitKumarSingh01/pblj-experiment-3-MohitKumarSingh01'}] }
];

const certifications = [
  ['Amazon Ads Foundations Certification', 'Amazon Ads Academy', 'Campaign planning, ad formats, audience targeting and measurement.'],
  ['Sales & Marketing – Business Essentials Program', 'HighRadius · May 2025', 'Sales strategy, marketing fundamentals and client engagement.'],
  ['Cybersecurity Attack and Defense Fundamentals', 'EC-Council via Coursera · Nov 2024', 'Cybersecurity fundamentals.'],
  ['Internet of Things: Design Concepts and Use Cases', 'NPTEL/SWAYAM · 77%', 'IoT design concepts and use cases.'],
  ['Cloud Computing', 'NPTEL / IIT Kharagpur · 76%', 'Cloud computing fundamentals.'],
  ['Introduction to Databases', 'Meta via Coursera', 'Database fundamentals.'],
  ['TCS iON Career Edge – Young Professional', 'Tata Consultancy Services', 'Professional communication, workplace and career skills.'],
  ['Blockchain A-Z: A Deep Dive into Building Decentralized Applications', 'Chandigarh University · 96%', 'Blockchain and decentralized application concepts.'],
  ['Advanced Blockchain Development', 'Infosys Springboard / Chandigarh University · 92%', 'Advanced blockchain development concepts.'],
  ['Python 101 for Data Science', 'IBM Developer Skills Network / Cognitive Class', 'Python foundations for data science.'],
  ['Java Full Stack Developer Specialization', 'Board Infinity / Coursera · June 2025', 'Java, frontend fundamentals and full-stack concepts.'],
  ['Technical Writing: Quick Start Guides', 'LinkedIn Learning', 'Technical writing and documentation.'],
  ['Business Analytics Foundations', 'LinkedIn Learning', 'Descriptive, exploratory and explanatory analytics.']
].map((c, i) => ({ id: `cert-${i}`, name: c[0], issuer: c[1], description: c[2] }));

app.get('/api/profile', (_req, res) => res.json(profile));
app.get('/api/experience', (_req, res) => res.json(experience));
app.get('/api/skills', (_req, res) => res.json(skillGroups));
app.get('/api/projects', (_req, res) => res.json(projects));
app.get('/api/certifications', (_req, res) => res.json(certifications));
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  if (![name, email, message].every(v => typeof v === 'string' && v.trim())) {
    return res.status(400).json({ error: 'Please provide your name, email and message.' });
  }
  // Demo endpoint: validates the form but does not send or persist email.
  // Connect an email provider or database before production use.
  console.log(`Portfolio contact form submission from ${name} <${email}>: ${message}`);
  return res.status(200).json({ ok: true, message: 'Thanks! The demo form validated your message. Configure an email provider to deliver it.' });
});

if (process.env.NODE_ENV === 'production') {
  const dist = path.resolve(__dirname, '../dist');
  app.use(express.static(dist));
  app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')));
}
app.listen(PORT, () => console.log(`Portfolio API running at http://localhost:${PORT}`));
