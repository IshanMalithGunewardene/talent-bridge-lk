// ── Learning resources per skill ──────────────────────────────────────────────
// Each skill maps to: { description, free: [{type, title, url}], paid: [{type, title, url}] }
// type: 'Course' | 'Video' | 'Docs' | 'Book'

export const skillResources = {

    // ── Frontend Developer ────────────────────────────────────────────────────
    'HTML': {
        description: 'HTML (Hypertext Markup Language) is the standard for creating web pages, structuring content with elements and attributes. Browsers interpret HTML tags to render pages. HTML5, the current standard, adds semantic elements, multimedia support, and form controls. It works with CSS for styling and JavaScript for interactivity, forming web development\'s foundation.',
        free: [
            { type: 'Course', title: 'Responsive Web Design Certification – freeCodeCamp', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/' },
            { type: 'Video', title: 'HTML Full Course for Beginners – Bro Code (YouTube)', url: 'https://www.youtube.com/watch?v=HD13eq_Pmp8' },
            { type: 'Video', title: 'HTML Tutorial for Beginners – Programming with Mosh (YouTube)', url: 'https://www.youtube.com/watch?v=qz0aGYrrlhU' },
            { type: 'Video', title: 'HTML Crash Course – Traversy Media (YouTube)', url: 'https://www.youtube.com/watch?v=UB1O30fR-EE' },
            { type: 'Docs', title: 'MDN Web Docs – HTML Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        ],
        paid: [
            { type: 'Course', title: 'The Web Developer Bootcamp – Colt Steele (Udemy)', url: 'https://www.udemy.com/course/the-web-developer-bootcamp/' },
            { type: 'Course', title: 'Build Websites from Scratch – Codecademy Pro', url: 'https://www.codecademy.com/learn/paths/web-development' },
        ],
    },

    'CSS': {
        description: 'CSS (Cascading Style Sheets) controls the visual presentation of HTML documents — colors, fonts, layout, spacing, and animations. Modern CSS includes Flexbox and Grid for powerful layouts, custom properties (variables), and media queries for responsive design. Mastering CSS is essential for any front-end role.',
        free: [
            { type: 'Course', title: 'Responsive Web Design – freeCodeCamp', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/' },
            { type: 'Video', title: 'CSS Full Course – Bro Code (YouTube)', url: 'https://www.youtube.com/watch?v=OXGznpKZ_sA' },
            { type: 'Video', title: 'CSS Tutorial – Zero to Hero – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=1Rs2ND1ryYc' },
            { type: 'Docs', title: 'MDN Web Docs – CSS Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
            { type: 'Video', title: 'Flexbox in 20 Minutes – Traversy Media (YouTube)', url: 'https://www.youtube.com/watch?v=JJSoEo8JSnc' },
        ],
        paid: [
            { type: 'Course', title: 'Advanced CSS and Sass – Jonas Schmedtmann (Udemy)', url: 'https://www.udemy.com/course/advanced-css-and-sass/' },
            { type: 'Course', title: 'CSS for Developers – Frontend Masters', url: 'https://frontendmasters.com/courses/css-foundations/' },
        ],
    },

    'Javascript': {
        description: 'JavaScript is the programming language of the web, enabling dynamic and interactive content in browsers. It handles DOM manipulation, events, asynchronous operations (Promises, async/await), and is the foundation for frameworks like React, Vue, and Angular. Node.js also brings JavaScript to the server side.',
        free: [
            { type: 'Course', title: 'JavaScript Algorithms & Data Structures – freeCodeCamp', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/' },
            { type: 'Video', title: 'JavaScript Full Course for Beginners – Bro Code (YouTube)', url: 'https://www.youtube.com/watch?v=lfmg-EJ8gm4' },
            { type: 'Video', title: 'JavaScript Tutorial for Beginners – Programming with Mosh (YouTube)', url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk' },
            { type: 'Docs', title: 'MDN Web Docs – JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
            { type: 'Video', title: 'JavaScript Crash Course – Traversy Media (YouTube)', url: 'https://www.youtube.com/watch?v=hdI2bqOjy3c' },
        ],
        paid: [
            { type: 'Course', title: 'The Complete JavaScript Course – Jonas Schmedtmann (Udemy)', url: 'https://www.udemy.com/course/the-complete-javascript-course/' },
            { type: 'Course', title: 'JavaScript: The Hard Parts – Frontend Masters', url: 'https://frontendmasters.com/courses/javascript-hard-parts-v2/' },
        ],
    },

    'Responsive Design': {
        description: 'Responsive design ensures web pages look and function well on all screen sizes — desktop, tablet, and mobile. Key techniques include CSS media queries, fluid grids, flexible images, and the mobile-first approach. Frameworks like Tailwind CSS and Bootstrap provide ready-made responsive utilities.',
        free: [
            { type: 'Course', title: 'Responsive Web Design – freeCodeCamp', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/' },
            { type: 'Video', title: 'Responsive Design Crash Course – Traversy Media (YouTube)', url: 'https://www.youtube.com/watch?v=srvUrASNj0s' },
            { type: 'Video', title: 'CSS Grid & Flexbox for Responsive Layouts – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=9zBsdzdE4sM' },
            { type: 'Docs', title: 'MDN – Responsive Design Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design' },
        ],
        paid: [
            { type: 'Course', title: 'Advanced CSS and Sass – Jonas Schmedtmann (Udemy)', url: 'https://www.udemy.com/course/advanced-css-and-sass/' },
        ],
    },

    'React': {
        description: 'React is a JavaScript library for building user interfaces using a component-based architecture. It uses a virtual DOM for efficient re-renders, JSX syntax, hooks (useState, useEffect, useContext), and a rich ecosystem including React Router and state management tools like Redux and Zustand.',
        free: [
            { type: 'Docs', title: 'Official React Docs – react.dev', url: 'https://react.dev/learn' },
            { type: 'Course', title: 'React Course – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8' },
            { type: 'Video', title: 'React Tutorial for Beginners – Programming with Mosh (YouTube)', url: 'https://www.youtube.com/watch?v=SqcY0GlETPk' },
            { type: 'Video', title: 'React Crash Course – Traversy Media (YouTube)', url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8' },
            { type: 'Course', title: 'Front End Development Libraries – freeCodeCamp', url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/' },
        ],
        paid: [
            { type: 'Course', title: 'React – The Complete Guide – Maximilian Schwarzmüller (Udemy)', url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/' },
            { type: 'Course', title: 'Complete React Developer – ZTM (Udemy)', url: 'https://www.udemy.com/course/complete-react-developer-zero-to-mastery/' },
        ],
    },

    'Git': {
        description: 'Git is the industry-standard distributed version control system. It tracks code changes, enables collaboration through branching and merging, and integrates with platforms like GitHub, GitLab, and Bitbucket. Every developer must understand commits, branches, pull requests, merge conflicts, and rebasing.',
        free: [
            { type: 'Course', title: 'Git & GitHub Crash Course – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk' },
            { type: 'Video', title: 'Git Tutorial for Beginners – Programming with Mosh (YouTube)', url: 'https://www.youtube.com/watch?v=8JJ101D3knE' },
            { type: 'Docs', title: 'Official Git Documentation', url: 'https://git-scm.com/doc' },
            { type: 'Course', title: 'Learn Git Branching (Interactive)', url: 'https://learngitbranching.js.org/' },
        ],
        paid: [
            { type: 'Course', title: 'Git Complete: The Definitive Guide (Udemy)', url: 'https://www.udemy.com/course/git-complete/' },
        ],
    },

    'Tailwind': {
        description: 'Tailwind CSS is a utility-first CSS framework that lets you build custom designs rapidly by composing small, single-purpose utility classes directly in your HTML. It eliminates the need to write custom CSS for most UI elements and is highly customizable through its config file.',
        free: [
            { type: 'Docs', title: 'Official Tailwind CSS Documentation', url: 'https://tailwindcss.com/docs' },
            { type: 'Video', title: 'Tailwind CSS Full Course – Dave Gray (YouTube)', url: 'https://www.youtube.com/watch?v=lCxcTsOHrjo' },
            { type: 'Video', title: 'Tailwind CSS Crash Course – Traversy Media (YouTube)', url: 'https://www.youtube.com/watch?v=UBOj6rqRUME' },
            { type: 'Course', title: 'Tailwind CSS from Scratch – Brad Traversy (YouTube)', url: 'https://www.youtube.com/watch?v=dFgzHOX84xQ' },
        ],
        paid: [
            { type: 'Course', title: 'Tailwind CSS: From Zero to Production (Udemy)', url: 'https://www.udemy.com/course/tailwind-from-scratch/' },
        ],
    },

    'Redux': {
        description: 'Redux is a predictable state management library for JavaScript applications, most commonly used with React. It centralises application state in a single store, enforcing unidirectional data flow via actions and reducers. Redux Toolkit (RTK) is the modern, recommended approach.',
        free: [
            { type: 'Docs', title: 'Official Redux Toolkit Docs', url: 'https://redux-toolkit.js.org/introduction/getting-started' },
            { type: 'Video', title: 'Redux Toolkit Tutorial – The Net Ninja (YouTube)', url: 'https://www.youtube.com/watch?v=bbkBuqC1rU4' },
            { type: 'Video', title: 'React Redux Full Course – Dave Gray (YouTube)', url: 'https://www.youtube.com/watch?v=NqzdVN2tyvQ' },
        ],
        paid: [
            { type: 'Course', title: 'React – The Complete Guide (includes Redux) (Udemy)', url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/' },
        ],
    },

    'Bootstrap': {
        description: 'Bootstrap is a popular CSS framework providing pre-built responsive components, a 12-column grid system, utility classes, and JavaScript plugins. It enables rapid prototyping and is widely used in enterprise and freelance projects.',
        free: [
            { type: 'Docs', title: 'Official Bootstrap Documentation', url: 'https://getbootstrap.com/docs/5.3/' },
            { type: 'Video', title: 'Bootstrap 5 Crash Course – Traversy Media (YouTube)', url: 'https://www.youtube.com/watch?v=4sosXZsdy-s' },
            { type: 'Course', title: 'Bootstrap 5 Tutorial – The Net Ninja (YouTube)', url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR' },
        ],
        paid: [
            { type: 'Course', title: 'Bootstrap 5 from Scratch (Udemy)', url: 'https://www.udemy.com/course/bootstrap-from-scratch/' },
        ],
    },

    'Project': {
        description: 'Building real projects is the most effective way to solidify your skills and create a portfolio that impresses employers. A good project demonstrates initiative, problem-solving, and end-to-end thinking — from design to deployment.',
        free: [
            { type: 'Video', title: '40 JavaScript Projects – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=ytErGNPkU0I' },
            { type: 'Video', title: 'React Projects for Beginners – Programming with Mosh (YouTube)', url: 'https://www.youtube.com/watch?v=a_7Z7C_JCyo' },
            { type: 'Course', title: 'Frontend Project Ideas – roadmap.sh', url: 'https://roadmap.sh/frontend/projects' },
        ],
        paid: [
            { type: 'Course', title: 'Build 20 Projects with JavaScript (Udemy)', url: 'https://www.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/' },
        ],
    },

    // ── Backend Developer ─────────────────────────────────────────────────────
    'Programming Basics': {
        description: 'Programming fundamentals cover variables, data types, control flow (if/else, loops), functions, and basic problem-solving. These concepts apply in every language and are the bedrock of software development. Python and JavaScript are the most beginner-friendly choices to start with.',
        free: [
            { type: 'Course', title: 'Python for Everybody – Dr. Chuck (Coursera Audit)', url: 'https://www.coursera.org/specializations/python' },
            { type: 'Video', title: 'Programming Fundamentals – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=zOjov-2OZ0E' },
            { type: 'Course', title: 'CS50x – Introduction to Computer Science (edX)', url: 'https://cs50.harvard.edu/x/' },
            { type: 'Video', title: 'Python Full Course for Beginners – Bro Code (YouTube)', url: 'https://www.youtube.com/watch?v=XKHEtdqhLK8' },
        ],
        paid: [
            { type: 'Course', title: '100 Days of Code: Python – Angela Yu (Udemy)', url: 'https://www.udemy.com/course/100-days-of-code/' },
        ],
    },

    'Node.js / Python': {
        description: 'Node.js is a JavaScript runtime for server-side development, enabling non-blocking I/O and event-driven architecture. Python is widely used for web backends (Django, Flask, FastAPI) and data science. Both are top choices for backend internships in Sri Lanka.',
        free: [
            { type: 'Video', title: 'Node.js Full Course – Bro Code (YouTube)', url: 'https://www.youtube.com/watch?v=f2EqECiTBL8' },
            { type: 'Video', title: 'Node.js Crash Course – Traversy Media (YouTube)', url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4' },
            { type: 'Video', title: 'Python Backend Web Development – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=ftKiHCDVwfA' },
            { type: 'Docs', title: 'Node.js Official Documentation', url: 'https://nodejs.org/docs/latest/api/' },
        ],
        paid: [
            { type: 'Course', title: 'The Complete Node.js Developer Course (Udemy)', url: 'https://www.udemy.com/course/the-complete-nodejs-developer-course-2/' },
            { type: 'Course', title: '100 Days of Code: Python – Angela Yu (Udemy)', url: 'https://www.udemy.com/course/100-days-of-code/' },
        ],
    },

    'REST APIs': {
        description: 'REST (Representational State Transfer) APIs enable communication between client and server over HTTP using standard methods: GET, POST, PUT, DELETE. Building and consuming REST APIs is a core skill for every backend developer. Key concepts include JSON, status codes, authentication, and API design principles.',
        free: [
            { type: 'Video', title: 'REST API Crash Course – Traversy Media (YouTube)', url: 'https://www.youtube.com/watch?v=SLwpqD8n3d0' },
            { type: 'Video', title: 'Build a REST API with Node.js – Net Ninja (YouTube)', url: 'https://www.youtube.com/watch?v=BDo1lgaZuII' },
            { type: 'Course', title: 'APIs and Microservices – freeCodeCamp', url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/' },
            { type: 'Docs', title: 'REST API Design Best Practices – restfulapi.net', url: 'https://restfulapi.net/' },
        ],
        paid: [
            { type: 'Course', title: 'Node.js REST API Design (Udemy)', url: 'https://www.udemy.com/course/nodejs-api-masterclass/' },
        ],
    },

    'Databases': {
        description: 'Databases are essential for persisting application data. Relational databases (PostgreSQL, MySQL) use SQL and enforce strict schemas. NoSQL databases (MongoDB, Redis) offer flexibility and horizontal scaling. Every backend developer must understand CRUD operations, indexing, transactions, and basic query optimisation.',
        free: [
            { type: 'Video', title: 'Database Design Course – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=ztHopE5Wnpc' },
            { type: 'Video', title: 'MySQL Full Course – Bro Code (YouTube)', url: 'https://www.youtube.com/watch?v=5OdVJbNCSso' },
            { type: 'Video', title: 'MongoDB Crash Course – Traversy Media (YouTube)', url: 'https://www.youtube.com/watch?v=-56x56UppqQ' },
            { type: 'Course', title: 'Relational Database – freeCodeCamp', url: 'https://www.freecodecamp.org/learn/relational-database/' },
        ],
        paid: [
            { type: 'Course', title: 'Complete SQL & Databases Bootcamp (Udemy)', url: 'https://www.udemy.com/course/complete-sql-databases-bootcamp-zero-to-mastery/' },
        ],
    },

    'Auth': {
        description: 'Authentication (AuthN) verifies who a user is; Authorisation (AuthZ) controls what they can do. Key patterns include session-based auth, JWT (JSON Web Tokens), OAuth 2.0, and OpenID Connect. Libraries like Passport.js, NextAuth, and Supabase Auth make implementation easier.',
        free: [
            { type: 'Video', title: 'JWT Authentication Tutorial – Web Dev Simplified (YouTube)', url: 'https://www.youtube.com/watch?v=mbsmsi7l3r4' },
            { type: 'Video', title: 'Node.js Auth with JWT – Traversy Media (YouTube)', url: 'https://www.youtube.com/watch?v=enopDSs3DRw' },
            { type: 'Docs', title: 'OAuth 2.0 – oauth.net', url: 'https://oauth.net/2/' },
        ],
        paid: [
            { type: 'Course', title: 'Node.js API Masterclass (includes Auth) (Udemy)', url: 'https://www.udemy.com/course/nodejs-api-masterclass/' },
        ],
    },

    'Testing': {
        description: 'Software testing ensures code correctness and prevents regressions. Unit tests verify individual functions, integration tests check module interactions, and end-to-end tests simulate real user flows. Popular tools include Jest, Mocha, Vitest (JavaScript), Pytest (Python), and Selenium/Cypress (E2E).',
        free: [
            { type: 'Video', title: 'JavaScript Testing Introduction – Academind (YouTube)', url: 'https://www.youtube.com/watch?v=r9HdJ8P6GQI' },
            { type: 'Video', title: 'Jest Crash Course – Traversy Media (YouTube)', url: 'https://www.youtube.com/watch?v=7r4xVDI2vho' },
            { type: 'Docs', title: 'Jest Official Documentation', url: 'https://jestjs.io/docs/getting-started' },
        ],
        paid: [
            { type: 'Course', title: 'JavaScript Unit Testing – Academind (Udemy)', url: 'https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/' },
        ],
    },

    'Docker': {
        description: 'Docker is a containerisation platform that packages applications and their dependencies into portable containers, ensuring consistent behaviour across environments. Key concepts include Dockerfiles, images, containers, volumes, networks, and Docker Compose for multi-service applications.',
        free: [
            { type: 'Video', title: 'Docker Tutorial for Beginners – TechWorld with Nana (YouTube)', url: 'https://www.youtube.com/watch?v=3c-iBn73dDE' },
            { type: 'Video', title: 'Docker Crash Course – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=pg19Z8LL06w' },
            { type: 'Docs', title: 'Docker Official Getting Started', url: 'https://docs.docker.com/get-started/' },
            { type: 'Course', title: 'Docker for Beginners – Kodekloud (Free Tier)', url: 'https://kodekloud.com/courses/docker-for-the-absolute-beginner/' },
        ],
        paid: [
            { type: 'Course', title: 'Docker & Kubernetes: The Complete Guide (Udemy)', url: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/' },
        ],
    },

    'Deployment': {
        description: 'Deployment is the process of making your application available to users on the internet. It involves hosting (VPS, cloud, PaaS), CI/CD pipelines, environment variables, reverse proxies (Nginx), SSL/TLS certificates, and monitoring. Popular platforms include Heroku, Render, Railway, Vercel, and AWS.',
        free: [
            { type: 'Video', title: 'Deploy Node.js App to AWS – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=oHAQ3TzUTro' },
            { type: 'Video', title: 'Deploy Full Stack App – Traversy Media (YouTube)', url: 'https://www.youtube.com/watch?v=71wSzpLyW9k' },
            { type: 'Docs', title: 'Render Deployment Guide', url: 'https://render.com/docs' },
        ],
        paid: [
            { type: 'Course', title: 'AWS Certified Cloud Practitioner (Udemy)', url: 'https://www.udemy.com/course/aws-certified-cloud-practitioner-new/' },
        ],
    },

    // ── DevOps Engineer ───────────────────────────────────────────────────────
    'Linux': {
        description: 'Linux is the dominant operating system for servers, containers, and cloud infrastructure. DevOps engineers must be comfortable navigating the file system, managing users/permissions, writing shell scripts, and using tools like grep, awk, sed, systemd, and cron.',
        free: [
            { type: 'Video', title: 'Linux Command Line Full Course – Bro Code (YouTube)', url: 'https://www.youtube.com/watch?v=ROjZy1WbCIA' },
            { type: 'Course', title: 'Linux Fundamentals – TryHackMe (Free Tier)', url: 'https://tryhackme.com/module/linux-fundamentals' },
            { type: 'Video', title: 'Linux Tutorial for Beginners – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=sWbUDq4S6Y8' },
            { type: 'Docs', title: 'The Linux Command Line (Free Book)', url: 'https://linuxcommand.org/tlcl.php' },
        ],
        paid: [
            { type: 'Course', title: 'Linux Mastery (Udemy)', url: 'https://www.udemy.com/course/linux-mastery/' },
        ],
    },

    'Bash': {
        description: 'Bash (Bourne Again Shell) is the default shell on most Linux systems. Shell scripting automates repetitive tasks like file processing, deployments, backups, and system monitoring. DevOps and SRE engineers write Bash scripts daily.',
        free: [
            { type: 'Video', title: 'Bash Scripting Tutorial – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=tK9Oc6AEnR4' },
            { type: 'Video', title: 'Shell Scripting Tutorial – Derek Banas (YouTube)', url: 'https://www.youtube.com/watch?v=hwrnmQumtPw' },
            { type: 'Docs', title: 'Bash Reference Manual (GNU)', url: 'https://www.gnu.org/software/bash/manual/' },
        ],
        paid: [
            { type: 'Course', title: 'Shell Scripting: Discover Bash (Udemy)', url: 'https://www.udemy.com/course/shell-scripting-linux/' },
        ],
    },

    'Kubernetes': {
        description: 'Kubernetes (K8s) is the leading container orchestration platform for automating deployment, scaling, and management of containerised applications. Key concepts include pods, services, deployments, namespaces, ConfigMaps, Secrets, and Helm charts.',
        free: [
            { type: 'Video', title: 'Kubernetes Tutorial for Beginners – TechWorld with Nana (YouTube)', url: 'https://www.youtube.com/watch?v=X48VuDVv0do' },
            { type: 'Course', title: 'Kubernetes for Beginners – Kodekloud (Free Tier)', url: 'https://kodekloud.com/courses/kubernetes-for-the-absolute-beginners/' },
            { type: 'Docs', title: 'Kubernetes Official Documentation', url: 'https://kubernetes.io/docs/home/' },
        ],
        paid: [
            { type: 'Course', title: 'Docker & Kubernetes: The Complete Guide (Udemy)', url: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/' },
            { type: 'Course', title: 'Certified Kubernetes Administrator (CKA) Prep (Udemy)', url: 'https://www.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/' },
        ],
    },

    'CI/CD Pipelines': {
        description: 'Continuous Integration / Continuous Delivery (CI/CD) automates building, testing, and deploying software. Tools include GitHub Actions, Jenkins, GitLab CI, and CircleCI. A good pipeline catches bugs early and ships features safely and frequently.',
        free: [
            { type: 'Video', title: 'GitHub Actions Full Course – TechWorld with Nana (YouTube)', url: 'https://www.youtube.com/watch?v=R8_veQiYBjI' },
            { type: 'Video', title: 'Jenkins Tutorial for Beginners – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=6YZvp2GwT0A' },
            { type: 'Docs', title: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions' },
        ],
        paid: [
            { type: 'Course', title: 'DevOps Bootcamp: CI/CD with Jenkins & Kubernetes (Udemy)', url: 'https://www.udemy.com/course/devops-with-docker-kubernetes-and-azure-devops/' },
        ],
    },

    'Cloud (AWS/GCP/Azure)': {
        description: 'Cloud platforms provide on-demand computing resources including virtual machines, managed databases, object storage, serverless functions, and networking. AWS is the market leader; GCP and Azure also have major enterprise adoption. Core services: compute, storage, networking, and identity/access management.',
        free: [
            { type: 'Video', title: 'AWS Cloud Practitioner Essentials – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=3hLmDS179YE' },
            { type: 'Course', title: 'Google Cloud Skills Boost (Free Tier)', url: 'https://cloudskillsboost.google/' },
            { type: 'Course', title: 'Azure Fundamentals – Microsoft Learn', url: 'https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/' },
            { type: 'Docs', title: 'AWS Documentation', url: 'https://docs.aws.amazon.com/' },
        ],
        paid: [
            { type: 'Course', title: 'AWS Certified Solutions Architect (Udemy)', url: 'https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/' },
        ],
    },

    'Monitoring': {
        description: 'Monitoring and observability are critical for maintaining healthy production systems. Tools like Prometheus (metrics), Grafana (dashboards), and the ELK Stack (logs) help teams detect and diagnose issues. Key concepts include SLIs, SLOs, alerting, and distributed tracing.',
        free: [
            { type: 'Video', title: 'Prometheus & Grafana Tutorial – TechWorld with Nana (YouTube)', url: 'https://www.youtube.com/watch?v=QoDqxm7ybLc' },
            { type: 'Docs', title: 'Prometheus Official Documentation', url: 'https://prometheus.io/docs/introduction/overview/' },
            { type: 'Video', title: 'Grafana Tutorial for Beginners (YouTube)', url: 'https://www.youtube.com/watch?v=lILY8eSspEo' },
        ],
        paid: [
            { type: 'Course', title: 'Prometheus: The Complete Guide (Udemy)', url: 'https://www.udemy.com/course/prometheus-course/' },
        ],
    },

    'IaC': {
        description: 'Infrastructure as Code (IaC) means managing and provisioning infrastructure through machine-readable config files instead of manual processes. Terraform is the most popular tool; Ansible handles configuration management. IaC enables reproducible, version-controlled infrastructure.',
        free: [
            { type: 'Video', title: 'Terraform Tutorial for Beginners – TechWorld with Nana (YouTube)', url: 'https://www.youtube.com/watch?v=7xngnjfIlK4' },
            { type: 'Docs', title: 'Terraform Official Documentation', url: 'https://developer.hashicorp.com/terraform/docs' },
            { type: 'Video', title: 'Ansible Full Course – TechWorld with Nana (YouTube)', url: 'https://www.youtube.com/watch?v=1id6ERvfozo' },
        ],
        paid: [
            { type: 'Course', title: 'Terraform Bootcamp (Udemy)', url: 'https://www.udemy.com/course/terraform-beginner-to-advanced/' },
        ],
    },

    // ── Android Developer ─────────────────────────────────────────────────────
    'Java / Kotlin': {
        description: 'Java is the original Android development language. Kotlin is Google\'s preferred modern language for Android — it is concise, null-safe, and fully interoperable with Java. Kotlin is now the standard for new Android projects and is required for Jetpack Compose.',
        free: [
            { type: 'Video', title: 'Kotlin Full Course – Bro Code (YouTube)', url: 'https://www.youtube.com/watch?v=EExSSotojVI' },
            { type: 'Course', title: 'Kotlin Bootcamp for Programmers – Google/Udacity', url: 'https://developer.android.com/courses/kotlin-bootcamp/overview' },
            { type: 'Video', title: 'Java Full Course – Bro Code (YouTube)', url: 'https://www.youtube.com/watch?v=xk4_1vDrzzo' },
            { type: 'Docs', title: 'Kotlin Official Documentation', url: 'https://kotlinlang.org/docs/home.html' },
        ],
        paid: [
            { type: 'Course', title: 'Android Development with Kotlin Masterclass (Udemy)', url: 'https://www.udemy.com/course/android-kotlin-developer/' },
        ],
    },

    'OOP': {
        description: 'Object-Oriented Programming (OOP) organises code around objects that combine data (fields) and behaviour (methods). The four pillars — Encapsulation, Inheritance, Polymorphism, Abstraction — are essential in Java/Kotlin Android development and are tested in most technical interviews.',
        free: [
            { type: 'Video', title: 'OOP Concepts – Programming with Mosh (YouTube)', url: 'https://www.youtube.com/watch?v=pTB0EiLXUC8' },
            { type: 'Video', title: 'OOP in Kotlin – Philipp Lackner (YouTube)', url: 'https://www.youtube.com/watch?v=ywdRMsEfMI8' },
            { type: 'Video', title: 'Java OOP Full Course – Bro Code (YouTube)', url: 'https://www.youtube.com/watch?v=6T_HgnjoYwM' },
        ],
        paid: [
            { type: 'Course', title: 'Java OOP – Object-Oriented Programming (Udemy)', url: 'https://www.udemy.com/course/java-object-oriented-programming-bootcamp/' },
        ],
    },

    'Android SDK': {
        description: 'The Android SDK (Software Development Kit) provides the APIs, tools, and libraries needed to build Android applications. Key components include Activities, Fragments, Intents, the manifest, and lifecycle methods. Android Studio is the official IDE.',
        free: [
            { type: 'Course', title: 'Android Basics with Compose – Google (Coursera Audit)', url: 'https://developer.android.com/courses/android-basics-compose/course' },
            { type: 'Video', title: 'Android Development Tutorial – Philipp Lackner (YouTube)', url: 'https://www.youtube.com/watch?v=EByHd0VFhkk' },
            { type: 'Docs', title: 'Android Developer Guides – developer.android.com', url: 'https://developer.android.com/guide' },
        ],
        paid: [
            { type: 'Course', title: 'The Complete Android Developer Course (Udemy)', url: 'https://www.udemy.com/course/the-complete-android-developer-course/' },
        ],
    },

    'XML Layouts': {
        description: 'XML Layouts define the visual structure of Android screens using a hierarchy of View and ViewGroup elements. Although Jetpack Compose is the modern alternative, XML layouts are still widely used in existing codebases and legacy projects.',
        free: [
            { type: 'Video', title: 'Android XML Layouts Tutorial – Philipp Lackner (YouTube)', url: 'https://www.youtube.com/watch?v=In_p-Hy0TYY' },
            { type: 'Docs', title: 'Android Layouts Guide', url: 'https://developer.android.com/guide/topics/ui/declaring-layout' },
        ],
        paid: [
            { type: 'Course', title: 'The Complete Android Developer Course (Udemy)', url: 'https://www.udemy.com/course/the-complete-android-developer-course/' },
        ],
    },

    'Jetpack': {
        description: 'Android Jetpack is a suite of libraries that helps developers follow best practices, reduce boilerplate, and build robust apps. Key components: ViewModel, LiveData, Room, Navigation, WorkManager, and Jetpack Compose (declarative UI).',
        free: [
            { type: 'Docs', title: 'Jetpack Documentation – developer.android.com', url: 'https://developer.android.com/jetpack' },
            { type: 'Video', title: 'Jetpack Compose Full Course – Philipp Lackner (YouTube)', url: 'https://www.youtube.com/watch?v=cDabx3SjuOY' },
            { type: 'Course', title: 'Android Basics with Compose – Google', url: 'https://developer.android.com/courses/android-basics-compose/course' },
        ],
        paid: [
            { type: 'Course', title: 'Jetpack Compose: Build Android Apps (Udemy)', url: 'https://www.udemy.com/course/jetpack-compose-masterclass/' },
        ],
    },

    'Room DB': {
        description: 'Room is Android\'s recommended database library that provides an abstraction layer over SQLite. It uses annotations to generate boilerplate code for data access objects (DAOs), entities, and the database class, and integrates seamlessly with LiveData and Flow.',
        free: [
            { type: 'Video', title: 'Room Database Tutorial – Philipp Lackner (YouTube)', url: 'https://www.youtube.com/watch?v=bOd3wO0uFr8' },
            { type: 'Docs', title: 'Room Persistence Library Docs', url: 'https://developer.android.com/training/data-storage/room' },
        ],
        paid: [
            { type: 'Course', title: 'Android Jetpack Masterclass (Udemy)', url: 'https://www.udemy.com/course/android-jetpack-masterclass/' },
        ],
    },

    'Retrofit': {
        description: 'Retrofit is the most popular HTTP client for Android, turning REST API definitions into Kotlin/Java interfaces. It handles serialisation (Gson, Moshi), error handling, interceptors, and integrates well with Coroutines and RxJava.',
        free: [
            { type: 'Video', title: 'Retrofit Tutorial – Philipp Lackner (YouTube)', url: 'https://www.youtube.com/watch?v=t6Sql3WMAnk' },
            { type: 'Docs', title: 'Retrofit Official Documentation', url: 'https://square.github.io/retrofit/' },
        ],
        paid: [
            { type: 'Course', title: 'Android Networking with Retrofit (Udemy)', url: 'https://www.udemy.com/course/retrofit-android-networking/' },
        ],
    },

    'Coroutines': {
        description: 'Kotlin Coroutines provide a clean, non-blocking way to handle asynchronous operations in Android — replacing callbacks and RxJava for most use cases. Key concepts: suspend functions, CoroutineScope, Dispatchers, Flow, and structured concurrency.',
        free: [
            { type: 'Video', title: 'Kotlin Coroutines Full Course – Philipp Lackner (YouTube)', url: 'https://www.youtube.com/watch?v=ShNhJ3wMpvQ' },
            { type: 'Docs', title: 'Kotlin Coroutines Guide', url: 'https://kotlinlang.org/docs/coroutines-guide.html' },
        ],
        paid: [
            { type: 'Course', title: 'Kotlin Coroutines & Flow Masterclass (Udemy)', url: 'https://www.udemy.com/course/kotlin-coroutines/' },
        ],
    },

    'Play Store Deploy': {
        description: 'Publishing an Android app on Google Play Store involves creating a developer account, generating a signed APK or AAB, writing store listings, setting up in-app purchases or subscriptions (if needed), and going through Google\'s review process.',
        free: [
            { type: 'Video', title: 'How to Publish an Android App – Google (YouTube)', url: 'https://www.youtube.com/watch?v=IfFbQkd3Ovg' },
            { type: 'Docs', title: 'Google Play Console Help', url: 'https://support.google.com/googleplay/android-developer' },
        ],
        paid: [
            { type: 'Course', title: 'Android App Publishing (Udemy)', url: 'https://www.udemy.com/course/android-app-publishing/' },
        ],
    },

    // ── QA Engineer ───────────────────────────────────────────────────────────
    'Testing Fundamentals': {
        description: 'QA fundamentals cover the Software Testing Life Cycle (STLC), types of testing (unit, integration, system, UAT), test levels, bug lifecycle, and quality assurance vs quality control. This is the foundation for every QA role.',
        free: [
            { type: 'Video', title: 'Software Testing Full Course – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=sO8eGL6SFsA' },
            { type: 'Course', title: 'Foundations of Software Testing (Coursera Audit)', url: 'https://www.coursera.org/learn/software-testing' },
            { type: 'Video', title: 'STLC Explained – Guru99 (YouTube)', url: 'https://www.youtube.com/watch?v=TDynSmrzpXw' },
        ],
        paid: [
            { type: 'Course', title: 'The Complete 2024 Software Testing Bootcamp (Udemy)', url: 'https://www.udemy.com/course/testerbootcamp/' },
        ],
    },

    'Manual Testing': {
        description: 'Manual testing involves a human tester executing test cases step by step without automation tools. Skills include exploratory testing, regression testing, usability testing, test case writing, defect reporting, and managing tests in tools like JIRA and TestRail.',
        free: [
            { type: 'Video', title: 'Manual Testing Full Course – Guru99 (YouTube)', url: 'https://www.youtube.com/watch?v=QkPa8FmaKwM' },
            { type: 'Video', title: 'Writing Good Test Cases – Agile Wonders (YouTube)', url: 'https://www.youtube.com/watch?v=FkHk3pTiNGw' },
        ],
        paid: [
            { type: 'Course', title: 'Software Testing Masterclass – Manual Testing (Udemy)', url: 'https://www.udemy.com/course/software-testing-from-novice-to-expert/' },
        ],
    },

    'Test Cases': {
        description: 'Test cases are structured documents defining input conditions, test steps, expected results, and actual results. Good test case design uses techniques like equivalence partitioning, boundary value analysis, decision tables, and state transition testing.',
        free: [
            { type: 'Video', title: 'Test Case Writing Tutorial – SDET- QA (YouTube)', url: 'https://www.youtube.com/watch?v=bTJV2BKW4K8' },
            { type: 'Docs', title: 'Test Case Template Guide – Guru99', url: 'https://www.guru99.com/test-case.html' },
        ],
        paid: [
            { type: 'Course', title: 'ISTQB Foundation Level Prep (Udemy)', url: 'https://www.udemy.com/course/istqb-foundation-level/' },
        ],
    },

    'Selenium / Cypress': {
        description: 'Selenium is a widely used browser automation framework supporting multiple languages. Cypress is a modern, JavaScript-first E2E testing framework known for its developer-friendly API, real-time reloading, and excellent debugging. Both are core skills for automation QA roles.',
        free: [
            { type: 'Video', title: 'Selenium Full Course – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=j7VZsCCnptM' },
            { type: 'Video', title: 'Cypress Tutorial for Beginners – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=u8vMu7viCm8' },
            { type: 'Docs', title: 'Cypress Official Documentation', url: 'https://docs.cypress.io/' },
            { type: 'Docs', title: 'Selenium Documentation', url: 'https://www.selenium.dev/documentation/' },
        ],
        paid: [
            { type: 'Course', title: 'Cypress: Web Automation Testing (Udemy)', url: 'https://www.udemy.com/course/cypress-tutorial/' },
        ],
    },

    'API Testing': {
        description: 'API testing validates that application programming interfaces work correctly, securely, and efficiently. It covers functional testing (correct responses), negative testing (error handling), security testing (auth, injection), and performance testing. Tools include Postman, REST Assured, and Newman.',
        free: [
            { type: 'Video', title: 'API Testing with Postman – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=VywxIQ2ZXw4' },
            { type: 'Docs', title: 'Postman Learning Center', url: 'https://learning.postman.com/' },
        ],
        paid: [
            { type: 'Course', title: 'Postman: The Complete Guide – REST API Testing (Udemy)', url: 'https://www.udemy.com/course/postman-the-complete-guide/' },
        ],
    },

    'Postman': {
        description: 'Postman is the most popular API platform for building and testing APIs. It allows you to send HTTP requests, write test scripts in JavaScript, create collections, run automated test suites with Newman, and mock APIs. It\'s an essential daily tool for QA and backend engineers.',
        free: [
            { type: 'Video', title: 'Postman Beginner\'s Course – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=VywxIQ2ZXw4' },
            { type: 'Docs', title: 'Postman Learning Center', url: 'https://learning.postman.com/docs/getting-started/introduction/' },
            { type: 'Video', title: 'Postman Tutorial for Beginners – Automation Step by Step (YouTube)', url: 'https://www.youtube.com/watch?v=juldrxDrSH0' },
        ],
        paid: [
            { type: 'Course', title: 'Postman: Complete Guide – REST API Testing (Udemy)', url: 'https://www.udemy.com/course/postman-the-complete-guide/' },
        ],
    },

    'CI Integration': {
        description: 'Integrating automated tests into CI/CD pipelines ensures tests run on every commit, preventing broken code from being merged or deployed. QA engineers configure test stages in GitHub Actions, Jenkins, or GitLab CI using tools like Jest, Cypress, and Newman.',
        free: [
            { type: 'Video', title: 'GitHub Actions for Testing – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=R8_veQiYBjI' },
            { type: 'Docs', title: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions' },
        ],
        paid: [
            { type: 'Course', title: 'CI/CD with GitHub Actions (Udemy)', url: 'https://www.udemy.com/course/github-actions/' },
        ],
    },

    'Reporting': {
        description: 'QA reporting involves documenting test results, defect metrics, test coverage, and release readiness in a clear, actionable format for stakeholders. Tools include Allure Reports, ExtentReports, JIRA dashboards, and TestRail.',
        free: [
            { type: 'Video', title: 'Allure Report Tutorial – SDET (YouTube)', url: 'https://www.youtube.com/watch?v=BXQNUHO7k7c' },
            { type: 'Docs', title: 'Allure Report Documentation', url: 'https://allurereport.org/docs/' },
        ],
        paid: [
            { type: 'Course', title: 'Software QA Reporting & Metrics (Udemy)', url: 'https://www.udemy.com/course/software-testing-from-novice-to-expert/' },
        ],
    },

    // ── AI Agent Developer ────────────────────────────────────────────────────
    'Python': {
        description: 'Python is the dominant language for AI/ML development. Its clean syntax, vast ecosystem (NumPy, Pandas, TensorFlow, PyTorch), and strong community make it the go-to choice. For AI roles, focus on Python fundamentals, OOP, virtual environments, and package management with pip.',
        free: [
            { type: 'Video', title: 'Python Full Course for Beginners – Bro Code (YouTube)', url: 'https://www.youtube.com/watch?v=XKHEtdqhLK8' },
            { type: 'Course', title: 'Scientific Computing with Python – freeCodeCamp', url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/' },
            { type: 'Video', title: 'Python Tutorial for Beginners – Programming with Mosh (YouTube)', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' },
            { type: 'Docs', title: 'Python Official Documentation', url: 'https://docs.python.org/3/tutorial/' },
        ],
        paid: [
            { type: 'Course', title: '100 Days of Code: Python – Angela Yu (Udemy)', url: 'https://www.udemy.com/course/100-days-of-code/' },
        ],
    },

    'Math Basics': {
        description: 'Machine learning relies on linear algebra (matrices, vectors, dot products), calculus (derivatives, gradients, backpropagation), probability, and statistics. You don\'t need a PhD — focus on the practical maths needed to understand model training and evaluation.',
        free: [
            { type: 'Course', title: 'Mathematics for Machine Learning – Coursera (Audit)', url: 'https://www.coursera.org/specializations/mathematics-machine-learning' },
            { type: 'Video', title: 'Linear Algebra for ML – 3Blue1Brown (YouTube)', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' },
            { type: 'Video', title: 'Statistics for Data Science – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=xxpc-HPKN28' },
        ],
        paid: [
            { type: 'Course', title: 'Data Science Math Skills – Coursera', url: 'https://www.coursera.org/learn/datasciencemathskills' },
        ],
    },

    'ML Fundamentals': {
        description: 'Machine learning fundamentals cover supervised learning (regression, classification), unsupervised learning (clustering, dimensionality reduction), model evaluation (train/test split, cross-validation, metrics), and the ML pipeline from data preprocessing to model deployment.',
        free: [
            { type: 'Course', title: 'Machine Learning Specialisation – Andrew Ng (Coursera Audit)', url: 'https://www.coursera.org/specializations/machine-learning-introduction' },
            { type: 'Video', title: 'Machine Learning for Beginners – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=NWONeJKn6kc' },
            { type: 'Course', title: 'Machine Learning with Python – freeCodeCamp', url: 'https://www.freecodecamp.org/learn/machine-learning-with-python/' },
        ],
        paid: [
            { type: 'Course', title: 'Machine Learning A–Z – Kirill Eremenko (Udemy)', url: 'https://www.udemy.com/course/machinelearning/' },
        ],
    },

    'LLMs': {
        description: 'Large Language Models (LLMs) like GPT-4, Gemini, Claude, and Llama are transformer-based neural networks trained on massive text corpora. Understanding their capabilities, limitations, context windows, fine-tuning, and APIs is essential for building AI-powered applications.',
        free: [
            { type: 'Video', title: 'LLMs Explained – Andrej Karpathy (YouTube)', url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g' },
            { type: 'Video', title: 'Large Language Models from Scratch – Sebastian Raschka (YouTube)', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' },
            { type: 'Docs', title: 'OpenAI API Documentation', url: 'https://platform.openai.com/docs/introduction' },
        ],
        paid: [
            { type: 'Course', title: 'Generative AI with LLMs – Coursera (DeepLearning.AI)', url: 'https://www.coursera.org/learn/generative-ai-with-llms' },
        ],
    },

    'Prompt Engineering': {
        description: 'Prompt engineering is the practice of designing and optimising text inputs (prompts) to guide LLMs toward accurate, useful, and safe outputs. Techniques include zero-shot, few-shot, chain-of-thought, role prompting, and retrieval-augmented generation (RAG).',
        free: [
            { type: 'Course', title: 'Prompt Engineering for Developers – DeepLearning.AI', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/' },
            { type: 'Video', title: 'Prompt Engineering Guide – Fireship (YouTube)', url: 'https://www.youtube.com/watch?v=_ZvnD73m40o' },
            { type: 'Docs', title: 'Prompt Engineering Guide – promptingguide.ai', url: 'https://www.promptingguide.ai/' },
        ],
        paid: [
            { type: 'Course', title: 'Master Prompt Engineering (Udemy)', url: 'https://www.udemy.com/course/prompt-engineering/' },
        ],
    },

    'LangChain / AutoGen': {
        description: 'LangChain is a popular framework for building applications powered by LLMs, providing tools for chains, agents, memory, RAG pipelines, and tool use. AutoGen (Microsoft) enables multi-agent conversations. Both are core tools for AI Agent Developer roles.',
        free: [
            { type: 'Video', title: 'LangChain Full Course – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=HSZ_uaif57o' },
            { type: 'Docs', title: 'LangChain Official Documentation', url: 'https://python.langchain.com/docs/introduction/' },
            { type: 'Video', title: 'AutoGen Tutorial – David Ondrej (YouTube)', url: 'https://www.youtube.com/watch?v=vU2S6dVf79M' },
        ],
        paid: [
            { type: 'Course', title: 'LangChain & Vector Databases in Production (Udemy)', url: 'https://www.udemy.com/course/langchain/' },
        ],
    },

    'Deploy AI Agents': {
        description: 'Deploying AI agents involves containerising LLM applications with Docker, serving them via FastAPI or Flask, scaling with cloud platforms (AWS, GCP, Azure), and monitoring for latency, cost, and quality. Key skills: API design, environment management, and LLM cost optimisation.',
        free: [
            { type: 'Video', title: 'Deploy AI App with FastAPI & Docker – Patrick Loeber (YouTube)', url: 'https://www.youtube.com/watch?v=0RS9W8MtZe4' },
            { type: 'Docs', title: 'FastAPI Official Documentation', url: 'https://fastapi.tiangolo.com/' },
            { type: 'Video', title: 'Build and Deploy a Generative AI App – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=BO-ekNfJnls' },
        ],
        paid: [
            { type: 'Course', title: 'Deploying Machine Learning Models (Udemy)', url: 'https://www.udemy.com/course/deployment-of-machine-learning-models/' },
        ],
    },

    // ── iOS Developer ─────────────────────────────────────────────────────────
    'Swift': {
        description: 'Swift is Apple\'s modern, safe, and expressive programming language for iOS, macOS, watchOS, and tvOS development. It replaces Objective-C for most new projects. Key features: optionals, type inference, closures, protocols, and generics.',
        free: [
            { type: 'Course', title: 'Develop in Swift Tutorials – Apple Developer', url: 'https://developer.apple.com/tutorials/swiftui' },
            { type: 'Video', title: 'Swift Full Course for Beginners – Sean Allen (YouTube)', url: 'https://www.youtube.com/watch?v=comQ1-x2a1Q' },
            { type: 'Docs', title: 'Swift Official Documentation', url: 'https://www.swift.org/documentation/' },
            { type: 'Video', title: 'Swift Tutorial for Beginners – Bro Code (YouTube)', url: 'https://www.youtube.com/watch?v=8Xg7E9shq0U' },
        ],
        paid: [
            { type: 'Course', title: 'iOS & Swift – The Complete iOS App Development Bootcamp (Udemy)', url: 'https://www.udemy.com/course/ios-13-app-development-bootcamp/' },
        ],
    },

    'Xcode Basics': {
        description: 'Xcode is Apple\'s official IDE for developing apps across all Apple platforms. It includes an interface builder, simulator, debugger, Instruments (profiling), and integrates with Git and the App Store Connect. Proficiency in Xcode is essential for any iOS developer.',
        free: [
            { type: 'Video', title: 'Xcode Tutorial for Beginners – Sean Allen (YouTube)', url: 'https://www.youtube.com/watch?v=09TeUXjzpKs' },
            { type: 'Docs', title: 'Xcode Documentation – Apple Developer', url: 'https://developer.apple.com/documentation/xcode' },
        ],
        paid: [
            { type: 'Course', title: 'iOS App Development with Xcode (Udemy)', url: 'https://www.udemy.com/course/ios-13-app-development-bootcamp/' },
        ],
    },

    'UIKit / SwiftUI': {
        description: 'UIKit is Apple\'s traditional imperative UI framework. SwiftUI is the modern declarative framework introduced in 2019, enabling cross-platform UI with less code. Both are relevant — SwiftUI for new projects, UIKit for maintaining existing apps.',
        free: [
            { type: 'Course', title: 'SwiftUI Tutorials – Apple Developer', url: 'https://developer.apple.com/tutorials/swiftui' },
            { type: 'Video', title: 'SwiftUI Full Course – Sean Allen (YouTube)', url: 'https://www.youtube.com/watch?v=F2ojC6TNwws' },
            { type: 'Video', title: 'UIKit Tutorial for Beginners – Philipp Lackner (YouTube)', url: 'https://www.youtube.com/watch?v=mhOjdMRrGJs' },
        ],
        paid: [
            { type: 'Course', title: 'SwiftUI Masterclass – Robert Petras (Udemy)', url: 'https://www.udemy.com/course/swiftui-masterclass-course-ios-development-with-swift/' },
        ],
    },

    'Core Data': {
        description: 'Core Data is Apple\'s framework for persisting model-layer objects on-device. It provides an object graph and persistence framework using SQLite under the hood. SwiftData is the newer Swift-native alternative introduced in iOS 17.',
        free: [
            { type: 'Video', title: 'Core Data Tutorial – Sean Allen (YouTube)', url: 'https://www.youtube.com/watch?v=O7u9nYWjvKk' },
            { type: 'Docs', title: 'Core Data Documentation – Apple Developer', url: 'https://developer.apple.com/documentation/coredata' },
        ],
        paid: [
            { type: 'Course', title: 'iOS Data Persistence with Core Data (Udemy)', url: 'https://www.udemy.com/course/ios-13-app-development-bootcamp/' },
        ],
    },

    'Networking': {
        description: 'iOS networking involves URLSession for HTTP requests, Codable protocol for JSON parsing, Alamofire as a popular third-party networking library, and async/await for clean asynchronous code. Every real-world iOS app consumes REST APIs.',
        free: [
            { type: 'Video', title: 'iOS Networking with URLSession – Sean Allen (YouTube)', url: 'https://www.youtube.com/watch?v=zvfViYmETuc' },
            { type: 'Docs', title: 'URLSession Documentation – Apple Developer', url: 'https://developer.apple.com/documentation/foundation/urlsession' },
        ],
        paid: [
            { type: 'Course', title: 'iOS & Swift Complete Bootcamp (Udemy)', url: 'https://www.udemy.com/course/ios-13-app-development-bootcamp/' },
        ],
    },

    'Combine': {
        description: 'Combine is Apple\'s reactive programming framework for handling asynchronous events declaratively using publishers and subscribers. It replaces delegate patterns and completion handlers for many use cases and integrates tightly with SwiftUI.',
        free: [
            { type: 'Video', title: 'Combine Framework Tutorial – Sean Allen (YouTube)', url: 'https://www.youtube.com/watch?v=rdWhrEbfNzA' },
            { type: 'Docs', title: 'Combine Documentation – Apple Developer', url: 'https://developer.apple.com/documentation/combine' },
        ],
        paid: [
            { type: 'Course', title: 'SwiftUI & Combine Masterclass (Udemy)', url: 'https://www.udemy.com/course/swiftui-masterclass-course-ios-development-with-swift/' },
        ],
    },

    'App Store Deploy': {
        description: 'Submitting an app to the App Store involves creating an Apple Developer account, configuring signing certificates and provisioning profiles, archiving the build in Xcode, and submitting through App Store Connect. Apps are reviewed by Apple before going live.',
        free: [
            { type: 'Video', title: 'How to Submit App to App Store – Sean Allen (YouTube)', url: 'https://www.youtube.com/watch?v=DLvdZtTAJrE' },
            { type: 'Docs', title: 'App Store Connect Help', url: 'https://developer.apple.com/app-store-connect/' },
        ],
        paid: [
            { type: 'Course', title: 'iOS & Swift Complete Bootcamp (Udemy)', url: 'https://www.udemy.com/course/ios-13-app-development-bootcamp/' },
        ],
    },

    // ── Software Architect ────────────────────────────────────────────────────
    'Design Patterns': {
        description: 'Design patterns are reusable solutions to common software design problems. The Gang of Four (GoF) patterns are grouped into Creational (Factory, Singleton, Builder), Structural (Adapter, Decorator, Facade), and Behavioural (Observer, Strategy, Command). They form a shared vocabulary for developers.',
        free: [
            { type: 'Video', title: 'Design Patterns in Object Oriented Programming – Christopher Okhravi (YouTube)', url: 'https://www.youtube.com/playlist?list=PLrhzvIcii6GNjpARjnk97losfB6E31EaW' },
            { type: 'Video', title: 'Design Patterns Crash Course – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=tv-_1er1mWI' },
            { type: 'Docs', title: 'Refactoring Guru – Design Patterns', url: 'https://refactoring.guru/design-patterns' },
        ],
        paid: [
            { type: 'Course', title: 'Design Patterns in Java – Dmitri Nesteruk (Udemy)', url: 'https://www.udemy.com/course/design-patterns-java/' },
        ],
    },

    'SOLID': {
        description: 'SOLID is an acronym for five object-oriented design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. Following SOLID principles produces code that is maintainable, extensible, and testable.',
        free: [
            { type: 'Video', title: 'SOLID Principles Explained – Programming with Mosh (YouTube)', url: 'https://www.youtube.com/watch?v=rtmFCcjEgEw' },
            { type: 'Video', title: 'SOLID Design Principles – Derek Banas (YouTube)', url: 'https://www.youtube.com/watch?v=GtZtQ2VFweA' },
            { type: 'Docs', title: 'SOLID Principles – Refactoring Guru', url: 'https://refactoring.guru/refactoring/catalog' },
        ],
        paid: [
            { type: 'Course', title: 'Clean Code: Writing Code for Humans (Udemy)', url: 'https://www.udemy.com/course/writing-clean-code/' },
        ],
    },

    'System Design Basics': {
        description: 'System design interviews test your ability to design scalable, reliable distributed systems. Key topics: load balancing, caching, database sharding, CAP theorem, message queues, CDNs, API gateways, and microservices vs monoliths.',
        free: [
            { type: 'Video', title: 'System Design Full Course – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=i53Gi_K3o7I' },
            { type: 'Video', title: 'System Design Interview – Gaurav Sen (YouTube)', url: 'https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX' },
            { type: 'Docs', title: 'System Design Primer – GitHub', url: 'https://github.com/donnemartin/system-design-primer' },
        ],
        paid: [
            { type: 'Course', title: 'Rocking System Design (Udemy)', url: 'https://www.udemy.com/course/rocking-system-design/' },
        ],
    },

    'Microservices': {
        description: 'Microservices is an architectural style where an application is composed of small, independently deployable services. Key patterns include API gateway, service discovery, circuit breaker, event-driven communication, and the saga pattern for distributed transactions.',
        free: [
            { type: 'Video', title: 'Microservices Explained – TechWorld with Nana (YouTube)', url: 'https://www.youtube.com/watch?v=T-m7ZFxeg1A' },
            { type: 'Video', title: 'Microservices Architecture Full Course – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=hmkF77F9TLw' },
            { type: 'Docs', title: 'Microservices.io – Patterns', url: 'https://microservices.io/patterns/index.html' },
        ],
        paid: [
            { type: 'Course', title: 'Microservices with Node.js & React (Udemy)', url: 'https://www.udemy.com/course/microservices-with-node-js-and-react/' },
        ],
    },

    'APIs': {
        description: 'API design and architecture covers REST, GraphQL, and gRPC communication protocols, versioning strategies, authentication patterns (OAuth, API keys, JWT), rate limiting, documentation (OpenAPI/Swagger), and API gateway patterns.',
        free: [
            { type: 'Video', title: 'API Design Best Practices – Traversy Media (YouTube)', url: 'https://www.youtube.com/watch?v=SLwpqD8n3d0' },
            { type: 'Docs', title: 'OpenAPI Specification Documentation', url: 'https://swagger.io/specification/' },
            { type: 'Video', title: 'GraphQL Full Course – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=ed8SzALpx1Q' },
        ],
        paid: [
            { type: 'Course', title: 'REST API Design, Development & Management (Udemy)', url: 'https://www.udemy.com/course/rest-api/' },
        ],
    },

    'Cloud Architecture': {
        description: 'Cloud architecture involves designing systems that leverage cloud services for scalability, resilience, and cost efficiency. Patterns include serverless, event-driven, multi-region, and well-architected frameworks. Cloud providers offer architecture reviews and certification paths.',
        free: [
            { type: 'Docs', title: 'AWS Well-Architected Framework', url: 'https://aws.amazon.com/architecture/well-architected/' },
            { type: 'Video', title: 'Cloud Architecture Patterns – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=3hLmDS179YE' },
            { type: 'Course', title: 'Google Cloud Architecture – Google Skill Boost', url: 'https://cloudskillsboost.google/paths/12' },
        ],
        paid: [
            { type: 'Course', title: 'AWS Certified Solutions Architect – Associate (Udemy)', url: 'https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/' },
        ],
    },

    'Tech Leadership': {
        description: 'Tech leadership covers engineering management, mentoring, technical decision-making, architecture reviews, cross-functional communication, and building high-performing teams. Senior engineers and architects need strong leadership skills alongside their technical expertise.',
        free: [
            { type: 'Video', title: 'Tech Lead Skills – TechLead (YouTube)', url: 'https://www.youtube.com/c/TechLead' },
            { type: 'Docs', title: 'Staff Engineer: Leadership beyond Management (Book Summary)', url: 'https://staffeng.com/book' },
        ],
        paid: [
            { type: 'Course', title: 'Become a Software Architect (Udemy)', url: 'https://www.udemy.com/course/become-a-software-architect/' },
        ],
    },

    // ── Business Intelligence ─────────────────────────────────────────────────
    'SQL': {
        description: 'SQL (Structured Query Language) is the standard language for managing and querying relational databases. BI analysts use SQL daily for data extraction, transformation, aggregation, window functions, CTEs, and joins. Mastery of SQL is the single most important skill for any data role.',
        free: [
            { type: 'Course', title: 'Relational Database – freeCodeCamp', url: 'https://www.freecodecamp.org/learn/relational-database/' },
            { type: 'Video', title: 'SQL Tutorial – Full Database Course – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY' },
            { type: 'Course', title: 'SQL for Data Analysis – Mode Analytics (Free)', url: 'https://mode.com/sql-tutorial/' },
            { type: 'Video', title: 'MySQL Full Course – Bro Code (YouTube)', url: 'https://www.youtube.com/watch?v=5OdVJbNCSso' },
        ],
        paid: [
            { type: 'Course', title: 'The Complete SQL Bootcamp – Jose Portilla (Udemy)', url: 'https://www.udemy.com/course/the-complete-sql-bootcamp/' },
        ],
    },

    'Excel': {
        description: 'Microsoft Excel remains the most widely used data analysis tool in business. BI professionals must be proficient in formulas, PivotTables, VLOOKUP/INDEX-MATCH, charts, data validation, Power Query, and basic macros/VBA for automating reports.',
        free: [
            { type: 'Video', title: 'Excel Full Course for Beginners – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=Vl0H-qTclOg' },
            { type: 'Course', title: 'Excel Skills for Business – Macquarie Uni (Coursera Audit)', url: 'https://www.coursera.org/specializations/excel' },
        ],
        paid: [
            { type: 'Course', title: 'Microsoft Excel: Data Analysis with Excel Pivot Tables (Udemy)', url: 'https://www.udemy.com/course/data-analysis-with-excel-pivot-tables/' },
        ],
    },

    'Data Warehousing': {
        description: 'A data warehouse is a centralised repository for structured data from multiple sources, optimised for analytical queries. Key concepts include OLAP vs OLTP, star/snowflake schemas, ETL pipelines, dimensional modelling, and modern cloud data warehouses like Snowflake, BigQuery, and Redshift.',
        free: [
            { type: 'Video', title: 'Data Warehouse Tutorial – Edureka (YouTube)', url: 'https://www.youtube.com/watch?v=J326LIUrZM8' },
            { type: 'Video', title: 'Data Warehousing Concepts – Alex the Analyst (YouTube)', url: 'https://www.youtube.com/watch?v=AHR_7jFCMeY' },
        ],
        paid: [
            { type: 'Course', title: 'Data Warehousing for Business Intelligence – Coursera', url: 'https://www.coursera.org/specializations/data-warehousing' },
        ],
    },

    'Power BI / Tableau': {
        description: 'Power BI (Microsoft) and Tableau are the two leading business intelligence visualisation tools. They connect to data sources, transform data, and produce interactive dashboards. Power BI uses DAX for measures; Tableau uses calculated fields. Both are requested in most BI job descriptions.',
        free: [
            { type: 'Video', title: 'Power BI Full Course – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=NNSHu0rkew8' },
            { type: 'Video', title: 'Tableau Full Course for Beginners – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=TPMlZxRRaBQ' },
            { type: 'Docs', title: 'Microsoft Power BI Documentation', url: 'https://learn.microsoft.com/en-us/power-bi/' },
        ],
        paid: [
            { type: 'Course', title: 'Microsoft Power BI Desktop for Business Intelligence (Udemy)', url: 'https://www.udemy.com/course/microsoft-power-bi-up-running-with-power-bi-desktop/' },
            { type: 'Course', title: 'Tableau 2024 A-Z: Hands-On Tableau Training (Udemy)', url: 'https://www.udemy.com/course/tableau10/' },
        ],
    },

    'ETL Pipelines': {
        description: 'ETL (Extract, Transform, Load) pipelines move data from source systems to a data warehouse or data lake. Modern ELT reverses the order, loading raw data first and transforming in the warehouse. Tools include Apache Airflow, dbt, Talend, Fivetran, and AWS Glue.',
        free: [
            { type: 'Video', title: 'ETL Pipeline Tutorial – Alex the Analyst (YouTube)', url: 'https://www.youtube.com/watch?v=OdaWkWZ5OCY' },
            { type: 'Video', title: 'Apache Airflow Tutorial – TechWorld with Nana (YouTube)', url: 'https://www.youtube.com/watch?v=AHgWOkTwgKg' },
            { type: 'Docs', title: 'dbt Documentation', url: 'https://docs.getdbt.com/docs/introduction' },
        ],
        paid: [
            { type: 'Course', title: 'The Complete Hands-On Introduction to Apache Airflow (Udemy)', url: 'https://www.udemy.com/course/the-complete-hands-on-course-to-master-apache-airflow/' },
        ],
    },

    'Insights': {
        description: 'Deriving insights means going beyond raw data to tell a story — identifying trends, anomalies, root causes, and business opportunities. This requires statistical thinking, domain knowledge, data visualisation skills, and the ability to communicate findings clearly to non-technical stakeholders.',
        free: [
            { type: 'Video', title: 'Data Analysis with Python – freeCodeCamp (YouTube)', url: 'https://www.youtube.com/watch?v=r-uOLxNrNk8' },
            { type: 'Video', title: 'Storytelling with Data – Cole Nussbaumer (YouTube)', url: 'https://www.youtube.com/watch?v=8EMW7io4rSI' },
        ],
        paid: [
            { type: 'Course', title: 'Data Analysis & Visualization with Python (Udemy)', url: 'https://www.udemy.com/course/data-analysis-with-pandas/' },
        ],
    },
};
