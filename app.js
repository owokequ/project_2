const operation = [1000, -700, 300, -500, 10000];
let balance = 100;

function final_balance(operation){
    balance += operation[0];
    for(let i = 1; i < operation.length; i++){
        if(balance + operation[i] > 0){
            balance += operation[i];
        }
        else{
            return false;
        }
    }
    return balance;
}

function average_balance(operation){
    let balance_plus = 0;
    let couter_plus = 0;
    let balance_minus = 0;
    let couter_minus = 0;

    for(let el of operation){
        if(el > 0){
            balance_plus += el;
            couter_plus += 1;
        }
        else{
            balance_minus += el;
            couter_minus += 1;
        }
    }

    console.log(`Доход: ${balance_plus / couter_plus} Расходы: ${balance_minus / couter_minus}`)
}

const a = final_balance(operation);
average_balance(operation);
console.log(a);
