export interface Genero {
  id: number;
  name: string;
}

export interface Diretor {
  id: number;
  name: string;
  job: string;
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
}
