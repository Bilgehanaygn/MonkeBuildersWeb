import MyAppBar from "./components/MyAppBar/MyAppBar";
import "./App.css";
import MainBody from "./components/MainBody/MainBody";


function App() {
  document.title = 'Monke Builders';

  return (
    <div style={{backgroundColor:"grey"}}>
      <MyAppBar/>
      <MainBody/>
    </div>
  );
}

export default App;
