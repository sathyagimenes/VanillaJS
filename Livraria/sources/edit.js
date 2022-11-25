window.Page.edit = async () => {
  main.innerHTML = "";

  const container = CreateElementWithAttribute("div", "class", "editContainer");
  main.appendChild(container);
  const title = CreateElementWithText({
    type: "h1",
    text: "Edição e Remoção de livros",
  });

  const divBtnSearch = document.createElement("div");
  const btnSearch = CreateElementWithText({
    type: "button",
    text: "Procurar",
    attrType: "type",
    attrName: "button",
  });
  divBtnSearch.appendChild(btnSearch);

  const formSearch = field.form([
    field.create({
      label: "Procurar por Título",
      className: "procurar",
    }),
    divBtnSearch,
  ]);

  const divBtnEdit = document.createElement("div");
  const btnEdit = CreateElementWithText({
    type: "button",
    text: "Editar",
    attrType: "type",
    attrName: "button",
  });
  const btnDelete = CreateElementWithText({
    type: "button",
    text: "Deletar",
    attrType: "type",
    attrName: "button",
  });
  divBtnEdit.append(btnEdit, btnDelete);

  const formEdition = field.form([
    field.create({
      label: "Titulo",
      className: "titulo",
    }),
    field.create({
      label: "Autor",
      className: "autor",
    }),
    field.create({
      label: "Descrição",
      className: "descricao",
      inputType: "textarea",
    }),
    field.create({
      label: "Tiragem",
      className: "tiragem",
      inputType: "number",
    }),
    divBtnEdit,
  ]);
  container.append(title, formSearch, formEdition);

  btnSearch.addEventListener("click", () => {
    const procurar = document.querySelector("[class='procurar']");
    const book = api.connection({
      method: "POST",
      service: "livro/lista",
      body: api.getBookBody(procurar.value),
    });
    //   let filteredBook = book;
    //   function selectDataToTable(book) {
    // 	return book.map( bookObj => {
    // 	  return {
    // 		uid: bookObj.uid,
    // 		tiragem: bookObj.tiragem,
    // 		titulo: bookObj.titulo,
    // 		autor: bookObj.autor,
    // 		descricao: bookObj.descricao,
    // 	  }
    // 	});
    //   }
    //   const Mybook = selectDataToTable(filteredBook);

    //   const titulo = document.querySelector("[name='titulo']");
    //   titulo.value = Mybook.titulo;
    Page.edit();
    const autor = document.querySelector("[class='autor']");
    const descricao = document.querySelector("[class='descricao']");
    const tiragem = document.querySelector("[class='tiragem']");
    autor.value = Object.values(book[2])[1];
    descricao.value = "book.descricao";
    tiragem.value = book.tiragem;
    procurar.value = "";
  });

  //   EDIÇÃO
  btnEdit.addEventListener("click", () => {
    const titulo = form.querySelector("[name='titulo']");
    const autor = form.querySelector("[name='autor']");
    const descricao = form.querySelector("[name='descricao']");
    const tiragem = form.querySelector("[name='tiragem']");
    if (titulo.value.length <= 2) {
      window.alert("O titulo deve ter, pelo menos, três letras");
    } else if (autor.value.length <= 2) {
      window.alert("O autor deve ter, pelo menos, três letras");
    } else if (descricao.value.length <= 2) {
      window.alert("A descrição deve ter, pelo menos, três letras");
    } else if (tiragem.value.length < 1) {
      window.alert("A tiragem deve ter, pelo menos, um número");
    } else {
      edit(titulo.value, autor.value, descricao.value, tiragem.value);
      titulo.value = "";
      autor.value = "";
      descricao.value = "";
      tiragem.value = "";
    }
  });

  function edit(id, inTitle, inAuthor, inDescription, inQuantity) {
    const newObj = {
      bookId: id,
      title: inTitle,
      author: inAuthor,
      description: inDescription,
      quantity: inQuantity,
    };
    PutBook(newObj);
    window.alert("Categoria adicionada com sucesso!");
  }

  btnDelete.addEventListener("click", () => {
    if (!id.textContent == "") {
      deleteBook(id.textValue);
      titulo.value = "";
      autor.value = "";
      descricao.value = "";
      tiragem.value = "";
    } else {
      window.alert("Informe o título do livro a ser deletado");
    }
  });

  function deleteBook(id) {
    const newObj = {
      bookId: id,
    };
    DeleteBook(newObj);
    window.alert("Categoria adicionada com sucesso!");
  }
};
