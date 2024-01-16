import Navigation from "./Navigation";
import classes from './MainHeader.module.css'
function MainHeader(props){
    return(
            <div className={classes.main}>
               <h3>LOGIN FORM</h3>
               <Navigation  clickEvent={props.clickLogout}/> 
            </div>
    )
}

export default MainHeader;