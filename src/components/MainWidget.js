import icon1 from "../icons/clear_filter.png";
import icon2 from "../icons/reload_active.png";
import React from "react";
import "./mainWidget.css";
import TableData from "./TableData";
import Search from "./Search";

function MainWidget() {

  return (
    <div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 section-1">
          <div className="card">
            <h5 className="card-header">IBMS Points</h5>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10 bottom"></div>
              <div className="col-1"></div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <Search/>
                </div>
                <div className="col-6 icon-div">
                  <a className="filter-btn">
                    <img className="align-right" src={icon1} />
                  </a>
                  <a className="reload-btn">
                    <img className="reload-img align-right" src={icon2} />
                  </a>
                </div>
              </div>
              <div>
                <TableData/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default MainWidget;
