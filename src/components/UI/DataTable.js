import { useContext } from "react";
import TableRow from "./TableRow";
import { AppContext } from "../context/AppContext";
import backService from "../../services/backService";

export default function DataTable() {
  let { usersData, setUsersData, page, setPage, region, seed, errorNum } =
    useContext(AppContext);

  function addMoreData() {
    setPage(++page);
    try {
      backService.getData10({ region, seed, page, errorNum }).then((data) => {
        setUsersData(usersData.concat(data));
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="data-table container">
      <table className="table">
        <thead>
          <tr id="row">
            <th>Index</th>
            <th>Id</th>
            <th>Full name</th>
            <th>Address</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody>
          {usersData[0] ? (
            usersData.map((userData, i) => {
              return (
                <TableRow key={userData.id} userData={userData} i={i + 1} />
              );
            })
          ) : (
            <tr>
              <td colSpan="5" align="center">
                Loading...
              </td>
            </tr>
          )}
          <tr onScroll={addMoreData}>
            <td colSpan="5" align="center">
              <button onClick={addMoreData}>Show more</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
