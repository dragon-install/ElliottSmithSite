const whiteBarsIcon = document.querySelector('.navbar-container .fa-bars');
const blackBarsIcon = document.querySelector('.navbar .fa-bars');
const shoppingPage = document.querySelector('.shopping-page');

whiteBarsIcon.addEventListener('click', () => {
	if(shoppingPage.style.display = 'none') {
		window.scrollTo(0, 0);
		shoppingPage.style.display = 'block';
		document.body.style.overflow = 'hidden';
	} else {
		return;
	}
});

blackBarsIcon.addEventListener('click', () => {
	if(shoppingPage.style.display = 'block') {
		shoppingPage.style.display = 'none';
		document.body.style.overflow = 'visible';
	} else {
		return;
	}
});

