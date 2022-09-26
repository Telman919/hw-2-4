const buttonForm = document.getElementById('submit_button');



buttonForm.addEventListener('click', (i) => {
    i.preventDefault();

    const password = document.getElementById('password');
    const login = document.getElementById('login');

    if (!password.value && !login.value) {
        alert('Введите ваши данные для входа');
    } else if (!login.value) {
        alert('Введите ваш логин');
    } else if (!password.value) {
        alert('Введите ваш пароль')
    } else if (login.value && password.value ) {
        alert(`Ваш логин: ${login.value}. Ваш пароль: ${password.value}.`)
    };
});