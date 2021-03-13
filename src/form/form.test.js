import { Form } from './Form';
import { render } from '@testing-library/react';

describe('Form', () => {
	describe('when the form is mounted', () => {
		it('there must be a crate product form page', () => {
			const { getByRole } = render(<Form />);
			expect(getByRole('heading', { name: /created product/i })).toBeTruthy();
		});

    it('should exists the fields: name, size, type (electronic, furniture, clothing)', () => {
      const { getByLabelText } = render(<Form />);
      expect(getByLabelText(/name/i)).toBeTruthy();
      expect(getByLabelText(/size/i)).toBeTruthy();
      expect(getByLabelText(/type/i)).toBeTruthy();
    })
	});
});
