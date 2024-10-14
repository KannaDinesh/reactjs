function Message() {
  const name = "Dinesh";
  if (name) {
    return <h1>Hello {name}!</h1>;
  } else {
    return <h1>Hello Team</h1>;
  }
}

export default Message;
