document.addEventListener('DOMContentLoaded', function() {

    const calculator = document.getElementById('calculator');
    const result = document.getElementById('result');
    
    // Function to create a button element
    function createButton(value) {
        const button = document.createElement('input');
        button.type = 'button';
        button.value = value === '←' ? '\u2190' : value;
        button.classList.add('button');
        return button;
    }
    // Function to create a row of buttons
    function createButtonRow(values) {
        const row = document.createElement('div');
        row.classList.add('button-row');
        values.forEach(function(value) {
            const button = createButton(value);
            row.appendChild(button);
        });
        return row;
    }
    // Function to create the calculator layout
    function createCalculatorLayout() {
        // Create rows of buttons
        const buttonRows = [
            ['C', '%', '\u2190', '/'],
            ['7', '8', '9', '*'],
            ['4', '5', '6', '-'],
            ['1', '2', '3', '+'],
            ['00', '0', '.', '=']
        ];
    
        buttonRows.forEach(function(rowValues) {
            const row = createButtonRow(rowValues);
            calculator.appendChild(row);
        });
    }
    
    // Run function to create calculator layout when the DOM is loaded
    createCalculatorLayout();
    
    // Event listener for button clicks
    calculator.addEventListener('click', function(event) {
        if (event.target.classList.contains('button')) {
            const value = event.target.value;
            if (value === '=') {
                try {
                    result.textContent = eval(result.textContent);
                } catch (error) {
                    result.textContent = 'Error';
                }
            } else if (value === 'C') {
                result.textContent = '0';
            } else if (value === '\u2190') {
                result.textContent = result.textContent.slice(0, -1);
            } else {
                if (result.textContent === '0' || result.textContent === 'Error') {
                    result.textContent = value;
                } else {
                    result.textContent += value;
                }
            }
        }
    });
    
    // Event listener for keyboard input
    document.addEventListener('keydown', function(event) {
        const key = event.key;
    
        if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
            if (result.textContent === '0' || result.textContent === 'Error') {
                result.textContent = key;
            } else {
                result.textContent += key;
            }
        } else if (key === 'Enter') {
            try {
                result.textContent = eval(result.textContent);
            } catch (error) {
                result.textContent = 'Error';
            }
        } else if (key === 'Backspace') {
            result.textContent = result.textContent.slice(0, -1);
        }
    });
});
