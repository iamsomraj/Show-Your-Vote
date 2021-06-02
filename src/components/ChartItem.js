import "./ChartItem.css";

const ChartItem = (props) => {
  let height = "0%";
  if (props.item.percentage > 0) height = props.item.percentage + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height }}></div>
      </div>
      <div className="chart-bar__label">{height}</div>
    </div>
  );
};
export default ChartItem;
