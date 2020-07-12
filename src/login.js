console.log("in login.js")

function LoginPrompt(){
    console.log("Login Started")
    loginPrompt.addEventListener('submit', e=> {
        e.preventDefault()
        let username = document.getElementById('username').value
        findUser(username)
        document.getElementById('loginPrompt').hidden=true;
        console.log(username)
    })
}

function findUser(username){
    list = new FetchCalls
    list.getUserList()
}