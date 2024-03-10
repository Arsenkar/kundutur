const hamMenu = document.querySelector('.ham-menu'),
	navBar = document.querySelector('.navbar'),
	navLink = document.querySelector('.ham-menu-link'),
	languageItem = document.querySelector('.language__item'),
	languageTitle = document.querySelector('.language__title')

hamMenu.addEventListener('click', () => {
	hamMenu.classList.toggle('active')
	navBar.classList.toggle('active')
})

navLink.addEventListener('click', () => {
	hamMenu.classList.remove('active')
	navBar.classList.remove('active')
})

languageTitle.addEventListener('click', () => {
	languageItem.classList.toggle('active')
})

window.onload = function () {
	// Kullanıcı aşağıya indikçe kontrol et
	window.onscroll = function () {
		scrollFunction()
	}
}

// Yukarı çık butonuna tıklandığında sayfanın en üstüne yavaşça kaydırma işlevi
document.getElementById('upButton').addEventListener('click', function () {
	// Animasyon etkisi için smooth kaydırma
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})
