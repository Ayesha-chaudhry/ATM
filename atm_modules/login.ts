import inquirer from "inquirer";
import users from "./user.js";
import mainScreen from './mainScreen.js';

async function  Login() {
    const answer = await inquirer
    .prompt([
        {
            name: "accountNumber",
            type: "number",
            message:"Please Enter your Account Number"
        },
        {
            name: "pin",
            type: "password",
            message: "Enter your pin code"
        }
    ]);
    
    let user = users.find(x => x.accountNumber == answer.accountNumber && x.pin == answer.pin)
	
    
    if(typeof user != "undefined"){
        console.log(`Welcome ${user.name}`);
         mainScreen(user.balance);
    }
    else{
        console.log("You enter invalid pin or account number");
    }
}

export default Login;