import {Form} from './Form'
import { render } from '@testing-library/react';

describe('Form', () => {
  describe('when the form is mounted', () => {
    it('there must be a crate product form page', () => {
      render(<Form />)
    })
  })
})