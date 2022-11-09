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
