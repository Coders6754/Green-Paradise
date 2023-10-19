let btn = document.getElementById("submit");
btn.addEventListener("click", () => {
  event.preventDefault();
  let fullName = document.getElementById("fullName").value;

  let phone = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  if (fullName == "" || phone == "" || email == "") {
    alert("Please Fill All Details");
  } else {
    location.href = "delivery.html";
  }
});