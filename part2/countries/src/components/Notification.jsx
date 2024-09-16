const Notification = ({ code }) => {
  if (code === "0") return <p className="content notification">Type a country's name or part of it ...</p>;
  if (code === "1") return <p className="content notification">Too many matches. Please keep typing ...</p>;
}

export default Notification;