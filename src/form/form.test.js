import React from 'react';
import { screen, render } from '@testing-library/react';
import { Form } from './Form';

describe('when the form is mounted', () => {
	it('render must be a create product form page', () => {
		const { queryByText } = render(<Form />);

		expect(queryByText(/create product/)).not.toBeNull();
	});
});
