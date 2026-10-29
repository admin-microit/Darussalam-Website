document.addEventListener("DOMContentLoaded", function () {
    // =========================
    // ENGLISH / MYANMAR LANGUAGE SWITCH
    // Translates page text without replacing HTML elements or links.
    // =========================
    const translations = {
        "Home": "ပင်မစာမျက်နှာ", "About Us": "ကျွန်ုပ်တို့အကြောင်း", "Explore": "လေ့လာရန်",
        "Academy": "အကယ်ဒမီ", "Travel": "ခရီးသွား", "Contact Us": "ဆက်သွယ်ရန်",
        "WE'RE HERE FOR YOU": "သင့်အတွက် ကျွန်ုပ်တို့ရှိနေပါသည်", "Our Story": "ကျွန်ုပ်တို့၏ တည်ထောင်မှုနောက်ခံ",
       "Darussalam Academy Myanmar was established in January 2025 as an educational initiative dedicated to the systematic study of Islamic sciences and their relevance to contemporary knowledge and issues.":"Darussalam Academy Myanmar ကို ၂၀၂၅ ခုနှစ် ဇန်နဝါရီလတွင် စတင်တည်ထောင်ခဲ့ပါသည်။ အစ္စလာမ့်ပညာရပ်များကို စနစ်တကျ လေ့လာသင်ယူခြင်းနှင့် ခေတ်ပြိုင်အသိပညာများနှင့် ဆက်စပ်၍ ဆန်းစစ်သုံးသပ်ခြင်းတိုကို အလေးထားသည့် ပညာရေးဆိုင်ရာ ကြိုးပမ်းမှုတစ်ရပ်အဖြစ် စတင်ခဲ့ပါသည်။",
        "Get In Touch": "ဆက်သွယ်မေးမြန်းရန်", "Faith & Guidance": "ယုံကြည်မှုနှင့် လမ်းညွှန်မှု",
        "Trusted Service": "ယုံကြည်စိတ်ချရသော ဝန်ဆောင်မှု", "Community First": "လူမှုအသိုင်းအဝိုင်းကို ဦးစားပေးမှု",
        "Journey Together": "အတူတကွ ခရီးဆက်ကြမယ်", "CONTACT US": "ဆက်သွယ်ရန်",
        "We'd Love to": "ကျွန်ုပ်တို့ထံ ", "Hear From You": "ဆက်သွယ်ပြောကြားပါ",
        "Have a question about our Academy or Travel services? Send us a message and our team will get back to you.": "ကျွန်ုပ်တို့၏ အကယ်ဒမီ သို့မဟုတ် ခရီးသွားဝန်ဆောင်မှုများနှင့် ပတ်သက်၍ မေးမြန်းလိုပါသလား။ စာပေးပို့ထားပါ၊ ကျွန်ုပ်တို့အဖွဲ့မှ ပြန်လည်ဆက်သွယ်ပေးပါမည်။",
        "Full Name": "အမည်အပြည့်အစုံ", "Email Address": "အီးမေးလ်လိပ်စာ", "Phone Number": "ဖုန်းနံပါတ်",
        "Interested In": "စိတ်ဝင်စားသောဝန်ဆောင်မှု", "Select a service": "ဝန်ဆောင်မှုရွေးချယ်ပါ",
        "Other": "အခြား", "Your Message": "သင့်စာတို", "Send Message": "စာပေးပို့ရန်",
        "STAY CONNECTED": "ဆက်လက်ချိတ်ဆက်ထားပါ", "Join Our Newsletter": "သတင်းလွှာတွင် ပါဝင်ရန်",
        "Receive inspiring stories, travel updates, and helpful resources for your spiritual journey.": "စိတ်အားတက်ကြွဖွယ်အကြောင်းအရာများ၊ ခရီးသွားသတင်းများနှင့် သင့်ဘဝခရီးအတွက် အသုံးဝင်သော အချက်အလက်များကို ရယူလိုက်ပါ။",
        "Subscribe": "စာရင်းသွင်းရန်", "OUR CONTACT DETAILS": "ဆက်သွယ်ရန်အချက်အလက်များ",
        "Let's Start a": "အတူတကွ", "Conversation": "ချိတ်ဆက်ကြမယ်",
        "Call Us": "ဖုန်းဆက်ရန်", "Email Us": "အီးမေးလ်ပို့ရန်", "Come":"လာရောက်","Visit Us": "လည်ပတ်ရန်",
        "Monday – Friday, 9 AM – 4 PM": "တနင်္လာမှ သောကြာ၊ နံနက် ၉ မှ ညနေ ၄ နာရီ",
        "We usually reply within 24 hours.": "ပုံမှန်အားဖြင့် ၂၄ နာရီအတွင်း ပြန်လည်ဖြေကြားပါသည်။",
        "We'd be happy to meet you.": "လူကိုယ်တိုင် လာရောက်တွေ့ဆုံနိုင်ပါသည်။",
        "FIND OUR LOCATION": "တည်နေရာရှာရန်", "Come Visit Us": "လာရောက်လည်ပတ်ပါ",
        "Open Google Maps": "Google Maps ဖွင့်ရန်", "Navigation": "လမ်းညွှန်",
        "Get in Touch": "ဆက်သွယ်ရန်", "Our Services": "ကျွန်ုပ်တို့၏ဝန်ဆောင်မှုများ",
        "Islamic Academy": "အစ္စလာမ့်အကယ်ဒမီ", "Travel Packages": "ခရီးသွားအစီအစဉ်များ",
        "Support": "အကူအညီ", "Guiding your journey with faith, care, and meaningful experiences.": "ယုံကြည်မှု၊ ဂရုစိုက်မှုနှင့် အဓိပ္ပာယ်ပြည့်ဝသော အတွေ့အကြုံများဖြင့် သင့်ခရီးလမ်းကို လမ်းညွှန်ပေးပါသည်။",
        "A meaningful journey begins with good intentions, trusted guidance, and a willingness to learn.": "အဓိပ္ပာယ်ပြည့်ဝသော ခရီးစဉ်တစ်ခုသည် စိတ်ရင်းကောင်းများ၊ ယုံကြည်စိတ်ချရသော လမ်းညွှန်မှုများနှင့် သင်ယူလိုစိတ်တို့မှ စတင်ပါသည်။",
        "All Rights Reserved.": "မူပိုင်ခွင့်အားလုံး ရယူထားသည်။", "Made with care for your spiritual journey.": "သင့်ဘဝခရီးအတွက် စေတနာဖြင့် ဖန်တီးထားပါသည်။","Learning with purpose, travelling with care, and growing together through meaningful experiences.":"လေ့လာသင်ယူမှုမှ တိုးတက်မှုဆီသို့","GET TO KNOW US":"ပိုမိုသိရှိရန်",
        "OUR VISION":"ကျွန်ုပ်တို့၏ မျှော်မှန်းချက်","Empowering":"အတူတကွ","lives,":"ဖွံ့ဖြိုး၊","Strengthing":"အနာဂတ်","Communities":" ပုံဖော်",
        "To become a trusted institution for Islamic education and scholarship in Myanmar.":"မြန်မာနိုင်ငံတွင် အစ္စလာမ့်ပညာရေးနှင့် ပညာရပ်ဆိုင်ရာ လေ့လာသုံးသပ်မှုနယ်ပယ်၌ ယုံကြည်အားထားရသော ပညာရေးအဖွဲအစည်းတစ်ခု ဖြစ်လာရန်။",
        "OUR MISSION":"ကျွန်ုပ်တို့၏ လုပ်ငန်းရည်ရွယ်ချက်","Inspiring":"သင်ယူမှု","Learning,":"မှ","Creating":"အောင်မြင်မှုဆီ","Impact":"သို့","To provide quality educational programs grounded in authentic Islamic sources and sound scholarly methodologies, cultivate critical thinking, and promote informed engagement with contemporary knowledge, ideas, and societal challenges through Islamic scholarship.":"ခိုင်မာသော အစ္စလာမ့်ကျမ်းရင်းမြစ်များနှင့် ပညာရပ်ဆိုင်ရာ နည်းစနစ်များကို အခြေခံ၍ အရည်အသွေးမြင့် ပညာရေးအစီအစဉ်များ ဖော်ဆောင်ခြင်း၊ ဝေဖန်ပိုင်းခြားစဉ်းစားနိုင်စွမ်းကို မြှင့်တင်ခြင်းနှင့် ခေတ်ပြိုင်အသိပညာ၊ အတွေးအခေါ်များ၊ လူမှုရေးဆိုင်ရာ စိန်ခေါ်မှုများကို အစ္စလာမ့်ပညာရပ်များ၏ ရှုထောင့်မှ လေ့လာသုံးသပ်နိုင်စေရန် ပံ့ပိုးပေးခြင်း။",
        "Faith & Knowledge":"ယုံကြည်မှုနှင့် အသိပညာ","WHAT MATTERS TO US":"ကျွန်ုပ်တို့၏ ခံယူချက်","Growing":"အသိပညာဖြင့်","Together,":"ချိတ်ဆက်၊","With":"ရည်ရွယ်ချက်ဖြင့်","Purpose":"ရှေ့ဆက်","Our work is guided by values that shape how we learn, serve, and connect with our community.":"ကျွန်ုပ်တို့၏ သင်ယူမှု၊ အကျိုးပြုဆောင်ရွက်မှုနှင့် လူမှုအသိုင်းအဝိုင်းအပေါ် ဆက်ဆံပုံတို့ကို ပုံဖော်ပေးသည့် အခြေခံတန်ဖိုးများ။",
        "Encouraging thoughtful learning rooted in faith, understanding, and lifelong growth.":"ယုံကြည်မှုမှ အခြေပြု၍ နက်ရှိုင်းစွာ နားလည်သင်ယူကာ ဘဝတစ်လျှောက် တိုးတက်မှုကို ရှာဖွေခြင်း။","Serving with care, responsibility, and respect for the needs of every person.":"လူတိုင်းအပေါ် စာနာနားလည်မှု၊ တာဝန်သိမှုနှင့် လေးစားမှုတို့ဖြင့် အလေးထားကူညီဆောင်ရွက်ခြင်း။",
        "Building meaningful connections and helping people move forward together.":"အပြန်အလှန် နားလည်မှုနှင့် ရင်းနှီးချိတ်ဆက်မှုများမှတစ်ဆင့် အတူတကွ တိုးတက်ရှေ့ဆက်ခြင်း။","Learning with purpose":"ရည်ရွယ်ချက်ရှိစွာ သင်ယူခြင်း"
        };

    const originalTextNodes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
        const node = walker.currentNode;
        const original = node.nodeValue.trim();
        if (original && translations[original]) originalTextNodes.push({ node, original, leading: node.nodeValue.match(/^\s*/)[0], trailing: node.nodeValue.match(/\s*$/)[0] });
    }
    const originalAttributes = [];
    document.querySelectorAll('[placeholder], [aria-label]').forEach(el => {
        ['placeholder', 'aria-label'].forEach(attr => {
            const value = el.getAttribute(attr);
            if (value && translations[value]) originalAttributes.push({ el, attr, original: value });
        });
    });
    const languageButtons = document.querySelectorAll('.language-btn');
    function setLanguage(language) {
        const isMyanmar = language === 'my';
        document.documentElement.lang = isMyanmar ? 'my' : 'en';
        document.body.classList.toggle('lang-my', isMyanmar);
        originalTextNodes.forEach(item => { item.node.nodeValue = item.leading + (isMyanmar ? translations[item.original] : item.original) + item.trailing; });
        originalAttributes.forEach(item => item.el.setAttribute(item.attr, isMyanmar ? translations[item.original] : item.original));
        languageButtons.forEach(button => {
            const active = button.dataset.language === language;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', String(active));
        });
    }
    languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));


    // =========================
    // MOBILE NAVIGATION
    // =========================

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", function () {

        const isOpen = navMenu.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });


    // =========================
    // EXPLORE DROPDOWN
    // =========================

    const exploreToggle = document.getElementById("exploreToggle");
    const dropdown = exploreToggle.closest(".dropdown");

    exploreToggle.addEventListener("click", function () {

        const isOpen = dropdown.classList.toggle("active");

        exploreToggle.setAttribute("aria-expanded", isOpen);

    });


    // =========================
    // CLOSE MENU WHEN LINK CLICKED
    // =========================

    const navLinks = navMenu.querySelectorAll(
        'a:not(.dropdown-menu a)'
    );

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });


    // Dropdown links on mobile

    const dropdownLinks = dropdown.querySelectorAll(".dropdown-menu a");

    dropdownLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            dropdown.classList.remove("active");

            exploreToggle.setAttribute("aria-expanded", "false");

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });


    // Close mobile menu when clicking outside

    document.addEventListener("click", function (event) {

        if (
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

        if (!dropdown.contains(event.target)) {

            dropdown.classList.remove("active");

            exploreToggle.setAttribute("aria-expanded", "false");

        }

    });


    // =========================
    // CURRENT YEAR
    // =========================

    const currentYear = document.getElementById("currentYear");

    if (currentYear) currentYear.textContent = new Date().getFullYear();


   
// =========================
// CONTACT FORM
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxbGEQXeKfgPEpEFiCt8dVCW2ntcKArfxVWrURT9LblS2F0r8nNm9JMWBOmh-wJ6tK6/exec";

    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    if (!contactForm || !formStatus) return;

    const submitButton = contactForm.querySelector(
        'button[type="submit"]'
    );

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const formData = new FormData(contactForm);

        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const phone = String(formData.get("phone") || "").trim();
        const service = String(formData.get("service") || "").trim();
        const message = String(formData.get("message") || "").trim();

        if (!name || !email || !phone || !service || !message) {
            formStatus.textContent = "Please complete all required fields.";
            return;
        }

        submitButton.disabled = true;
        formStatus.textContent = "Sending your message...";

        // Prepare form data for Google Apps Script.
        const hiddenForm = document.createElement("form");

        hiddenForm.method = "POST";
        hiddenForm.action = scriptURL;
        hiddenForm.target = "contactFrame";
        hiddenForm.style.display = "none";

        const fields = {
            action: "contact",
            fullName: name,
            email: email,
            phone: phone,
            service: service,
            message: message
        };

        Object.entries(fields).forEach(function ([key, value]) {

            const input = document.createElement("input");

            input.type = "hidden";
            input.name = key;
            input.value = value;

            hiddenForm.appendChild(input);

        });

        // Create a hidden iframe for the submission.
        let iframe = document.getElementById("contactFrame");

        if (!iframe) {

            iframe = document.createElement("iframe");

            iframe.name = "contactFrame";
            iframe.id = "contactFrame";
            iframe.style.display = "none";

            document.body.appendChild(iframe);

        }

        document.body.appendChild(hiddenForm);

        hiddenForm.submit();

        // This indicates submission was attempted, not verified delivery.
        formStatus.textContent =
            "Your message has been submitted. Please wait...";

        setTimeout(function () {

            hiddenForm.remove();

            submitButton.disabled = false;

            formStatus.textContent =
                "Please check whether your message was received.";

        }, 3000);

    });

});


    // =========================
    // NEWSLETTER FORM
    // =========================

    const newsletterForm =
        document.getElementById("newsletterForm");

    const newsletterStatus =
        document.getElementById("newsletterStatus");

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!newsletterForm.checkValidity()) {

            newsletterForm.reportValidity();

            return;

        }

        newsletterStatus.textContent =
            "Thank you! Newsletter signup is ready to be connected.";

        /*
          Connect this form to an email marketing service
          or backend before collecting real subscribers.
        */

    });

});






