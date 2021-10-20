import init, { add, say_hello } from "/pkg/wasm_template.js";

const containerEl = document.getElementById('container');

async function runWASM() {
  // Instantiate our wasm module
  const wasm = await init("/pkg/wasm_template_bg.wasm");
  // Call the Add function export from wasm, save the result
  const result = say_hello('beautiful');
  
  // Set the result onto the body
  containerEl.textContent = result;
};

runWASM().catch((e) => {
  console.log(e);
  containerEl.textContent = e.message;
});
