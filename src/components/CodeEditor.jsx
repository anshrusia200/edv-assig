import CodeEditor from "@uiw/react-textarea-code-editor";
import CopyButton from "./CopyButton";
import ColorModeButton from "./ColorModeButton";
import ReadOnlyButton from "./ReadOnlyButton";
import { useState } from "react";

function CodeEditorComponent() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  const [mode, setMode] = useState("light");
  const [readOnly, setReadOnly] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "#bbb",
        padding: "10px",
        borderRadius: "10px",
        display: "flex",
      }}
    >
      <CodeEditor
        readOnly={readOnly}
        value={code}
        data-color-mode={mode}
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          fontSize: 20,
          width: "800px",
          height: "400px",
          borderRadius: "10px",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          paddingTop: "0",
          rowGap: "10px",
        }}
      >
        <ColorModeButton mode={mode} setMode={setMode} />
        <CopyButton code={code} />
        <ReadOnlyButton readOnly={readOnly} setReadOnly={setReadOnly} />
      </div>
    </div>
  );
}
export default CodeEditorComponent;
