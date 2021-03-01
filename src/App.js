import logo from './logo.svg';
import './App.css';


import Header from './componets/Header/Header';
import PlayerList from './componets/PlayerList/PlayerList';

function App() {
  return (
    <div className="main-content">
      <Header></Header>
      <PlayerList></PlayerList>
    </div>
  );
}

export default App;
