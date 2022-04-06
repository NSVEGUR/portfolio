export default function loadDesktop() {
	window.addEventListener('load', () => {
		setTimeout(() => {
			document.getElementById('splash').style.display = 'none';
			document.querySelector('main').style.animation = 'fadein 0.5s forwards ease-in-out';
			document.getElementById('dock').style.animation =
				'appearFromBottom 0.7s forwards ease-in-out';
			document.querySelector('main').style.display = 'block';
		}, 2500);
	});
}
