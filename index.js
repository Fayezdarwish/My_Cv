/* ==========================================
   Interactive Scripting for Portfolio
   Owner: Mohamed Fayez Darwish
   Supports: Arabic & English Localization
   ========================================== */

// 1. Translations Dictionary
const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من أنا",
        nav_services: "خدماتي",
        nav_portfolio: "أعمالي",
        nav_skills: "المهارات والخبرة",
        nav_contact: "تواصل معي",
        hero_badge: "مرحباً بك في عالمي البرمجي",
        hero_title: "م. محمد فايز درويش",
        hero_prefix: "أنا",
        hero_desc: "مطور برمجيات أول ومستشار تقني. متخصص في بناء تطبيقات الهواتف الذكية المتقدمة عابرة المنصات (Flutter) وتطوير الويب المتكامل عالي الأداء والآمن (Laravel & React & Node.js).",
        hero_cta_portfolio: "تصفح أعمالي",
        hero_cta_contact: "تواصل معي",
        about_subtitle: "تعرف عليّ عن قرب",
        about_title: "شغف بالبرمجة وتميز في التنفيذ",
        about_lead: "بصفتي مطور برمجيات أول ومدرس تقني، أركز على بناء حلول برمجية قوية وقابلة للتوسع تلبي متطلبات الأعمال وتوفر تجربة مستخدم مثالية.",
        about_paragraph: "أمتلك خبرة واسعة في تصميم وهندسة الأنظمة المعقدة وإدارة الحالات المتقدمة وتأمين التطبيقات ضد المخاطر الأمنية (مثل freeRASP). لقد قدت بنجاح فرقاً برمجية لبناء تطبيقات حيوية على مستوى وطني في سوريا، بالإضافة إلى شغفي الكبير بالتدريب الأكاديمي والمهني حيث قمت بالإشراف على مشاريع التخرج وتدريس أكثر من 100 طالب لتأهيلهم لسوق العمل البرمجي الفعلي.",
        stat_experience: "سنوات خبرة",
        stat_projects: "مشاريع كبرى",
        stat_students: "طالب متخرج",
        about_download_cv: "تحميل السيرة الذاتية PDF",
        info_card_title: "معلومات شخصية مهنية",
        info_label_job: "المسمى الوظيفي:",
        info_value_job: "Senior Full-Stack Developer & Instructor",
        info_label_email: "البريد الإلكتروني:",
        info_label_phone: "رقم الهاتف:",
        info_label_location: "مكان الإقامة:",
        info_value_location: "دمشق، سوريا",
        info_label_education: "التعليم الأكاديمي:",
        info_value_education: "بكالوريوس هندسة معلوماتية - جامعة الشام الخاصة",
        services_subtitle: "ماذا يمكنني أن أقدم لك؟",
        services_title: "خدمات برمجية احترافية بجودة فائقة",
        service_1_title: "تطوير تطبيقات الهواتف (Flutter)",
        service_1_desc: "تصميم وهندسة تطبيقات هواتف ذكية عابرة للمنصات (iOS & Android) بأداء يقارع التطبيقات الأصيلة، مع إدارة متقدمة للحالة وسرعة استجابة فائقة وأمان متكامل.",
        service_2_title: "تطوير الويب المتكامل (Full-Stack)",
        service_2_desc: "بناء منصات ويب متكاملة وقابلة للتوسع تناسب المؤسسات الكبرى، من خلال واجهات تفاعلية جذابة بـ React وخلفية برمجية صلبة وآمنة باستخدام Laravel أو Node.js.",
        service_3_title: "هندسة وبناء الـ APIs",
        service_3_desc: "تصميم وتطوير واجهات برمجة التطبيقات (RESTful APIs) عالية الأداء، مع تحسين استهلاك الخوادم والموارد لضمان استقرار وتوافقية الأنظمة البرمجية المختلفة.",
        service_4_title: "التدريب والاستشارات التقنية",
        service_4_desc: "تقديم حقائب تدريبية متخصصة ومكثفة لفرق العمل وللأفراد، والإشراف على مشاريع التخرج وتطبيق مفاهيم هندسة البرمجيات الحديثة والمعماريات النظيفة في بيئة العمل الفعلي.",
        portfolio_subtitle: "معرض مشاريعي المتميزة",
        portfolio_title: "أعمال تتحدث عن خبرتي",
        filter_all: "الكل",
        filter_mobile: "تطبيقات الهواتف (Flutter)",
        filter_web: "منصات الويب والمؤسسات",
        project_view_details: "عرض التفاصيل",
        project_1_tag: "تطبيق هاتف / Flutter",
        project_1_title: "تطبيق نقابة المحامين بدمشق",
        project_2_tag: "منصة ويب / Laravel + React",
        project_2_title: "منصة بنك التوفير السوري",
        project_3_tag: "تطبيق هاتف / أمني وحسّاس",
        project_3_title: "تطبيق إدارة فرع الأمن",
        project_4_tag: "تطبيق هاتف / OCR",
        project_4_title: "تطبيق التعرف الضوئي للوثائق",
        project_5_tag: "تطبيق هاتف / Offline Map",
        project_5_title: "تطبيق Expo Master (معرض دمشق)",
        project_6_tag: "تطبيق هاتف / Route-Planning",
        project_6_title: "تطبيق مترو سوريا",
        project_7_tag: "بوابة ويب حكومية وتفاعلية",
        project_7_title: "البوابة الوطنية للإبداع والتميز",
        project_8_tag: "تطبيقات لوجستية وتجارة إلكترونية",
        project_8_title: "تطبيقي المسافات و LAFTA",
        skills_subtitle_main: "خلفيتي المهنية والتعليمية",
        skills_title_main: "المهارات والمسيرة المهنية",
        timeline_header: "مسيرة الخبرات والتعليم",
        timeline_1_date: "أغسطس 2025 - الآن",
        timeline_1_title: "مطور فلاتر وتطبيقات متكاملة أول (Senior Flutter & Full-Stack)",
        timeline_1_company: "شركة سمارت للخدمات البرمجية (Smart Software Services)",
        timeline_1_desc: "هندسة وصيانة تطبيقات الهاتف، وتحسين زمن الاستجابة بنسبة 25% مع إدارة الحالة عبر BLoC. بناء منصات ويب حساسة للغاية للبنك المركزي وبنك التوفير السوري باستخدام Laravel و React.",
        timeline_2_date: "2025 - الآن (دوام جزئي)",
        timeline_2_title: "مدرب برمجة Laravel",
        timeline_2_company: "مركز المنارة التدريبي (Al-Manarat Training Center)",
        timeline_2_desc: "تصميم وتقديم دورات مكثفة في تطوير الخلفيات البرمجية باستخدام Laravel وتدريب الطلاب على قواعد البيانات والـ APIs الآمنة والمتقدمة.",
        timeline_3_date: "سبتمبر 2024 - أغسطس 2025",
        timeline_3_title: "مدرب برمجيات (Flutter, Node.js & Laravel)",
        timeline_3_company: "معاهد Steps, HiTech, & Smart Tech",
        timeline_3_desc: "تطوير مناهج كاملة لتعليم هندسة البرمجيات، وتدريس أكثر من 100 طالب معماريات MVVM و MVC وتصميم الأنظمة وقواعد البيانات.",
        timeline_4_date: "ديسمبر 2023 - سبتمبر 2024",
        timeline_4_title: "مدير قسم تقنية المعلومات (IT Department Manager)",
        timeline_4_company: "الهيئة الوطنية للإبداع والتميز (nca.sy)",
        timeline_4_desc: "قيادة استراتيجيات هندسة البرمجيات للفرق وتصميم البنى التحتية والتكامل المنطقي للمنصات الحكومية وتأمين بنية الهيئة الرقمية.",
        timeline_5_date: "ديسمبر 2022 - 2023",
        timeline_5_title: "مطور تطبيقات Flutter",
        timeline_5_company: "شركة Bewire وشركة Syriana",
        timeline_5_desc: "تطوير تطبيقات ذات جودة إنتاجية عالية، والعمل ضمن نظام Agile وتسريع وتيرة تسليم مشاريع الشركة بنسبة 20%.",
        timeline_academic_date: "دراسة أكاديمية",
        timeline_academic_title: "بكالوريوس في الهندسة المعلوماتية",
        timeline_academic_school: "جامعة الشام الخاصة - كلية الهندسة المعلوماتية",
        timeline_academic_desc: "دراسة متكاملة لهندسة البرمجيات، شبكات الحاسوب، وهياكل البيانات والخوارزميات.",
        skills_header: "المهارات الفنية والتقنية",
        skills_cat_1: "إطارات العمل وبناء النظم (Frameworks & Systems)",
        skills_cat_2: "لغات البرمجة (Programming Languages)",
        skills_cat_3: "إدارة الحالة والمعمارية (State & Architecture)",
        skills_cat_4: "قواعد البيانات (Databases & Storage)",
        skills_cat_5: "الأمان والمراقبة والأدوات (Security & Tools)",
        soft_skills_header: "المهارات الشخصية (Soft Skills)",
        soft_skill_1: "إدارة الوقت والإنتاجية",
        soft_skill_2: "العمل الجماعي والقيادة",
        soft_skill_3: "حل المشكلات المعقدة",
        soft_skill_4: "التدريب والخطابة ونقل المعرفة",
        soft_skill_5: "التحليل والتخطيط الاستراتيجي",
        contact_subtitle: "هل لديك مشروع أو تدريب؟",
        contact_title: "دعنا نتواصل ونبني شيئاً رائعاً",
        contact_info_header: "قنوات الاتصال المباشر",
        contact_info_desc: "يسعدني دائماً تواصلك معي بخصوص فرص العمل، التدريب البرمجي، أو الاستشارات التقنية. سأقوم بالرد عليك في أقرب وقت ممكن.",
        contact_label_email: "راسلني عبر البريد:",
        contact_label_phone: "اتصل بي أو عبر واتساب:",
        contact_label_location: "الموقع الجغرافي:",
        contact_value_location: "دمشق، سوريا",
        social_heading: "تابعني على المنصات المهنية والاجتماعية:",
        contact_form_header: "أرسل رسالة مباشرة",
        label_name: "الاسم الكريم",
        label_email: "البريد الإلكتروني",
        label_subject: "موضوع الرسالة",
        label_message: "نص الرسالة",
        btn_submit_text: "إرسال الرسالة",
        footer_copyright: "© 2026 م. محمد فايز درويش. جميع الحقوق محفوظة. تم تصميمه بكل حب وإتقان.",
        error_name: "الرجاء إدخال الاسم",
        error_email: "الرجاء إدخال بريد إلكتروني صحيح",
        error_subject: "الرجاء إدخال عنوان للرسالة",
        error_message: "الرجاء كتابة رسالتك هنا",
        sending_status: "جاري إرسال الرسالة...",
        send_success: "تم إرسال رسالتك بنجاح! شكراً لتواصلك مع المهندس محمد."
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_skills: "Skills & Exp",
        nav_contact: "Contact",
        hero_badge: "Welcome to my development space",
        hero_title: "Eng. Mohamed Fayez Darwish",
        hero_prefix: "I am a",
        hero_desc: "Senior Full-Stack Developer & Technical Instructor. Specialized in building advanced, secure, and native-performing cross-platform mobile apps (Flutter) and highly scalable web architectures (Laravel & React & Node.js).",
        hero_cta_portfolio: "Browse Portfolio",
        hero_cta_contact: "Contact Me",
        about_subtitle: "About Me",
        about_title: "Passion for Coding, Excellence in Execution",
        about_lead: "As a Senior Full-Stack Developer and Technical Instructor, I focus on building robust, scalable software solutions that meet business needs and deliver exceptional UX.",
        about_paragraph: "I have extensive experience in designing complex system architectures, implementing clean state management, and securing apps against threats (using freeRASP). I have led software development teams for national-scale platforms in Syria, alongside a strong passion for programming mentorship, where I code-reviewed and trained over 100+ graduates to become production-ready engineers.",
        stat_experience: "Years of Experience",
        stat_projects: "Major Projects",
        stat_students: "Mentored Students",
        about_download_cv: "Download CV PDF",
        info_card_title: "Professional Info",
        info_label_job: "Job Title:",
        info_value_job: "Senior Full-Stack Developer & Instructor",
        info_label_email: "Email Address:",
        info_label_phone: "Phone Number:",
        info_label_location: "Office Location:",
        info_value_location: "Damascus, Syria",
        info_label_education: "Academic Education:",
        info_value_education: "Bachelor of Information Engineering - Al Sham Private University",
        services_subtitle: "My Services",
        services_title: "Premium Engineering Solutions",
        service_1_title: "Mobile App Development (Flutter)",
        service_1_desc: "Designing and engineering cross-platform apps (iOS & Android) with native-grade performance, clean state management (BLoC), local encryption, and enhanced runtime security.",
        service_2_title: "Full-Stack Web Development",
        service_2_desc: "Building scalable, enterprise-level web portals with modern responsive React frontends and solid, secure Laravel or Node.js backend systems.",
        service_3_title: "API Design & Architecture",
        service_3_desc: "Developing high-performance RESTful APIs, optimizing database queries, server resources, and monitoring systems to minimize production runtime errors.",
        service_4_title: "Mentorship & Consultations",
        service_4_desc: "Providing intensive coding curriculums and project code reviews. Guiding engineering outputs to align with modern architectural patterns (Clean Architecture, SOLID, MVC/MVVM).",
        portfolio_subtitle: "Featured Projects",
        portfolio_title: "Work That Speaks For Itself",
        filter_all: "All",
        filter_mobile: "Mobile Apps (Flutter)",
        filter_web: "Web Platforms & Portals",
        project_view_details: "View Details",
        project_1_tag: "Mobile App / Flutter",
        project_1_title: "Damascus Lawyers App",
        project_2_tag: "Web Portal / Laravel + React",
        project_2_title: "Al Tawfeer Bank Web Platform",
        project_3_tag: "Mobile App / High-Security",
        project_3_title: "Security Branch Management App",
        project_4_tag: "Mobile App / OCR & ML",
        project_4_title: "Investigation Dept. OCR Utility",
        project_5_tag: "Mobile App / Offline-First",
        project_5_title: "Expo Master App (Damascus Fair)",
        project_6_tag: "Mobile App / Route-Planning",
        project_6_title: "Metro Syria Application",
        project_7_tag: "Enterprise Portal / Web security",
        project_7_title: "National Creativity Platform",
        project_8_tag: "Logistics Apps / E-Commerce",
        project_8_title: "Al Massafat & LAFTA Apps",
        skills_subtitle_main: "My Background",
        skills_title_main: "Skills & Career Timeline",
        timeline_header: "Experience & Education Timeline",
        timeline_1_date: "Aug 2025 - Present",
        timeline_1_title: "Senior Flutter & Full-Stack Developer",
        timeline_1_company: "Smart Software Services Company",
        timeline_1_desc: "Architect, optimize, and maintain cross-platform mobile apps using Flutter. Reduce rendering latency by 25% via BLoC. Build high-security web portals for Al Tawfeer Bank and Syrian Central Bank utilizing Laravel and React.",
        timeline_2_date: "2025 - Present (Part-time)",
        timeline_2_title: "Laravel Programming Instructor",
        timeline_2_company: "Al-Manarat Training Center",
        timeline_2_desc: "Deliver intensive Laravel backend development training. Instruct students on database optimization, PHP best practices, and secure RESTful API integrations.",
        timeline_3_date: "Sep 2024 - Aug 2025",
        timeline_3_title: "Programming Instructor (Flutter, Node.js & Laravel)",
        timeline_3_company: "Steps, HiTech, & Smart Tech Institutes",
        timeline_3_desc: "Instructed software architectures (MVC, MVVM), clean APIs, and database schemes. Code-reviewed and mentored 100+ students on their graduation projects.",
        timeline_4_date: "Dec 2023 - Sep 2024",
        timeline_4_title: "IT Department Manager",
        timeline_4_company: "National Creativity Authority Organization (nca.sy)",
        timeline_4_desc: "Led software engineering strategies and technical teams. Oversaw infrastructure security, firewalls, and access control paradigms.",
        timeline_5_date: "Dec 2022 - 2023",
        timeline_5_title: "Flutter Developer",
        timeline_5_company: "Bewire Company & Syriana Company",
        timeline_5_desc: "Deployed production-grade cross-platform apps. Collaborated within Agile/Scrum sprints with UI/UX designers and QA testers to accelerate delivery.",
        timeline_academic_date: "Academic Studies",
        timeline_academic_title: "Bachelor of Information Engineering",
        timeline_academic_school: "Al Sham Private University - Information Engineering",
        timeline_academic_desc: "Specialized in software engineering principles, computer networks, algorithms, and data structures.",
        skills_header: "Technical Skills",
        skills_cat_1: "Frameworks & Ecosystems",
        skills_cat_2: "Programming Languages",
        skills_cat_3: "Architecture & State Management",
        skills_cat_4: "Databases & Storage",
        skills_cat_5: "Security, Tools & DevOps",
        soft_skills_header: "Soft Skills",
        soft_skill_1: "Time Management & Productivity",
        soft_skill_2: "Team Collaboration & Leadership",
        soft_skill_3: "Analytical Problem Solving",
        soft_skill_4: "Technical Mentorship & Speaking",
        soft_skill_5: "Strategic Planning & Analysis",
        contact_subtitle: "Have a Project or Training Request?",
        contact_title: "Let's Connect and Build Something Great",
        contact_info_header: "Direct Channels",
        contact_info_desc: "Feel free to reach out for career opportunities, programming training, or technical consultations. I will respond as soon as possible.",
        contact_label_email: "Email Address:",
        contact_label_phone: "Call / WhatsApp:",
        contact_label_location: "Office Location:",
        contact_value_location: "Damascus, Syria",
        social_heading: "Follow me on Professional Networks:",
        contact_form_header: "Send a Direct Message",
        label_name: "Your Full Name",
        label_email: "Email Address",
        label_subject: "Subject",
        label_message: "Your Message",
        btn_submit_text: "Send Message",
        footer_copyright: "© 2026 Eng. Mohamed Fayez Darwish. All Rights Reserved. Designed with passion.",
        error_name: "Please enter your name",
        error_email: "Please enter a valid email address",
        error_subject: "Please enter a message subject",
        error_message: "Please write your message here",
        sending_status: "Sending message...",
        send_success: "Your message was sent successfully! Thank you for contacting Mohamed."
    }
};

