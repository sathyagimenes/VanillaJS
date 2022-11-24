window.Page.home = async () => {
	main.innerHTML = "";
const title = CreateElementWithText({type: "h1", text:"Recanto dos Livros", attrType:"class", attrName:"homeTitle"})
main.appendChild(title);
}