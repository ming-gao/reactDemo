import React, {Component} from 'react';
import { Layout, Menu } from 'antd';
import { Redirect, withRouter, Route, Switch } from "react-router-dom";
import routeList from "../../../router/routeMap";
import DocumentTitle from "react-document-title";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const { Content } = Layout;

class LayoutContent extends Component {
    render() {
        return (
            <DocumentTitle>
                <Content style={{ height: "calc(100% - 100px)" }}>
                    <TransitionGroup>
                        <CSSTransition
                            timeout={500}
                            classNames="fade"
                            exit={false}
                        >
                            <Switch>
                                <Redirect exact from="/" to="/dashboard" />
                                {routeList.map((route) => {
                                    return (
                                        (
                                            <Route
                                                component={route.component}
                                                key={route.path}
                                                path={route.path}
                                            />
                                        )
                                    );
                                })}
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </Content>
            </DocumentTitle>
        );
    }
}

export default LayoutContent;
