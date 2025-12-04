document.addEventListener('DOMContentLoaded', () => {
    const preview = document.querySelector('.preview-box');
    const textSelect = document.querySelector('#text-color-select');
    const bgSelect = document.querySelector('#bg-color-select');
 
 
    textSelect.onchange = () => {
        preview.style.color = textSelect.value;
    };
 
 
    bgSelect.onchange = () => {
        preview.style.background = bgSelect.value;
    };
});