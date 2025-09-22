// Display username on all pages
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = localStorage.getItem('currentUser');
    const usernameElement = document.getElementById('username');
    
    if (currentUser && usernameElement) {
        usernameElement.textContent = `Welcome, ${currentUser}`;
    }
});