import inquirer from "inquirer";
async function transfer(balance) {
    const answer = await inquirer.prompt([{
            name: "accountNumber",
            type: "number",
            message: "Enter account number"
        },
        {
            name: "amount",
            type: "number",
            message: "Enter your amount"
        }
    ]);
    balance -= answer.amount;
    return balance;
}
export default transfer;
