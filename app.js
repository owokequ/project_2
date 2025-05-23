const balance = 10;
const bonus = 99;
let user = "Verif";

if (balance >= 1000 || bonus >= 100){
    if(user != "ban" && user != "Exist" && user && "Selling"){
        console.log("Вы можете купить игру");
    }
    else{
        console.log("Не можете купить игру");
    }
}else{
    console.log("Не можете купить игру");
}