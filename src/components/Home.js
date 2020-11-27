import React from "react";

function Home() {
  return (
    <div>
      <h1>Gogo Pandey</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
        </div>
        <div className="txt-wrapper item">
          <span>Gogo kaa iPhone</span>
          <span>Price: 80000</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
