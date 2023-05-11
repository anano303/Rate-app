import "./Rate.css";
import Star from "../images/Star.png";

export default function Rate(props) {
  const buttons = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      <img className="img" src={Star} alt="star" />
      <h1> How did we do? </h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="btn">
        {buttons.map((item) => (
          <button
            onClick={() => {
              props.setRate(item);
            }}
            key={item}
            className={item == props.rate ? "active" : ""}
          >
            {item}
          </button>
        ))}
        ;
      </div>

      <button
        className="submit"
        onClick={() => {
          if (props.rate) props.setSubmit(true);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}
