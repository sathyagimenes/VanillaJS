window.Page.register = async () => {
  main.innerHTML = "";

  const container = utils.createElementWithAttribute(
    "div",
    "class",
    "containerRegister"
  );
  main.appendChild(container);

  const title = utils.createElementWithText({
    type: "h1",
    text: "Cadastro de livros",
  });

  const divBtn = document.createElement("div");
  const btnInsert = utils.createElementWithText({
    type: "button",
    text: "Cadastrar",
    attrType: "type",
    attrName: "button",
  });
  divBtn.appendChild(btnInsert);

  const form = field.form([
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
    divBtn,
  ]);
  container.append(title, form);

  async function register(inTitle, inAuthor, inDescription, inQuantity) {
    const body = api.postBookBody({
      title: inTitle,
      author: inAuthor,
      description: inDescription,
      quantity: parseInt(inQuantity),
    });
    const response = await api.connection({
      method: "POST",
      service: "livro",
      body,
    });
    if (response) {
      window.alert("Livro adicionado com sucesso!");
    }
  }

  btnInsert.addEventListener("click", InsertNewBook);

  async function InsertNewBook() {
    const titulo = form.querySelector("[class='titulo']");
    const autor = form.querySelector("[class='autor']");
    const descricao = form.querySelector("[class='descricao']");
    const tiragem = form.querySelector("[class='tiragem']");
    if (titulo.value.length <= 2) {
      window.alert("O titulo deve ter, pelo menos, três letras");
    } else if (autor.value.length <= 2) {
      window.alert("O autor deve ter, pelo menos, três letras");
    } else if (descricao.value.length <= 2) {
      window.alert("A descrição deve ter, pelo menos, três letras");
    } else if (tiragem.value.length < 1) {
      window.alert("A tiragem deve ter, pelo menos, um número");
    } else {
      register(titulo.value, autor.value, descricao.value, tiragem.value);
    }
    Page.register();
  }
};
