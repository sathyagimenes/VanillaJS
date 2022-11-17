window.field = {
	create: ({label, name, type = 'text'}) => {
		const field = document.createElement('div');
		field.classList.add('field');
		const labelField = document.createElement('div');
		labelField.classList.add('labelField');
		const labelElement = document.createElement('label');
		labelElement.textContent = label;
		const input = document.createElement('input');
		input.setAttribute('type', type);
		input.setAttribute('name', name);
		field.appendChild(labelField);
		labelField.appendChild(labelElement);
		field.appendChild(input);
		return field;
	}
};