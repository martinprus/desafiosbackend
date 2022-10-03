import fs from "fs";
class Contenedor {
  constructor(fileName) {
    this.filePath = `./src/db/${fileName}.json`;
  }

  async getAll() {
    try {
      const file = await fs.promises.readFile(this.filePath, "utf8");
      const elements = JSON.parse(file);
      return elements;
    } catch (e) {
      console.log(e);
      if (e.code === "ENOENT") {
        await fs.promises.writeFile(this.filePath, JSON.stringify([], null, 3));
      }
    }
  }

  async save(element) {
    try {
      const elements = await this.getAll();
      const id =
        elements.length === 0 ? 1 : elements[elements.length - 1].id + 1;
      element.id = id;
      elements.push(element);
      await fs.promises.writeFile(
        this.filePath,
        JSON.stringify(elements, null, 3)
      );
    } catch (e) {
      console.log(e);
    }
  }

  async getById(id) {
    try {
      const elements = await this.getAll();
      const element = elements.find((e) => e.id === id);
      if (element) {
        return element;
      } else {
        return null;
      }
    } catch (e) {
      console.log(e);
    }
  }
  async deleteById(id) {
    try {
      const elements = await this.getAll();
      const filteredElements = elements.filter((e) => e.id != id);
      await fs.promises.writeFile(
        this.filePath,
        JSON.stringify(filteredElements, null, 3)
      );
      return filteredElements;
    } catch (e) {
      console.log(e);
    }
  }
  async deleteAll() {
    try {
      await fs.promises.writeFile(this.filePath, JSON.stringify([], null, 3));
    } catch (e) {
      console.log(e);
    }
  }
}

export default Contenedor;
