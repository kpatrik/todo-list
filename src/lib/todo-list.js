/* eslint-disable */
export class TodoList {
  constructor() {
    this._data = []
  }

  addToList(item) {
    if(this._data.findIndex(i => { return i.name === item.name;}) > -1) {
      return;
    }
    this._data.push(item);
  }

  get data() {
    return this._data;
  }

  deleteItem(item) {
    const index = this._data.findIndex(i => {
      return i.name === item.name;
    })
    this._data.splice(index, 1);
  }

  editItem(item, newName) {
    console.log(item, newName)
    const index = this._data.findIndex(i => {
      return i.name === item.name;
    });

    if(this._data.findIndex(i => { return i.name === newName;}) > -1) {
      return;
    }

    this._data[index].name = newName;
  }
}