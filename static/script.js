function navigate(page) {
    const contentDiv = document.getElementById('content');
    
    switch(page) {
        case 'register':
            contentDiv.innerHTML = getRegisterForm();
            break;
        case 'language-selection':
            contentDiv.innerHTML = getLanguageSelectionForm();
            break;
        case 'exercises':
            contentDiv.innerHTML = getExercisesForm();
            break;
        default:
            contentDiv.innerHTML = '<h1>Witamy w aplikacji!</h1>';
    }
}

function getRegisterForm() {
    return `
        <h1>Rejestracja</h1>
        <form id="registerForm" onsubmit="return validateRegisterForm()">
            <label for="userName">User Name:</label>
            <input type="text" id="userName" name="userName" required placeholder="Wprowadź nazwę użytkownika">

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="Wprowadź e-mail">

            <label for="password">Hasło:</label>
            <input type="password" id="password" name="password" required placeholder="Wprowadź hasło" minlength="6">

            <label for="confirmPassword">Potwierdź hasło:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Potwierdź hasło">

            <label for="terms" style="display: inline-flex; align-items: center; padding-left: 0; white-space: nowrap;">
                <input type="checkbox" id="terms" name="terms" required style="margin-right: 5px;">
                Akceptuję regulamin
            </label>
            
            <label for="language">Wybierz język:</label>
            <select id="language" name="language" required>
                <option value="pl">Polski</option>
                <option value="en">Angielski</option>
            </select>

            <button type="submit">Zarejestruj się</button>
        </form>
    `;
}

// Валидация формы регистрации
function validateRegisterForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Проверка на соответствие паролей
    if (password !== confirmPassword) {
        alert('Hasła muszą być zgodne!');
        return false;
    }

    // Дополнительные проверки (например, формат email)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert('Wprowadź poprawny adres e-mail!');
        return false;
    }

    return true;
}

// Форма выбора языка и уровня
function getLanguageSelectionForm() {
    return `
        <h1>Wybór języka i poziomu</h1>
        <form id="languageForm">
            <label for="language">Wybierz język:</label>
            <select id="language" name="language" required>
                <option value="pl">Polski</option>
                <option value="en">Angielski</option>
            </select>

            <label for="level">Wybierz poziom:</label>
            <select id="level" name="level" required>
                <option value="beginner">Początkujący</option>
                <option value="intermediate">Średniozaawansowany</option>
                <option value="advanced">Zaawansowany</option>
            </select>

            <button type="submit">Zatwierdź</button>
        </form>
    `;
}

// Форма для упражнений
function getExercisesForm() {
    return `
        <h1>Ćwiczenia</h1>
        <form id="exercisesForm">
            <label for="exercise">Wybierz ćwiczenie:</label>
            <select id="exercise" name="exercise" required>
                <option value="pushups">Pompki</option>
                <option value="squats">Przysiady</option>
                <option value="plank">Deska</option>
            </select>

            <label for="sets">Ilość serii:</label>
            <input type="number" id="sets" name="sets" required min="1">

            <label for="reps">Ilość powtórzeń:</label>
            <input type="number" id="reps" name="reps" required min="1">

            <label for="comments">Komentarze:</label>
            <textarea id="comments" name="comments" rows="4" placeholder="Komentarze do ćwiczenia..."></textarea>

            <button type="submit">Rozpocznij ćwiczenie</button>
        </form>
    `;
}

// Инициализация при загрузке
navigate('register'); 