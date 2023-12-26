window.addEventListener('scroll', function () {
	scrollY > 50 ? document.querySelector('.header_head').classList.add('scroll') : document.querySelector('.header_head').classList.remove('scroll');
});

window.addEventListener('scroll_logo', function () {
	scrollY > 0 ? document.querySelector('.header_head_logo').classList.add('scroll_logo') : document.querySelector('.header_head_logo').classList.remove('scroll_logo');
});