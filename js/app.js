const nop = document.querySelector("#nop");
const bill = document.querySelector('#bill');
const cstmPerc = document.querySelector('#cstm-perc');
const radios = document.querySelectorAll('input[type="radio"]');
const reset = document.querySelector('.result__reset');
let tipAmount = document.querySelector('.result__amountShow:nth-child(1)').children[1].children[0];
let totalAmount = document.querySelector('.result__amountShow:nth-child(2)').children[1].children[0];


const unCheckRadios = () => {
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
}

const resetHandler = () => {
    if (reset.classList.contains('active')) {
        bill.value = null;
        nop.value = null;
        unCheckRadios();
        tipAmount.textContent = `$0.00`;
        totalAmount.textContent = `$0.00`;
        reset.classList.remove('active');
    }
}
// number inputs on value of "0"
(function () {
    const nonDRed = document.querySelector(".non-d-red");

    document.addEventListener("keyup", e => {
        if (parseFloat(e.target.value) === 0) {
            nop.classList.add('active');
            nonDRed.classList.add('active');
        } else {
            nop.classList.remove('active');
            nonDRed.classList.remove('active');
        }
    });
})();

// all radios unchecked if custom is selected and custom value none if any radio is checked
(function () {

    cstmPerc.addEventListener('focus', unCheckRadios);
    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener('change', () => {
            cstmPerc.value = null;
        });
    }
})();

// Actual functionality
(function () {
    // variables
    const allInputs = document.querySelectorAll('input');
    // functions
    const updateResult = () => {
        const actBill = parseFloat(document.querySelector('#bill').value);
        const nopValue = parseFloat(nop.value);
        const percValue = parseFloat((document.querySelector('input[name="tip-percentage"]:checked') || cstmPerc).value);
        const tipPerPerson = (actBill * (percValue / 100)) / nopValue;
        if ((!isNaN(tipPerPerson)) && (tipPerPerson !== Infinity)) {
            tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
            totalAmount.textContent = `$${((tipPerPerson + actBill) / nopValue).toFixed(2)}`;
        } else {
            tipAmount.textContent = `$0.00`;
            totalAmount.textContent = `$0.00`;
        }

        if (actBill || nopValue || percValue) {
            reset.classList.add('active');
        } else {
            reset.classList.remove('active');
        }

    }
    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].addEventListener('change', updateResult);
        allInputs[i].addEventListener('keyup', updateResult);
    }

    reset.addEventListener('click', resetHandler);
})();
