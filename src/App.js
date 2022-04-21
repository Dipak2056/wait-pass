import { useState } from "react";
import "./App.css";
import { Cart } from "./components/Cart";
import Menu from "./components/Menu";

function App() {
  //to show the components on click
  const [showcart, setShowcart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  //to show or hide the cart
  const handleOnCartClick = () => {
    setShowcart(!showcart);
    setShowMenu(false);
  };
  //to show or hide the nav-menu-component
  const handleOnMenuClick = () => {
    setShowMenu(!showMenu);
    setShowcart(false);
  };
  //for the cart
  const [price, setPrice] = useState(15);
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState();
  const [finalTotal, setfinalTotal] = useState();
  //to increase or decrease the count on pressing button
  const handleOnSubtract = () => {
    if (count >= 1) setCount(count - 1);
    else {
      alert("please press delete button to remove item from cart");
    }
    console.log(count);
    setTotalPrice((count - 1) * price);
  };
  const handleOnAdd = () => {
    setCount(count + 1);
    setTotalPrice((count + 1) * price);
  };

  return (
    <div className="wrapper">
      <div className="header-container">
        <h1>WAIT PASS</h1>
        <div className="cartmenu">
          <div className="cart-button" onClick={handleOnCartClick}>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="menu-button" onClick={handleOnMenuClick}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      {
        <div className="nav-item">
          {showcart && (
            <Cart
              setShowcart={setShowcart}
              price={price}
              count={count}
              totalPrice={totalPrice}
              finalTotal={finalTotal}
              handleOnAdd={handleOnAdd}
              handleOnSubtract={handleOnSubtract}
            />
          )}
          {showMenu && <Menu setShowMenu={setShowMenu} />}
        </div>
      }
      <div className="main">
        <h3>
          <i className="fa-solid fa-spoon"></i>
          <span> </span>
          All-item-Menu
          <span> </span>
          <i className="fa-solid fa-utensils"></i>{" "}
        </h3>
        <div className="course">
          <div className="course-title">
            <h4 className="course-startup">start-up</h4>
          </div>
          <div className="course-body">
            <div className="item">
              <div className="item-detail">
                <div className="item-detail-header">
                  <h5>Beef-Burger</h5>
                  <div className="item-detail-badges">
                    <div className="badge-item">
                      <i className="fa-solid fa-pepper-hot spicy"></i>
                    </div>
                    <div className="badge-item">
                      <i className="fa-solid fa-leaf vegan"></i>
                    </div>
                    <div className="badge-item">
                      <i className="fa-solid fa-bread-slice"></i>
                    </div>
                  </div>
                </div>
                <div className="item-detail-discription">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, obcaecati. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                  </p>
                  <div className="watch-video">
                    <button className="watch-video-button">Watch video</button>
                  </div>
                </div>
              </div>
              <div className="item-image">
                <img
                  src="https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?s=612x612"
                  alt=""
                />
              </div>
              <div className="item-price">
                <div className="item-price-price">
                  <p>$5.5</p>
                </div>
                <div className="item-price-button">
                  <button className="watch-video-button add-order-button">
                    order
                  </button>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-detail">
                <div className="item-detail-header">
                  <h5>Beef-Burger</h5>
                  <div className="item-detail-badges">
                    <div className="badge-item">
                      <i className="fa-solid fa-pepper-hot spicy"></i>
                    </div>
                    <div className="badge-item">
                      <i className="fa-solid fa-leaf vegan"></i>
                    </div>
                    <div className="badge-item">
                      <i className="fa-solid fa-bread-slice"></i>
                    </div>
                  </div>
                </div>
                <div className="item-detail-discription">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, obcaecati. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                  </p>
                  <div className="watch-video">
                    <button className="watch-video-button">Watch video</button>
                  </div>
                </div>
                <div className="watch-add">
                  <div className="add-order"></div>
                </div>
              </div>
              <div className="item-image">
                <img
                  src="https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?s=612x612"
                  alt=""
                />
              </div>
              <div className="item-price">
                <div className="item-price-price">
                  <p>$5.5</p>
                </div>
                <div className="item-price-button">
                  <button className="watch-video-button add-order-button">
                    order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="course">
          <div className="course-title">
            <h4 className="course-startup">entree</h4>
          </div>
        </div>
        <div className="course">
          <div className="course-title">
            <h4 className="course-startup">main</h4>
          </div>
        </div>
        <div className="course">
          <div className="course-title">
            <h4 className="course-startup">kids</h4>
          </div>
        </div>
        <div className="course">
          <div className="course-title">
            <h4 className="course-startup">dessert</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
