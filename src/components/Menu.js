import React from "react";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-title">
        <h1>Notre Menu</h1>
      </div>
      <div className="sub-title">
        <h1>Nos Fajitas</h1>
      </div>

      <div className="menu-items">
        {/* Item 1 */}
        <div className="menu-item">
          <img src={img1} alt="Item 1" className="menu-item-image" />
          <h3 className="menu-item-name">Trio Fajitas</h3>
          <p className="menu-item-price">49,90 DT</p>
        </div>

        {/* Item 2 */}
        <div className="menu-item">
          <img src={img2} alt="Item 2" className="menu-item-image" />
          <h3 className="menu-item-name">Trio Fajitas</h3>
          <p className="menu-item-price">49,90 DT</p>
        </div>

        {/* Item 3 */}
        <div className="menu-item">
          <img src={img3} alt="Item 3" className="menu-item-image" />
          <h3 className="menu-item-name">Trio Fajitas</h3>
          <p className="menu-item-price">49,90 DT</p>
        </div>

        {/* Item 4 */}
        <div className="menu-item">
          <img src={img3} alt="Item 4" className="menu-item-image" />
          <h3 className="menu-item-name">Trio Fajitas</h3>
          <p className="menu-item-price">49,90 DT</p>
        </div>

        {/* Item 5 */}
        <div className="menu-item">
          <img src={img2} alt="Item 5" className="menu-item-image" />
          <h3 className="menu-item-name">Trio Fajitas</h3>
          <p className="menu-item-price">49,90 DT</p>
        </div>

        {/* Item 6 */}
        <div className="menu-item">
          <img src={img1} alt="Item 6" className="menu-item-image" />
          <h3 className="menu-item-name">Trio Fajitas</h3>
          <p className="menu-item-price">49,90 DT</p>
        </div>
      </div>
      <div className="plus">
        <h3>Voir plus</h3>
      </div>
    </div>
  );
};

export default Menu;