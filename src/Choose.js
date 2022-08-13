import "./styles/App.css";
import "./styles/Choose.css";
import Choice from "./components/Choice.js";
import Header from "./components/Header";

function Choose() {
  return (
    <div className="Choose">
      <Header />
      <Choice />
    </div>
  );
}

export default Choose;
