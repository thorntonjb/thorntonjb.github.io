let pages = [];
const navbar = document.getElementById('headernav');

$.ajax({
	method: 'GET',
	url: './components/navbar.json',
	success: function (response) {
		pages = response;

		response.forEach((post) => {
			navbar.insertAdjacentHTML('beforeend', `<a href="${post.path}"><button >${post.name}</button></a>`);
		});
	}
});
