// Lägger till en händelsehanterare när hela dokumentet (HTML-dokumentet) lästs in.
document.addEventListener("DOMContentLoaded", function() {

    const easter = document.getElementById("easterEgg");
    easter.onclick = myFunction;
    
    function myFunction() {
    document.querySelector("body").style.backgroundImage = "URL(images/abstrakt-bakgrund.jpg)";
    }

    // Tangentbordshändelse.
    document.addEventListener("keydown", function(event){
        if (event.key === "1337")
            console.log("Haaaaaaj")
    });



}); 