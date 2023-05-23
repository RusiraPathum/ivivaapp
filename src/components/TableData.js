import icon1 from "../icons/clear_filter.png";
import icon2 from "../icons/reload_active.png";
import icon3 from "../icons/edit_pencil.png";
import icon4 from "../icons/bell.png";
import React from "react";
import "./tableData.css";
import { sampleData } from "../data";

function TableData() {
  //check alarmed function
  let alarmedToRender;

  const isCheckAlarmed = (alarmed) => {
    switch (alarmed) {
      case "0":
        alarmedToRender = <td></td>;
        break;
      case "1":
        alarmedToRender = (
          <td>
            <img className="reload-img" src={icon4} />
          </td>
        );
        break;
    }

    return alarmedToRender;
  };

  //Online status function
  let tdToRender;

  const isCheckOnlineStatus = (onlineStatus) => {
    switch (onlineStatus) {
      case "1":
        tdToRender = (
          <td>
            <div className="dot-gray"></div>
          </td>
        );
        break;
      case "2":
        tdToRender = (
          <td>
            <div className="dot-red"></div>
          </td>
        );
        break;
      case "3":
        tdToRender = (
          <td>
            <div className="dot-green"></div>
          </td>
        );
        break;
    }

    return tdToRender;
  };

  //check readOnly funtion
  let readOnlyToRender;

  const isCheckReadOnly = (readOnly) => {
    switch (readOnly) {
      case "0":
        readOnlyToRender = (
          <td>
            <img className="reload-img" src={icon3} />
          </td>
        );
        break;
      case "1":
        readOnlyToRender = <td></td>;
        break;
    }

    return readOnlyToRender;
  };

  return (
    <table class="table">
      <tbody>
        {sampleData.map((data, key) => {
          return (
            <tr>
              {isCheckAlarmed(data.isAlarmed)}
              <th scope="row">{data.isAlarmed}</th>
              <th scope="row">
                {data.PointTemplateName} <br /> {data.EquipmentName}
              </th>
              <td>{data.PointAddress}</td>
              {isCheckOnlineStatus(data.OnlineStatus)}
              <th scope="row">{data.PointValue}</th>
              {isCheckReadOnly(data.isReadOnly)}
              <td scope="col">{data.LastUpdatedTime}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableData;
