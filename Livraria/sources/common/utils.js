function CreateElementWithText({
  type,
  text = "",
  attrType = "",
  attrName = "",
}) {
  const element = document.createElement(type);
  element.textContent = text;
  if (!attrType === "") element.setAttribute(attrType, attrName);
  return element;
}

function CreateElementWithAttribute(elName, attrType, attrName) {
  const newElement = document.createElement(elName);
  newElement.setAttribute(attrType, attrName);
  return newElement;
}

function CreateTable(row, tableHead) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  tableHead.forEach((item) => {
    const th = document.createElement("th");
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
    }
    tbody.appendChild(tr);
  }

  table.append(thead, tbody);

  return table;
}

function FilterByName(items, name) {
  let filteredItems = items;
  filteredItems = filteredItems.filter((item) =>
    item.titulo.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

  return filteredItems;
}

function CallCSS(reference) {
  const link = document.createElement("link");
  const attributes = { rel: "stylesheet", type: "text/css", href: reference };
  for (const key in attributes) {
    link.setAttribute(key, attributes[key]);
  }
  document.head.appendChild(link);
}
