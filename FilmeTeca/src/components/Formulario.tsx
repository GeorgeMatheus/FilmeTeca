import React from "react";
import { Form } from './styles'

export function Formulario() {
  return (
    <Form>
      <input placeholder="Pesquise aqui o seu filme"/>
      <button type="submit">Pesquisar</button>
    </Form>
  )
}
