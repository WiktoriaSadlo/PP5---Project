document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email.includes('@')) {
        alert('Podaj poprawny adres email!');
    } else if (password.length < 6) {
        alert('Hasło musi mieć co najmniej 6 znaków!');
    } else {
        alert('Logowanie udane!');
        // Przekierowanie na stronę główną
        window.location.href = "../index.html";
    }
});


document.getElementById('languageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const language = document.getElementById('language').value;
    const level = document.getElementById('level').value;
    alert(`Wybrałeś język: ${language}, poziom: ${level}`);
    window.location.href = "exercises.html";
});
