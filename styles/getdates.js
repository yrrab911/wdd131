function displayCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear; 
}


function displayLastModified() {
    const lastModified = document.lastModified; 
    document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModified; 
}


displayCurrentYear();
displayLastModified();
