import { useRive } from "@rive-app/react-canvas";
import "./style.css";

export const Car = () => {
  const { rive, RiveComponent } = useRive({
    src: "car.riv",
  });

  const EngineStart = () => {
    rive?.play("Engine Start");
  };

  const Advance = () => {
    rive?.play("Advance");
  };

  const Pause = () => {
    rive?.pause();
  };

  return (
    <div>
      <div className="container">
        <RiveComponent />
      </div>

      <div className="btnArea">
        <button className="btn" onClick={EngineStart}>
          Engine Start
        </button>
        <button className="btn" onClick={Advance}>
          Advance
        </button>
        <button className="btn" onClick={Pause}>
          Pause
        </button>
      </div>
    </div>
  );
};
