document.getElementById('submit').addEventListener("click", even => {
    let email = document.getElementById("email_put").value
    let password = document.getElementById("password_put").value
    if(email === "" || password === ""){
        document.getElementById("error_pop").style.display = "flex"
    }else{
        if(email !== "sharif@gmail.com"){
            document.getElementById("error_img").src = ".././img/emailerror.png"
            document.getElementById("error_text").innerHTML = "Please Chack You'r Email <br> invalid Email"
            document.getElementById("error_pop").style.display = "flex"
        }else if(password !== "1234"){
            document.getElementById("error_img").src = ".././img/passerror.png"
            document.getElementById("error_text").innerHTML = "Please Chack You'r Password <br> invalid Email"
            document.getElementById("error_pop").style.display = "flex"
        }else{
            email = ""
            password = ""
            window.location.href = "./banking.html"
        }
    }
})
document.getElementById("error_close").addEventListener("click", even => {
    let error_ph = even.target.parentElement.parentNode
    error_ph.style.display = "none"
})
