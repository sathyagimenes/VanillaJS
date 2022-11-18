const myCode = 'bf796834-1cf3-43d2-ab7b-ef95b94b7c3a';

async function PostBook ({title, author, description, quantity}) {
  const response = await fetch('http://livros.letscode.dev.netuno.org:25390/services/livro', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
		"aluno": {
		  "uid": "myCode"
		},
		"tiragem": quantity,
		"titulo": title,
		"autor": author,
		"descricao": description
    })
  }).catch(error => {
    console.log('Erro na comunicação:', error);
  });

  if(!response.ok){
    errorHandler(response);
    return []; 
  }
  
  return await response.json();
}

function errorHandler(response){
    console.log('Erro : ', response.status, ' - ', response.statusText);
}