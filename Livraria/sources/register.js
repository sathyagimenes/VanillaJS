// window.Page.companiesList = async (filter = "") => {
window.Page.register = async () => {
  main.innerHTML = "";

  const container = CreateElementWithAttribute(
    "div",
    "class",
    "containerRegister"
  );
  main.appendChild(container);

  const title = CreateElementWithText({
    type: "h1",
    text: "Cadastro de livros",
  });

  const divBtn = document.createElement("div");
  const btnInsert = CreateElementWithText({
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

  async function Register(inTitle, inAuthor, inDescription, inQuantity) {
    const body = api.postBookBody({
      title: inTitle,
      author: inAuthor,
      description: inDescription,
      quantity: parseInt(inQuantity),
    });
    debugger
    const response = await api.connection({
      method: "POST",
      service: "livro",
      body,
    });
    if(response){
      window.alert("Livro adicionado com sucesso!");
    }
  }

  // const listOfBooks = await GetBook();
  btnInsert.addEventListener("click", InsertNewBook);

  async function InsertNewBook() {
    const titulo = form.querySelector("[class='titulo']");
    const autor = form.querySelector("[class='autor']");
    const descricao = form.querySelector("[class='descricao']");
    const tiragem = form.querySelector("[class='tiragem']");
    // const sameTitle = FilterByName(listOfBooks, titulo.value);
    if (titulo.value.length <= 2) {
      window.alert("O titulo deve ter, pelo menos, três letras");
    } else if (autor.value.length <= 2) {
      window.alert("O autor deve ter, pelo menos, três letras");
    } else if (descricao.value.length <= 2) {
      window.alert("A descrição deve ter, pelo menos, três letras");
    } else if (tiragem.value.length < 1) {
      window.alert("A tiragem deve ter, pelo menos, um número");
      // } else if (sameTitle.length > 0) {
      //   window.alert(`O título ${sameTitle.value} já existe`);
    } else {
      Register(titulo.value, autor.value, descricao.value, tiragem.value);
    }
    Page.register();
  }
};
