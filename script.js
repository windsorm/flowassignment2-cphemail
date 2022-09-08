document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();

  //Method 1
  //function Submit() {
  let email = document.querySelector("#email").value;
  let name = document.querySelector("#name").value;
  let message = document.querySelector("#message").value;

  //Trim message
  message = message.trim();

  //convert to lower case
  email = email.toLowerCase();

  //Validates @cphbusiness mail
  let validEmail = email.split("@cphbusiness.dk");

  //Checks date
  let date = new Date();
  let day = 6;

  if (day == 0 || day > 4) {
    const element = document.querySelector("#dayAlert");
    element.classList.add("wrongDay");
    element.textContent = "Email can only be sent Monday-Thursday.";
    //alert("Not today, sorry.");
  } else {
    const element = document.querySelector("#dayAlert");
    element.classList.add("sent");
    element.textContent = "Email sent.";
  }
  //alert("Email sent");
  //if (validEmail) console.log(email);
});

//Sets date to current date

console.log(day);
console.log(date);
