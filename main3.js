'use strict'

//1回目

//document.body.textContent = 'Hello';
//document.title = 'Changed!';

//２回目

//document.getElementById('target').textContent = 'Changed!';

//3回目

//document.querySelector('h1').textContent = 'H1!';

//document.querySelectorAll('li:nth-child(odd)').forEach(li =>{
//	li.textContent = 'li!';
//});

//4回目

//const ul = document.querySelector('ul');
//
////console.log(ul.parentNode);
////console.log(ul.children);
////console.log(ul.children[0]);
//
//for (let i = 0; i < ul.children.length; i++){
//	console.log(ul.children[i].textContent);
//}

//5回目

//const h1 = document.querySelector('h1');

////console.log(h1.title);
////h1.title = 'Changed!';

//h1.style.color = 'gray';
//h1.style.backgroundColor = 'pink';

//6回目

//const h1 = document.querySelector('h1');
//
//console.log(h1.dataset.appId);
//
//h1.dataset.message = 'This is custom message!';

//7.8回目

//const div = document.querySelector('div');
//
////div.classList.add('border-pink');
////div.classList.remove('box');
//
////if(div.classList.contains('border-pink')){
////	div.classList.remove('border-pink');
////}else{
////	div.classList.add('border-pink');
////}
//
//div.classList.toggle('border-pink');

//9.10回目

//const h1 = document.createElement('h1');
//h1.textContent = 'Title!';
//document.body.appendChild(h1);
//
//const p = document.createElement('p');
//p.textContent = 'hello hello hello...';
//document.body.appendChild(p);
//
//const h2 = document.createElement('h2');
//h2.textContent = 'Sub Title!';
//document.body.insertBefore(h2, p);
//
//const copy = p.cloneNode(true);
//document.body.insertBefore(copy, h2);
//
//document.body.removeChild(h2);

//11回目

//const text = document.querySelector('input[type="text"]');
//const textarea = document.querySelector('textarea');
//
//console.log(text.value);
//console.log(textarea.value);
//
////text.focus();
////text.select();
//text.disabled = true;

//12回目

//console.log(document.querySelectorAll('input[type="checkbox"]')[0].checked);
//console.log(document.querySelectorAll('input[type="checkbox"]')[1].checked);

//document.querySelectorAll('input[type="checkbox"]')[0].checked = true;

//console.log(document.querySelectorAll('input[type="radio"]')[0].checked);
//console.log(document.querySelectorAll('input[type="radio"]')[1].checked);
//
//document.querySelectorAll('input[type="radio"]')[1].checked = true;

//console.log(document.querySelectorAll('select > option')[0].selected);
//console.log(document.querySelectorAll('select > option')[1].selected);
//console.log(document.querySelectorAll('select > option')[2].selected);
//
//document.querySelectorAll('select > option')[2].selected = true;

//13回目

const button = document.querySelector('button');

//button.addEventListener('click', ()=>{
//	console.log('click!');
//});

button.addEventListener('dblclick', ()=>{
	console.log('click!');
});
