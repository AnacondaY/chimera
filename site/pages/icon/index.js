import React from 'react';
import { Row, Col } from 'components';
import Block from '../../Block';
import { Icon } from '../../../src/components';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoIcon extends React.PureComponent {

    render(){
        return (
            <div className="demo-icon-list">
                <Statement locale={this.props.locale} componentName="Icon">
                    <Row className="demo-icon">
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="mail"/>
                                </div>
                                <div className="demo-icon-text">mail</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="search"/>                            
                                </div>
                                <div className="demo-icon-text">search</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="time"/>                            
                                </div>
                                <div className="demo-icon-text">time</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="calendar"/>                 
                                </div>
                                <div className="demo-icon-text">calendar</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="user"/>
                                </div>
                                <div className="demo-icon-text">user</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="trash"/>
                                </div>
                                <div className="demo-icon-text">transh</div>
                            </div>
                        </Col>
                    </Row>     
                    <Row className="demo-icon">
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="bars"/>
                                </div>
                                <div className="demo-icon-text">bars</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="minus"/>
                                </div>
                                <div className="demo-icon-text">minus</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="plus"/>
                                </div>
                                <div className="demo-icon-text">plus</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="success"/>
                                </div>
                                <div className="demo-icon-text">success</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="error"/>
                                </div>
                                <div className="demo-icon-text">error</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="warning"/>
                                </div>
                                <div className="demo-icon-text">warning</div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="demo-icon">
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="loading"/>
                                </div>
                                <div className="demo-icon-text">loading</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="lock"/>
                                </div>
                                <div className="demo-icon-text">lock</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="eye"/>
                                </div>
                                <div className="demo-icon-text">eye</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="share"/>
                                </div>
                                <div className="demo-icon-text">share</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="setting"/>
                                </div>
                                <div className="demo-icon-text">setting</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="more"/>
                                </div>
                                <div className="demo-icon-text">more</div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="demo-icon">
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="arrow-left"/>
                                </div>
                                <div className="demo-icon-text">arrow-left</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="arrow-right"/>
                                </div>
                                <div className="demo-icon-text">arrow-right</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="arrow-up"/>
                                </div>
                                <div className="demo-icon-text">arrow-up</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="arrow-down"/>
                                </div>
                                <div className="demo-icon-text">arrow-down</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="star-on"/>
                                </div>
                                <div className="demo-icon-text">star-on</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="star-off"/>
                                </div>
                                <div className="demo-icon-text">star-off</div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="demo-icon">
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="location"/>
                                </div>
                                <div className="demo-icon-text">location</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="picture"/>
                                </div>
                                <div className="demo-icon-text">picture</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="caret-up"/>
                                </div>
                                <div className="demo-icon-text">caret-up</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="caret-down"/>
                                </div>
                                <div className="demo-icon-text">caret-down</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="close"/>
                                </div>
                                <div className="demo-icon-text">close</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="correct"/>
                                </div>
                                <div className="demo-icon-text">correct</div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="demo-icon">
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="double-arrow-left"/>
                                </div>
                                <div className="demo-icon-text">double-arrow-left</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="double-arrow-right"/>
                                </div>
                                <div className="demo-icon-text">double-arrow-right</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="upload"/>
                                </div>
                                <div className="demo-icon-text">upload</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="download"/>
                                </div>
                                <div className="demo-icon-text">download</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="document"/>
                                </div>
                                <div className="demo-icon-text">document</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <div className="demo-icon-container">
                                <div className="demo-icon-wrapper">
                                    <Icon type="math"/>
                                </div>
                                <div className="demo-icon-text">math</div>
                            </div>
                        </Col>
                    </Row>
                </Statement>
            </div>
        );
    }
}