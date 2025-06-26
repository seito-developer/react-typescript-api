import type { PokemonProps } from "../interfaces";

export function View(props: PokemonProps) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.sprites.front_default} alt={props.name} />
      <p>Height: {props.height}</p>
      <p>Weight: {props.weight}</p>
    </div>
  );
}
