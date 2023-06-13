export interface JokeType {
  id: number;
  joke: string;
}

export interface RenderJokesType {
  jokes: Array<JokeType>;
}
