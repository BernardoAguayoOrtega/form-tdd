import { InputLabel, Select, TextField, Button } from "@material-ui/core"
import { useState } from "react";

export const Form = () => {

  const [formErrors, setFormErrors] = useState({
    name: '',
    type: '',
    size: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, size, type } = event.target.elements

    if (!name.value) setFormErrors(prevState => ({ ...prevState, name: 'the name is required' }))
    if (!size.value) setFormErrors(prevState => ({ ...prevState, size: 'the size is required' }))
    if (!type.value) setFormErrors(prevState => ({ ...prevState, type: 'the type is required' }))
  }

  return (
    <>
      <h1>create product</h1>
      <form onSubmit={handleSubmit}>
        <TextField label="name" id="name" helperText={formErrors.name} />
        <TextField label="size" id="size" helperText={formErrors.size} />
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
        <small>{formErrors.type}</small>

        <Button type="submit">submit</Button>
      </form>
    </>
  )
}