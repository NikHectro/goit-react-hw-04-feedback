import React from 'react';
import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const initialValue = 0;

  const [good, setGood] = useState(initialValue);
  const [neutral, setNeutral] = useState(initialValue);
  const [bad, setBad] = useState(initialValue);

  const handleBtnClick = key => {
    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const keys = ['good', 'neutral', 'bad'];
  const keysArr = { good, neutral, bad };
  const values = Object.entries(keysArr);
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <h1>Please leave feedback</h1>
      <Section title="Feedback form:">
        <FeedbackOptions keys={keys} handleBtnClick={handleBtnClick} />
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
};
