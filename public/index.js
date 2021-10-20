import init, { add, say_hello } from "/pkg/wasm_template.js";

const containerEl = document.getElementById('container');

async function runWASM() {
  // Instantiate our wasm module
  const wasm = await init("/pkg/wasm_template_bg.wasm");
  // Call the wasm method
  const result = say_hello('beautiful'); // Hello, beautiful!
  
  containerEl.textContent = result;
};

runWASM().catch((e) => {
  console.log(e);
  containerEl.textContent = e.message;
});
