import Modalin from './Components/Modal/Modalin';
import ModalCodeevolution from './Components/ModalCodeevolution/ModalCodeevolution';
import Main from './Components/Main/Main';
import ModalBootstrap from './Components/ModalBootstrap/ModalBootstrap';
import ModalToDoListProps from './Components/ModalToDoListProps/ModalToDoListProps';
import ModalTodolistContext from './Components/ModalTodolistContext/ModalTodolistContext';
import ModalNiceTodolistContext from './Components/ModalNiceTodolistContext/reacthooks-todo-list-contextapi-master/src/ModalNiceTodolistContext';
import ModalReducerTodolist from './Components/ModalReducerTodolist/src/ModalReducerTodolist'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

function App() {
  return (
    <div>
      <Modalin />
      <ModalCodeevolution />
      <Main />
      <ModalBootstrap />
      <ModalToDoListProps />
      <ModalTodolistContext />
      <ModalNiceTodolistContext />
      <ModalReducerTodolist/>
    </div>
  );
}

export default App;
