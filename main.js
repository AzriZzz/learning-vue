Vue.component('task-list', {
  template: `
    <div>
      <task v-for="task of tasks">{{ task.task}}</task>
    </div>
  `,

  data() {
    return {
      tasks: [
        { task: "Go to the store", completed: true },
        { task: "Finish screenshot", completed: false },
        { task: "Make donation", completed: true },
        { task: "Clear inbox", completed: false },
        { task: "Clean room", completed: false },
      ]
    }
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root'
})