import './App.css';
import List from './first';
import ToggleImage from './toggle.js';
import AxiosGet1 from './third.js';
import Form from './five';

function App() {
  const items = ['Priyanka','raj','Versha','Prabhu','Santhosh',];
  return (
    <div className="App">
    <List items={items} />
    <ToggleImage/>
   <AxiosGet1/>
    <Form/>
    
    </div>
  );
}

export default App;