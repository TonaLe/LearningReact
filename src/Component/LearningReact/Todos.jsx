import React,{Component}  from 'react'
import {BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom'
import '../../bootstrap.css'
import '../LearningReact/footer.css'
import Validation from '../LearningReact/Validation.js'

export default class Login extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="Login">
            <Router>
                <>
                <Header/>
                <br/>
                    <Switch>
                        <Route path="/login" exact component={LoginPage}></Route>
                        <Route path="/login" component={LoginPage}></Route>
                        <Route path="/welcomePage/:name" component={WelcomePage}></Route>
                        <Route path="/TodoList" component={TodoList}/>
                        <Route path="/logout" component={Logout}></Route>
                    </Switch>
                <Footer/>
                </> 
            </Router>
            </div>
        )
    }
}

export class LoginPage extends Component{

    constructor(props){
        super(props)

        this.state = {
            username : '',
            password : '',
            loginSuccess: false,
            loginFail: false
        }

        this.authenticate = this.authenticate.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    render(){
        return (
            <div className="LoginPage">
                {/* {this.state.loginSuccess && <div>Success</div>} */}
                {this.state.loginFail && <div>Fail</div> }

                Username: <input type="text" onChange={this.handleChange} name="username"/>
                Password: <input type="password" onChange={this.handleChange} name="password"/>
                <button onClick={this.authenticate}> Login </button>
            </div>
        )
    }

    authenticate() {
        if(this.state.username === "admin" && this.state.password === "admin"){
            this.setState({
                loginFail : false,
                loginSuccess : true
            })
            Validation.createSession(this.state.username)
            this.props.history.push(`/welcomePage/${this.state.username}`)
            // this.props.history.push("/TodoList")
        }
        else this.setState({
            loginFail : true,
            loginSuccess : false
        })
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
        
    }
}

class Logout extends Component{
    render(){
        return(
            <div className="Loggout">
                <h1 className="text-warning">Log out</h1>
            </div>
        )
    }
}

class WelcomePage extends Component {
    render(){
        return(
            <h1>Welcome {this.props.match.params.name}. Click <Link to="/TodoList">here</Link></h1>
        )
    }
}

class TodoList extends Component{
    constructor(props){
        super(props)

        this.state = {
            TodoList : [
                {id:1, description:"Learn Java", targetDate:false, completeDate : new Date()},
                {id:2, description:"Learn JS", targetDate:false, completeDate : new Date()},
                {id:3, description:"Learn Python", targetDate:false, completeDate : new Date()}
            ]
        }
    }

    render(){
        return (
            <>
        
            <div className="TodoList">
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>targetDate</th>
                            <th>completeDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.TodoList.map (todo => (
                                <tr key={todo}>
                                    <td key={todo.id}>{todo.id}</td>
                                    <td key={todo.description}>{todo.description}</td>
                                    <td key={todo.targetDate.toString()}>{todo.targetDate.toString()}</td>
                                    <td key={todo.completeDate.toString()}>{todo.completeDate.toString()}</td>
                                </tr>
                            ))      
                        }
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}

class Header extends Component{ 
    render(){
        const loggedIn = Validation.getSession()
        console.log(loggedIn)
        return(
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <ul className="navbar-nav">
                                <li className="navbar-brand"><Link className="nav-link" to="/">Logo</Link></li>
                                {loggedIn && <li><Link className="nav-link" to="/welcomePage/:name">Home</Link></li>}
                                {loggedIn && <li><Link className="nav-link" to="/TodoList">TodoList</Link></li>}
                            </ul>
                        
                        <ul className="navbar-nav justify-content-end navbar-collapse">
                            {!loggedIn && <li><Link className="nav-link" to="/login">Login</Link></li> }
                            {loggedIn && <li><Link className="nav-link" to="/logout" onClick={Validation.removeSession}>Logout</Link></li>}
                        </ul>
                    </nav>
                </header>
        )
    }
}

class Footer extends Component{
    render(){
        return(
            <footer className="footer"></footer>
        )
    }
}