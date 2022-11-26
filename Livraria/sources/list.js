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
  const addButton = document.createElement("button");
  addButton.innerText = "Pesquisar";

  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(addButton);

  pageContainer.appendChild(searchContainer);

  const tableContainer = CreateElementWithAttribute(
    "div",
    "class",
    "tableContainer"
  );
  pageContainer.appendChild(tableContainer);

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

  const table = CreateTable(tableContent, tableHeaderData);
  tableContainer.appendChild(table);

  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  modal.setAttribute("style", "display: none;");
  pageContainer.appendChild(modal);
};
