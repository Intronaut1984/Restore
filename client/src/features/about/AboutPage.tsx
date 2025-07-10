import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import { useLazyGet400ErrorQuery, useLazyGet401ErrorQuery, useLazyGet404ErrorQuery, useLazyGet500ErrorQuery, useLazyGetValidationErrorQuery } from "./errorApi";

export default function AboutPage() {
const [trigger400Error] = useLazyGet400ErrorQuery();
const [trigger401Error] = useLazyGet401ErrorQuery();
const [trigger404Error] = useLazyGet404ErrorQuery();
const [trigger500Error] = useLazyGet500ErrorQuery();
const [triggerValidationError] = useLazyGetValidationErrorQuery();

  return (
    <Container maxWidth='lg'>
      <Typography gutterBottom variant = 'h3'> Errors for Testing</Typography>
      <ButtonGroup fullWidth>
        <Button variant='contained' onClick={() => trigger400Error(undefined)
          .catch(err => console.log(err))}>
          Trigger 400 Error
        </Button>
        <Button variant='contained' color='primary' onClick={() => trigger401Error(undefined)
          .catch(err => console.log(err))}>
          Trigger 401 Error
        </Button>
        <Button variant='contained' color='primary' onClick={() => trigger404Error(undefined)
          .catch(err => console.log(err))}>
          Trigger 404 Error
        </Button>
        <Button variant='contained' color='primary' onClick={() => trigger500Error(undefined)
          .catch(err => console.log(err))}>
          Trigger 500 Error
        </Button>
        <Button variant='contained' color='primary' onClick={() => triggerValidationError(undefined).unwrap()
          .catch(err => console.log(err))}>
          Trigger Validation Error
        </Button>          
      </ButtonGroup>
    </Container>
  )
}