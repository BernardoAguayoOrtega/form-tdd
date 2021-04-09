import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Form } from './Form';

describe('when the form is mounted', () => {
	it('render must be a create product form page', () => {
		const { queryByText } = render(<Form />);
		expect(queryByText(/create product/i)).not.toBeNull();
	});
	it('should exist the fields: name, size, type (electronic, furniture, clothing)', () => {
		const { getByLabelText, queryByText } = render(<Form />);
		expect(getByLabelText(/name/i)).not.toBeNull();
		expect(getByLabelText(/size/i)).not.toBeNull();
		expect(getByLabelText(/type/i)).not.toBeNull();

		expect(queryByText(/electronic/i)).not.toBeNull();
		expect(queryByText(/furniture/i)).not.toBeNull();
		expect(queryByText(/clothing/i)).not.toBeNull();
	});
	it('should exists submit button', () => {
		const { getByRole } = render(<Form />);
		expect(getByRole('button', { name: /submit/i })).not.toBeNull();
	});
});

describe('when the use submit the form without values', () => {
	it('should display validation messages', () => {
		const { getByRole, queryByText } = render(<Form />);
		expect(queryByText(/the name is required/i)).toBeNull();
		fireEvent.click(getByRole('button', { name: /submit/i }));
		expect(queryByText(/the name is required/i)).not.toBeNull();
	});
});
