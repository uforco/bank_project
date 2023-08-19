let email1 = document.getElementById("email_put")
let password1 = document.getElementById("password_put")
function validetion(){
    let email = document.getElementById("email_put").value
    let password = document.getElementById("password_put").value
    if(email === "" || password === ""){
        document.getElementById("error_pop").style.display = "flex"
        closetimeOut()
    }else{
        if(email !== "sharif@gmail.com"){
            document.getElementById("error_img").src = ".././img/emailerror.png"
            document.getElementById("error_text").innerHTML = "Please Chack You'r Email <br> invalid Email"
            document.getElementById("error_pop").style.display = "flex"
            closetimeOut()
        }else if(password !== "12345"){
            document.getElementById("error_img").src = ".././img/passerror.png"
            document.getElementById("error_text").innerHTML = "Please Chack You'r Password <br> invalid Email"
            document.getElementById("error_pop").style.display = "flex"
            //closetimeOut()
            
        }else{
            window.location.href = "./banking.html"
        }
    }
}
document.getElementById('submit').addEventListener("click", () => {
    validetion()
})

email1.addEventListener('keyup', (e) =>{
    if(e.key === "Enter"){
        if(email1.value == ""){
            validetion()
            closetimeOut("object")
        }else{
            password1.focus()
        }
    }
})
password1.addEventListener('keyup', (e) =>{
    if(e.key === "Enter"){
        if(password1.value == ""){
            validetion()
            closetimeOut()
        }else{
            document.getElementById('submit').click()
        }
    }
})

closetimeOut = (x) => {
    document.getElementById("error_close").addEventListener("click", even => {
        if(typeof even.target == x){
            window.setTimeout(() =>{
                let error_ph = even.target.parentElement.parentNode
                error_ph.style.display = "none"
                window.location.reload()
            })
        }else{
            let error_ph = even.target.parentElement.parentNode
            error_ph.style.display = "none"
        }
    })
}
// document.getElementById("error_close").addEventListener("click", even => {
//     let error_ph = even.target.parentElement.parentNode
//     error_ph.style.display = "none"
// })