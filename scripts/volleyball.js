function displayCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear; 
}

function displayLastModified() {
    const lastModified = document.lastModified; 
    document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModified; 
}

function createGroup() {
    // Get the values from the input fields
    const groupTime = document.getElementById('selectTime').value.trim();
    const groupMaker = document.getElementById('groupMaker').value.trim();
    const groupDescription = document.getElementById('groupDescription').value.trim();

    // Validate input fields
    if (!groupTime || !groupMaker || !groupDescription) {
        alert('Please fill in all fields.');
        return; // Exit the function if any field is empty
    }

    // Create a new group box element
    const newGroupBox = document.createElement('div');
    newGroupBox.classList.add('group-box');

    // Create the content for the group box, including the join button
    newGroupBox.innerHTML = `
        <h3>New Volleyball Group</h3>
        <p><strong>Time:</strong> ${groupTime}</p>
        <p><strong>Created by:</strong> ${groupMaker}</p>
        <p><strong>Description:</strong> ${groupDescription}</p>
        <button class="joinGroupBtn">Join Group</button>
    `;

    // Append the new group box to the container
    document.getElementById('groupContainer').appendChild(newGroupBox);

    // Clear the input fields after creating the group
    document.getElementById('selectTime').value = '';
    document.getElementById('groupMaker').value = '';
    document.getElementById('groupDescription').value = '';
}

// Add event listener for creating a group
document.getElementById('createGroupBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    createGroup(); // Call the createGroup function
});

// Add event listener for joining groups
document.getElementById('groupContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('joinGroupBtn')) {
        alert('You have joined the group!');
        event.target.textContent = 'Joined'; // Change the button text after joining
        event.target.disabled = true; // Disable the button after joining
    }
});

// Initial calls
displayCurrentYear();
displayLastModified();
