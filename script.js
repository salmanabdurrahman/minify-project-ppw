// ! hamburger menu and hidden box
var buttonClicked = false;

document.querySelector('.hidden__button').addEventListener('click', function () {
	var spans = document.querySelectorAll('.hidden__hamburger');
	var box = document.querySelector('.hidden__box');

	if (!buttonClicked) {
		spans[0].style.transform = 'translateY(7px) rotate(45deg)';
		spans[1].style.display = 'none';
		spans[2].style.transform = 'translateY(-1px) rotate(-45deg)';
		box.style.display = 'block';
		box.style.transform = 'transform: scale(1) translateX(100%);';
		buttonClicked = true;
	} else {
		spans[0].style.transform = '';
		spans[1].style.display = 'block';
		spans[2].style.transform = '';
		box.style.display = 'none';
		box.style.transform = 'transform: scale(0) translateX(-100%);';
		buttonClicked = false;
	}
});

// ! tombol totop
var toTop = document.getElementById('toTop');

toTop.addEventListener('click', function () {
	window.scrollTo(0, 0);
});

// ! animasi pada navbar
const nav = document.getElementById('navbar');
let oldValue = 0;
let animation_height = 100;
let small_screen_height = 80;

window.addEventListener('scroll', function () {
	let newValue = window.scrollY;
	if (oldValue - newValue < 0 && newValue > animation_height) {
		// nav.style.top = '-100px';
		nav.style.transform = 'translateY(-100px)';
	} else if (oldValue - newValue > 0) {
		setTimeout(() => {
			// nav.style.top = '0px';
			nav.style.transform = '';
		}, 100);
	}

	if (window.innerWidth <= 600) {
		animation_height = small_screen_height;
	}

	oldValue = newValue;
});

// ! button untuk kembali ke home
document.getElementById('backToHome').addEventListener('click', function () {
	window.location.href = 'index.html';
});

// ! button untuk mengirimkan email
document.getElementById('submitEmail').addEventListener('click', function () {
	var email = document.getElementById('inputEmail').value;

	if (email === '') {
		alert('Please fill in the input first.');
		return;
	}

	alert('Thank you for sending an email to receive special promotions and the monthly newsletter.');

	setTimeout(function () {
		location.reload();
	}, 500);
});

// ! button untuk mengirimkan hasil search
document.getElementById('submitSearch').addEventListener('click', function () {
	var search = document.getElementById('inputSearch').value;

	if (search === '') {
		alert('Please fill in the input first.');
		return;
	}

	alert('We apologize, but the content you are looking for was not found.');

	setTimeout(function () {
		location.reload();
	}, 500);
});

// ! button untuk order dan close
function toggleOrderSection() {
	const orderSection = document.querySelector('.order');
	if (orderSection.style.display === 'none') {
		orderSection.style.display = 'flex';
	} else {
		orderSection.style.display = 'flex';
	}
}

function toggleOrderClose() {
	const orderSection = document.querySelector('.order');
	if (orderSection.style.display === 'flex') {
		orderSection.style.display = 'none';
	} else {
		orderSection.style.display = 'none';
	}
}

// ! button untuk mengirimkan pesanan order
function inputValidation() {
	const inputs = document.querySelectorAll('.order__input');
	let isAllFilled = true;

	inputs.forEach((input) => {
		if (!input.value) {
			isAllFilled = false;
		}
	});

	if (isAllFilled) {
		alert('Thank you for placing an order with our travel agency!');
		setTimeout(function () {
			location.reload();
		}, 500);
	} else {
		alert('Please fill in the input first.');
	}
}
