import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import {BrowserRouter as Router, Link, useHistory} from 'react-router-dom'
const Header = ({backButton}) => {
    const history = useHistory()
    return (
        <div className="header">
            <IconButton>
                {backButton ? (
                    <IconButton onClick={ () => { history.replace(backButton) } }><ArrowBackIcon fontSize="large" className="header__icon"></ArrowBackIcon></IconButton>
                ): (
                    <PersonIcon className="header__icon" fontSize="large" />
                    )
                }
                
            </IconButton>
            <Link to="/"><img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="Tinder-Clone Logo" /></Link>
            <Link to='/chat'>
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header