function validateForm(event){
    event.preventDefault();
    let name=document.getElementById("text").value.trim()
    let email=document.getElementById("email").value.trim()
    let textarea=document.getElementById("textarea").value.trim()
    let message=document.getElementById("message")

    if(name==="" || email==="" || textarea===""){
        message.textContent="please enter all fields"
        message.style.color="red"
        clearMessageAfterDelay() 
        return false
    }
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]{2,}$/;
    if(!emailPattern.test(email)){
        message.textContent="please enter valid email";
        message.style.color="red"
        clearMessageAfterDelay() 
        return false
    }
    else if(email.endsWith("@gmail.com")){
        message.textContent="valid mail"
    }
        message.textContent="Form submitted successfully"
        message.style.color="green"
        clearMessageAfterDelay() 
        return false
    }
    function clearMessageAfterDelay() {
        setTimeout(() => {
          document.getElementById("message").textContent = "";
        }, 10000); 
      }