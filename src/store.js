import { writable, Writable } from "svelte/store";

export const toDoItems = writable([
  {text: 'Task out trash', status: true},
  {text: 'Study programing', status: false},
  {text: 'Text Lucy', status: false}
])