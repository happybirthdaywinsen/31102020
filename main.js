function message() {
   const msg = "happy birthday winsen",
      messageText = document.querySelectorAll(".message__text"),
      messageSplit = msg.split(""),
      messageContainer = document.querySelector(".message"),
      messageBtn = document.querySelector(".message__btn"),
      reloadBtn = document.querySelector(".reload"),
      particlesContainer = document.getElementById("particles-js");

   const colors = ["#f7b267", "#f79d65", "#f4845f", "#f27059", "#f25c54"];
   let i = 0;

   messageBtn.addEventListener("click", openMessage);
   reloadBtn.addEventListener("click", openMessage);

   //Open Message
   function openMessage() {
      if (messageContainer.classList.contains("clicked")) {
         messageContainer.classList.remove("clicked");
         reloadBtn.style.display = "none";
         particlesContainer.classList.remove("show");
      } else {
         messageContainer.classList.add("clicked");
         reloadBtn.style.display = "block";
         setTimeout(() => {
            particlesContainer.classList.add("show");
         }, 1000);

      }
   }


   // Get Message ans Split Chars
   messageSplit.forEach(function (el) {
      let template = `
      <p class="message__letters">
         <span class="message__letterMain">${el}</span>
         <span class="message__letterShadow">${el}</span>
      </p>`;

      messageText.forEach(function (el) {
         el.insertAdjacentHTML("beforeend", template);
      });
   });


   // Add colours to Letters
   const letterMain = document.querySelectorAll(".message__letterMain");
   letterMain.forEach(function (el) {
      if (i == colors.length) i = 0
      el.style.color = colors[i];
      i++;
   });
}

message();

