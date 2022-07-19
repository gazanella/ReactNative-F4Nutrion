/* Configuração do alerta de sucesso ao cadastrar uma nova nota. */
const NOTE_SUCESS_ADD = {
  type: "success",
  text1: "Success",
  text2: "Note registered successfully.",
};

/* Configuração do alerta de sucesso ao editar uma nota. */
const NOTE_SUCESS_EDIT = {
  type: "success",
  text1: "Success",
  text2: "Note edited successfully.",
};

/* Configuração do alerta de informação ao editar uma nota e não altera-la. */
const SAME_NOTE = {
  type: "info",
  text1: "Same Note",
  text2: "No changes to the note.",
};

/* Estrutura padrão de avisos que o cadastro de uma nota pode retornar. */
const NOTE = {
  SUCCESS: {
    ADD_NOTE: NOTE_SUCESS_ADD,
    EDIT_NOTE: NOTE_SUCESS_EDIT,
  },
  ERROR: {
    TITTLE: "Check the Note tittle.",
    CONTENT: "Check the Note content.",
  },
  INFO: {
    SAME_NOTE: SAME_NOTE,
  },
};

export { NOTE };
