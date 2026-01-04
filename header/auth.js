document.addEventListener('DOMContentLoaded', () => {
    const authTabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (authTabs.length > 0) {
        authTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                authTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                if (tab.dataset.tab === 'login') {
                    if (loginForm) loginForm.style.display = 'block';
                    if (signupForm) signupForm.style.display = 'none';
                } else {
                    if (loginForm) loginForm.style.display = 'none';
                    if (signupForm) signupForm.style.display = 'block';
                }
            });
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const adminInput = document.getElementById('login-admin').value;
            const passInput = document.getElementById('login-pass').value;

            if (adminInput === 'admin' && passInput === 'admin') {
                alert('Login Successful! Welcome Admin.');
                window.location.href = 'index.html';
            } else {
                alert('Invalid Credentials. Try admin/admin.');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const admInput = document.getElementById('signup-adm').value;
            const admRegex = /^[A-Z]\d{2}\/\d{5}\/\d{2}$/;

            if (admRegex.test(admInput)) {
                alert('Sign Up Successful! Please log in.');
                if (authTabs[0]) authTabs[0].click();
            } else {
                alert('Invalid Admission Number format. Expected: S27/05500/24');
            }
        });
    }
});
