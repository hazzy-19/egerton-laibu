document.addEventListener('DOMContentLoaded', () => {
    // Modal Elements
    const modal = document.getElementById('auth-modal');
    const loginBtn = document.getElementById('login-btn');
    const closeBtn = document.querySelector('.close-modal');
    const authTabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Toggle Modal
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Tab Switching
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            if (tab.dataset.tab === 'login') {
                loginForm.style.display = 'block';
                signupForm.style.display = 'none';
            } else {
                loginForm.style.display = 'none';
                signupForm.style.display = 'block';
            }
        });
    });

    // Login Validation
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const adminInput = document.getElementById('login-admin').value;
            const passInput = document.getElementById('login-pass').value;

            if (adminInput === 'admin' && passInput === 'admin') {
                alert('Login Successful! Welcome Admin.');
                modal.style.display = 'none';
                loginBtn.textContent = 'Admin (Logged In)';
                loginBtn.style.backgroundColor = '#1b5e20';
            } else {
                alert('Invalid Credentials. Try admin/admin.');
            }
        });
    }

    // Sign Up Validation
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const admInput = document.getElementById('signup-adm').value;
            const passInput = document.getElementById('signup-pass').value;

            // Regex for S27/05500/24 format
            // S followed by digits, slash, digits, slash, digits
            const admRegex = /^[A-Z]\d{2}\/\d{5}\/\d{2}$/;

            if (admRegex.test(admInput)) {
                alert('Sign Up Successful! Please log in.');
                // Switch to login tab
                authTabs[0].click();
            } else {
                alert('Invalid Admission Number format. Expected: S27/05500/24');
            }
        });
    }
});
