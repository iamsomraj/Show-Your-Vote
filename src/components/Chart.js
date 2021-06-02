import "./Chart.css";
import ChartItem from "./ChartItem";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.currPoll.map((item, index) => {
        return <ChartItem key={item.id} item={item} number={index + 1} />;
      })}
    </div>
  );
};

export default Chart;
