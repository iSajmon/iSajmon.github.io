let czas;

function showPage(url) {
  document.querySelector(".load").style.display = "block";
  document.querySelector(".main").style.display = "none";
  document.querySelector("footer").style.display = "none";
   setTimeout(function() {
     window.location.href = url;
 }, 3000);  
}
