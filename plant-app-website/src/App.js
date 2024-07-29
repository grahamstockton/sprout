import './App.css';
import HeaderBar from './components/headerbar';
import SensorCard from './components/sensorcard';

const App = () => {

  const sensors = [
    <SensorCard sensor_name="sensor_1" />,
    <SensorCard sensor_name="sensor_2" />
  ];

  return (
    <div className="App">
      <HeaderBar />
      {sensors}
      <div className="btn btn-ghost btn-circle avatar">
        <div class="w-10 p-2 rounded-full border">
          <img src={require("./plus.png")} alt="Add new sensor" />
        </div>
      </div>
    </div>
  );
}

export default App;
