let secTens = document.getElementById('secondTens');
let secOnes = document.getElementById('secondOnes');
let msHunds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

let tenCount = 0;
let oneCount  = 0;
let tensCount = 0;
let hundsCount = 0;

function countTimer () {

    if (tenCount = 1) {
        clearInterval(MyTimer);
        document.getElementsByClassName('digits')[0].style.color = 'red';
    } else {
        if (hundsCount === 9) {
            hundsCount = 0;
            tensCount++
        } else {
            hundsCount++;
        }
        if (tensCount === 9) {
            tensCount = 0;
            oneCount++;
        } else {
            tensCount++;
        }
        if (oneCount === 9) {
            oneCount = 0;
            tenCount++;
        } else {
            oneCount++;
        }
      
        msHunds.textContent = hundsCount;
        msTens.textContent = tensCount;
        secOnes.textContent = oneCount;
        secTens.textContent = tenCount;   

    }

    



}

let MyTimer = setInterval(countTimer, 1000);