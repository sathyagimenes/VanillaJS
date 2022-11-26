window.Page.list = async () => {
  main.innerHTML = "";

  const pageContainer = CreateElementWithAttribute(
    "div",
    "class",
    "pageContainer"
  );
  main.appendChild(pageContainer);

  const searchContainer = CreateElementWithAttribute(
    "div",
    "class",
    "searchContainer"
  );

  const searchInput = CreateElementWithAttribute(
    "input",
    "placeholder",
    "buscar por título..."
  );
  searchInput.setAttribute("class", "searchInput");
  const addButton = document.createElement("button");
  addButton.innerText = "Pesquisar";
  addButton.addEventListener("click", searchBooks);

  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(addButton);
  pageContainer.appendChild(searchContainer);

  async function searchBooks() {
    const bookSearch = document.getElementsByClassName("searchInput")[0];

    const body = api.getBookBody(bookSearch.value);
    const filteredBooks = await api.connection({
      method: "POST",
      service: "livro/lista",
      body,
    });
    filteredBooks.sort((a, b) => a.titulo - b.titulo);
    bookSearch.value = "";

    const filteredContent = [];
    filteredBooks.forEach((element) => {
      filteredContent.push({
        uid: element.uid,
        titulo: element.titulo,
        autor: element.autor,
        descricao: element.descricao,
        tiragem: element.tiragem,
      });
    });
    const clearTable = document.querySelector('.booksTable');
    clearTable.remove();
    const filteredTable = utils.createTable(filteredContent, tableHeaderData);
    pageContainer.appendChild(filteredTable);
  }

  const tableHeaderData = ["Título", "Autor", "Descrição", "Tiragem"];

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

  const tableContainer = utils.createTable(tableContent, tableHeaderData);
  pageContainer.appendChild(tableContainer);

  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  modal.setAttribute("style", "display: none;");
  pageContainer.appendChild(modal);
};
