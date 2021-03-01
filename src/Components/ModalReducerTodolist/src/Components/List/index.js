import { useSelector } from 'react-redux';
import Item from '../Item';

function List() {
  const tasks = useSelector((state) => state.tasks);
   return (
    <ul className="container-xxl">
      {tasks.map((el, index) => (
        <Item
          key={el.id}
          id={el.id}
          index={index + 1}
          text={el.text}
          status={el.status}
        />
      ))}
    </ul>
  );
}

export default List;
