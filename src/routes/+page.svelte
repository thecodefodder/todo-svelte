<script lang="ts">
	import { getTasks, addTask, deleteTask } from '$lib/todo';

	let tasks = getTasks();
	let newTaskText = '';

	function addNewTask() {
		if (newTaskText.trim() !== '') {
			addTask(newTaskText);
			tasks = getTasks();
			newTaskText = '';
		}
	}

	function removeTask(id: number) {
		deleteTask(id);
		tasks = getTasks();
	}
</script>

<div class="flex justify-center items-center">
	<div class="min-h-screen flex flex-col items-center justify-center">
		<div class="w-full max-w-md p-4 border shadow-lg rounded-lg">
			<h1 class="text-2xl font-bold text-zinc-800 mb-4">Todo List</h1>
			<div class="flex items-center border-b border-zinc-300 py-2">
				<input
					type="text"
					placeholder="Add a new todo..."
					class="w-full px-2 py-1 mr-2 bg-transparent focus:outline-none"
					bind:value={newTaskText}
					required
				/>
				<button class="bg-blue-500 text-white px-4 py-1 rounded-lg" on:click={() => addNewTask()}
					>Add</button
				>
			</div>
			<ul class="mt-4">
				{#each tasks as task}
					<li class="flex items-center justify-between py-2 border-b border-zinc-300">
						<span class="text-zinc-800">{task.text}</span>
						<button class="text-red-500" on:click={() => removeTask(task.id)}>Delete</button>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
