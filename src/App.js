// import PopUp from './components/PopUp';
import Table from './components/Table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Table/>
   {/* <PopUp/> */}
    </div>
  );
}

export default App;
