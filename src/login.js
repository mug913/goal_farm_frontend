console.log("in login.js")

    function LoginPrompt(){
        console.log("Login Started")
        loginPrompt.addEventListener('submit', e=> {
            e.preventDefault()
            let username = document.getElementById('username').value
            findUser(username)
            document.getElementById('loginPrompt').hidden=true;
        })
    }

    function findUser(username){
        fetcher = new FetchCalls
        fetcher.getUserList()
        .then(json => {
            json.forEach(e => {
                (e.username == username) ? logIn(e.id) : console.log('not found')
            })
        })
    }

    function logIn(id){
        let user
        fetcher = new FetchCalls
        fetcher.logInUser(id)
        .then(json => {
        user = new User(json)
        
        })
        console.log(user)
        
    }   
