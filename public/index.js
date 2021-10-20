import init from "/pkg/wasm_template.js";

const containerEl = document.getElementById('container');

async function runWASM() {
  // Instantiate our wasm module
  const wasm = await init("/pkg/wasm_template_bg.wasm");
  // Call the Add function export from wasm, save the result
  const addResult = wasm.add(5, 10);
  
  // Set the result onto the body
  containerEl.textContent = `addResult: ${addResult}`;
};

runWASM().catch((e) => {
  containerEl.textContent = e.message;
});
