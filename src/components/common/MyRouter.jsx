import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../assets/css/transitionGroup.css";
import GuardRouter from "./GuardRouter";

class MyRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames={this.props.type || "fade"}
              timeout={this.props.duration || 300}
            >
              <Switch location={location}>
                {this.props.router.map((v) => (
                  <Route
                    key={v.path}
                    exact={v.exact}
                    path={v.path}
                    render={() => <GuardRouter {...v}></GuardRouter>}
                  ></Route>
                ))}
                <Redirect to={"/error"} from="*"></Redirect>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      ></Route>
    );
  }
}

export default MyRouter;
