var modal = document.getElementById("modalLaatikko");

function avaaModaalilaatikko() {
  modal.style.display = "block";
}

function suljeModaalilaatikko() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};