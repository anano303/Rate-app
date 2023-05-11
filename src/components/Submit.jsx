import "./Submit.css";
import submitLogo from "../images/submit img.png";

export default function Submit(props) {
  return (
    <div className="card">
      <img className="img-2" src={submitLogo} />
      <div className="bground">
        <p>You selected {props.rate} out of 5</p>
      </div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
