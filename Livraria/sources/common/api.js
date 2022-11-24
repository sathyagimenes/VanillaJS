const myCode = "bf796834-1cf3-43d2-ab7b-ef95b94b7c3a";

async function PostBook({ title, author, description, quantity }) {
  try {
    const response = await fetch(
      "http://livros.letscode.dev.netuno.org:25390/services/livro",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          aluno: {
            uid: myCode,
          },
          tiragem: quantity,
          titulo: title,
          autor: author,
          descricao: description,
        }),
      }
    );
    await response.json();
    return "ok";
  } catch (error) {
    return console.log(error);
  }
}

const ultimoTiro = Promise.resolve(GetBook()).then((response) => {
  chamaNois(response);
});

function chamaNois(res) {
  res.forEach((element) => {
    console.log("x-tudao", element);
    console.log("autor", element.autor);
  });
}
//   ).catch((error) => {
//     console.log("Erro na comunicação:", error);
//   });

//   if (!response) {
//     errorHandler(response);
//     return [];
//   }

//   return await response.json();
// }

//usar o trycatch
async function GetBook(title = "") {
  const response = await fetch(
    `http://livros.letscode.dev.netuno.org:25390/services/livro/lista`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: title,
        aluno: {
          uid: myCode,
        },
      }),
    }
  ).catch((error) => {
    console.log("Erro na comunicação:", error);
  });

  if (!response) {
    errorHandler(response);
    return [];
  }

  return await response.json();
}

async function PutBook({ bookId, title, author, description, quantity }) {
  const response = await fetch(
    "http://livros.letscode.dev.netuno.org:25390/services/livro",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: bookId,
        aluno: {
          uid: myCode,
        },
        tiragem: quantity,
        titulo: title,
        autor: author,
        descricao: description,
      }),
    }
  ).catch((error) => {
    console.log("Erro na comunicação:", error);
  });

  if (!response) {
    errorHandler(response);
    return [];
  }

  return await response.json();
}

function errorHandler(response) {
  console.log("Erro : ", response.status, " - ", response.statusText);
}

// async function GetBook(title = "") {
//   try {
//     const response = await fetch("http://livros.letscode.dev.netuno.org:25390/services/livro/lista", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify({
//         text: title,
//         aluno: {
//           uid: "BOTE O SEU AQUI",
//         },
//       }),
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     return console.log(error);
//   }
// }

// const ultimoTiro = Promise.resolve(GetBook()).then((response)=>{
//   chamaNois(response)
// });

// function chamaNois(res){
//   res.forEach(element => {
//     console.log("x-tudao", element)
//     console.log("autor", element.autor)
//   });
// }
