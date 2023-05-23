import icon1 from "../icons/clear_filter.png";
import icon2 from "../icons/reload_active.png";
import React from "react";
import "./tableWidget.css";
import TableData from "./TableData";

function TableWidget() {

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
                <div className="col-6 search">
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    ></input>
                  </form>
                </div>
                <div className="col-6 icon-div">
                  <a className="filter-btn">
                    <img src={icon1} />
                  </a>
                  <a className="reload-btn">
                    <img className="reload-img" src={icon2} />
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

export default TableWidget;
