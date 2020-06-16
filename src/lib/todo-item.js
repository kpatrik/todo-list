/* eslint-disable */
export class TodoItem {
  constructor(name) {
    this._name = name;
    this._completed = false;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get completed() {
    return this._completed;
  }

  set completed(completed) {
    this._completed = completed;
  }
}