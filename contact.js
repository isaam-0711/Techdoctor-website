
let contactButton = document.querySelector(".contact-button");
let contactForm = document.querySelector(".contact-form");

let ctaButton = false;

contactButton.addEventListener("click", () => {


    if (!ctaButton) {
        contactForm.classList.remove("hidden");
        ctaButton = true;


    } else {
        contactForm.classList.add("hidden");
        ctaButton = false;
    }

});

