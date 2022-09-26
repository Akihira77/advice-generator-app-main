let request = new XMLHttpRequest();
const advice = document.getElementById("advice");
const id = document.getElementById("id");
const dice = document.querySelector(".dice");

request.open("GET", "https://api.adviceslip.com/advice", true);

request.onload = function () {
  let data = JSON.parse(this.response);

  dice.addEventListener("click", () => {
    location.reload();
  });

  if (request.status >= 200 && request.status < 400) {
    id.innerHTML = "Advice #" + data.slip["id"];
    advice.textContent = data.slip["advice"];
  } else {
    alert("error");
  }
};

request.send();
