(() => {
  window.Page = {};

  for (const file of [
    "edit.js",
    "list.js",
    "register.js",
    "home.js",
    "common/utils.js",
    "common/field.js",
    "common/api.js",
    "common/navigation.js",
  ]) {
    const script = document.createElement("script");
    script.setAttribute("src", `./sources/${file}`);
    document.head.appendChild(script);
  }

  window.addEventListener("load", () => {

    window.Page.navigation.addHeader();

    window.main = document.createElement("main");
    document.body.appendChild(main);
    window.Page.home();
    window.Page.navigation.addFooter();
    CallCSS("./styles/style.css");
  });
})();
