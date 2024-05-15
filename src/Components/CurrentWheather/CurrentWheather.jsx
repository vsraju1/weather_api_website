import "./CurrentWheather.css";

const CurrentWheather = ({data}) => {
  return (
    <div className="wheather">
      <div className="top">
        <div>
          <h3 className="city">{data.city}</h3>
          <p className="whether_desc">{data.weather[0].description}</p>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} alt="Img" />
      </div>
      <div className="bottom">
        <p>{(data.main.temp).toFixed(0)}°C</p>
        <div className="details">
          <div className="perameter_row">
            <span className="details_border">Details</span>
          </div>
          <div className="perameter_row">
            <span className="parameter_label">Feels Like</span>
            <span className="parameter_value">{(data.main.feels_like).toFixed(1)}</span>
          </div>
          <div className="perameter_row">
            <span className="parameter_label">Wind</span>
            <span className="parameter_value">{data.wind.speed} KMPH</span>
          </div>
          <div className="perameter_row">
            <span className="parameter_label">Humidity</span>
            <span className="parameter_value">{(data.main.humidity).toFixed(0)}%</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CurrentWheather;
