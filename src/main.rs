use std::io;

fn main() {
    let mut first_input: String = String::new();
    let mut second_input: String = String::new();
    
    // Get first number
    println!("First number: ");
    io::stdin()
        .read_line(&mut first_input)
        .expect("Reading error");
    
    let a: f64 = match first_input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Not a number: ");
            return;
        }
    };
    
    // Get second number
    println!("Second number: ");
    io::stdin()
        .read_line(&mut second_input)
        .expect("Reading error");

    let b: f64 = match second_input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Not a number: ");
            return;
        }
    };

    println!("a  + b = {a} + {b}");
}
