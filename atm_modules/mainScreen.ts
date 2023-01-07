import inquirer from "inquirer";
import cashwithdraw from "./cashwithdraw.js";
import cashDeposit from "./cashDeposit.js";
import transfer from "./transfer.js";
import Utility from "./utilityBill.js"

async function anotherTransaction(){
    const OTrans = await inquirer.prompt([{
        name: "otherTrans",
        type: "list",
        choices:["Yes", "No"],
        message: "Do you want another Transaction?"
    }])
    return OTrans.otherTrans;
}

async function  mainScreen(balance: number){
    do{
        const options = await inquirer.prompt([{
            name:"menu",
            type: "list",
            choices: ['Balance Inquiry', 'Cash Withdraw', 'Cash Deposit', 'Transfer', 'Utility Bill', 'Exit'],
            message: "Please Select Transaction type."
        }]);
    
        switch(options.menu){

            case "Balance Inquiry":
                console.log(`Your current balance is: ${balance}`);
                break;
            case "Cash Withdraw":
                balance = await cashwithdraw(balance);
                console.log(`Your transaction is successfull new balance is ${balance}`);
                //console.log('Withdraw');
                break;
            case "Cash Deposit":
                balance = await cashDeposit(balance);
                console.log(`Your cash is deposited new balance is ${balance}`);
                break;
            case "Transfer":
                balance = await transfer(balance)
                console.log(`Your balance is transfered new balance is ${balance}`);
                break;
            case "Utility Bill":
                balance = await Utility(balance)
                console.log(`Your Bill is paid new balance is ${balance}`);
                break;
            case "Exit":
                anothertran = "No";
                break;
        }
    if(options.menu !== "Exit"){
     var anothertran = await anotherTransaction();
    }
      }
    while(anothertran != "No")
}

export default mainScreen;