import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Posts from "./routes/Posts";
import Login from "./routes/Login";
import MyPage from "./routes/MyPage";
import Search from "./routes/Search";
import NoMatch from "./routes/NoMatch";

import Header from "./Components/Header";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/:username" component={About} />
            <Route path="/posts" component={Posts} />
            <Route path="/login" component={Login} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/search" component={Search} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
// Header 가 DIV 안으로 들어간 이유?
// :  Router 컴포넌트 안에는 단 하나의 child 만 들어갈수 있다.
