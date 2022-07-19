import db from "../database";

/* 
    Função que cria a tabela de notas.
    Nota = {
        id,
        titulo,
        conteudo,
        data,
    }
*/
function noteTable() {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        `create table if not exists notes (
            id INTEGER primary key autoincrement, 
            tittle TEXT, 
            content TEXT, 
            date TEXT)`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

/* Função que insere uma nova nota no banco de dados. */
function noteInsert(tittle, content, date) {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "insert into notes (tittle, content, date) values (?, ?, ?)",
        [tittle, content, date]
      );
    });
  } catch (error) {
    console.log(error);
  }
}

/* Função que remove uma nota do banco de dados. */
function noteDelete(id) {
  try {
    db.transaction((tx) => {
      tx.executeSql("Delete from notes where id = ?", [id]);
    });
  } catch (error) {
    console.log(error);
  }
}

/* Função que altera os atributos de uma nota do banco de dados. */
function noteUpdate(id, tittle, content) {
  try {
    db.transaction((tx) => {
      tx.executeSql("update notes set tittle=?, content=? where id =?", [
        tittle,
        content,
        id,
      ]);
    });
  } catch (error) {
    console.log(error);
  }
}

export { noteTable, noteInsert, noteDelete, noteUpdate };
