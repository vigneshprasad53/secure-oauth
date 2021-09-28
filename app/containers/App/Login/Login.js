import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useGoogleAuth } from "../../../utils/googleOAuth";
import LoginButton from '../../../components/LoginButton';
import LogoutButton from '../../../components/LogoutButton';

export const Login = (props) => {

    const { isSignedIn } = useGoogleAuth();
    return (
        <div>
            {!isSignedIn && <LoginButton />}
            {isSignedIn && <LogoutButton />}
        </div>
    )
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
