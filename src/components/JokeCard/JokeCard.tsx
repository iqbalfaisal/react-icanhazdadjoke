import React from "react";
import { JokeType } from "./types";

function JokeCard({ joke }: { joke: JokeType }) {
  return <li>{joke.joke}</li>;
}

export default JokeCard;
