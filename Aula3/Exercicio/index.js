const animais= [
	{
		nome: 'Baleia-azul',
		especie: 'Balaenoptera musculus',
		pais: 'Antártica',
		quantidade: 8500,
	},
	{
		nome: 'Foca-monge-do-Havaí',
		especie: 'Monachus schauinslandi',
		pais: 'Havaí',
		quantidade: 1000,
	},
	{
		nome: 'Onça-pintada',
		especie: 'Panthera onca',
		pais: 'Brasil',
		quantidade: 10000,
	},
	{
		nome: 'Panda-gigante',
		especie: 'Ailuropoda melanoleuca',
		pais: 'China',
		quantidade: 2500,
	},
	{
		nome: 'Arara-azul-de-lear',
		especie: 'Anodorhynchus leari',
		pais: 'Brasil',
		quantidade: 1200,
	},
	{
		nome: 'Peixe-boi-marinho',
		especie: 'Trichecus manatus Linnaeus',
		pais: 'Brasil',
		quantidade: 500,
	},
	{
		nome: 'Macaco-prego-galego',
		especie: 'Sapajus flavius',
		pais: 'Brasil',
		quantidade: 1000,
	},
	{
		nome: 'Peixe-boi-marinho',
		especie: 'Trichecus manatus Linnaeus',
		pais: 'Brasil',
		quantidade: 500,
	},
	{
		nome: 'Pica-pau-amarelo',
		especie: 'Celeus flavus subflavus',
		pais: 'Brasil',
		quantidade: 250,
	},
	{
		nome: 'Gorila-da-montanha',
		especie: 'Gorilla beringei beringei',
		pais: 'Congo, Uganda, Ruanda',
		quantidade: 1000,
	},
]

const main = document.getElementsByTagName('main')[0]
const table = document.createElement('table')
const thead = document.createElement('thead')
const tbody = document.createElement('tbody')
const tfooter = document.createElement('tfoot')

main.appendChild(table)
table.appendChild(thead)
table.appendChild(tbody)
table.appendChild(tfooter)

const trHead = document.createElement('tr')
thead.appendChild(trHead)

const th1 = document.createElement('th')
th1.textContent = 'Nome'
thead.appendChild(th1)

const th2 = document.createElement('th')
th2.textContent = 'Espécie'
thead.appendChild(th2)

const th3 = document.createElement('th')
th3.textContent = 'País'
thead.appendChild(th3)

const th4 = document.createElement('th')
th4.textContent = 'Quantidade'
thead.appendChild(th4)

for (let i = 0; i < animais.length; i++) {
	const tr1 = document.createElement('tr')
	tbody.appendChild(tr1)
	const td1 = document.createElement('td')
	td1.textContent = animais[i].nome
	tr1.appendChild(td1)
	const td2 = document.createElement('td')
	td2.textContent = animais[i].especie
	tr1.appendChild(td2)
	const td3 = document.createElement('td')
	td3.textContent = animais[i].pais
	tr1.appendChild(td3)
	const td4 = document.createElement('td')
	td4.textContent = animais[i].quantidade
	tr1.appendChild(td4)
}

let sum = 0
for (let i = 0; i < animais.length; i++) {
	sum += animais[i].quantidade 
}
const trFooter = document.createElement('tr')
tfooter.appendChild(trFooter)
const tdFooter1 = document.createElement('td')
tdFooter1.textContent = 'Total de individuos'
tdFooter1.colSpan = "3";
tdFooter1.style.textAlign = "right"
trFooter.appendChild(tdFooter1)
const tdFooter2 = document.createElement('td')
tdFooter2.textContent = sum;
trFooter.appendChild(tdFooter2)


//estilização
const styleTag = document.createElement("style");
styleTag.innerHTML = `
	table {
		background-color: #222222;
		color: #e7e7e7;
		margin: 2rem;
		padding: 10px;
	}
	td {
		padding: 10px;
		text-align: center;
	}
	tfoot {
		font-weight: bold;
	}
`;
const headTag = document.querySelector('head');
headTag.appendChild(styleTag);