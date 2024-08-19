function helloWorld() {
    const input = document.querySelector('#name');
    if (input.value) {
        const p = document.querySelector('#helloWorldMessage');
        p.textContent = 'Bem-vindo à programação móvel ' + input.value + "!";
    } 
}  