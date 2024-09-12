document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const buttonText = document.getElementById('buttonText');
    
    buttonText.addEventListener('click', () => {
        // Guarda el valor del input en localStorage
        localStorage.setItem('savedData', inputText.value);
    });
});
