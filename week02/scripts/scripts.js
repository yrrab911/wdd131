const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        const displayText = document.createElement('p');
        displayText.textContent = input.value;
        document.body.appendChild(displayText);

        input.value = '';

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
    } else {
        input.focus();
    }

    input.focus();
});
