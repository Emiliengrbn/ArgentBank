import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function SignIn() {
    return(
        <main className='sign-in-main bg-dark-blue'>
            <section className="sign-in-content">  
              <FontAwesomeIcon icon={faCircleUser} />
              <h1 className="sign-in-title">Sign In</h1>

              <form action="">
                <div className="input-container">
                    <label htmlFor="usename" className='bold'>Usename</label>
                    <input type="text" className="form-username" id='username' name='username' />
                </div>
                <div className="input-container">
                    <label htmlFor="password" className='bold'>Password</label>
                    <input type="text" className="form-password" id='password' name='password' />
                </div>
                <div className=" checkbox-container">
                    <input type="checkbox" name="Remember me" id="remember" className='form-checkbox' />
                    <label for="remember">Remember me</label>
                </div>
                <Link to="/account" className='form-button'>Sign In</Link>
                 {/* <input type="button" value="Sign In" className='form-button'/> */}
              </form>
            </section>
        </main>

    )
}

export default SignIn