let result = document.querySelector(".result");
let buttons = document.querySelectorAll("button");
let mul = document.querySelector(".mul")

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.dataset.value;
        if (value === '=') {
            try {
                result.value = eval(result.value);
            }
            catch (error) {
                result.value = 'Error';
            }
        }
        else if (value === 'C') {
            const currentDisplayvalue = result.value;
            const newDisplayvalue = currentDisplayvalue.slice(0, -1);
            result.value = newDisplayvalue;


        }
        else if (value === 'AC') {
            result.value = '';
        }
        else {
            result.value += value;
        }

        // change();



    })
})
