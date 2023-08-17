function validetion(){
    let email = document.getElementById("email_put").value
    let password = document.getElementById("password_put").value
    if(email === "" || password === ""){
        document.getElementById("error_pop").style.display = "flex"
        closetimeOut("object")
    }else{
        if(email !== "sharif@gmail.com"){
            document.getElementById("error_img").src = ".././img/emailerror.png"
            document.getElementById("error_text").innerHTML = "Please Chack You'r Email <br> invalid Email"
            document.getElementById("error_pop").style.display = "flex"
            closetimeOut()
        }else if(password !== "1234"){
            document.getElementById("error_img").src = ".././img/passerror.png"
            document.getElementById("error_text").innerHTML = "Please Chack You'r Password <br> invalid Email"
            document.getElementById("error_pop").style.display = "flex"
            closetimeOut("object")
        }else{
            window.location.href = "./banking.html"
        }
    }
}
document.getElementById('submit').addEventListener("click", () => {
    validetion()
})
function closetimeOut(x){
    document.getElementById("error_close").addEventListener("click", even => {
        if(typeof even.target === x){
            let error_ph = even.target.parentElement.parentNode
            error_ph.style.display = "none"
            window.setTimeout(()=>{
                window.location.reload()
            },)
        }else{
            let error_ph = even.target.parentElement.parentNode
            error_ph.style.display = "none"
        }
    })
}