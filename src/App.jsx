
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'

import LoginImg from './assets/login-image.svg'
import Logo from './assets/rect43719.png'

import {
  Container,
  ImagemFrontal,
  ContainerItens,
  Input,
  Button,
  SignInLink,
  Label,
  ErrorMessage
}
  from './styles/styles'


function App() {

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("Digite um e-mail"),
    password: Yup.string().required("Obrigatório digitar uma senha")
      .min(6, "A senha deve conter 6 dígitos")
  })


  const { register,
    handleSubmit,
    formState: { errors }
  } = useForm({

    resolver: yupResolver(schema)
  })

  const onSubmit = data => console.log(data);



  return (
    <>
      <Container>
        <ImagemFrontal src={LoginImg} alt='Login-Image' />
        <ContainerItens>
          <img src={Logo} alt='logo' />

          <h1>Login</h1>

          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label>Email</Label>
            <Input type='email' {...register('email')} error={errors.email?.message} />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label>Senha</Label>
            <Input type='password'{...register('password')} error={errors.password?.message} />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Button type='submit'>Sign In</Button>
          </form>


          <SignInLink>
            Não possui conta ? <a>Sign Up</a>
          </SignInLink>
        </ContainerItens>
      </Container>
    </>
  )
}

export default App


