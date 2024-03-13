// Yukarı çık butonuna tıklandığında sayfanın en üstüne yavaşça kaydırma işlevi
document.getElementById('upButton').addEventListener('click', function () {
	// Animasyon etkisi için smooth kaydırma
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})
