/*declaracion de variables globales*/
let MAIN;
let MODAL_POST;
let BTN_SHOW_POST;
let BTN_CANCEL_POST;
let deferredPrompt;

//funciones
const showPostModal = () => {
    MAIN.style.display = 'none';
    MODAL_POST.style.display = 'block';
    setTimeout(() => {
        MODAL_POST.style.transform = 'translateY(0)';
    }, 1);
};
const closePostModal = () => {
    MAIN.style.display = 'block';
    MODAL_POST.style.transform = 'translateY(100vh)'
};

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

//all chargue dom
window.addEventListener('load', async () => {
    MAIN = document.querySelector('#main');
    MODAL_POST = document.querySelector('#modal-post-section');
    BTN_SHOW_POST = document.querySelector('#btn-upload-post');
    BTN_SHOW_POST.addEventListener('click', showPostModal);
    BTN_CANCEL_POST = document.querySelector('#btn-post-cancel');
    BTN_CANCEL_POST.addEventListener('click', closePostModal);

    await Notification.requestPermission();

    if ('serviceWorker' in navigator) {
        const response = await navigator.serviceWorker.register('sw.js');
        if (response) {
            const ready = await navigator.serviceWorker.ready;
            ready.showNotification('BIENVENIDO A WALLME', {
                body: 'Espero le des un buen uso a esta aplicacion',
                vibrate: [200, 100, 200, 100, 200, 100, 200]
            });
        }
    }

    const bannerInstall = document.querySelector('#banner-install');
    bannerInstall.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const response = await deferredPrompt.userChoice;
            if (response.outcome === 'dismissed') {
                console.error('El usuario cancelo la instalacion');
            }
        }
    });

});

