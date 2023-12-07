import "./Body.css";
import InnerLayout from "./InnerLayout/InnerLayout";

const Body = () => {
  return (
    <div className="body-container">
      <img
        src="https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-banner-FS-New--1--1701170108.jpg"
        alt="Image"
        style={{ width: "100%", height: "360px" }}
      />
      <InnerLayout />

    </div>
  );
};

export default Body;
