let results_url = 'data.json';
let results;

load_score();

async function get_results(url) {
	const request = new Request(url);
	const response = await fetch(request);
	return await response.json();
}

async function load_score() {
	results = await get_results(results_url);

	results.forEach((category_result) => {
		let card = document.createElement('div');
		document.getElementById('summary').appendChild(card);
		card.outerHTML = `
            <div class="attribute ${category_result.category}">
				<img src="${category_result.icon}" alt="" srcset="" />
				<h3>${category_result.category}</h3>
				<p>${category_result.score} <span> / 100</span></p>
			</div>`;
	});

	let button = document.createElement('button');
	button.innerText = 'Continue';
	document.getElementById('summary').appendChild(button);
}
