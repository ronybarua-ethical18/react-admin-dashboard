import TopBar from "./components/TopBar/TopBar";
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'
function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <Sidebar />
        <div className="others">Other Pages</div>
      </div>
    </div>
  );
}

export default App;
