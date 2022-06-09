let progress = document.getElementById('prog');
let min = Math.ceil(1);
let max = Math.floor(100);
let prog = Math.floor(Math.random() * (max - min)) + min;
let min1 = Math.ceil(1);
let max1 = Math.floor(10);
let progd = Math.floor(Math.random() * (max1 - min1)) + min1;

// progress.innerHTML = `<div id="prog" class="progress-bar" role="progressbar" style="width: ${prog}.${progd}%;" aria-valuenow="${prog}" aria-valuemin="0" aria-valuemax="100">${prog}.${progd}%</div>`;

function clock(){
    let clock = document.getElementById('mT');
    clock.innerHTML = `23:59:59`;
}

function startTimer () {
    let t = setInterval (function() {
        var s = document.getElementById ('mT'),
        f = function (x) {
            return (x / 100).toFixed (2).substr (2);
        }, 
        d = ':',
        y = s.innerHTML.split (d), 
        z = --y [2] + y [0] * 3.6e3 + y [1] * 60;
     
        if (!z){ clearInterval (t);}
        s.innerHTML = [
            f (Math.floor (z / 3600)),
            f (Math.floor (z % 3600 / 60)), 
            f (z % 3600 % 60)
        ].join (d);
    }, 1000);
}

localStorage.setItem('s', 0);//создание ключа name,vol
let s = localStorage.getItem('s');//дает обьект
const pr = document.querySelector('.prog'),
      bu = document.querySelector('.but'),
      Tm = document.querySelector('.Tm');
if(s == 0){
    bu.innerHTML = `<button id="but"  onclick = "clock(),startTimer()"  type="button" class="btn btn-outline-primary">Начнем?</button>`;
}

