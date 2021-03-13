import { Form } from './Form';
import { render, fireEvent } from '@testing-library/react';

describe('Form', () => {
	describe('when the form is mounted', () => {
		it('there must be a crate product form page', () => {
			const { getByRole } = render(<Form />);
			expect(getByRole('heading', { name: /created product/i })).toBeTruthy();
		});

		it('should exists the fields: name, size, type (electronic, furniture, clothing,)', () => {
			const { getByLabelText, queryByText } = render(<Form />);
			expect(getByLabelText(/name/i)).toBeTruthy();
			expect(getByLabelText(/size/i)).toBeTruthy();
			expect(getByLabelText(/type/i)).toBeTruthy();

			expect(queryByText(/electronic/i)).toBeTruthy();
			expect(queryByText(/furniture/i)).toBeTruthy();
			expect(queryByText(/clothing/i)).toBeTruthy();
		});

		it('should exists submit button', () => {
			const { getByRole } = render(<Form />);
			expect(getByRole('button', { name: /submit/i })).toBeTruthy();
		});
	});
	describe('when the user submit the form without values', () => {
		it('should display validation messages', () => {
			const {getByRole, queryByText} = render(<Form />)
			expect(queryByText(/the name is required/i)).toBeNull()
			expect(queryByText(/the size is required/i)).toBeNull()
			expect(queryByText(/the type is required/i)).toBeNull()
			fireEvent.click(getByRole('button', { name: /submit/i }))
			expect(queryByText(/the name is required/i)).toBeTruthy()
			expect(queryByText(/the size is required/i)).toBeTruthy()
			expect(queryByText(/the type is required/i)).toBeTruthy()
		})
	})
});
