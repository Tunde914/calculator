document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('calculator-screen');
    const keys = document.querySelectorAll('.key');
    const clearButton = document.getElementById('clear');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyValue = key.value;
            if (keyValue === '=') {
                try {
                    screen.value = eval(screen.value.replace('÷', '/').replace('×', '*').replace('−', '-'));
                } catch {
                    screen.value = 'Error';
                }
            } else {
                screen.value += keyValue;
            }
        });
    });

    clearButton.addEventListener('click', () => {
        screen.value = '';
    });
});