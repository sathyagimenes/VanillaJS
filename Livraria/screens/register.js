(() => {
	for (const file of ['common/navigation.js', 'common/field.js', 'common/api.js']) {
	  const script = document.createElement("script");
	  script.setAttribute("src", `./${file}`);
	  document.head.appendChild(script);
	}

	window.addEventListener('load', ()=> {
		let books= [
			{
				title: 'Senhor dos Aneis',
				author: 'J. R. R. Tolkien',
				description: 'Apesar de ter sido publicado em três volumes – a sociedade do anel, as duas torres e o retorno do rei – desde os anos 1950, o senhor dos anéis não é exatamente uma trilogia, mas um único grande romance que só pode ser compreendido em seu conjunto, segundo a concepção de seu autor, j.r.r. Tolkien. Com design cuidadosamente pensado para refletir a unidade da obra e os desenhos originais feitos por tolkien para as capas de cada volume, este box reúne os três livros da saga do anel e oferece aos leitores uma nova oportunidade de mergulhar no notável mundo da terra-média.',
				quantity: 150000000
			}
		]

		const main = document.createElement('main');
		const title = document.createElement('h1');
		const form = document.createElement('form');
		const divBtn = document.createElement('div');
		const btnInsert = document.createElement('button');

		title.textContent = 'Cadastro de livros';
		btnInsert.textContent = 'Cadastrar';
	
		document.body.appendChild(main);
		main.appendChild(title);
		main.appendChild(form);
	
		form.appendChild(field.create({
			label: 'Titulo',
			name : 'titulo'
		}))
		form.appendChild(field.create({
			label: 'Autor',
			name: 'autor',
		}))
		form.appendChild(field.create({
			label: 'Descrição',
			name: 'descricao',
		}))
		form.appendChild(field.create({
			label: 'Tiragem',
			name: 'tiragem',
			type: 'number'
		}))
		form.appendChild(divBtn);
		divBtn.appendChild(btnInsert);
	
		function register (inTitle, inAuthor, inDescription, inQuantity) {
			const newObj = { title: inTitle, author: inAuthor, description: inDescription, quantity: inQuantity};
			PostBook (newObj);
			books.push(newObj);//adicionar via api
			checkResgiter();//excluir depois
			window.alert('Categoria adicionada com sucesso!');
		}

		function checkResgiter () {
			for(let i = 0; i < books.length; i++)
			{
				console.log('title: ' + books[i].title + '\nauthor: ' + books[i].author);
			}
		}

		btnInsert.addEventListener("click", () => {
			const titulo = form.querySelector("[name='titulo']");
			const autor = form.querySelector("[name='autor']");
			const descricao = form.querySelector("[name='descricao']");
			const tiragem = form.querySelector("[name='tiragem']");
			if (titulo.value.length <= 2) {
				window.alert("O titulo deve ter, pelo menos, três letras");
			} else if (autor.value.length <= 2) {
				window.alert("O autor deve ter, pelo menos, três letras");
			} else if (descricao.value.length <= 2) {
				window.alert("A descrição deve ter, pelo menos, três letras");
			} else if (tiragem.value.length < 1) {
				window.alert("A tiragem deve ter, pelo menos, um número");
			} else {
				register(titulo.value, autor.value, descricao.value, tiragem.value); 
				inputId.value = "";
				inputName.value = "";
			}
		});
	})
})();