document.getElementById("Deposit_btn").addEventListener("click", () =>{
    let ds = getTextToNumber(Ds)
    let da = getInputTextToNumber (dA)
    let totalDepsit = ds + da
    setAmount(Ds, totalDepsit)
    let ts = getTextToNumber(tS)
    let total_Amount = ts + da
    setAmount(tS, total_Amount)
})

document.getElementById("Withdraw_btn").addEventListener("click", () =>{
    let ws = getTextToNumber(Ws)
    let wa = getInputTextToNumber (wA)
    //let total_Withdraw = ws + wa
    //setAmount(Ws, total_Withdraw)
    let ts = getTextToNumber(tS)
    let total_Belance = amountChack(ts, wa, ws) //ts - wa 
    setAmount(tS, total_Belance)
})
document.getElementById('deposit_Amount').addEventListener('keyup', (e) =>{
    if(e.key === "Enter"){
        //console.log(e.target.value)
        document.getElementById("Deposit_btn").click()
    }
    
})
document.getElementById('Withdraw_btn').addEventListener('keyup', (e) =>{
    if(e.key === "Enter"){
        //console.log(e.target.value)
        document.getElementById("Deposit_btn").click()
    }
    
})




// let uptokey =  document.getElementById('deposit_Amount')

// function keycodeEnter(x){
//     document.getElementById(x).addEventListener('keyup', (e) =>{
//         if(e.key === "Enter"){
//             console.log(e.target.value)
//         }
        
//     })
// }
// keycodeEnter(uptokey)

document.getElementById("error_close2").addEventListener("click", even =>{
    let dnon = even.target.parentElement.parentNode.parentElement.parentElement.parentElement
    dnon.style.display = "none"
})