window.Page.edit = async () => {
  main.innerHTML = "";

  const container = CreateElementWithAttribute("div", "class", "editContainer")
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
        name: "procurar",
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
        name: "titulo",
      }),
      field.create({
        label: "Autor",
        name: "autor",
      }),
      field.create({
        label: "Descrição",
        name: "descricao",
      }),
      field.create({
        label: "Tiragem",
        name: "tiragem",
        type: "number",
      }),
      divBtnEdit,
    ]);
    container.append(title, formSearch, formEdition);

    function checkResgiter() {
      for (let i = 0; i < books.length; i++) {
        console.log(
          "title: " + books[i].title + "\nauthor: " + books[i].author
        );
      }
    }

    btnSearch.addEventListener("click", () => {
      const procurar = document.querySelector("[name='procurar']");
      const book = GetBook(procurar.value);
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
      const autor = document.querySelector("[name='autor']");
      const descricao = document.querySelector("[name='descricao']");
      const tiragem = document.querySelector("[name='tiragem']");
	  autor.value = book.autor;
	  descricao.value = book.descricao;
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
