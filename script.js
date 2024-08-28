function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Cerrar el menú automáticamente cuando se selecciona una opción
document.querySelectorAll('.sidenav a').forEach(function(element) {
    element.addEventListener('click', function() {
        closeNav();
    });
});
