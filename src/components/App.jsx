import React from 'react';
import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleBtnClick = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
      // [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const countTotal = good + neutral + bad;
    return countTotal;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const keys = Object.keys(this.state);
    const values = Object.entries(this.state);
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h1>Please leave feedback</h1>
        <Section title="Feedback form:">
          <FeedbackOptions keys={keys} handleBtnClick={this.handleBtnClick} />
        </Section>

        <Section title="Statistics:">
          {total ? (
            <Statistics
              values={values}
              total={total}
              positivePercentage={percentage}
            />
          ) : (
            <Notification message="There is no feedbacks" />
          )}
        </Section>
      </div>
    );
  }
}

/* {keys.map(key => (
          <button
            type="button"
            key={key}
            onClick={() => this.handleBtnClick(key)}
          >
            {key}
          </button>
        ))} */

/* <button type="button" name="good" onClick={this.handleBtnClick}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.handleBtnClick}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handleBtnClick}>
          Bad
        </button> */
