// import React, { useEffect, useRef } from "react";
// import { Terminal } from "xterm";
// import { FitAddon } from "xterm-addon-fit";
// import { AttachAddon } from "xterm-addon-attach";

// import "xterm/css/xterm.css";

// import DefaultLayout from "../components/layouts/DefaultLayout";

// const terminal = () => {
//   const terminalRef = useRef();

//   useEffect(() => {
//     const terminal = new Terminal();
//     const fitAddon = new FitAddon();
//     terminal.open(terminalRef.current);
//     terminal.loadAddon(fitAddon);

//     const rootDir = "~/timeflow-academy/";

//     terminal.write(`$ ${rootDir}`);

//     fitAddon.fit();

//     const socket = new WebSocket(
//       "wss://docker.example.com/containers/mycontainerid/attach/ws"
//     );
//     const attachAddon = new AttachAddon(socket);
//     terminal.loadAddon(attachAddon);

//     terminal.onKey((e) => {
//       console.log(e.key);
//       terminal.write(e.key);
//       if (e.key == "\r") terminal.write(`$ ${rootDir}\n`);
//     });
//   }, []);

//   return (
//     <DefaultLayout>
//       <div className="max-w-6xl mx-auto h-96">
//         <div className="w-full h-full" ref={terminalRef}></div>
//       </div>
//     </DefaultLayout>
//   );
// };

// export default terminal;

const terminal = ({ url, title, excerpt }) => {
  return <h1>Hello</h1>;
};

export default terminal;
