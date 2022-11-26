window.utils = {
  filterByUid: async (items, uid) => {
    let filteredItems = items;
    filteredItems = filteredItems.filter((item) =>
      item.uid.toLocaleLowerCase().includes(uid.toLocaleLowerCase())
    );

    return filteredItems;
  },
  createButton: (btnText, className = "") => {
    const newButton = document.createElement("button");
    newButton.textContent = btnText;
    newButton.setAttribute("class", className);
    return newButton;
  },
  createTable: (row, tableHead) => {
    const tableContainer = utils.createElementWithAttribute(
      "div",
      "class",
      "tableContainer"
    );

    const table = utils.createElementWithAttribute(
      "table",
      "class",
      "booksTable"
    );
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    tableHead.forEach((item) => {
      const th = utils.createElementWithAttribute(
        "th",
        "class",
        item.toLocaleLowerCase()
      );
      th.innerText = item;
      thead.appendChild(th);
    });

    for (let i = 0; i < row.length; i++) {
      const tr = document.createElement("tr");
      for (let j = 1; j < tableHead.length + 1; j++) {
        const td = document.createElement("td");
        td.setAttribute("class", Object.keys(row[i])[j]);
        const texto = document.createTextNode(Object.values(row[i])[j]);
        td.appendChild(texto);
        tr.appendChild(td);
        if (j == tableHead.length) {
          const buttonsTd = utils.createElementWithAttribute(
            "td",
            "class",
            "buttonDiv"
          );
          const buttonEdit = document.createElement("button");
          const iconEdit = document.createElement("img");
          iconEdit.setAttribute("src", "./assets/edit_icon.svg");
          buttonEdit.setAttribute("class", Object.values(row[i])[0]);
          buttonEdit.appendChild(iconEdit);
          buttonEdit.setAttribute("onclick", "editions.edit(this.className)");
          buttonsTd.appendChild(buttonEdit);
          const buttonDelete = document.createElement("button");
          const iconDelete = document.createElement("img");
          iconDelete.setAttribute("src", "./assets/delete_icon.svg");
          buttonDelete.setAttribute("class", Object.values(row[i])[0]);
          buttonDelete.setAttribute(
            "onclick",
            "editions.delete(this.className)"
          );
          buttonDelete.appendChild(iconDelete);
          buttonsTd.appendChild(buttonDelete);
          tr.appendChild(buttonsTd);
        }
      }
      tbody.appendChild(tr);
    }

    table.append(thead, tbody);
    tableContainer.appendChild(table);

    return tableContainer;
  },
  createSearch: () => {
    const searchContainer = document.querySelector(".searchContainer");
    const previousSearch = utils.createElementWithAttribute(
      "div",
      "class",
      "previousSearch"
    );
    const firstSearch = utils.createElementWithAttribute(
      "label",
      "class",
      "firstSearch"
    );
    const secondSearch = utils.createElementWithAttribute(
      "label",
      "class",
      "secondSearch"
    );
    const thirdSearch = utils.createElementWithAttribute(
      "label",
      "class",
      "thirdSearch"
    );
    previousSearch.append(firstSearch, secondSearch, thirdSearch);
    searchContainer.appendChild(previousSearch);
    const storagedData = JSON.parse(localStorage.getItem("searchedBook"));
    if (storagedData) {
      firstSearch.textContent = storagedData.slice(-1);
      secondSearch.textContent = storagedData.slice(-2, -1);
      thirdSearch.textContent = storagedData.slice(-3, -2);
    }
  },
  createElementWithText: ({
    type,
    text = "",
    attrType = "",
    attrName = "",
  }) => {
    const element = document.createElement(type);
    element.textContent = text;
    if (!attrType === "") element.setAttribute(attrType, attrName);
    return element;
  },
  createElementWithAttribute: (elName, attrType, attrName) => {
    const newElement = document.createElement(elName);
    newElement.setAttribute(attrType, attrName);
    return newElement;
  },
  callCSS: (reference) => {
    const link = document.createElement("link");
    const attributes = { rel: "stylesheet", type: "text/css", href: reference };
    for (const key in attributes) {
      link.setAttribute(key, attributes[key]);
    }
    document.head.appendChild(link);
  },
};
