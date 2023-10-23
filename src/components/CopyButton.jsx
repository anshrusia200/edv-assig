import { useState } from "react";

const CopyButton = ({ code }) => {
  const [copyText, setCopyText] = useState("Copy code");
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopyText("Copied ✔");
    setTimeout(() => {
      setCopyText("Copy code");
    }, 1000);
  };
  return <button onClick={handleCopy}>{copyText}</button>;
};

export default CopyButton;
