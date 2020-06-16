<template>
  <div class="hello">
    <input type="text" v-model="currentText">
    <button v-on:click="addHandler">Add 1</button>
    <ul>
      <li v-for="item in list.data" :key="item.name">
        <span>{{ item.name }}</span>
        <button v-on:click="editHandler(item)">Edit</button>
        <button v-on:click="deleteHandler(item)">Delete</button>
        <input type="checkbox" id="done" value="false" v-model="item.completed">
        <label for="done">Done</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { TodoList } from '../lib/todo-list';
import { TodoItem } from '../lib/todo-item';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return {
      currentText: "",
      list: new TodoList()
    }
  },
  methods: {
    addHandler: function() {
      const item = new TodoItem(this.currentText);

      this.list.addToList(item);
    },
    editHandler: function(item) {
      this.list.editItem(item, this.currentText)
    },
    deleteHandler: function(item) {
      this.list.deleteItem(item)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
li {
  display: block;
  margin: 10px;
}
a {
  color: #42b983;
}
</style>
