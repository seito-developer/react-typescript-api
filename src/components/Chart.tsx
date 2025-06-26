import type { ChartDataProps, PokemonProps } from "../interfaces";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function Chart(props: PokemonProps) {
  const data: ChartDataProps = {
    labels: props.stats.map(stat => stat.stat.name),
    datasets: [
      {
        label: "# of Votes",
        data: props.stats.map(stat => stat.base_stat),
        backgroundColor: "hsl(168, 60.80%, 30.00%)",
        borderColor: "hsl(168, 68.10%, 76.70%)",
        borderWidth: 1,
      },
    ],
  };

  return <Radar data={data} />;
}
