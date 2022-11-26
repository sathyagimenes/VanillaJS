window.utilsSearch = {
  firstItem: async () => {
    const bookSearch = document.getElementsByClassName("firstSearch")[0];
    const pageContainer = document.querySelector(".pageContainer");

    const body = api.getBookBody(bookSearch.innerText);
    const filteredBooks = await api.connection({
      method: "POST",
      service: "livro/lista",
      body,
    });
    filteredBooks.sort((a, b) => a.titulo - b.titulo);

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
    const clearTable = document.querySelector(".tableContainer");
    clearTable.remove();
    const tableHeaderData = ["Título", "Autor", "Descrição", "Tiragem"];
    const filteredTable = utils.createTable(filteredContent, tableHeaderData);
    pageContainer.appendChild(filteredTable);

    const storageBooks = JSON.parse(
      localStorage.getItem("searchedBook") || "[]"
    );
    storageBooks.push(bookSearch.value);
    bookSearch.value = "";

    if (storageBooks.length > 3) {
      storageBooks.shift();
    }
    localStorage.setItem("searchedBook", JSON.stringify(storageBooks));

    utils.createSearch();
    const clearsearches = document.querySelector(".previousSearch");
    clearsearches.remove();
  },
  secondItem: async () => {
    const bookSearch = document.getElementsByClassName("secondSearch")[0];
    const pageContainer = document.querySelector(".pageContainer");

    const body = api.getBookBody(bookSearch.innerText);
    const filteredBooks = await api.connection({
      method: "POST",
      service: "livro/lista",
      body,
    });
    filteredBooks.sort((a, b) => a.titulo - b.titulo);

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
    const clearTable = document.querySelector(".tableContainer");
    clearTable.remove();
    const tableHeaderData = ["Título", "Autor", "Descrição", "Tiragem"];
    const filteredTable = utils.createTable(filteredContent, tableHeaderData);
    pageContainer.appendChild(filteredTable);

    const storageBooks = JSON.parse(
      localStorage.getItem("searchedBook") || "[]"
    );
    storageBooks.push(bookSearch.value);
    bookSearch.value = "";

    if (storageBooks.length > 3) {
      storageBooks.shift();
    }
    localStorage.setItem("searchedBook", JSON.stringify(storageBooks));

    utils.createSearch();
    const clearsearches = document.querySelector(".previousSearch");
    clearsearches.remove();
  },
  thirdItem: async () => {
    const bookSearch = document.getElementsByClassName("thirdSearch")[0];
    const pageContainer = document.querySelector(".pageContainer");

    const body = api.getBookBody(bookSearch.innerText);
    const filteredBooks = await api.connection({
      method: "POST",
      service: "livro/lista",
      body,
    });
    filteredBooks.sort((a, b) => a.titulo - b.titulo);

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
    const clearTable = document.querySelector(".tableContainer");
    clearTable.remove();
    const tableHeaderData = ["Título", "Autor", "Descrição", "Tiragem"];
    const filteredTable = utils.createTable(filteredContent, tableHeaderData);
    pageContainer.appendChild(filteredTable);

    const storageBooks = JSON.parse(
      localStorage.getItem("searchedBook") || "[]"
    );
    storageBooks.push(bookSearch.value);
    bookSearch.value = "";

    if (storageBooks.length > 3) {
      storageBooks.shift();
    }
    localStorage.setItem("searchedBook", JSON.stringify(storageBooks));

    utils.createSearch();
    const clearsearches = document.querySelector(".previousSearch");
    clearsearches.remove();
  },
};
