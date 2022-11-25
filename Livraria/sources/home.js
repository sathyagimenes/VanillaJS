window.Page.home = async () => {
  main.innerHTML = "";

  const containerHome = CreateElementWithAttribute("div", "class", "homeContainer");
  main.appendChild(containerHome);

  const title = CreateElementWithText({
    type: "h1",
    text: "Recanto dos Livros",
    attrType: "class",
    attrName: "homeTitle",
  });


  containerHome.appendChild(title);
};
