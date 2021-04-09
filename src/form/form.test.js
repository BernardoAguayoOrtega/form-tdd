import React from 'react';
import { render } from '@testing-library/react';
import { Form } from './Form';

describe('when the form is mounted', () => {
	it('render must be a create product form page', () => {
		const { queryByText } = render(<Form />);
		expect(queryByText(/create product/)).not.toBeNull();
	});
	it('should exist the fields: name, size, type (electronic, furniture, clothing)', () => {
		const { getByLabelText } = render(<Form />);
		expect(getByLabelText(/name/)).not.toBeNull();
		expect(getByLabelText(/size/)).not.toBeNull();
	});
});
