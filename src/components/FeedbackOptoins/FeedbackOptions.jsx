import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <li key={option}>
        <button type="button" value={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      </li>
    ))}
  </div>
);
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
