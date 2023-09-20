const botao = document.getElementById('botao');
const span = document.querySelector('span');

botao.addEventListener('click', () => {
    let cores = Array('Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Grey', 'Brown');

    let aleatorio = Math.floor(Math.random() * cores.length);

    document.body.style.backgroundColor = cores[aleatorio];
    span.innerText = cores[aleatorio];
});