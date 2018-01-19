/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("mobMenu").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("mobMenu").style.height = "0%";
}

function toggleMenu() {
    if (document.getElementById("mobMenu").style.height === "100%") {
        document.getElementById("mobMenu").style.height = "0%";
        document.getElementById("burger").style.transform = "rotate(0deg)";
        document.getElementById("burger1").style.opacity = "1";
        document.getElementById("burger2").style.transform = "rotate(0deg)";        
        document.getElementById("burger3").style.transform = "rotate(0deg)";
        document.getElementById("mobMenu").style.borderRadius = "0 0 50% 50%";
        
        

        

    } else {
        document.getElementById("mobMenu").style.height = "100%";
        document.getElementById("burger").style.transform = "rotate(270deg)";
        document.getElementById("burger1").style.opacity = "0";
        document.getElementById("burger2").style.transform = "rotate(90deg)";        
        document.getElementById("burger3").style.transform = "rotate(-90deg)";
        document.getElementById("mobMenu").style.borderRadius = "0";
       
        
        
    }
}

