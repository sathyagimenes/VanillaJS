window.field = {
	form : (children) => {
		const form = document.createElement('form');
		for (const child of children) {
			form.appendChild(child);
		}
		return form;
	},
	create: ({label, type = 'text'}) => {
		const field = document.createElement('div');
		field.classList.add('field');
		const labelField = document.createElement('div');
		labelField.classList.add('labelField');
		const labelElement = document.createElement('label');
		labelElement.textContent = label + ':';
		const input = document.createElement('input');
		input.setAttribute('type', type);
		field.appendChild(labelField);
		labelField.appendChild(labelElement);
		field.appendChild(input);
		return field;
	}
};

const inputElement = null;
if (inputType.toLowerCase() === "textarea"){
	inputElement = document.createElement('textarea');
	inputElement.setAttribute('rows', 5);
} else {
	inputElement = document.createElement('input');
	inputElement.setAttribute('type', inputType);
}