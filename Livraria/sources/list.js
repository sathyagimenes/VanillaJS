window.Page.list = async () => {
  main.innerHTML = "";

  const pageContainer = utils.createElementWithAttribute(
    "div",
    "class",
    "pageContainer"
  );
  main.appendChild(pageContainer);

  const titleContainer = utils.createElementWithAttribute(
    "div",
    "class",
    "titleListContainer"
  );

  const title = utils.createElementWithText({ type: "h1", text: "Acervo" });
  titleContainer.appendChild(title);
  const searchContainer = utils.createElementWithAttribute(
    "div",
    "class",
    "searchContainer"
  );

  const searchLabel = utils.createElementWithText({
    type: "label",
    text: "Título do livro: ",
  });

  const searchInput = utils.createElementWithAttribute(
    "input",
    "placeholder",
    "buscar por livro..."
  );
  searchInput.setAttribute("class", "searchInput");
  const addButton = document.createElement("button");
  addButton.innerText = "Pesquisar";
  addButton.addEventListener("click", utils.searchBooks);

  searchContainer.append(searchLabel, searchInput, addButton);
  pageContainer.append(titleContainer, searchContainer);

  utils.createSearch();

  const books = await api.connection({
    method: "POST",
    service: "livro/lista",
    body: api.getBookBody(),
  });
  const tableContent = [];
  books.sort((a, b) => a.titulo - b.titulo);

  books.forEach((element) => {
    tableContent.push({
      uid: element.uid,
      titulo: element.titulo,
      autor: element.autor,
      descricao: element.descricao,
      tiragem: element.tiragem,
    });
  });

  const tableHeaderData = ["Título", "Autor", "Descrição", "Tiragem"];
  const tableContainer = utils.createTable(tableContent, tableHeaderData);
  pageContainer.appendChild(tableContainer);

  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  modal.setAttribute("style", "display: none;");
  pageContainer.appendChild(modal);
};
