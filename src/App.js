import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="header-container">
        <h1>WAIT PASS</h1>
        <div className="menu-button">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
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
                    Sit, obcaecati.
                  </p>
                </div>
                <div className="watch-add">
                  <div className="watch-video">
                    <button className="watch-video-button">Watch video</button>
                  </div>
                  <div className="add-order">
                    <button className="watch-video-button add-order-button">
                      Add order
                    </button>
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
                <p>$5.5</p>
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
                    Sit, obcaecati.
                  </p>
                </div>
                <div className="watch-add">
                  <div className="watch-video">
                    <button className="watch-video-button">Watch video</button>
                  </div>
                  <div className="add-order">
                    <button className="watch-video-button add-order-button">
                      Add order
                    </button>
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
                <p>$5.5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="course">
          <h4>entree</h4>
        </div>
        <div className="course">
          <h4>Main</h4>
        </div>
        <div className="course">
          <h4>Dessert</h4>
        </div>
        <div className="course">
          <h4>Drinks</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
