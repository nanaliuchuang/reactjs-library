import React, { Component } from "react";
import { connect } from "react-redux";
import Display from "./Display";
import Button from '../Page/Button'
export default class Keypad extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <Display display={this.props.display}></Display>
                    <Button button={"C"} id={"clear"} type={'clear'} />
                    <Button button={"/"} id={"divide"} type={'operator'} display={this.props.display} />
                    <Button button={"*"} id={"multiply"} type={'operator'} display={this.props.display} />
                    <Button button={"7"} id={"seven"} value={'7'} type={'num'} />
                    <Button button={"8"} id={"eight"} value={'8'} type={'num'} />
                    <Button button={"9"} id={"nine"} value={'9'} type={'num'} />
                    <Button button={"-"} id={"subtract"} display={this.props.display} type={'operator'}/>
                    <Button button={"4"} id={"four"} value={'4'} type={'num'} />
                    <Button button={"5"} id={"five"} value={'5'} type={'num'} />
                    <Button button={"6"} id={"six"} value={'6'} type={'num'} />
                    <Button button={"+"} id={"add"} display={this.props.display} type={'operator'} />
                    <Button button={"1"} id={"one"} value={'1'} type={'num'} />
                    <Button button={"2"} id={"two"} value={'2'} type={'num'} />
                    <Button button={"3"} id={"three"} value={'3'} type={'num'} />
                    <Button button={"0"} id={"zero"} value={'0'} type={'num'} />
                    <Button button={"."} id={"decimal"} value={'.'} display={this.props.display} type={'decimal'} />
                    <Button button={"="} id={"equals"} display={this.props.display} type={'equals'} />
                </div>
            </div>
        )
    }
}