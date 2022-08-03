import "./styles/App.css";
import "./styles/Choose.css";
import Choice from "./components/Choice.js";

function Choose() {
  return (
    <div className="Choose">
        <h1>Choose an option</h1>
    <div className="choose__container">
        <Choice
          name={"Lend"}
          description={
            "Lend funds to projects and receive a yield in their native token."
          }
          buttonName={"Lend"}
          link={"/lend"}
        />
        <Choice
          name={"Borrow"}
          description={
            "Borrows funds from your community and invest in yield generating vaults."
          }
          buttonName={"Borrow"}
            link={"/borrow"}
        />
    </div>
    </div>
  );
}

export default Choose;
