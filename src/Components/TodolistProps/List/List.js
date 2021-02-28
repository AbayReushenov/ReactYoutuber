// props = {updateDela, dela }
function List({ updateDela, dela }) {
  function handlerDelete(keyId) {
    const newSpisokDel = dela.filter((element) => {
      return element.key !== keyId;
    });
    updateDela(newSpisokDel);
    //  updateDela((prev) => prev.filter((el) => String(el.key) !== String(keyId)));
    // prev = предыдущее состояние объекта
  }

  // console.log('пропсы', props);
  return (
    <div>
      {dela.map((odnodelo) => {
        return (
          <div key={odnodelo.key} className="d-flex justify-content-between">
            <p className="h6">{odnodelo.name}</p>
            <button
              className="btn btn-outline-danger"
              onClick={() => handlerDelete(odnodelo.key)}
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default List;
