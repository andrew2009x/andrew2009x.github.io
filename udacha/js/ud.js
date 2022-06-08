let progress = document.getElementById('prog');
let min1 = Math.ceil(1);
let max1 = Math.floor(100);
let prog = Math.floor(Math.random() * (max1 - min1)) + min1;
progress.innerHTML = `<div id="prog" class="progress-bar" role="progressbar" style="width: ${prog}%;" aria-valuenow="${prog}" aria-valuemin="0" aria-valuemax="100">${prog}%</div>`;