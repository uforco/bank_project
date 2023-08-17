let Ds = document.getElementById("Deposit_show")
let Ws = document.getElementById("Withdraw_show")
let dA = document.getElementById("deposit_Amount")
let wA = document.getElementById("withdraw_Amount")
let tS = document.getElementById("Total_show")
function getTextToNumber (x){
    return parseFloat(x.innerText)
}
function getInputTextToNumber (x){
    let amount = ""
    let sum = 0;
    if ( x.value == "" || x.value == undefined || x.value < 0 ){
        //alert("Please set Amount")
        document.getElementById("aChack_img").src = ".././img/payment.png"
        document.getElementById("aChack_Text").innerText = "Please Set You'r Amount"
        document.getElementById("money_Error").style.display = "block"
        amount = sum
    }else{
        amount = x.value
    }
    x.value = ""
    return parseFloat(amount)
}
function amountChack(a, b, c){
    let sum = 0;
    if(a < b){
        //alert("You'r Balance is Low")
        document.getElementById("aChack_img").src = ".././img/lowb.png"
        document.getElementById("aChack_Text").innerText = "You'r Balance is Too Low"
        document.getElementById("money_Error").style.display = "block"
        sum = a
    }
    // else if(wA.value == undefined){
    //     //alert("You'r Balance is Low")
    //     document.getElementById("money_Error").style.display = "block"
    //     document.getElementById("aChack_img").src = ".././img/payment.png"
    //     document.getElementById("aChack_Text").innerText = "Please set You'r Amount And Then Withdraw"
        
    //     sum = a
    // }
    else{
        sum = a-b
        let tW = c + b
        setAmount(Ws, tW)
    }
    return sum
}
function setAmount(x, y){
    x.innerText = y
}