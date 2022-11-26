window.Page.home = async () => {
  main.innerHTML = "";

  const containerHome = utils.createElementWithAttribute(
    "div",
    "class",
    "homeContainer"
  );
  main.appendChild(containerHome);

  const title = utils.createElementWithText({
    type: "h1",
    text: "Recanto dos Livros",
    attrType: "class",
    attrName: "homeTitle",
  });

  containerHome.appendChild(title);
};
