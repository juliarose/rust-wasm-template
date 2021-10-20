use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

// returns a string!
#[wasm_bindgen]
pub fn say_hello(string: &str) -> String {
    format!("Hello, {}!", string).into()
}