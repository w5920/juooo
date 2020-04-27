import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom"

import GuardRouter from './GuardRouter'

class MyRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                {
                    this.props.router.map(v => (
                        <Route key={v.path} exact={v.exact} path={v.path} render={() => <GuardRouter {...v}></GuardRouter>}></Route>
                    ))
                }
                < Redirect to={"/error"} from="*"></Redirect>
            </Switch>
        );
    }
}

export default MyRouter;