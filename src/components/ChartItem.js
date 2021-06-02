import "./ChartItem.css";

const ChartItem = (props) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: props.item.percentage + "%" }}
        ></div>
      </div>
      <div className="chart-bar__label">Option {props.number}</div>
    </div>
  );
};
export default ChartItem;
