import { ReactNode } from "react";

export interface Genero {
  id: number;
  name: string;
}

export interface Diretor {
  id: number;
  name: string;
  job: string;
}

export interface Data {
  dia: string;
  mes: string;
  ano: string;
}


export interface Filme {
  id: string;
  backdrop_path: string;
  genres: Array<Genero>;
  title: string;
  overview: string;
  tagline: string;
  status: string;
  poster_path: string;
  vote_average: string;
  release_date: string;
  diretor: Diretor;
  comentarios: Array<Comentario>
}

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  comentarios: Array<Comentario>;
  interesses: Array<Filme>;
  favoritos: Array<Filme>;
}


export interface Comentario {
  texto: string;
  data: string;
  user: Usuario;

}

export interface LayoutComponent {
  children: ReactNode;
}