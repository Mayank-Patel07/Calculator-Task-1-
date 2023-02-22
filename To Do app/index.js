window.addEventListener('load', () => {
	const form = document.querySelector("#Task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const taskElement = document.createElement('div');
		taskElement.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		taskElement.appendChild(task_content_el);

		const input_element = document.createElement('input');
		input_element.classList.add('text');
		input_element.type = 'text';
		input_element.value = task;
		input_element.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(input_element);

		const actions_element = document.createElement('div');
		actions_element.classList.add('actions');
		
		const edit_element = document.createElement('button');
		edit_element.classList.add('edit');
		edit_element.innerText = 'Edit';

		const delete_elem = document.createElement('button');
		delete_elem.classList.add('delete');
		delete_elem.innerText = 'Delete';

		actions_element.appendChild(edit_element);
		actions_element.appendChild(delete_elem);

		taskElement.appendChild(actions_element);

		list_el.appendChild(taskElement);

		input.value = '';

		edit_element.addEventListener('click', (e) => {
			if (edit_element.innerText.toLowerCase() == "edit") {
				edit_element.innerText = "Save";
				input_element.removeAttribute("readonly");
				input_element.focus();
			} else {
				edit_element.innerText = "Edit";
				input_element.setAttribute("readonly", "readonly");
			}
		});

		delete_elem.addEventListener('click', (e) => {
			list_el.removeChild(taskElement);
		});
	});
});