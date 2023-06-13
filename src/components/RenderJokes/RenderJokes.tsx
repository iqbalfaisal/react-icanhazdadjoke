import React from "react";
import JokeCard from "../JokeCard/JokeCard";
import { RenderJokesType, JokeType } from "./types";

function RenderJokes({ jokes }: RenderJokesType) {
  return (
    <ul>
      {jokes.map((joke) => {
        return <JokeCard joke={joke} />;
      })}
    </ul>
  );
}

export default RenderJokes;
