(() => {
  window.Page = {};

  for (const file of [
    "editions.js",
    "list.js",
    "register.js",
    "home.js",
    "common/utils.js",
    "common/utilsSearch.js",
    "common/field.js",
    "common/apiService.js",
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
    utils.callCSS("./styles/style.css");
    utils.callCSS("./styles/list.css");
    utils.callCSS("./styles/register.css");
  });
})();
