import { InputLabel, Select, TextField, Button } from "@material-ui/core"

export const Form = () => {

  return (
    <>
      <h1>create product</h1>
      <form>
        <TextField label="name" id="name" />
        <TextField label="size" id="size" />
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

        <Button>submit</Button>
      </form>
    </>
  )
}