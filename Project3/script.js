var cursor = document.querySelector(".cursor");
var main = document.querySelector("#main");

main.addEventListener("mousemove", function (details){
    cursor.style.left = details.x + "px";
    cursor.style.top = details.y + "px";
    

})