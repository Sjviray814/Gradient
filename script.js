let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let code = document.getElementById("code");
let angle = "to right top";

function setAngle(angle) {
  switch (angle) {
    case 0:
      angle = "to top";
      break;

    case 45:
      angle = "to right top"
      break;

    case 90:
      angle = "to right";
      break;

    case 135:
      angle = "to right bottom";
      break;

    case 180:
      angle = "to bottom";
      break;

    case 225:
      angle = "to left bottom";
      break;

    case 270:
      angle = "to left";
      break;

    case 315:
      angle = "to left top";
      break;
  }

  document.body.style.backgroundImage = `linear-gradient(${angle}, ${document.getElementById("color1").value}, ${document.getElementById("color2").value})`;

  document.getElementById("code").innerHTML = `background-image: linear-gradient(${angle}, ${document.getElementById("color1").value}, ${document.getElementById("color2").value})`;
}




document.body.style.backgroundImage = "linear-gradient(to right top, #008793, #a8eb12)";