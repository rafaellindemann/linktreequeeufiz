const Console = ({ children }) => {
  return (
    <div className="console-container">
      <div className="console-text">~$ {children}</div>
    </div>
  );
};

export default Console;