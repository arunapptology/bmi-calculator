import "./App.css";
import { useState } from "react";
function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const calBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please Enter Value in input fields");
    } else {
      let bmi = weight / (((height / 100) * height) / 100);
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("Underweight");
        setMessageColor("text-primary");
      } else if (bmi > 18.5 && bmi < 24.9) {
        setMessage("Normal weight");
        setMessageColor("text-success");
      } else if (bmi > 24.9 && bmi < 29.9) {
        setMessage("Overweight");
        setMessageColor("text-warning");
      } else if (bmi > 30) {
        setMessage("Obesity");
        setMessageColor("text-danger");
      }
    }

    e.target.reset();
  };

  const reSet = (e) => {
    setBmi(0);
  };
  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-6 col-md-6 center-block">
            <div className="card">
              <div className="card-header">
                <h1>BMI Calculator</h1>
              </div>
              <div className="card-body">
                <form onSubmit={calBmi}>
                  <div className="form-group mb-3">
                    <label>Weight (in kgs)</label>
                    <input
                      className="form-control"
                      type="text"
                      name="weight"
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="Enter Weight value"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Height (in cm)</label>
                    <input
                      className="form-control"
                      type="text"
                      name="height"
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="Enter Height value"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <button className="btn btn-danger float-end">Submit</button>
                  </div>
                </form>

                {message && <small className={messageColor}>{message}</small>}
              </div>
              <div className="card-header">
                <ul className="footer-element">
                  <li>
                    <div className="form-group">
                      <h3>Your BMI is : {bmi}</h3>
                    </div>
                  </li>
                  <li>
                    <button className="button-60 float-end" onClick={reSet}>
                      Reset
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
