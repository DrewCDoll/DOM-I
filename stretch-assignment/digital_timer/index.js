// let secTens = document.getElementById('secondTens');
// console.log(document.getElementById('secondTens'));
// console.log(secTens);
// let secOnes = document.getElementById('secondOnes');
// let msHunds = document.getElementById('msHundreds');
// let msTens = document.getElementById('msTens');


window.onload = function() {

    let tenCount = 0;
    let oneCount  = 0;
    let tensCount = 0;
    let hundsCount = 0;


    function countTimer () {

        if (tenCount === 1) {
            clearInterval(MyTimer);
            document.getElementsByClassName('digits')[0].style.color = 'red';
        } else {
            if (hundsCount === 9) {
                hundsCount = 0;
                if (tensCount === 9) {
                    tensCount = 0;
                    if (oneCount === 9) {
                        oneCount = 0;
                        tenCount++;
                    } else {
                        oneCount++;
                    }
                } else {
                    tensCount++;
                }
            } else {
                hundsCount++;
            }
            
            
        
            document.getElementById('msTens').textContent = hundsCount.toString();
            document.getElementById('msHundreds').textContent = tensCount.toString();
            document.getElementById('secondOnes').textContent = oneCount.toString();
            document.getElementById('secondTens').textContent = tenCount.toString();   

        }

    }


    let MyTimer = setInterval(countTimer, 10);
    // function runTimer() {
    //     let MyTimer = setInterval(countTimer, 10);
    //     MyTimer;
    // };

    function resetTimer() {
        document.getElementsByClassName('digits')[0].style.color = 'black';
        document.getElementById('msTens').textContent = '-';
        document.getElementById('msHundreds').textContent = '-';
        document.getElementById('secondOnes').textContent = '-';
        document.getElementById('secondTens').textContent = '-'; 
    };




    document.body.style.flexDirection = 'column';
    document.body.style.margin = '4rem auto';

    let cntrlDiv = document.createElement('div');
    cntrlDiv.id = 'control';
    cntrlDiv.style.display = 'flex';
    cntrlDiv.style.flexDirection = 'row';
    cntrlDiv.style.justifyContent = 'space-around';
    cntrlDiv.style.width = '10%';
    cntrlDiv.style.margin = '3rem auto';
    document.getElementsByTagName('body')[0].appendChild(cntrlDiv);

    let strtBtn = document.createElement('button');
    strtBtn.setAttribute('id', 'startButn'); 
    strtBtn.textContent = "Start";
    document.getElementById('control').appendChild(strtBtn);

    let resetBtn = document.createElement('button');
    resetBtn.id = 'resetBtn';
    resetBtn.textContent = 'Reset';
    document.getElementById('control').appendChild(resetBtn);

    // document.getElementById('strtBtn').addEventListener('click', runTimer());
    document.getElementById('resetBtn').addEventListener('click', resetTimer());

};
