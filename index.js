function goTo(path, show, hide) {
    location.href = path;
    var el1 = document.getElementById(show);
    var el2 = document.getElementById(hide);

    el1.style.display = 'block';
    el2.style.display = 'none';
}

function goToTop(path) {
    location.href = path;
}
