const parser = new DOMParser();

const xmlText = parser.parseFromString(
	`<produtos>
	<produto>
	  <titulo>Camiseta Esportiva</titulo>
	  <descricao>Com tecnologia inovadora que, além de controlar o calor, ajuda a reduzir a transpiração.</descricao>
	  <preco>35,50</preco>
	</produto>
	<produto>
	  <titulo>Bermuda Jeans</titulo>
	  <descricao>Bordada no estilo ROCK! 100% Algodão.</descricao>
	  <preco>54,62</preco>
	</produto>
	<produto>
	  <titulo>Calça Moletom</titulo>
	  <descricao>Básica com modelagem reta, perfeita para o look confortável, com forro peludinho.</descricao>
	  <preco>79,90</preco>
	</produto>
  </produtos>
  `,
  `text/xml`
)


//Camiseta Esportiva
document.getElementsByTagName('h1')[0].textContent = xmlText.getElementsByTagName('titulo')[0].textContent
document.getElementsByTagName('p')[0].textContent = xmlText.getElementsByTagName('descricao')[0].textContent
document.getElementsByTagName('span')[0].textContent = xmlText.getElementsByTagName('preco')[0].textContent

//Bermuda Jeans
document.getElementsByTagName('h1')[1].textContent = xmlText.getElementsByTagName('titulo')[1].textContent

const section = document.querySelector('section[data-item="bermuda-jeans"]')
const description = document.createElement('p')
description.textContent = xmlText.getElementsByTagName('descricao')[1].textContent
divBermuda.appendChild(description)

const price = document.createElement('span')
price.textContent = xmlText.getElementsByTagName('preco')[1].textContent

//moletom
const title = document.createElement('h1')
title.textContent = xmlText.getElementsByTagName('titulo')[2].textContent
description.textContent = xmlText.getElementsByTagName('descricao')[2].textContent
price.textContent = xmlText.getElementsByTagName('preco')[2].textContent

