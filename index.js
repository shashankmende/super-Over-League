const element = (
  // Write your code here.
  <div className="bg-container d-flex flex-column justify-content-center">
    <h1>Congratulations</h1>
    <div className="inner-container ">
      <div className="inside-container">
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
        <h1>Kiran V</h1>
        <p>Vishnu institute of Computer Education and Technology,Bhimavaram</p>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
