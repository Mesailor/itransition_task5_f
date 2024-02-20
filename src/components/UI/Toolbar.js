import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import backService from "../../services/backService";

export default function Toolbar() {
  let {
    region,
    setRegion,
    page,
    errorNum,
    setErrorNum,
    seed,
    setSeed,
    setUsersData,
  } = useContext(AppContext);

  function submitForm(e) {
    e.preventDefault();
  }

  function updateRegion(e) {
    setRegion(e.target.value);
  }

  function updateErrorNum(e) {
    setErrorNum(e.target.value);
    if (e.target.value === "" || e.target.value < 0) return;
    try {
      backService
        .changeErrors({ region, seed, page, errorNum: e.target.value })
        .then((data) => {
          setUsersData(data);
        });
    } catch (e) {
      console.log(e);
    }
  }

  function updateSeed(e) {
    setSeed(e.target.value);
  }

  function setRandomSeed() {
    setSeed(Math.floor(Math.random() * 100000));
  }

  return (
    <div className="toolbar container p-3 sticky-top bg-white border-bottom border-1">
      <form
        className=" d-flex justify-content-around align-items-center"
        onSubmit={submitForm}
      >
        <label>
          Region:
          <select className="ms-3" onChange={updateRegion}>
            <option value="US">United States</option>
            <option value="ESP">Spain</option>
            <option value="IT">Italy</option>
          </select>
        </label>
        <label>
          Errors:
          <input
            className="ms-3"
            onChange={updateErrorNum}
            type="range"
            min="0"
            max="10"
            value={errorNum}
          />
          <input
            className="ms-3"
            onChange={updateErrorNum}
            type="number"
            min="0"
            max="1000"
            value={errorNum}
          />
        </label>
        <div className="d-flex align-items-center">
          <label>
            Seed:
            <input
              className="ms-3"
              onChange={updateSeed}
              type="number"
              min="0"
              max="1000000"
              value={seed}
            />
          </label>
          <input
            className="btn btn-primary ms-3"
            onClick={setRandomSeed}
            type="submit"
            value="setRandomIcon"
          />
        </div>
      </form>
    </div>
  );
}
