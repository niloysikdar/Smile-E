import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Male", "Female", "Children"],
  datasets: [
    {
      label: "# percentage of category",
      data: [36, 30, 34],
      backgroundColor: [
        "rgba(255, 173, 92, 0.8)",
        "rgba(205, 230, 251, 0.8)",
        "rgba(190, 255, 92, 0.8)",
      ],
      borderColor: [
        "rgba(255, 173, 92, 1)",
        "rgba(205, 230, 251, 1)",
        "rgba(190, 255, 92, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Piechart = () => {
  return (
    <Pie
      data={data}
      height={5}
      width={5}
      options={{ maintainAspectRatio: false }}
    />
  );
};

export { Piechart };
