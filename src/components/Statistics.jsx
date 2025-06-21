export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div style={{ lineHeight: 1.6 }}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}
