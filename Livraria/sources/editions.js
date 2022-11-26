window.editions = {
  edit: async (bookId) => {
    const bookList = await api.connection({
      method: "POST",
      service: "livro/lista",
      body: api.getBookBody(),
    });
    const chosenBook = await utils.filterByUid(bookList, bookId);
    const modal = document.querySelector(".modal");

    const modalDataContainer = utils.createElementWithAttribute(
      "div",
      "class",
      "modalDataContainer"
    );

    modal.innerHTML = "";

    const relationName = {
      uid: "uid",
      tiragem: "Tiragem",
      titulo: "Titulo",
      autor: "Autor",
      descricao: "Descrição",
    };
    modal.innerHTML = "";

    for (const key in chosenBook[0]) {
      const containerData = document.createElement("div");
      containerData.setAttribute("class", "modalInputContainer");
      const label = document.createElement("label");
      label.textContent = relationName[key];
      let input = null;
      if (key == "descricao") {
        input = document.createElement("textarea");
        input.setAttribute("rows", 3);
      } else {
        input = document.createElement("input");
      }
      input.value = chosenBook[0][key];
      input.name = `modal-${key}`;
      containerData.append(label, input);
      modalDataContainer.appendChild(containerData);
    }

    modal.setAttribute("style", "display: flex;");

    setTimeout(() => {
      document.getElementsByName("modal-uid")[0].readOnly = true;
    }, 500);

    const containerButtonsModal = utils.createElementWithAttribute(
      "div",
      "class",
      "modalBtnContainer"
    );

    const buttonUpdate = utils.createButton("Atualizar", "updateModal");

    buttonUpdate.addEventListener("click", async () => {
      const modalUid = document.getElementsByName("modal-uid")[0];
      const modalTiragem = document.getElementsByName("modal-tiragem")[0];
      const modalTitulo = document.getElementsByName("modal-titulo")[0];
      const modalAutor = document.getElementsByName("modal-autor")[0];
      const modalDescricao = document.getElementsByName("modal-descricao")[0];
      const body = api.putBookBody({
        id: modalUid.value,
        title: modalTitulo.value,
        author: modalAutor.value,
        description: modalDescricao.value,
        quantity: parseInt(modalTiragem.value),
      });
      await api.connection({
        method: "PUT",
        service: "livro",
        body,
      });
      modal.setAttribute("style", "display: none");
      Page.list();
    });

    const buttonCancel = utils.createButton("Cancelar", "cancelEditModal");
    buttonCancel.addEventListener("click", () => {
      modal.setAttribute("style", "display: none");
    });

    containerButtonsModal.append(buttonUpdate, buttonCancel);
    modalDataContainer.appendChild(containerButtonsModal);
    modal.appendChild(modalDataContainer);
  },
  delete: async (bookId) => {
    if (confirm("Deseja realmente deletar esse livro?")) {
      const body = api.deleteBookBody(bookId);
      await api.connection({ method: "DELETE", service: `livro`, body });
      setTimeout(() => {
        Page.list();
      }, 1000);
    }
  },
};
