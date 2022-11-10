const animais= [
	{
		nome: 'lobo-guara',
		especie: 'xxxxx',
		pais: 'Brasil',
		quantidade: 1500,
	},
	{
		nome: 'Foca-monge-do-Havaí',
		especie: 'Monachus schauinslandi',
		pais: 'Havaí',
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
const tdFooter = document.createElement('td')
tdFooter.textContent = sum
trFooter.appendChild(tdFooter)
