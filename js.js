function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

var modal1 = document.getElementById('id02');
      
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

var modal2 = document.getElementById('id02');
      
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

