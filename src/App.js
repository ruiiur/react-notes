import './App.css';
import TestHook from './components/TestHook';
import TestClassExample from './components/TestClassExample';
import CustomHookTest from './components/CustomHookTest';
// import Login from './components/login.tsx';

function App() {
  return (
    <div className="App">
     <TestHook/>
     <TestClassExample/>
     <CustomHookTest/>
    </div>
  );
}

export default App;
