// EXAMINE THE DOCUMENT OBJECT //

// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = '123';
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// const headerTitle = document.getElementById('header-title') as HTMLTitleElement;
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);  // pays attention to the styling
// headerTitle.innerHTML = '<h3>Hello</h3>';
// const header = document.getElementById('main-header') as HTMLElement;
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// (items[1] as HTMLLIElement).style.fontWeight = 'bold';
// (items[1] as HTMLLIElement).style.backgroundColor = 'yellow';

// for(let i = 0; i < items.length; i++) {
//     (items[i] as HTMLLIElement).style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// const header = document.querySelector('#main-header') as HTMLElement;
// header.style.borderBottom = 'solid 4px #ccc';

// const input = document.querySelector('input')!;
// input.value = 'Hello World';

// const submit = document.querySelector('input[type="submit"]') as HTMLInputElement;
// submit.value = 'SEND';

// const item = document.querySelector('.list-group-item') as HTMLLIElement;
// item.style.color = 'red';

// const lastItem = document.querySelector('.list-group-item:last-of-type') as HTMLLIElement;
// lastItem.style.color = 'blue';

// const secondItem = document.querySelector('.list-group-item:nth-child(2)') as HTMLLIElement;
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
const titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

const odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
odd.forEach(item => (item as HTMLLIElement).style.backgroundColor = '#f4f4f4');

const even = document.querySelectorAll('li:nth-child(even)');
even.forEach(item => (item as HTMLLIElement).style.backgroundColor = '#ccc');
