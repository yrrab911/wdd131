function displayCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear; 
}


function displayLastModified() {
    const lastModified = document.lastModified; 
    document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModified; 
}

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active'); 

       
        if (nav.classList.contains('active')) {
            hamburger.textContent = '✖'; 
        } else {
            hamburger.textContent = '☰'; 
        }
    });
});
displayCurrentYear();
displayLastModified();
