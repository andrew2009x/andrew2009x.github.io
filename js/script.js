// // функция генерации случайных чисед
// function rand(min, max)
// {
// 	max = max || false;
// 	min = min || 255;
	
// 	if (max)
// 	{
// 		return Math.floor(Math.random()*(max-min+1))+min;
// 	}
// 	else
// 	{
// 		return Math.floor(Math.random()*(min+1));
// 	}
// }

// // функция генерации массива заполненного случайными числами
// function array_fill_random(limit, min, max)
// {
// 	limit = parseInt(limit);
// 	min = min || 0;
// 	max = max || 255;
	
// 	arr = new Array(limit);
	
// 	for (var i=0; i<limit; i++)
// 	{
// 		arr[i] = rand(min, max);
// 	}
	
// 	return arr;
// }
// console.log(array_fill_random(8,1,10));
let start = document.querySelector('.star');

localStorage.setItem('sign', false);//создание ключа name,vol
let signin = localStorage.getItem('sign');//дает обьект
console.log(signin);
// localStorage.removeItem('num');//удаление ключа
// localStorage.clear();//удаление всех ключей
function Start(pack,file){
    start.innerHTML = 'Start.';
    setTimeout(() => {
        start.innerHTML = 'Start..';
    },500);
    setTimeout(() => {
        start.innerHTML = 'Start...';
    },1000);
    setTimeout(() => {
        open(`${pack}/${file}.html`);
        start.innerHTML = 'Start';
    }, 1500);
}
function udacha(){
    Start('udacha','ud');
}
function matrix(){
    Start('matrix','mat');
}