// 2. Case Studies Multi-Language Data
const projectsData = {
    1: {
        ar: {
            title: "تطبيق نقابة المحامين بدمشق",
            category: "تطبيق هاتف ذكي",
            client: "نقابة المحامين بدمشق، سوريا",
            problem: "الحاجة الملحّة لوجود قناة اتصال رقمية موحدة ومنصة موثوقة تربط كافة المحامين المسجلين في نقابة دمشق، لتسهيل عمليات التوثيق الإلكتروني وتبادل القرارات والتعاميم القانونية بالإضافة لتيسير الخدمات النقابية اليومية دون الاضطرار للحضور الشخصي، وتفادي ضياع الوقت وتضخم الملفات الورقية.",
            solution: "قمت بهندسة وبرمجة تطبيق متكامل يربط أعضاء النقابة بقواعد البيانات المركزية. تم تصميم الواجهة الأمامية بشكل متكامل وسلس باستخدام Flutter لضمان الأداء العالي والتجاوب المطلق مع نظامي Android و iOS، بينما تم بناء نظام الخلفية ولوحة التحكم الإدارية باستخدام Laravel مع واجهات RESTful APIs عالية الكفاءة لتسريع معالجة البيانات وتوفير درجات أمان عالية لحماية سرية المراسلات والوثائق القانونية.",
            tech: ["Flutter", "Laravel", "MySQL", "RESTful APIs", "State Management (BLoC)", "Secure Storage"]
        },
        en: {
            title: "Damascus Lawyers App",
            category: "Mobile Application",
            client: "Damascus Lawyers Association, Syria",
            problem: "The legal community in Damascus lacked a secure digital directory and portal to process credentials, exchange official court schedules, and access administrative union circulars, leading to heavy bureaucracy and lost physical records.",
            solution: "Designed and engineered an end-to-end cross-platform mobile app. Built a responsive Flutter client optimized for both iOS and Android. Constructed a robust backoffice panel and RESTful APIs using Laravel to safely manage records, notifications, and sensitive lawyer registry details.",
            tech: ["Flutter", "Laravel", "MySQL", "RESTful APIs", "BLoC State Management", "Secure Storage"]
        }
    },
    2: {
        ar: {
            title: "منصة بنك التوفير السوري",
            category: "منصة ويب مصرفية للمؤسسات",
            client: "بنك التوفير، سوريا (saving-bank.sy)",
            problem: "الحاجة لتوفير منصة ويب حديثة تعزز الرقمنة المصرفية للبنك وتسهل على المودعين والأفراد الاستعلام الإلكتروني عن الحسابات وخدمات البنك الاستثمارية والقروض بشكل مرن وآمن، مع تبسيط الواجهات وتسهيل الوصول إليها على مختلف الأجهزة.",
            solution: "برمجة وبناء منصة الويب التفاعلية الكاملة للبنك. تم استخدام Laravel كخلفية برمجية متطورة لتنظيم البيانات وإدارة الحسابات وربطها بقواعد البيانات المصرفية المشفرة، في حين تم توظيف React.js لبناء واجهة مستخدم حديثة وسلسة توفر أعلى درجات المرونة والتجاوب (UI/UX) والتفاعل اللحظي مع الزوار مع التقيد التام بمعايير الأمن المصرفي وحماية الخصوصية للمستعلمين.",
            tech: ["React.js", "Laravel", "PostgreSQL", "RESTful APIs", "Tailwind CSS", "Enterprise Security"]
        },
        en: {
            title: "Al Tawfeer Bank Web Platform",
            category: "Enterprise Web Portal",
            client: "Al Tawfeer Savings Bank, Syria (saving-bank.sy)",
            problem: "The state savings bank required a modern customer-facing portal to display financial services, manage account balances, handle customer queries, and enable secure digital inquiries without requiring in-person branch visits.",
            solution: "Programmed a scalable web ecosystem. Built a dynamic, responsive user interface utilizing React.js, and a secure Laravel backend. Integrated banking security policies and optimized RESTful APIs for database synchronization.",
            tech: ["React.js", "Laravel", "PostgreSQL", "RESTful APIs", "Tailwind CSS", "Enterprise Security"]
        }
    },
    3: {
        ar: {
            title: "تطبيق إدارة فرع الأمن",
            category: "تطبيق هاتف أمني وحسّاس",
            client: "جهة أمنية حكومية بدمشق",
            problem: "الحاجة إلى نظام اتصالات داخلي وإدارة مهام شديد الأمان لتنظيم العمليات وتوزيع وتفويض المهام والمسؤوليات الحساسة والمراسلات والتقارير بين القيادة والموظفين التشغيليين، دون الاعتماد على خوادم تجارية عامة ومع تأمين البيانات ضد الاختراقات وتسريب المعلومات.",
            solution: "تتطوير تطبيق هاتف ذكي مغلق وعالي الحماية باستخدام Flutter. قمت بتطبيق معايير أمنية صارمة ومتقدمة تشمل تشفير البيانات محلياً على أجهزة الموظفين باستخدام Hive ومكتبات التشفير، ودعم تشفير الرسائل لحظياً، وتأمين التطبيق باستخدام بروتوكول freeRASP للكشف عن محاولات الاختراق وكسر الحماية (Root/Jailbreak detection)، وربطه بالخوادم الخاصة المشفرة لضمان أقصى حماية تشغيلية ممكنة.",
            tech: ["Flutter", "freeRASP", "Firebase", "Local Encryption (Hive)", "Secure Networking", "Task Delegation System"]
        },
        en: {
            title: "Security Branch Management App",
            category: "High-Security Mobile App",
            client: "National Security Agency Branch, Damascus",
            problem: "Required a highly secure task assignment and internal intelligence relay system. Commercial messenger apps were prohibited due to privacy risks. The app needed extreme hardware security and complete end-to-end data encryption.",
            solution: "Developed a closed-network Flutter mobile utility. Configured local encryption database caches using Hive. Integrated freeRASP library standards to enforce runtime application shields (detecting jailbreaks, debuggers, or repackaging attacks) to maintain bulletproof communication paths.",
            tech: ["Flutter", "freeRASP", "Firebase", "Local Encryption (Hive)", "Secure Networking", "Task Delegation System"]
        }
    },
    4: {
        ar: {
            title: "تطبيق التعرف الضوئي للوثائق (OCR)",
            category: "تطبيق هاتف معالجة صور وذكاء اصطناعي",
            client: "قسم التحقيقات والأرشفة",
            problem: "تراكم آلاف الملفات والتقارير المكتوبة يدوياً أو المطبوعة قديماً، واستهلاك ساعات طويلة من عمل الموظفين في أرشفتها ورقمنتها يدوياً للبحث فيها عن الكلمات المفتاحية أو الأسماء.",
            solution: "برمجة تطبيق هاتف محمول ذكي لرقمنة الوثائق مع دمج تقنية التعرف الضوئي على الحروف (OCR). يتيح التطبيق للمستخدمين تصوير الوثائق الورقية والملفات ومعالجتها وتحويلها فورياً إلى ملفات نصية رقمية قابلة للبحث والتعديل وتصديرها بصيغة PDF أو Word. يعتمد التطبيق على محرك معالجة صور مخصص بالخلفية لزيادة جودة الصور الملتقطة ومستوى دقة التعرف على النصوص العربية المكتوبة.",
            tech: ["Flutter", "Python Backend", "OCR Engine (Tesseract/ML Kit)", "Image Processing", "SQLite"]
        },
        en: {
            title: "Investigation Dept. OCR Application",
            category: "Image Processing & AI Utility",
            client: "Security Investigation & Archives Dept.",
            problem: "Filing and locating information in thousands of historical, hand-written investigator dossiers was creating extreme delay in indexing, requiring a tool to instantly read handwriting and output digital logs.",
            solution: "Programmed an OCR mobile utility using Flutter. Implemented image preprocessing scripts on a Python server to enhance contrast and clarity of handwritten input. Utilized Tesseract and ML Kit modules for translating image texts to editable digital files.",
            tech: ["Flutter", "Python Backend", "OCR Engine (Tesseract/ML Kit)", "Image Processing", "SQLite"]
        }
    },
    5: {
        ar: {
            title: "تطبيق Expo Master (معرض دمشق الدولي)",
            category: "تطبيق هاتف بدون اتصال (Offline-first)",
            client: "المؤسسة العامة للمعارض، سوريا",
            problem: "يواجه زوار معرض دمشق الدولي الضخم صعوبة في التنقل والوصول إلى أجنحة الدول أو الشركات المختلفة، لاسيما مع انقطاع أو ضعف تغطية شبكة الإنترنت نتيجة الازدحام الشديد والضغط على الأبراج خلال فترة إقامة المعرض.",
            solution: "قدت الفريق البرمجي لتصميم وبناء تطبيق رسمي ذكي يعمل بشكل كامل دون الحاجة للاتصال بالإنترنت (Offline-first). قمت ببناء آلية تخزين مؤقت وقواعد بيانات محلية SQLite لتخزين وتحديث بيانات العارضين والشركات قبل الزيارة، ودعم التطبيق بخرائط تفاعلية مبنية برسم هندسي خفيف (SVG-based Interactive Map) للملاحة وتوجيه الزائر بدقة وتسهيل العثور على الفعاليات والخدمات.",
            tech: ["Flutter", "SQLite", "Local Caching", "SVG Interactive Maps", "Offline Synchronization"]
        },
        en: {
            title: "Expo Master App (Damascus Fair)",
            category: "Offline-First Mobile App",
            client: "General Exhibitions Directorate, Syria",
            problem: "Visitors to the highly-congested Damascus International Fair struggled with booth location mapping. Heavy cellular traffic regularly knocked out active data networks at the venue.",
            solution: "Led a development team to implement an offline-first navigator. Developed a cached SQLite database containing exhibitor tags and event timetables, and engineered an offline-first interactive map using vector SVGs to allow navigation without network access.",
            tech: ["Flutter", "SQLite", "Local Caching", "SVG Interactive Maps", "Offline Synchronization"]
        }
    },
    6: {
        ar: {
            title: "تطبيق مترو سوريا",
            category: "تطبيق هاتف خرائط وتحديد مواقع",
            client: "إدارة مشروع مترو دمشق، سوريا",
            problem: "الرغبة في إطلاق تطبيق ذكي مبسط يرافق الركاب ويساعدهم في التخطيط لرحلات المترو والبحث عن المحطات ومعرفة الأوقات والمسارات والتعريفة بدقة تامة دون تعقيد.",
            solution: "برمجة وبناء التطبيق الرسمي للمترو. قمت ببرمجة وتطوير خوارزميات لحساب المسار الأقصر والأنسب (Route-planning) للمسافر بين المحطات المختلفة وعرض زمن الرحلة المتوقع، مع ربطه بخرائط جوجل (Google Maps API) لتحديد مواقع المحطات ومسافة البعد عنها، وتخزين خرائط الخطوط محلياً لسرعة التحميل وتخفيف استهلاك بيانات الهاتف للركاب.",
            tech: ["Flutter", "Google Maps API", "SQLite", "Route Search Algorithms", "Dynamic Pricing & Schedules"]
        },
        en: {
            title: "Metro Syria Application",
            category: "Mapping & Router Mobile App",
            client: "Damascus Metro Project, Syria",
            problem: "Syrian commuters lacked transit planning portals to track metro lines, identify optimal routes, estimate station-to-station ticket costs, or receive delay alerts.",
            solution: "Built a route-planning application. Integrated Google Maps API to capture real-time user location, and wrote a customized pathfinding algorithm that lists shortest route connections alongside local SQLite schedulers for offline use.",
            tech: ["Flutter", "Google Maps API", "SQLite", "Route Search Algorithms", "Dynamic Pricing & Schedules"]
        }
    },
    7: {
        ar: {
            title: "البوابة الوطنية للإبداع والتميز",
            category: "بوابة ويب تفاعلية وطنية للمؤسسات",
            client: "الهيئة الوطنية للإبداع والتميز (nca.sy)",
            problem: "الحاجة لنظام مركزي وطني يتيح للمبدعين والمبتكرين في مختلف المحافظات السورية رفع وتسجيل مشاريعهم واختراعاتهم الرقمية والتقنية، لتقييمها بشكل إلكتروني من قِبل لجان مختصة وتتتبع نموها وتمويلها بطريقة شفافة ومرتبة.",
            solution: "بناء بوابة تفاعلية متطورة للمؤسسة (nca.sy) تمكن المستخدمين والباحثين من إنشاء حسابات وإدارة ملفاتهم الابتكارية ورفع مستندات مشاريعهم بأمان. صُممت المنصة باعتماد Laravel كنظام إدارة بيانات وخلفية برمجية صلبة مرتبطة بقواعد بيانات SQL Server، مع واجهات ويب متجاوبة وتطبيق جدران حماية برمجية قوية وتحديد صلاحيات دقيق (Role-Based Access Control) للجان التقييم والإدارة لتفادي الاختراقات وحماية الملكية الفكرية للمبدعين.",
            tech: ["Laravel", "React", "SQL Server", "Bootstrap", "Web Application Firewalls", "Role-Based Access Control"]
        },
        en: {
            title: "National Creativity Platform",
            category: "Interactive Government Portal",
            client: "National Creativity Authority, Syria (nca.sy)",
            problem: "Required a secure, central registry where creators nationwide could upload research, track evaluation cycles, request development grants, and interact with academic committees.",
            solution: "Designed and built an interactive system (nca.sy). Structured a React interface connected to a secure SQL Server database powered by Laravel. Formulated custom web firewalls and strict role hierarchy logic to protect intellectual property.",
            tech: ["Laravel", "React", "SQL Server", "Bootstrap", "Web Application Firewalls", "Role-Based Access Control"]
        }
    },
    8: {
        ar: {
            title: "تطبيقي المسافات و LAFTA",
            category: "تطبيقات هواتف لوجستية وتجارة إلكترونية",
            client: "شركات شحن لوجستي وتوصيل وتجارة إلكترونية (laftahapp.com)",
            problem: "الحاجة لحل لوجستي مرن يربط التجار بالمناديب والعملاء لتوصيل الشحنات والمنتجات، ويوفر للشركات القدرة على تتبع المناديب وإدارة الطلبات والمدفوعات والمستودعات لحظة بلحظة وبصورة تفاعلية فورية.",
            solution: "هندسة وبناء تطبيقين للهواتف الذكية للعملاء والتجار وتطوير لوحة تحكم إدارية شاملة للمشرفين. تم بناء تطبيقات الهواتف بـ Flutter، وربطها بشكل مباشر بقواعد بيانات Firebase السحابية الفورية (Real-time Database & Cloud Firestore) لإرسال الإشعارات اللحظية وحالة الطلب وتحديث موقع المندوب على الخريطة، بالإضافة إلى تطوير الواجهة الإدارية الخلفية باستخدام React لمتابعة التحليلات والتقارير المالية.",
            tech: ["Flutter", "Firebase Cloud Firestore", "Realtime Maps Integration", "Push Notifications", "React (Admin Dashboard)", "Cloud Functions"]
        },
        en: {
            title: "Al Massafat & LAFTA Apps",
            category: "Logistics & E-Commerce Apps",
            client: "laftahapp.com Delivery & Logistics Agency",
            problem: "Logistics coordinators struggled to manage delivery drivers, track active cargo locations, sync merchant invoices, and update retail clients concurrently.",
            solution: "Engineered dual Flutter mobile applications connected to Firebase real-time systems. Enabled live GPS coordinate plotting, push-notification logs, and a clean administrative dashboard using React for invoice audit reporting.",
            tech: ["Flutter", "Firebase Cloud Firestore", "Realtime Maps Integration", "Push Notifications", "React (Admin Dashboard)", "Cloud Functions"]
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // 3. Language Switching Mechanism
    let currentLang = localStorage.getItem('portfolio-lang') || 'ar';

    const langSwitchBtn = document.getElementById('lang-switch-btn');
    const langBtnText = document.getElementById('lang-btn-text');

    // Text Strings for Typing Effect
    const arStrings = [
        "مطور تطبيقات هواتف Flutter أول",
        "مطور Laravel وويب متكامل",
        "مدرب ومستشار تقني محترف",
        "مهندس معلوماتية شغوف بالابتكار"
    ];
    const enStrings = [
        "Senior Flutter Developer",
        "Full-Stack Laravel Specialist",
        "Professional Technical Mentor",
        "Passionate Information Engineer"
    ];

    let stringsToType = currentLang === 'ar' ? arStrings : enStrings;
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    const typedTextSpan = document.getElementById('typed-text');

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio-lang', lang);

        // Update document tags
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update Switcher Button Text
        if (langBtnText) {
            langBtnText.textContent = lang === 'ar' ? 'EN' : 'عربي';
        }

        // Translate all data-i18n elements
        const i18nElements = document.querySelectorAll('[data-i18n]');
        i18nElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // If it is a button/input value, check, otherwise set innerHTML
                if (el.tagName === 'INPUT' && el.type === 'submit') {
                    el.value = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Reset inputs placeholders dynamically if needed
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        const nameLabel = document.querySelector('label[for="name"]');
        const emailLabel = document.querySelector('label[for="email"]');
        const subjectLabel = document.querySelector('label[for="subject"]');
        const messageLabel = document.querySelector('label[for="message"]');

        if (nameLabel) nameLabel.textContent = translations[lang].label_name;
        if (emailLabel) emailLabel.textContent = translations[lang].label_email;
        if (subjectLabel) subjectLabel.textContent = translations[lang].label_subject;
        if (messageLabel) messageLabel.textContent = translations[lang].label_message;

        // Reset Typing effect
        stringIndex = 0;
        charIndex = 0;
        isDeleting = false;
        stringsToType = lang === 'ar' ? arStrings : enStrings;
        if (typedTextSpan) typedTextSpan.textContent = '';
    }

    // Bind lang switch button click
    if (langSwitchBtn) {
        langSwitchBtn.addEventListener('click', () => {
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            applyLanguage(newLang);
        });
    }

    // Initialize Language
    applyLanguage(currentLang);


    // 4. Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navToggleIcon = navToggle.querySelector('i');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            if (navMenu.classList.contains('open')) {
                navToggleIcon.classList.remove('fa-bars');
                navToggleIcon.classList.add('fa-times');
            } else {
                navToggleIcon.classList.remove('fa-times');
                navToggleIcon.classList.add('fa-bars');
            }
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                navToggleIcon.classList.remove('fa-times');
                navToggleIcon.classList.add('fa-bars');
            });
        });
    }

    // 5. Sticky Navbar & Active Link Selection
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinksList = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinksList.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // 6. Back to Top Button
    const btnBackToTop = document.getElementById('btn-back-to-top');
    if (btnBackToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                btnBackToTop.classList.add('show');
            } else {
                btnBackToTop.classList.remove('show');
            }
        });

        btnBackToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 7. Typing Effect Animation Loop
    function typeEffect() {
        if (!typedTextSpan) return;

        const currentString = stringsToType[stringIndex];
        
        if (isDeleting) {
            typedTextSpan.textContent = currentString.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            typedTextSpan.textContent = currentString.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 90;
        }

        if (!isDeleting && charIndex === currentString.length) {
            isDeleting = true;
            typingSpeed = 2200; // time string is visible
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            stringIndex = (stringIndex + 1) % stringsToType.length;
            typingSpeed = 400; // pause before typing next
        }

        setTimeout(typeEffect, typingSpeed);
    }
    
    // Start typing
    typeEffect();

    // 8. Scroll-triggered Stats Animation
    const statsSection = document.querySelector('.about-stats');
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    function animateStats() {
        if (animated) return;
        statNumbers.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            let count = 0;
            const speed = target > 50 ? Math.ceil(target / 50) : 1;
            const updateCount = () => {
                count += speed;
                if (count >= target) {
                    stat.textContent = target;
                } else {
                    stat.textContent = count;
                    setTimeout(updateCount, 25);
                }
            };
            updateCount();
        });
        animated = true;
    }

    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        statsObserver.observe(statsSection);
    }

    // 9. Portfolio Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 10. Dynamic Project Modals Injection
    const projectModal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const portfolioGrid = document.getElementById('portfolio-grid');

    if (portfolioGrid && projectModal && modalBody) {
        
        portfolioGrid.addEventListener('click', (e) => {
            const itemWrapper = e.target.closest('.portfolio-item-wrapper');
            if (!itemWrapper) return;

            const projectId = itemWrapper.getAttribute('data-project-id');
            const dataSet = projectsData[projectId];

            if (dataSet && dataSet[currentLang]) {
                const data = dataSet[currentLang];
                const techBadges = data.tech.map(t => `<span class="modal-tech-tag">${t}</span>`).join('');
                
                const clientLabel = currentLang === 'ar' ? 'العميل / المؤسسة:' : 'Client / Agency:';
                const techLabel = currentLang === 'ar' ? 'التقنيات والأدوات:' : 'Technologies:';
                const problemHeader = currentLang === 'ar' ? 'المشكلة / التحدي' : 'The Challenge';
                const solutionHeader = currentLang === 'ar' ? 'الحل ودوري في المشروع' : 'The Solution & Role';
                const visitBtnText = currentLang === 'ar' ? 'زيارة المشروع المباشر' : 'Visit Live Project';
                const lockedBtnText = currentLang === 'ar' ? 'تطبيق داخلي / مغلق' : 'Closed Network App';

                modalBody.innerHTML = `
                    <span class="modal-header-tag">${data.category}</span>
                    <h3 class="modal-project-title">${data.title}</h3>
                    <div class="modal-divider"></div>
                    
                    <div class="modal-details-grid">
                        <div class="modal-main-content">
                            <div class="modal-section">
                                <h4 class="modal-section-title"><i class="fas fa-exclamation-circle"></i> ${problemHeader}</h4>
                                <p class="modal-section-p">${data.problem}</p>
                            </div>
                            <div class="modal-section">
                                <h4 class="modal-section-title"><i class="fas fa-check-circle"></i> ${solutionHeader}</h4>
                                <p class="modal-section-p">${data.solution}</p>
                            </div>
                        </div>
                        
                        <div class="modal-sidebar">
                            <div class="modal-meta-item">
                                <span class="meta-label">${clientLabel}</span>
                                <span class="meta-value">${data.client}</span>
                            </div>
                            <div class="modal-meta-item">
                                <span class="meta-label">${techLabel}</span>
                                <div class="modal-tech-tags">
                                    ${techBadges}
                                </div>
                            </div>
                            ${dataSet.link && dataSet.link !== '#' ? `
                            <div class="modal-btn-wrapper">
                                <a href="${dataSet.link}" target="_blank" class="btn btn-primary">${visitBtnText} <i class="fas fa-external-link-alt"></i></a>
                            </div>
                            ` : `
                            <div class="modal-btn-wrapper">
                                <button disabled class="btn btn-outline" style="cursor: not-allowed; width: 100%; opacity: 0.6;">${lockedBtnText} <i class="fas fa-lock"></i></button>
                            </div>
                            `}
                        </div>
                    </div>
                `;

                projectModal.classList.add('active');
                projectModal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            }
        });

        function closeModal() {
            projectModal.classList.remove('active');
            projectModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        }

        if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
        if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
        
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && projectModal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // 11. Contact Form Handling & Validation
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            
            let isValid = true;

            formStatus.className = 'form-status';
            formStatus.textContent = '';

            const setInvalid = (input, errorEl, msgKey) => {
                const group = input.closest('.form-group');
                group.classList.add('invalid');
                errorEl.textContent = translations[currentLang][msgKey];
                isValid = false;
            };

            const setValid = (input) => {
                const group = input.closest('.form-group');
                group.classList.remove('invalid');
            };

            // Name
            const nameError = document.getElementById('name-error');
            if (nameInput.value.trim() === '') {
                setInvalid(nameInput, nameError, 'error_name');
            } else {
                setValid(nameInput);
            }

            // Email
            const emailError = document.getElementById('email-error');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                setInvalid(emailInput, emailError, 'error_email');
            } else {
                setValid(emailInput);
            }

            // Subject
            const subjectError = document.getElementById('subject-error');
            if (subjectInput.value.trim() === '') {
                setInvalid(subjectInput, subjectError, 'error_subject');
            } else {
                setValid(subjectInput);
            }

            // Message
            const messageError = document.getElementById('message-error');
            if (messageInput.value.trim() === '') {
                setInvalid(messageInput, messageError, 'error_message');
            } else {
                setValid(messageInput);
            }

            if (isValid) {
                const submitBtn = contactForm.querySelector('.btn-submit');
                const submitBtnTextSpan = submitBtn.querySelector('span');
                const originalBtnContent = submitBtnTextSpan.textContent;
                
                submitBtn.disabled = true;
                submitBtnTextSpan.textContent = translations[currentLang].sending_status;

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtnTextSpan.textContent = originalBtnContent;
                    
                    formStatus.textContent = translations[currentLang].send_success;
                    formStatus.classList.add('success');
                    
                    contactForm.reset();
                }, 1500);
            }
        });

        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                const group = input.closest('.form-group');
                if (input.value.trim() !== '') {
                    group.classList.remove('invalid');
                }
            });
        });
    }
});
