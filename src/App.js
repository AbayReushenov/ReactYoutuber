import Modalin from './Components/Modal/Modalin';
import ModalCodeevolution from './Components/ModalCodeevolution/ModalCodeevolution';
import Main from './Components/Main/Main';
import ModalBootstrap from './Components/ModalBootstrap/ModalBootstrap';
import ModalToDoListProps from './Components/ModalToDoListProps/ModalToDoListProps';
import ModalTodolistContext from './Components/ModalTodolistContext/ModalTodolistContext'

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
    </div>
  );
}

export default App;
