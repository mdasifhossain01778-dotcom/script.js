/* ==========================
   MD. Asif Hossain Portfolio
   script.js - Part 1
========================== */

// Typing Animation

const typingText = document.querySelector(".typing-text");

const words = [
  "Digital Marketer",
  "Graphic Designer",
  "SEO Expert",
  "Lead Generation Expert",
  "Data Entry Specialist",
  "Social Media Marketer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!isDeleting) {

    typingText.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingText.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }

  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();
/* ==========================
   AI Assistant
========================== */

const aiButton = document.getElementById("aiButton");
const chatBox = document.getElementById("chatBox");

if (aiButton && chatBox) {

    aiButton.addEventListener("click", () => {

        if (chatBox.style.display === "block") {
            chatBox.style.display = "none";
        } else {
            chatBox.style.display = "block";
        }

    });

    window.addEventListener("load", () => {

        setTimeout(() => {

            chatBox.style.display = "block";

        }, 1500);

    });

}

/* ==========================
   Smooth Scroll
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ==========================
   Welcome Message
========================== */

console.log("Welcome to MD. Asif Hossain Portfolio");
