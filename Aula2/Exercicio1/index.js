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

const descriptionBermuda = document.createElement('p')
descriptionBermuda.textContent = xmlText.getElementsByTagName('descricao')[1].textContent

const priceBermuda = document.createElement('span')
priceBermuda.textContent = xmlText.getElementsByTagName('preco')[1].textContent

const divs = document.querySelectorAll('div[data-item]')
divs[1].appendChild(descriptionBermuda)
divs[1].appendChild(priceBermuda)


//moletom
const titleMoletom = document.createElement('h1')
titleMoletom.textContent = xmlText.getElementsByTagName('titulo')[2].textContent
const descriptionMoletom = document.createElement('p')
descriptionMoletom.textContent = xmlText.getElementsByTagName('descricao')[2].textContent
const priceMoletom = document.createElement('span')
priceMoletom.textContent = xmlText.getElementsByTagName('preco')[2].textContent

divs[2].appendChild(titleMoletom)
divs[2].appendChild(descriptionMoletom)
divs[2].appendChild(priceMoletom)
