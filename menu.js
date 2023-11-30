var btnMenu = document.getElementById('btn-abrir')
var abrir = document.getElementById('menu-mobile')
var overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    abrir.classList.add('abrir-menu')
})
abrir.addEventListener('click', () => {
    abrir.classList.remove('abrir-menu')
})
overlay.addEventListener('click', () => {
    abrir.classList.remove('abrir-menu')
})
var msgCookies = document.getElementById('cookies-msg')
function aceito() {
    localStorage.lgpd = "sim"
    msgCookies.classList.remove('mostrar')
}
if (localStorage.lgpd == "sim") {
    msgCookies.classList.remove('mostrar')
} else {
    msgCookies.classList.add('mostrar')
    console.log('Botão clicado!');

}
var linkTelegramBtn = document.getElementById('linkTelegramBtn');
// Adicione um ouvinte de evento para o clique no botão
linkTelegramBtn.addEventListener('click', function () {
    // Adicione a lógica que será executada quando o botão for clicado
    console.log('Botão clicado!');
    // Adicione mais lógica aqui conforme necessário
});
var inicio = document.getElementById('Inicio');

if (Inicio) {
    inicio.addEventListener('click', function () {
        // Define a hash para # para ir para o início da página
        window.location.hash = '';
        console.log('Botão clicado!');

        // Adicione a lógica adicional aqui, se necessário
    });
} else {
    console.error('Elemento com o ID "Inicio" não foi encontrado.');
}
var inicio = document.getElementById('Inicio1');

if (Inicio1) {
    inicio.addEventListener('click', function () {
        // Define a hash para # para ir para o início da página
        window.location.hash = '';
        console.log('Botão clicado!');

        // Adicione a lógica adicional aqui, se necessário
    });
} else {
    console.error('Elemento com o ID "Inicio" não foi encontrado.');
}

