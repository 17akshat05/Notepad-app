// Handle file attachment
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('file-list');

fileInput.addEventListener('change', function(event) {
    fileList.innerHTML = ''; // Clear previous file list
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileItem = document.createElement('p');
        fileItem.innerText = file.name;
        fileList.appendChild(fileItem);
    }
});

// Save notes and files (local storage for demo)
const saveButton = document.getElementById('save-btn');
saveButton.addEventListener('click', saveNote);

function saveNote() {
    const notepadContent = document.getElementById('notepad').value;
    if (notepadContent.trim() === '' && fileList.innerHTML === '') {
        alert('Note is empty!');
        return;
    }

    const files = fileInput.files;
    const savedData = {
        text: notepadContent,
        files: []
    };

    for (let i = 0; i < files.length; i++) {
        savedData.files.push(files[i].name); // Simulate saving file names
    }

    localStorage.setItem('savedNote', JSON.stringify(savedData));
    alert('Note saved successfully!');
}

// Share note (generate email with content)
const shareButton = document.getElementById('share-btn');
shareButton.addEventListener('click', shareNote);

function shareNote() {
    const notepadContent = document.getElementById('notepad').value;
    if (notepadContent.trim() === '' && fileList.innerHTML === '') {
        alert('No content to share!');
        return;
    }

    const emailSubject = "Shared Notepad Content";
    const emailBody = encodeURIComponent(notepadContent);
    const emailHref = `mailto:?subject=${emailSubject}&body=${emailBody}`;
    
    window.location.href = emailHref;
}
