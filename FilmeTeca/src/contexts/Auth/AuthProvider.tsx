import { useState } from "react";
import { User } from "../../types/User";
import { criarAutenticacao } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";
import { usuarioLogado } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

  const [user, setUser] = useState<User | null>(null)
  const api = criarAutenticacao();

  const login = async (email: string, senha: string) => {
    const token = await api.login(email, senha)

    if(token){

      const usu = await api.recuperaUsuario(email, senha, token)

      console.log(usu)

      return true

    }

    return false
  }

  const logout = async () => {
    await api.logout()
    setUser(null)
  }


  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}