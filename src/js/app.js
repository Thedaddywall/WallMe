/*declaracion de variables globales*/
let MAIN;
let MODAL_POST;
let BTN_SHOW_POST;
let BTN_CANCEL_POST;

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
}

//all chargue dom
window.addEventListener('load', () => {
    MAIN = document.querySelector('#main');
    MODAL_POST = document.querySelector('#modal-post-section');
    BTN_SHOW_POST = document.querySelector('#btn-upload-post');
    BTN_SHOW_POST.addEventListener('click', showPostModal);
    BTN_CANCEL_POST = document.querySelector('#btn-post-cancel');
    BTN_CANCEL_POST.addEventListener('click', closePostModal)
});