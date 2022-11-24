// window.Page.companiesList = async (filter = "") => {
window.Page.register = async () => {
  main.innerHTML = "";

  const container = CreateElementWithAttribute(
    "div",
    "class",
    "containerCategory"
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
    }),
    field.create({
      label: "Autor",
    }),
    field.create({
      label: "Descrição",
      type: "textarea",
    }),
    field.create({
      label: "Tiragem",
      type: "number",
    }),
    divBtn,
  ]);
  container.append(title, form);

  async function Register(inTitle, inAuthor, inDescription, inQuantity) {
    const newObj = {
      title: inTitle,
      author: inAuthor,
      description: inDescription,
      quantity: parseInt(inQuantity),
    };
    const response = await PostBook(newObj);
    if (response === "ok") {
      window.alert("Livro adicionado com sucesso!");
    } else {
      window.alert("Falha na comunicação com a api");
    }
  }

  // const listOfBooks = await GetBook();
  btnInsert.addEventListener("click", InsertNewBook);

  async function InsertNewBook() {
    const titulo = form.querySelector("[name='titulo']");
    const autor = form.querySelector("[name='autor']");
    const descricao = form.querySelector("[name='descricao']");
    const tiragem = form.querySelector("[name='tiragem']");
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
      debugger;
      Register(titulo.value, autor.value, descricao.value, tiragem.value);
    }
    Page.register();
  }
};
