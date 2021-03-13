import { TextField, InputLabel, Select, Button } from "@material-ui/core"
import { useState } from "react";

export const Form = () => {
  const [formErrors, setFormErrors] = useState({
    name: '',
    size: '',
    type: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, size, type } = event.target.elements

    !name.value && setFormErrors(prevState => ({ ...prevState, name: 'the name is required' }))
    !size.value && setFormErrors(prevState => ({ ...prevState, size: 'the size is required' }))
    !type.value && setFormErrors(prevState => ({ ...prevState, type: 'the type is required' }))
  }

  return (
    <>
      <h1>created product</h1>
      <form onSubmit={handleSubmit}>
        <TextField label="name" id="name" helperText={formErrors.name} />
        <TextField label="size" id="size" helperText={formErrors.size}/>
        {formErrors.type && <h2>the type is required</h2>}
        <InputLabel htmlFor="type">Type</InputLabel>
        <Select
          native
          value=''
          inputProps={{
            name: 'type',
            id: 'type',
          }}
        >
          <option aria-label="None" value="" />
          <option value='electronic'>electronic</option>
          <option value='furniture'>furniture</option>
          <option value='clothing'>clothing</option>
        </Select>
        <Button type="submit">Submit</Button>
      </form>
    </>
  )
}