//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.
//Подсказка: используйте коллекцию document.forms и свойство length
/*
const paragraph = document.getElementById('practicum');

function makeOne() {
	const forms = document.forms.length; //находит все формы на странице
	alert('Количество найденных форм: ' + forms); //выводим количество найденных форм с помощью `alert`
}

document.querySelector('.b-1').onclick = makeOne;// устанавливаем обработчик события "click", используемый для поиска элементов на странице с классом "b-1".
// При нажатии вызовется функция `makeOne`, которая находит все формы на странице и выводит количество найденных форм.

//Задание 2
//Найдите первую форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

const paragraphTwo = document.getElementById('practicum2');

function makeTwo() {
const firstForm = document.forms[0]; // Получаем первую форму с помощью коллекции document.forms
const formName = firstForm.getAttribute('name'); // Получаем значение атрибута "name" формы
alert(formName); // Выводим значение атрибута "name" в модальном окне
}

document.querySelector('.b-2').onclick = makeTwo;

//Задание 3
//Найдите последнюю форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

const paragraphThree = document.getElementById('practicum3');

function makeThree() {
const forms = document.forms;
const lastForm = forms[forms.length - 1]; // Получаем последнюю форму с помощью коллекции document.forms
const formName = lastForm.getAttribute('name'); // Получаем значение атрибута "name" формы
alert(formName); // Выводим значение атрибута "name" в модальном окне
}

document.querySelector('.b-3').onclick = makeThree;

//Задание 4
//Найдите все формы на странице и выведите их названия
//При нажатии на кнопку выведите названия всех найденных форм, разделенных запятыми
//Подсказка: Для решения задания вы можете использовать следующую логику:
//- Получите все формы на странице, используя коллекцию document.forms
//- Создайте пустой массив formNames для хранения названий форм
//- Пройдитесь по каждой форме в коллекции и для каждой формы
//- Получите значение атрибута name с помощью метода getAttribute
//- Добавьте полученное название в массив formNames
//- Преобразуйте массив formNames в строку, разделив названия запятыми, с помощью метода join()
//- Выведите полученную строку названий форм в элемент с id practicum4 при нажатии на кнопку

const paragraphFour = document.getElementById('practicum4');

function makeFour() {
	const forms = document.forms; //Получите все формы на странице, используя коллекцию document.forms
	const formNames = []; // Создаем пустой массив для хранения названий форм
	
	for (let i = 0; i < forms.length; i++) {
	const formName = forms[i].getAttribute('name'); // Получаем значение атрибута "name" формы
	formNames.push(formName); // Добавляем полученное название в массив formNames
}
const formNamesString = formNames.join(', '); // Преобразуем массив formNames в строку, разделяя названия запятыми
paragraphFour.textContent = formNamesString; // Выводим полученную строку названий форм в элемент с id "practicum4"
}
document.querySelector('.b-4').onclick = makeFour;

//Задание 5
//Найдите третью форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements
//Подсказка: используйте коллекцию document.forms для получения формы по индексу и свойство form.elements.length для получения количества элементов в форме

const paragraphFive = document.getElementById('practicum5');

function makeFive() {
const thirdForm = document.forms['formThree']; // Получаем третью форму по имени
const numberOfElements = thirdForm.elements.length; // Получаем количество элементов в форме
paragraphFive.textContent = `Количество элементов в форме: ${numberOfElements}`; // Выводим количество элементов в форме на страницу
}

document.querySelector('.b-5').onclick = makeFive;

//Задание 6
//Найдите вторую форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements

const paragraphSix = document.getElementById('practicum6');

function makeSix() {
const secondForm = document.forms['formTwo']; // Находим вторую форму по имени "formTwo"
const numberOfElements = secondForm.elements.length; // Получаем количество элементов в форме
paragraphSix.textContent = `Количество элементов в форме: ${numberOfElements}`; // Выводим количество элементов в форме на страницу
}


document.querySelector('.b-6').onclick = makeSix;

//Задание 7
//Выведите перечисление названий (name) всех элементов второй формы на экран. В задании 6 вы нашли их количество.
//Подсказка:
//- Используйте document.forms для получения коллекции всех форм на странице
//- Найдите вторую форму в коллекции форм, используя индекс 1 (индексы начинаются с 0)
//- Получите коллекцию элементов формы с помощью свойства elements у второй формы
//- Создайте пустую строку elementsList, которая будет хранить перечисление названий элементов
//- Используя цикл for, переберите элементы формы в коллекции formElements
//- Внутри цикла добавьте текущее название элемента формы (свойство name) в elementsList, добавляя дефис перед названием
//- После цикла выведите текст с перечислением элементов в элемент с id practicum7, используя свойство textContent

const paragraphSeven = document.getElementById('practicum7');

function makeSeven() {
	const secondForm = document.forms[1]; // Находим вторую форму в коллекции форм
	const formElements = secondForm.elements; // Получаем коллекцию элементов второй формы
	let elementsList = ''; // Создаем пустую строку для хранения перечисления названий элементов
		
	for (let i = 0; i < formElements.length; i++) { //Используем цикл for для перебора элементов формы в коллекции formElements
	elementsList += `-${formElements[i].name}`; // Внутри цикла добавляем текущее название элемента формы (свойство name) в elementsList, добавляя дефис перед названием
	}
	paragraphSeven.textContent = `Название элементов второй формы: ${elementsList}`; // Выводим текст с перечислением элементов, используя свойство textContent
}

document.querySelector('.b-7').onclick = makeSeven;

//Задание 8
//Выведите перечисление названий (name) всех элементов первой формы на экран. В задании 5 вы нашли их количество.

const paragraphEight = document.getElementById('practicum8');

function makeEight() {
const firstForm = document.forms[0]; // Находим первую форму в коллекции форм
const formElements = firstForm.elements; // Получаем коллекцию элементов первой формы
let elementsList = ''; // Создаем пустую строку для хранения перечисления названий элементов

for (let i = 0; i < formElements.length; i++) {
elementsList += `-${formElements[i].name}`; // Добавляем название элемента в строку с дефисом
}

paragraphEight.textContent = `Название элементов первой формы: ${elementsList}`; // Выводим перечисление названий элементов на страницу
}

document.querySelector('.b-8').onclick = makeEight;


//Задание 9
//Найдите третью форму на странице. Выведите перечисление названий (name) всех элементов формы на экран.

const paragraphNine = document.getElementById('practicum9');

function makeNine() {
const thirdForm = document.forms[2]; // Находим третью форму в коллекции форм
const formElements = thirdForm.elements; // Получаем коллекцию элементов третьей формы
let elementsList = ''; // Создаем пустую строку для хранения перечисления названий элементов

for (let i = 0; i < formElements.length; i++) {
elementsList += `-${formElements[i].name}`; // Добавляем название элемента в строку с дефисом
}

paragraphNine.textContent = `Название элементов третьей формы: ${elementsList}`; // Выводим перечисление названий элементов на страницу
}


document.querySelector('.b-9').onclick = makeNine;

//Задание 10
//Выведите на экран значенеие radio кнопки четвёртой формы на странице
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения radio кнопки

const paragraphTen = document.getElementById('practicum10');

function makeTen() {
const fourthForm = document.forms[3]; // Находим четвертую форму на странице
const radioButtons = fourthForm.elements; // Получаем коллекцию радиокнопок четвертой формы

let selectedValue = ''; // Создаем переменную для хранения значения выбранной радиокнопки
for (let i = 0; i < radioButtons.length; i++) { // Начинаем цикл, который перебирает все радиокнопки в коллекции
if (radioButtons[i].checked) {
selectedValue = radioButtons[i].value; // Получаем значение выбранной радиокнопки
break;
}
}

paragraphTen.textContent = `Выбранное значение радиокнопки: ${selectedValue}`; // Выводим значение выбранной радиокнопки на страницу
}

document.querySelector('.b-10').onclick = makeTen;

//Задание 11
//Выведите значения всех опций из первой формы
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения выбранной опции
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Создайте пустую строку optionsValues, которая будет хранить значения всех опций
//- Используйте цикл или метод forEach для перебора опций в коллекции элемента select
//- Внутри цикла получите значение каждой опции с помощью свойства value и добавьте его в optionsValues
//- Выведите значения опций на страницу

const paragraphEleven = document.getElementById('practicum11');

function makeEleven() {
	const formOne = document.forms.formOne; // Получаем доступ к форме по её имени
	const selectElement = formOne.firstSelect; // Получаем доступ к элементу select в первой форме
	let optionsValues = ''; // Создаем пустую строку для хранения значений опций
	
	for (let i = 0; i < selectElement.options.length; i++) {//используем цикл для всех элементов массива `options` объекта `selectElement`.
	optionsValues += selectElement.options[i].value + ' '; // Получаем значение каждой опции и добавляем его к optionsValues
	}
	
	paragraphEleven.textContent = `Значения всех опций: ${optionsValues}`; // Выводим значения опций на страницу
	}

document.querySelector('.b-11').onclick = makeEleven;


//Задание 12
//Выведите значения атрибутов id всех чекбоксов (количество: 3) из второй формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к чекбоксам с помощью form.elements и сохраните их в переменные
//- Получите значения атрибутов id всех чекбоксов второй формы

const paragraphTwelve = document.getElementById('practicum12');

function makeTwelve() {
const formTwo = document.forms.formTwo; // получаем доступ к форме по имени
const checkboxes = formTwo.querySelectorAll('input[type="checkbox"]'); // получаем все чекбоксы второй формы

let checkboxIds = ''; // создаем пустую строку для хранения значений id чекбоксов

checkboxes.forEach(function(checkbox) {//используем метод `forEach` для выполнения операции для каждого элемента в массиве `checkboxes`
checkboxIds += checkbox.id + ' '; // получаем значение атрибута id каждого чекбокса и добавляем его к checkboxIds
});

paragraphTwelve.textContent = `ID всех чекбоксов: ${checkboxIds}`; // выводим значения id чекбоксов на страницу
}

document.querySelector('.b-12').onclick = makeTwelve;

// Задание 13
//Проверьте была ли выбрана кнопка четвёртой формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к radio кнопке с помощью form.elements и сохраните её в переменную
//- Используйте условный оператор (if) для проверки выбранности кнопки
//- Если кнопка выбрана, выведите сообщение "Кнопка выбрана" на страницу
//- Если кнопка не выбрана, выведите сообщение "Кнопка не выбрана" на страницу

const paragraphThirteen = document.getElementById('practicum13');

function checkButton(e) {
	const form = document.forms.lastForm;
	const radioButton = form.elements.fourthName;
	if (radioButton.checked) {
	paragraphThirteen.textContent = "Кнопка выбрана";
	} else {
	paragraphThirteen.textContent = "Кнопка не выбрана";
	}
	}
document.querySelector('.b-13').addEventListener('click', checkButton);

//Задание 14
//Проверьте какой вариант выбран в первой форме
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Установите выбранным второй вариант: select.selectedIndex = 1;
//- Используйте свойство value выбранной опции для получения выбранного варианта
//- Используйте условный оператор (if) для проверки выбранного варианта
//- Если выбран первый вариант, выведите сообщение "Выбран первый вариант" на страницу
//- Если выбран второй вариант, выведите сообщение "Выбран второй вариант" на страницу
//- Если выбран третий вариант, выведите сообщение "Выбран третий вариант" на страницу

const paragraphFourteen = document.getElementById('practicum14');

function checkOption() {
	const form = document.forms.formOne;
	const selectElement = form.elements.firstSelect;
	selectElement.selectedIndex = 1;
	const selectedOption = selectElement.value;
	
	if (selectedOption === 'Опция 1') {
	paragraphFourteen.textContent = "Выбран первый вариант";
	} else if (selectedOption === 'Опция 2') {
	paragraphFourteen.textContent = "Выбран второй вариант";
	} else if (selectedOption === 'Опция 3') {
	paragraphFourteen.textContent = "Выбран третий вариант";
	}
	}

document.querySelector('.b-14').onclick = checkOption;

//Задание 15
//Добавьте в первую форму выбранную Опцию 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Используйте свойство selectedIndex элемента select, чтобы установить выбранный индекс опции по умолчанию
//- Установите значение selectedIndex равным индексу опции, которую вы хотите выбрать по умолчанию

function makeFifteen() {
const form = document.forms.formOne;//Получаем доступ к форме с помощью document.forms
const selectElement = form.elements.firstSelect; //Получаем доступ к элементу select с помощью form.elements 
selectElement.selectedIndex = 2; // Выбираем опцию с индексом 2 (третью опцию, так как индекс начинается с 0)
}


makeFifteen();

//Задание 16
//Добавьте во вторую форму выбранный Вариант 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу checkbox с помощью form.elements и сохраните его в переменную
//- Используйте свойство checked элемента checkbox, чтобы установить его выбранным по умолчанию
//- Установите значение checked равным true для выбранного варианта

function makeSixteen() {
let formTwo= document.forms.formTwo; //Получаем доступ к форме с помощью document.forms
let checkboxThree = formTwo.elements.checkbox3; //Получаем доступ к элементу checkbox с помощью form.elements 
checkboxThree.checked = true; // Выбрали чекбокс по умолчанию
}

makeSixteen();

//Задание 17
//Проверьте, заполнены ли все поля первой формы перед отправкой
//Подсказка:
//- Получите доступ к каждому полю формы с помощью form.elements и сохраните их в соответствующие переменные
//- Используйте условные операторы (if) для проверки каждого поля на заполненность
//- Если хотя бы одно поле не заполнено, выведите сообщение об ошибке на страницу (элемент для добавления ошибки создан: <p class="error-message" id="errorMessage"></p>)
//- Добавьте слушатель события submit к форме, чтобы выполнить проверку перед отправкой
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

const formOne = document.forms.formOne;

formOne.addEventListener('submit', function (event) {
	event.preventDefault(); //Отмена отправки

	let errorMessage = document.getElementById('errorMessage'); // Получить доступ к элементу с идентификатором errorMessage и сохранить его в переменной errorMessage

let firstName = formOne.elements.firstName.value; // Получить значение поля firstName формы formOne и сохранить его в переменной firstName
let firstEmail = formOne.elements.firstEmail.value; // Получить значение поля firstEmail формы formOne и сохранить его в переменной firstEmail
let firstSelect = formOne.elements.firstSelect.value; // Получить значение поля firstSelect формы formOne и сохранить его в переменной firstSelect

if (firstName === '' || firstEmail === '' || firstSelect === 'Выберите опцию:') { // Проверить, заполнены ли все поля
errorMessage.textContent = 'Пожалуйста, заполните все поля'; // Если есть незаполненные поля, вывести сообщение об ошибке
} else {
formOne.submit(); // Если все поля заполнены, отправить форму
}

});

//Задание 18
//Очистите все поля первой формы после отправки
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Используйте метод reset() формы, чтобы очистить все её поля после отправки
//- Добавьте слушатель события addEventListener на первую форму, как вы делали в задании 17
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

formOne.addEventListener('submit', function (event) {
	event.preventDefault(); //Отмена отправки
	formOne.reset(); // Сбросить все поля формы после отправки
});

//Задание 19
//При выборе определенной опции из выпадающего списка измените цвет фона страницы
//Подсказка:
//- Получите доступ к элементу select с помощью document.getElementById или другим методом выборки элементов и сохраните его в переменную
//- Используйте событие onchange для отслеживания изменений в выборе опции
//- В обработчике события, используя условные операторы (if), проверьте выбранную опцию
//- В зависимости от выбранной опции, измените цвет фона страницы, используя свойство document.body.style.backgroundColor

//const selectElement = //Ваш код
const selectElement = document.getElementById('firstSelect'); // Получение доступа к элементу select и сохранение его в переменной
// selectElement.onchange = function () {
// 	//Ваш код
// };
selectElement.onchange = function () { // Установка обработчика события onchange
	if (selectElement.value === 'Опция 1') { // Проверка выбранной опции
	document.body.style.backgroundColor = 'lightblue'; // Изменение цвета фона страницы
	} else if (selectElement.value === 'Опция 2') {
	document.body.style.backgroundColor = 'lightgreen';
	} else if (selectElement.value === 'Опция 3') {
	document.body.style.backgroundColor = 'lightpink';
	}
	};

//Задание 20
//Добавьте валидацию для поля Email
//Подсказка:
//- Получите доступ к первой форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к полю Email с помощью form.elements и сохраните его в переменную
//- Используйте событие oninput для отслеживания изменений в поле Email
//- В обработчике события, используя регулярное выражение (RegExp), проверьте введенное значение поля Email
//- В зависимости от результата проверки, измените стиль поля Email (например, установите класс с ошибкой) и отобразите сообщение об ошибке в элементе <p> (добавьте элемент самостоятельно) с помощью свойства textContent.

//const emailInput = //Ваш код
const errorMessage = document.getElementById('errorMessage');
emailInput.oninput = function () {
	//Ваш код
};

const emailInput = document.getElementById('firstEmail');
const errorMessage = document.getElementById('errorMessage');

emailInput.oninput = function () {
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if (!emailRegex.test(emailInput.value)) {
emailInput.classList.add('error');
errorMessage.textContent = 'Введите действительный адрес электронной почты';
} else {
emailInput.classList.remove('error');
errorMessage.textContent = '';
}
};


//Задание 21
//При отправке второй формы выполняется проверка всех чекбоксов. Если ни один из чекбоксов не выбран, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result21".

document.querySelector('.b-21').onclick = function (event) {
	const checkboxes = document.forms.formTwo.querySelectorAll('input[type="checkbox"]');
	let isChecked = false;

	checkboxes.forEach(function (checkbox) {
		if (checkbox.checked) {
			isChecked = true;
		}
	});

	if (!isChecked) {
		event.preventDefault(); // отмена отправки формы
    document.getElementById('result21').textContent = 'Выберите хотя бы один чекбокс'; // вывод сообщения об ошибке
	} else {
		document.getElementById('result21').textContent = 'Проверка пройдена';
	}
};

//Задание 22
//При отправке третьей формы выполняется проверка поля Имя на заполненность. Если поле Имя пустое, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result22".

document.querySelector('.b-22').onclick = function (event) {
	const nameInput = document.forms.formThree.elements.thirdName;

	if (nameInput.value.trim() === '') {
		event.preventDefault(); // отмена отправки формы
		document.getElementById('result22').textContent = 'Поле "Имя" не заполнено'; // вывод сообщения об ошибке
	} else {
		document.getElementById('result22').textContent = 'Проверка пройдена';
	}
};

//Задание 23
//При выборе опции "Я хочу зарегистрироваться" в четвёртой форме кнопка должна быть разблокирована. В противном случае, сделайте кнопку отправки формы заблокированной.
//Подсказка: используйте свойство disabled

let radioButton = document.forms.lastForm.fourthName; // Получаем ссылку на радиокнопку

radioButton.addEventListener('change', function() { // Когда состояние радиокнопки изменяется, выполняется функция обработчика
document.forms.lastForm.fourthButton.disabled = (this.value !== 'Я хочу зарегистрироваться');// Кнопка отправки формы становится заблокированной, если выбранная опция не равна "Я хочу зарегистрироваться"
});

//Задание 24
//Найдите все поля ввода на странице и установите им атрибут "placeholder" со значением "Введите данные"
//Подсказка: для установки атрибута используйте методы forEach и setAttribute

document.querySelector('.b-24').onclick = function () {
	//Ваш код
};

document.querySelector('.b-24').onclick = function () {
	let inputFields = document.querySelectorAll('input');// Находим все элементы ввода на странице
	inputFields.forEach(function(input) {// Используем forEach для итерации по каждому полю ввода
	input.setAttribute('placeholder', 'Введите данные');// Устанавливаем атрибут placeholder для каждого поля ввода
	});
};


//Задание 25
//При фокусе на любом поле ввода измените его границу на цвет "#00ff00". При потере фокуса восстановите стандартную границу.

document.querySelector('.b-25').onclick = function () {
	const inputs = document.querySelectorAll('input');

	inputs.forEach(function (input) {
		input.addEventListener('focus', function () {
			//Ваш код
		});

		input.addEventListener('blur', function () {
			//Ваш код
		});
	});
};

document.querySelector('.b-25').onclick = function () {// Выбираем элемент с классом 'b-25' и добавляем обработчик события click
	const inputs = document.querySelectorAll('input'); // Создаем переменную inputs и присваиваем ей все найденные элементы input на странице

	inputs.forEach(function (input) { // Для каждого найденного элемента input добавляем обработчики событий
	input.addEventListener('focus', function () {// При фокусе на элементе изменяем его границу
		input.style.border = '2px solid #00ff00';
		// Изменяем границу на цвет "#00ff00" при фокусе
		input.style.border = '2px solid #00ff00';
	});
	input.addEventListener('blur', function () {// При потере фокуса восстанавливаем стандартную границу
		input.style.border = '2px solid #000000';
	});
	});
};

//Задание 26
//При нажатии на кнопку "Задание 26" отобразите в элементе с id "result26" значение placeholder из поля имя в третьей форме

//document.querySelector('.b-26').onclick = function (event) {
	//event.preventDefault();
	//Ваш код
//};

document.querySelector('.b-26').onclick = function (event) {
	event.preventDefault();

	const inputName = document.querySelector('.thirdForm input[name="thirdName"]');// Находим поле ввода имени в третьей форме
	const placeholderValue = inputName.getAttribute('placeholder');// Получаем значение атрибута placeholder
	document.getElementById('result26').innerText = placeholderValue;// Отображаем значение placeholder в элементе с id "result26"
};

//Задание 27
//При изменении значения любого из полей второй формы отобразите сообщение с текстом "Изменение внесено" в элементе с id "result27"

const formTwoInputs = document.querySelectorAll('.secondForm input');// выбираем все поля второй формы

formTwoInputs.forEach(function (input) { // для каждого поля второй формы
	input.addEventListener('input', function () {// добавляем слушатель события ввода
	document.getElementById('result27').innerText = 'Изменение внесено'; // текст "Изменение внесено" отображается в элементе с id "result27"
});
});

//Задание 28
//При выборе любой из опций выпадающего списка в первой форме отобразите сообщение с текстом "Опция выбрана" в элементе с id "result28"

const selectFormThree = document.getElementById('firstSelect'); // выбираем выпадающий список по его id

selectFormThree.addEventListener('change', function () { // добавляем слушатель события изменения значения списка
document.getElementById('result28').innerText = 'Опция выбрана'; // отображаем текст "Опция выбрана" в элементе с id "result28"
});

//Задание 29
//При заполнении всех полей третьей формы выведите их значения в консоль. Используйте JavaScript без использования объекта FormData.

const formThree = document.forms.formThree;
const nameInputThree = form.elements.thirdName;
const emailInputThree = form.elements.thirdEmail;

function handleSubmitTwentyNine(event) {
	event.preventDefault();

	if (nameInputThree.value && emailInputThree.value) {
		//Ваш код
	} else {
		console.log('Пожалуйста, заполните все поля формы.');
	}
}

formThree.addEventListener('submit', handleSubmitTwentyNine);

const formThree = document.forms.formThree; // Получаем форму по её атрибуту name
const nameInputThree = formThree.elements.thirdName; // Получаем поле для ввода имени из формы
const emailInputThree = formThree.elements.thirdEmail; // Получаем поле для ввода email из формы

function handleSubmitTwentyNine(event) { // Объявление функции, которая будет вызываться при отправке формы
	event.preventDefault(); / Предотвращаем отправку формы по умолчанию
	if (nameInputThree.value && emailInputThree.value) { // Проверяем, заполнены ли оба поля ввода
console.log('Имя: ', nameInputThree.value, 'Email: ', emailInputThree.value); // Если оба поля заполнены, выводим их значения в консоль
	} else {
	console.log('Пожалуйста, заполните все поля формы.'); // Если хотя бы одно поле не заполнено, выводим сообщение об ошибке в консоль
	}
}

formThree.addEventListener('submit', handleSubmitTwentyNine); // Добавляем обработчик события "submit" на форму, который будет вызывать функцию handleSubmitTwentyNine

//Задание 30
//При отправке второй формы выведите значения выбранных вариантов в консоль

const formTwo = document.forms.formTwo;
const resultElement = document.getElementById('result30');

formTwo.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();

	const checkboxes = formTwo.querySelectorAll('input[type="checkbox"]:checked');
	const selectedOptions = Array.from(checkboxes).map((checkbox) => checkbox.labels[0].textContent);

	//Ваш код
}
*/

const formTwo = document.forms.formTwo;// Получаем ссылку на форму с идентификатором formTwo
const resultElement = document.getElementById('result30');// Получаем ссылку на элемент с идентификатором result30

formTwo.addEventListener('submit', handleSubmit);//Добавляем обработчик события "submit" на форму, который будет вызывать функцию handleSubmit

function handleSubmit(event) {// Объявляем функцию handleSubmit, которая будет вызываться при отправке формы
event.preventDefault();// Предотвращаем отправку формы по умолчанию


const checkboxes = formTwo.querySelectorAll('input[type="checkbox"]:checked');// Получаем все отмеченные флажки
const selectedOptions = Array.from(checkboxes).map((checkbox) => checkbox.labels[0].textContent);// Преобразуем полученные флажки в массив и извлекаем текст меток (labels)

console.log('Selected options:', selectedOptions);// Выводим выбранные варианты в консоль
}