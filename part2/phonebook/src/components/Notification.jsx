const Notification = ({ type, message }) => 
  message === null
  ? null 
  : <div className={`message ${type}`}>{ message }</div>;

export default Notification;