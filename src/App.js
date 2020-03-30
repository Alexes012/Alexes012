import React from 'react';
import './App.css';
import s from './styles.module.css';

class counter extends React.Component {

    state = {
        startValue: 0,
        maxValue: 5,
        currentValue: 0
    };


    click = () => {
        if (this.state.currentValue < this.state.maxValue) {
            this.setState({currentValue: this.state.currentValue + 1})
        }
    };

    resest = () => {
        if (this.state.currentValue) {
            this.setState({currentValue: this.state.startValue})
        }
    };


    render = () => {

        let disabled = this.state.currentValue === this.state.maxValue ? true:false;
        let changecolor = this.state.currentValue === this.state.maxValue ? s.color : '';

        return (
            <div className={s.container}>
                <div className={s.block}>
                    <div className={s.span}>
                        <div className={changecolor}>{this.state.currentValue}</div>
                    </div>
                    <div>
                        <button onClick={this.click} disabled={disabled}>CLICK</button>
                        <button onClick={this.resest}>RESET</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default counter;