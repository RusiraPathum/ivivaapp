import React from "react";
import "./tableWidget.css";

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
                <div className="col-6">
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    ></input>
                    <button
                      className="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
                <div className="col-6">
                    
                </div>
              </div>
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default TableWidget;
