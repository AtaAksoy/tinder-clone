import './App.css';
import Header from './Components/Header/Header'
import TinderCards from './Components/TinderCards/TinderCards'
import SwipeButtons from './Components/SwipeButtons/SwipeButtons'
import Chats from './Components/Chats/Chats'
import ChatScreen from './Components/Chats/ChatScreen'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        {/* HEADER */}
        <Switch>
          <Route path='/chat/:person' exact>
            <Header backButton="/chat"/>
            <ChatScreen />
          </Route>
          <Route path='/chat' exact>
            <Header backButton="/"/>
            <Chats />
          </Route>
          <Route path='/' exact>
            <Header/>
            <TinderCards></TinderCards>
            <SwipeButtons></SwipeButtons>
          </Route>
        </Switch>
        {/* TINDER CARDS */}
        {/* FOOTER MENU */}
        {/* Individual Chat Screen */}
      </Router>

    </div>
  );
}

export default App;
