import Navcss from './Navigation.module.css';
function Navigation(props){
    return(
        <div className={Navcss.logo}>
            <nav className={Navcss.navbar}>
                
                <ul className={Navcss.elem}> 
                    <li className={Navcss.list}>User</li>
                    <li className={Navcss.list}>Admin</li>
                    <button onClick={props.clickEvent} className={Navcss.list}>Logout</button>
                </ul> 
           </nav>
       </div>
    );
}

export default Navigation;