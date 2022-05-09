export interface Genero {
  id: number;
  name: string;
}

export interface Filme {
  id: string;
  backdrop_path: string;
  genres: Array<Genero>;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: string;
  release_date: string;
}
