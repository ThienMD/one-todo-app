import { destroy, Instance, SnapshotIn, types } from "mobx-state-tree"

export const Todo = types
  .model({
    id: types.identifier,
    userId: types.number,
    title: types.string,
    completed: types.optional(types.boolean, false),
    createdDate: types.optional(types.Date, new Date()),
  })
  .actions(self => ({
    toggleCompleted(completed) {
      self.completed = completed
    }
  }))

export const TodoStore = types.model("TodoStore", {
  list: types.optional(types.array(Todo), []),
})
  .actions(self => ({
    addTodo(item: SnapshotIn<typeof Todo> | Instance<typeof Todo>) {
      self.list.push(item)
    },
    remove(item: SnapshotIn<typeof Todo>) {
      destroy(item)
    },
  }))
  .views(self => ({
    get todoData() {
      return ([{
        title: "Today",
        data: self.list.slice()
      }])
    },

    get totalTodo() {
      return self.list.length
    },
  }))

// applySnapshot(TodoStore, {
//   list: [{
//       name: "Eat a cake"
//     }
//   ]
// })
