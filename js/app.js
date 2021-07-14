const nop = document.querySelector("#nop");
const cstmPerc = document.querySelector('#cstm-perc');
const radios = document.querySelectorAll('input[type="radio"]');
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

// all radios unchecked if custom is selected 
(function () {

    cstmPerc.addEventListener('focus', () => {
        for (let i = 0; i < radios.length; i++) {
            radios[i].checked = false;
        }
    });

})()

    // Actual functionality
    (function () {
        // document.querySelector('input[name="tip-percentage"]:checked').value;
    })();
