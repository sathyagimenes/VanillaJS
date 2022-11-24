window.Page.list = async () => {
  main.innerHTML = "";

  const containerBusca = CreateElementWithAttribute(
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

  containerBusca.appendChild(searchInput);
  containerBusca.appendChild(addButton);

  main.appendChild(containerBusca);

  const tableContainer = CreateElementWithAttribute(
    "div",
    "class",
    "table-container"
  );
  main.appendChild(tableContainer);

  const tableHeaderData = ["Título", "Autor", "Descrição", "Tiragem"];

  const books = await GetBook();
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
};
