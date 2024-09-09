const Notification = ({ code }) => {
  if (code === "0") return <p>Type a country's name or part of it.</p>;
  if (code === "1") return <p>Too many matches, keep typing please...</p>;
}

export default Notification;