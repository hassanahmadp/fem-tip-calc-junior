// number inputs on value of "0"
(function () {
    const numberInputs = document.querySelectorAll("#nop,#bill,#cstm-perc");
    const nonDRed = document.querySelectorAll(".non-d-red");

    document.addEventListener("keyup", (e) => {
        if (parseFloat(e.target.value) === 0) {
            e.target.parentElement.parentElement.children[0].children[1].classList.add('active');
            e.target.classList.add('active');
        } else {
            e.target.parentElement.parentElement.children[0].children[1].classList.remove('active');
            e.target.classList.remove('active');
        }
    });
})();

// all radios unchecked if custom is selected 
(function () {
    const cstmPerc = document.querySelector('#cstm-perc');
    const radios = document.querySelectorAll('.radios');

    cstmPerc.addEventListener('focus', () => {
        for (let i = 0; i < radios.length; i++) {
            radios[i].setAttribute('checked', false);
        }
    });

})()

// // Actual functionality
// (function () {

// })();
