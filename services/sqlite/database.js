import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase("main.db")
export default db