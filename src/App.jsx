
import React from 'react'


import { Container, ImagemFrontal, ContainerItens, Input, Button, SignInLink , Label} from'./styles/styles'


function App() {


  return (
    <>
    <Container>
      <ImagemFrontal />
      <ContainerItens>
        <img />

        <h1>Login</h1>

        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>SignIn</Button>
        <SignInLink>
          Não possui conta ? <a>SignUp</a>
        </SignInLink>
      </ContainerItens>
    </Container>
    </>
  )
}

export default App


