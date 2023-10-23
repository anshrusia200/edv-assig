const ColorModeButton = ({ mode, setMode }) => {
  const handleMode = () => {
    if (mode == "light") setMode("dark");
    else setMode("light");
  };
  return (
    <button onClick={handleMode}>{mode == "light" ? "dark" : "light"}</button>
  );
};

export default ColorModeButton;
