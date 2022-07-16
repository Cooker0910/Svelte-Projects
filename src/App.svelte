<script>
	import ToDoInputForm from "./Components/ToDoInputForm.svelte";
	import ToDoList from "./Components/ToDoList.svelte"

	let nameEntered = false;

	let firstName = ""
	let lastName = ""
	$: fullName = firstName + " " + lastName

	function handleSubmit() {
		if (firstName && lastName) {
			nameEntered = true;
		}
	}
</script>

<main>
	{#if nameEntered}
		<h1>Welcome to task Manager, {fullName}!</h1>
		<ToDoInputForm userName={fullName} />
		<ToDoList />
	{:else}
		<h1>Welcome to task manager!</h1>
		<h3>Please enter your name:</h3>
		<form on:submit|preventDefault={handleSubmit}>
			<div>
				<input bind:value={firstName} type="text" placeholder="First Name" required />
			</div>
			<div>
				<input bind:value={lastName} type="text" placeholder="Last Name" required />
			</div>
			<buttom on:click={handleSubmit}>Start managing tasks</buttom>
		</form>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

</style>