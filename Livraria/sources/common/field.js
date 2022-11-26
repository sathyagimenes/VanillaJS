window.field = {
  form: (children) => {
    const form = document.createElement("form");
    for (const child of children) {
      form.appendChild(child);
    }
    return form;
  },
  create: ({ label, className, inputType = "text" }) => {
    const field = utils.createElementWithAttribute("fieldset");
    field.classList.add("field");
    const labelElement = document.createElement("label");
    labelElement.textContent = label + ":";
    let inputElement = null;
    if (inputType === "textarea") {
      inputElement = document.createElement("textarea");
      inputElement.setAttribute("rows", 3);
    } else {
      inputElement = document.createElement("input");
      inputElement.setAttribute("type", inputType);
    }
    inputElement.setAttribute("class", className);
    field.append(labelElement, inputElement);
    return field;
  },
};
