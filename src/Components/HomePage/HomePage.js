import React from 'react';
import classes from './HomePage.module.css';
import Card from '../../UI/Card/Card';
import Image from "../../Image/homepage.png"


function HomePage(props) {
    return(
        <Card className={classes.home}>
            <div className={classes.welcome}>
                  <img src={Image} alt='' />
            </div>
        </Card>
    )
}

export default HomePage;