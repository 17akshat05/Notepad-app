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

// Save notes as PDF or Word (download)
const saveButton = document.getElementById('save-btn');
saveButton.addEventListener('click', saveAsDocument);

function saveAsDocument() {
    const notepadContent = document.getElementById('notepad').value;
    const blob = new Blob([notepadContent], { type: 'application/msword' }); // Change type for PDF or others
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'note.doc';
    link.click();
}

// Download content as a file
const downloadButton = document.getElementById('download-btn');
downloadButton.addEventListener('click', function() {
    const content = document.getElementById('notepad').value;
    if (content.trim() === '') {
        alert('Nothing to download');
        return;
    }

    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'note.txt';
    link.click();
});

// Share files (multi-file sharing logic)
const shareButton = document.getElementById('share-btn');
shareButton.addEventListener('click', shareFiles);

function shareFiles() {
    if (fileInput.files.length === 0 && document.getElementById('notepad').value.trim() === '') {
        alert('No content to share!');
        return;
    }

    const files = fileInput.files;
    const content = document.getElementById('notepad').value;
    const emailBody = encodeURIComponent(content);

    const email = 'mailto:?subject=Shared Notepad&body=' + emailBody;
    window.open(email);
}

// GitHub Login Simulation (can integrate OAuth later)
const githubLogin = document.getElementById('github-login');
githubLogin.addEventListener('click', () => {
    window.location.href = 'https://github.com/login'; // GitHub OAuth login link
});
