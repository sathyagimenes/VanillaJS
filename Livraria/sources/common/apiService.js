window.api = {
  myCode: () => {
    return "bf796834-1cf3-43d2-ab7b-ef95b94b7c3a";
  },
  connection: async ({ method, service, body }) => {
    try {
      const response = await fetch(
        `http://livros.letscode.dev.netuno.org:25390/services/${service}`,
        {
          method: method.toUpperCase(),
          headers: {
            "Content-Type": "application/json",
          },
          body,
        }
      );
      if (!response) {
        alert("Ocorreu um erro na comunicação com o servidor!");
        console.error("Ocorreu um erro: ", response);
        return [];
      }

      const data = await response.json();
      if (data) {
        return data;
      }
      return;
    } catch (error) {
      alert("Exception error: Ocorreu um erro na comunicação com o servidor!");
      console.log("Erro na comunicação:", error);
    }
  },
  getBookBody: (title = "") => {
    return JSON.stringify({
      text: title,
      aluno: {
        uid: api.myCode(),
      },
    });
  },
  postBookBody: ({ title, author, description, quantity }) => {
    return JSON.stringify({
      aluno: {
        uid: api.myCode(),
      },
      tiragem: quantity,
      titulo: title,
      autor: author,
      descricao: description,
    });
  },
  putBookBody: ({ id, title, author, description, quantity }) => {
    return JSON.stringify({
      uid: id,
      aluno: {
        uid: api.myCode(),
      },
      tiragem: quantity,
      titulo: title,
      autor: author,
      descricao: description,
    });
  },
  deleteBookBody: (id) => {
    return JSON.stringify({
      aluno: {
        uid: api.myCode(),
      },
      uid: id,
    });
  },
};