document.addEventListener("DOMContentLoaded", function () {
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxbGEQXeKfgPEpEFiCt8dVCW2ntcKArfxVWrURT9LblS2F0r8nNm9JMWBOmh-wJ6tK6/exec";

    const form = document.getElementById("newsletterForm");

    if (!form) return;

    const emailInput = document.getElementById("newsletterEmail");
    const statusMessage = document.getElementById("newsletterStatus");
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim().toLowerCase();

        if (!email) {
            statusMessage.textContent =
                "Please enter your email address.";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            statusMessage.textContent =
                "Please enter a valid email address.";
            return;
        }

        submitButton.disabled = true;
        statusMessage.textContent = "Submitting...";

        const hiddenForm = document.createElement("form");
        hiddenForm.method = "POST";
        hiddenForm.action = scriptURL;
        hiddenForm.target = "newsletterFrame";
        hiddenForm.style.display = "none";

        // Tell Apps Script this is a Newsletter submission.
        const actionField = document.createElement("input");
        actionField.type = "hidden";
        actionField.name = "action";
        actionField.value = "newsletter";
        hiddenForm.appendChild(actionField);

        const emailField = document.createElement("input");
        emailField.type = "hidden";
        emailField.name = "email";
        emailField.value = email;
        hiddenForm.appendChild(emailField);

        let iframe = document.getElementById("newsletterFrame");

        if (!iframe) {
            iframe = document.createElement("iframe");
            iframe.name = "newsletterFrame";
            iframe.id = "newsletterFrame";
            iframe.style.display = "none";
            document.body.appendChild(iframe);
        }

        document.body.appendChild(hiddenForm);
        hiddenForm.submit();

        // A submitted form does not guarantee that Apps Script
        // saved the email successfully, so avoid claiming success.
        statusMessage.textContent =
            "Your request has been submitted. Please wait...";

        setTimeout(function () {
            hiddenForm.remove();
            submitButton.disabled = false;

            statusMessage.textContent =
                "If your email was accepted, your subscription will be recorded.";
        }, 3000);
    });
});