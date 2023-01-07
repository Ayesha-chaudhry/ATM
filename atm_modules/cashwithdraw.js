import inquirer from "inquirer";
async function OtherAmount(balance) {
    const otherAmt = await inquirer.prompt([{
            name: "otherAmount",
            type: "number",
            message: "Please enter your amount"
        }]);
    if (otherAmt.otherAmount < balance) {
        balance -= otherAmt.otherAmount;
    }
    else {
        console.log("You have insufficient balance");
        balance = await OtherAmount(balance);
    }
    return balance;
}
async function cashwithdraw(balance) {
    const answer = await inquirer.prompt([{
            name: "amount",
            type: "list",
            choices: ["500", "1000", "2000", "5000", "10000", "otherAmount"],
            message: "Please select your amount"
        }]);
    switch (answer.amount) {
        case "500":
            if (balance > Number(answer.amount)) {
                balance -= 500;
                console.log(`Your new balance is: ${balance}`);
            }
            else {
                console.log("You have insufficient Balance");
            }
            break;
        case "1000":
            if (balance > Number(answer.amount)) {
                balance -= 1000;
                console.log(`Your new balance is: ${balance}`);
                break;
            }
            else {
                console.log("You have insufficient Balance");
            }
        case "2000":
            if (balance > Number(answer.amount)) {
                balance -= 2000;
                console.log(`Your new balance is: ${balance}`);
                break;
            }
            else {
                console.log("You have insufficient Balance");
            }
        case "5000":
            if (balance > Number(answer.amount)) {
                balance -= 5000;
                console.log(`Your new balance is: ${balance}`);
                break;
            }
            else {
                console.log("You have insufficient Balance");
            }
        case "10000":
            if (balance > Number(answer.amount)) {
                balance -= 10000;
                console.log(`Your new balance is: ${balance}`);
                break;
            }
            else {
                console.log("You have insufficient Balance");
            }
        case "otherAmount":
            balance = await OtherAmount(balance);
            console.log(`Your new balance is: ${balance}`);
            break;
    }
    return balance;
}
export default cashwithdraw;
