import React,{Component} from 'react';

class Nav extends Component{
    render(){
        return(
        <nav id="navbar" class="nav shadow">

            <ul>
                <li id="brand"> 
                    <img src="./assets/imgs/00-BS_Logo.gif" className="f-l-s" draggable="false" alt />
                    BookStation
                </li>
                <li className=" in ">
                    <a className="active menu-link f-l-h" href="Home">Home</a>
                    <a className="menu-link f-l-h" href="MyBooks">My Books</a>
                    <a className="menu-link f-l-h" href="Transactions">Transactions</a>
                </li>
                <li id="search">
                    <input type="search" placeholder="Search for a book!" autoComplete="off" />
                    <div className="dropDown" />
                </li>
                <hr className="in" style={{height: '4vh'}} size={40} />
                <li className="in">
                    <div id="notification" className="dropIcon-cont">
                    <i className="fas fa-bell dropIcon" />
                    <div className="dropDown ">
                        <div className="dropContain shadow" />
                    </div> 
                    </div>
                </li>
                <li className="in">
                    <div id="trans" className="dropIcon-cont">
                    <i className="fas fa-exchange-alt dropIcon" />
                    <div className="dropDown ">
                        <div className="dropContain shadow" />
                    </div>
                    </div>
                </li>
                <li className="in">
                    <div id="people" className="dropIcon-cont">
                    <i className="fas fa-users dropIcon" />
                    <div className="dropDown ">
                        <div className="dropContain shadow" />
                    </div>
                    </div>
                </li>
                <li className="in dropIcon-cont" style={{fontSize: '1.4rem', fontWeight: 500}}>
                    <h1 id="username" className="dropIcon" />
                    <div className="dropDown ">
                    <div className="dropContain shadow" />
                    </div>
                    <a href="#" style={{margin: '1vw'}} onclick="firebase.auth().signOut();window.location.reload()"><bold style={{fontSize: '0.7rem'}}>Log out</bold></a>
                </li>
                <li id="sign" className="out">
                    <button className="shadow btn log-btn" onmouseover="on=true" onmouseout="on=false" onclick="pop('in')">LOG IN</button>
                    <button className="shadow success btn sign-btn" onmouseover="on=true" onmouseout="on=false" onclick="pop('up')">SIGN UP</button>
                </li>
                <div id="lang"><img className="out btn shadow f-l-s" src="./assets/imgs/00-Language.png" alt /></div>
                </ul>
            </nav>
        )
    }
}
export default Nav;