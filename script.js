function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tabs_content");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab_button");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tab_active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " tab_active";
}

var opened = false;
function authForm(evt) {
    if (!opened) {
        document.getElementById("auth_layer").style.display = "block";
        document.body.style.overflow = "hidden";
    }
    else {
        document.getElementById("auth_layer").style.display = "none";
        document.body.style.overflow = "auto";
    }
    opened = !opened;
}