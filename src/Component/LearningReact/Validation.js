
class Validate {

    createSession = (username)=>{
        sessionStorage.setItem("username",username)
    }

    removeSession = () => {
        sessionStorage.removeItem("username")
    }

    getSession = () => {
        let user = sessionStorage.getItem("username")
        if(user === null)return false
        return true
    }
}

export default new Validate()