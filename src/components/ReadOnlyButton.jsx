const ReadOnlyButton = ({ readOnly, setReadOnly }) => {
  const handleLock = () => {
    setReadOnly(!readOnly);
  };
  return <button onClick={handleLock}>{readOnly ? "unlock" : "lock"}</button>;
};

export default ReadOnlyButton;
