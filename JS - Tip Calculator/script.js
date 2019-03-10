function calculateTip() {
  var billAmount = document.getElementById("billAmount").value;
  var seriveQuality = document.getElementById("seriveQuality").value;
  var totalPeople = document.getElementById("totalPeople").value;

  if (billAmount === "" || seriveQuality == 0) {
    window.alert("Please enter some values so I can function!");
    return;
  }

  if (totalPeople === "" || totalPeople <= 1) {
    totalPeople = 1;

    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  var total = (billAmount * seriveQuality) / totalPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("btn").onclick = function() {
  calculateTip();
};
