function helloWorld() {
    const input = document.querySelector('#name');
    const p = document.querySelector('#helloWorldMessage');
    if (input.value.trim()) {
        p.textContent = 'Bem-vindo à programação móvel ' + input.value + "!";
    } else {
        p.textContent = '';
    }
}  