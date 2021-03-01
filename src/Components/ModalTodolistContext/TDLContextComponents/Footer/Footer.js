import React, { useContext, useState } from 'react';
import { DataContext } from '../DataProvider/DataProvider';

export default function Footer() {
  const [checkedAll, setCheckedAll] = useState(false);
  const [dela, updateDela] = useContext(DataContext);

  const handleCheckStatusAll = () => {
    const newSpusokDel = [...dela];
    newSpusokDel.forEach((odnodelo) => {
      odnodelo.status = !checkedAll;
    });
    updateDela(newSpusokDel);
    setCheckedAll(!checkedAll);
  };

  const notDoneBusiness = () =>
    dela.filter((odnodelo) => odnodelo.status === false);

  const deleteDoneBussiness = () => {
    // const newSpusokDel = dela.filter((odnodelo) => {
    //   return odnodelo.status === false;
    // });
    updateDela(notDoneBusiness);
    setCheckedAll(false);
  };

  return (
    <>
      {dela.length === 0 ? (
        <h2> All business done! Congratulations!</h2>
      ) : (
        <div className="d-flex flex-column bd-highlight">
          <label htmlFor="all">
            <input
              className="form-check-input"
              type="checkbox"
              name="all"
              id="all"
              onChange={handleCheckStatusAll}
              checked={checkedAll}
            />
            All
          </label>
          <p>You have {notDoneBusiness().length} to do</p>
          <button
            type="button"
            onClick={deleteDoneBussiness}
            id="delete"
            className="btn btn-info"
          >
            Delete all
          </button>
        </div>
      )}
    </>
  );
}
