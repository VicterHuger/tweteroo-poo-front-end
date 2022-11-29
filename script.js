import Auth from './classes/Auth';

window.onload = () => {
  document.querySelector('.btn-enviar').addEventListener('click', () => {
    new Auth().signUp();
  });
};