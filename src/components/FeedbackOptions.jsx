export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          style={{ marginRight: 8 }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
