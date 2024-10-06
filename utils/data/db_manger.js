import * as SQLite from "expo-sqlite";

export const createTable = async () => {
  const db = await SQLite.openDatabaseAsync("mascotas.db");
  db.runAsync(
    `CREATE TABLE IF NOT EXISTS mascota (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        edad TEXT,
        raza TEXT
      );`
  );
};
export const addMascota = async (nombre, edad, raza) => {
  const db = await SQLite.openDatabaseAsync("mascotas.db");
  await db.runAsync(
    `INSERT INTO mascota (nombre, edad, raza) VALUES (?, ?, ?);`,
    [nombre, edad, raza]
  );
};

export const getMascotas = async () => {
  try {
    const db = await SQLite.openDatabaseAsync("mascotas.db");
    const result = await db.getAllAsync(`SELECT * FROM mascota;`);
    return console.log(result);
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const delMascota = async (id) => {
  try {
    const db = await SQLite.openDatabaseAsync("mascotas.db");
    await db.runAsync(`DELETE FROM mascota WHERE id = ?;`, [id]);
  } catch (e) {
    console.log(e);
  }
};

export const updMascota = async (id, nombre, edad, raza) => {
  try {
    const db = await SQLite.openDatabaseAsync("mascotas.db");
    await db.runAsync(
      `UPDATE mascota SET nombre = ?, edad = ?, raza = ? WHERE id = ?;`,
      [nombre, edad, raza, id]
    );
  } catch (e) {
    console.log(e);
  }
};
