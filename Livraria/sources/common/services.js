window.api = {
  connection: async ({ method = "POST", service, body }) => {
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

      if (!response.ok) {
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
      console.log("Erro na comunicação:", error);
    }
  },
  getBookBody: () => {
    return JSON.stringify({
      text: "",
      aluno: {
        uid: myCode,
      },
    });
  },
  postBookBody: ({ title, author, description, quantity }) => {
    return JSON.stringify({
      aluno: {
        uid: myCode,
      },
      tiragem: quantity,
      titulo: title,
      autor: author,
      descricao: description,
    });
  },
};
