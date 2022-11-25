window.Page.navigation = {
  addHeader: () => {
    const header = document.createElement("header");
    const nav = CreateElementWithAttribute("nav", "class", "headerNav");
    const ul = document.createElement("ul");

    const iconHeader = CreateElementWithAttribute("img", "class", "headerIcon");
    iconHeader.setAttribute("src", "./assets/booksIcon.svg");
    iconHeader.addEventListener("click", () => {
      Page.home();
    });
    nav.appendChild(iconHeader);
    const navLinks = [
      {
        text: "Home",
        onClick: () => {
          Page.home();
        },
      },
      {
        text: "Listar",
        onClick: () => {
          Page.list();
        },
      },
      {
        text: "Registrar",
        onClick: () => {
          Page.register();
        },
      },
    ];

    navLinks.forEach((page) => {
      const item = CreateElementWithText({ type: "li", text: page.text });
      item.addEventListener("click", page.onClick);
      ul.appendChild(item);
    });
    document.body.appendChild(header);
    header.appendChild(nav);
    nav.appendChild(ul);
    // nav.appendChild(iconClose);
  },
  addFooter: () => {
    const footer = document.createElement("footer");
    const nav = CreateElementWithAttribute("nav", "class", "footerNav");
    const ul = document.createElement("ul");
    const redesSociais = ["Linkedin", "Github"];
    redesSociais.forEach((element) => {
      const redeSocial = CreateElementWithText(
        "li",
        element,
      );
      ul.appendChild(redeSocial);
    });
    nav.appendChild(ul);
    footer.appendChild(nav);
    document.body.appendChild(footer);
  },
};
