<script>
import { onMount } from 'svelte';

  import { toDoItems } from '../store.js'
  export let userName
  let newItem = ""
  let newItemInputForm = null

  onMount(() => {
    newItemInputForm.focus()
  })

  function addToList() {
    $toDoItems = [...$toDoItems, {text: newItem, status: false}]
    newItem = ""
  }

</script>

<input bind:value={newItem} bind:this={newItemInputForm} type="text" placeholder="Add a new task" />
<button on:click={addToList}>Add</button>

<h3>{userName}'s task list:</h3>