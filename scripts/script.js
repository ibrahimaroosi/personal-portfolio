// // Scroll top function
// function goTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
// document.getElementById("nav-links").addEventListener("click", openMenu);

function openMenu() {
  document.getElementById("navLinks").style.left = "50%";
  document.getElementById("bars").style.display = "none";
  document.getElementById("times").style.display = "block";
}
function closeMenu() {
    document.getElementById("navLinks").style.left = "110%";
    document.getElementById("bars").style.display = "block";
    document.getElementById("times").style.display = "none";
  }
// function openMenu() {
//     var x = document.getElementById("navLinks").style.left;
//     if(x=="5000%"){
//         x = "50%";
//     }else if (x=="50%"){
//         x = "5000%";
//     }else {
//         x== "50%";
//     }
// }