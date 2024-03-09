const faqPage1 = document.getElementById("faq-page1");
const faqPage2 = document.getElementById("faq-page2");
const faqPage3 = document.getElementById("faq-page3");
const faqBody1 = document.getElementById("faq-body1");
const faqBody2 = document.getElementById("faq-body2");
const faqBody3 = document.getElementById("faq-body3");

faqPage1.addEventListener("click", () => {
    if (faqBody1.style.display === 'none') {
        faqBody1.style.display = 'block';
        faqPage1.style.background = '#4ba1f8';
    } else {
        faqBody1.style.display = 'none';
        faqPage1.style.background = 'white';
    }
});

faqPage2.addEventListener("click", () => {
    if (faqBody2.style.display === 'none') {
        faqBody2.style.display = 'block';
        faqPage2.style.background = '#4ba1f8';
    } else {
        faqBody2.style.display = 'none';
        faqPage2.style.background = 'white';
    }
});

faqPage3.addEventListener("click", () => {
    if (faqBody3.style.display === 'none') {
        faqBody3.style.display = 'block';
        faqPage3.style.background = '#4ba1f8';
    } else {
        faqBody3.style.display = 'none';
        faqPage3.style.background = 'white';
    }
});