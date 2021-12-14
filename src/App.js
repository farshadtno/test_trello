import './App.css';
import {ReactComponent as icon} from './images/trelloIcon.svg';

function App() {
  return (
    <div className="App">
      <div className="Top">
        <img src={icon} alt="Trello Logo"/>
        <a href="" target="_self" id="log_in">Log in</a>
        <a href="" target="_self" id="sign_up">Sign up</a>
      </div>
    </div>
  );
}

export {icon};
export default App;
