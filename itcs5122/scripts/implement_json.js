// $.ajax({
// 	method: 'GET',
// 	url: '../components/navbar.json',
// 	success: function (response) {
// 		pages = response;

// 		response.forEach((post) => {
// 			navbar.insertAdjacentHTML('beforeend', `<a href="${post.path}"><button >${post.name}</button></a>`);
// 		});
// 	}
// });

async function update_navbar() {
	const navbar = document.getElementById('navbar');
	if (!navbar) return;

	try {
		const response = await fetch('components/navbar.json');
		const pages = await response.json();

		navbar.innerHTML = ''; // Clear existing content
		pages.forEach((page) => {
			navbar.insertAdjacentHTML('beforeend', `<a href="${page.path}"><button>${page.name}</button></a>`);
		});
	} catch (err) {
		console.error('Failed to update navbar:', err);
	}
}

document.addEventListener('DOMContentLoaded', update_navbar);

// try {
// 	const abs_path = path.join(import.meta.dirname, 'posts.json');
// 	const posts = await fs.readFile(abs_path, 'utf8');
// 	const json_data = await JSON.parse(posts);

// 	no_history_test(json_data);
// 	for (let i = 0; i < json_data.length; i++) {
// 		console.log(`${json_data[i].id}: ${json_data[i].title}`);
// 	}
// 	return json_data;
// } catch (err) {
// 	console.log(chalk.red(err));
// }
