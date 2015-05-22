function menu() {
    var displayMenu = displayMenu = document.getElementById("menu").style.display;

    if (displayMenu == "none") {
        document.getElementById("menu").style.display = "block";
    }
    else {
        document.getElementById("menu").style.display = "none";
    }
}