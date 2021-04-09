import { TextField } from "@material-ui/core"

export const Form = () => {

  return (
    <>
      <h1>create product</h1>
      <TextField id="name" label="name" />
      <TextField id="size" label="size" />
    </>
  )
}