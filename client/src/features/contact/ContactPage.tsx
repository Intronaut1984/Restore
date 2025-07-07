import { Button, Typography } from "@mui/material"
import { decrement, increment } from "./counterReducer"
import { useAppDispatch, useAppSelector } from "../../app/store/store"

export default function ContactPage() {
  const {data} = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch()

  return (
    <>
    
     <Typography variant="h2">
      Contact Page
     </Typography>
      <Typography variant="body1">
        The data is {data}
      </Typography>
      <Button onClick={() => dispatch(increment(1))} color="error">
        Increment
      </Button>
      <Button onClick={() => dispatch(decrement(1))} color="error">  
        Decrement
      </Button>
      <Button onClick={() => dispatch(increment(5))} color="error">
        Increment by 5
      </Button>
    </>
  )
}