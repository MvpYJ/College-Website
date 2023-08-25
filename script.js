const scrollingText = document.getElementById("scrolling-text");

function scrollText() {
    scrollingText.style.transform = "translateX(100%)";
    scrollingText.style.transition = "none";

    setTimeout(() => {
        scrollingText.style.transition = "transform 10s linear";
        scrollingText.style.transform = "translateX(-100%)";
        setTimeout(scrollText, 10000);
    }, 100);
}

scrollText();

const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
 
  });

  document.addEventListener("DOMContentLoaded", function () {
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message !== "") {
            chatMessages.innerHTML += `<div class="message user">${message}</div>`;
            chatInput.value = "";

            // Send message via email (you'll need to implement this)
            sendEmail(message);
        }
    }

    document.getElementById("send-button").addEventListener("click", sendMessage);
    chatInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
