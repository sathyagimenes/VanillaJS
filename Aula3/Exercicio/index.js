const animais= [
	{
		nome: 'lobo-guara',
		espécie: 'xxxxx',
		país: 'Brasil',
		quantidade: 1500,
	},
	{
		nome: 'Foca-monge-do-Havaí',
		espécie: 'Monachus schauinslandi',
		país: 'Havaí',
		quantidade: 1000,
	}
]

const main = document.getElementsByTagName('main')[0]
const table = document.createElement('table')
const thead = document.createElement('thead')
const tbody = document.createElement('tbody')
const tfooter = document.createElement('tfooter')

main.appendChild(table)
table.appendChild(thead)
table.appendChild(tbody)
table.appendChild(tfooter)

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

// for (let i = 0; i <= 10; i++)
// {
// 	const td1 = document.createElement('td')
// 	td1.textContent = animais[0]
// }