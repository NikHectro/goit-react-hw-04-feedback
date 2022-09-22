import React from 'react';
import { Component } from 'react';

export class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleBtnClick = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  // handleGood = evt => {
  //   console.log(evt);
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };
  // handleNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // handleBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" name="good" onClick={this.handleBtnClick}>
          Good
        </button>
        {/* <button type="button" onClick={this.handleGood}>
          Good
        </button> */}
        <button type="button" name="neutral" onClick={this.handleBtnClick}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handleBtnClick}>
          Bad
        </button>

        <span>Good: {this.state.good}</span>
        <span>Neutral: {this.state.neutral}</span>
        <span>Bad: {this.state.bad}</span>

        <span>Total: {this.countTotalFeedback()}</span>
        <span>
          Positive feedback: {this.countPositiveFeedbackPercentage()}%
        </span>
      </div>
    );
  }
}
