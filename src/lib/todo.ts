interface Task {
	id: number;
	text: string;
}

let tasks: Task[] = [];

export function getTasks(): Task[] {
	return tasks;
}

export function addTask(text: string): void {
	const newTask: Task = {
		id: tasks.length + 1, // EASY
		text: text
	};
	tasks.push(newTask);
}

export function deleteTask(id: number): void {
	const index = tasks.findIndex((task) => task.id === id);
	if (index !== -1) {
		tasks.splice(index, 1);
	}
}
