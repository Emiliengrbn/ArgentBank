import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useRef, useState } from 'react'
import { fetchAuthToken } from '../fetchAuthToken'

function SignIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

        const token = useSelector(state => state.Login.token);
    const [errors, setErrors] = useState({
        username: '',
        password: '',
      });

    
    const usernameRef = useRef("")
    const passwordRef = useRef("")


    /**
     * 
     * @returns {Object} username and password error
     */
    const formVerification = () => {
        let newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

        if(!usernameRef.current.value) {
            newErrors.username = 'Le nom d\'utilisateur est requis'
        } else if (!emailRegex.test(usernameRef.current.value)) {
            newErrors.username = 'Le nom d\'utilisateur est invalide';
        }

        if(!passwordRef.current.value) {
            newErrors.password = 'Le mot de passe est requis'
        } else if(!passwordRegex.test(passwordRef.current.value)) {
            newErrors.password = 'Le mot de passe est invalide'
        }
        return newErrors
    }

  /**
   * @description Add infos in redux store
   * @param {Event} e 
   * @returns 
   */
  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(fetchAuthToken(usernameRef.current.value, passwordRef.current.value, navigate));
      const validationErrors = formVerification()

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        setErrors({
            username: '',
            email: '',
        });
        dispatch({
            type: "Login/login",
            payload: token,
        })
      }
  }

    return(
        <main className='sign-in-main bg-dark-blue'>
            <section className="sign-in-content">  
              <FontAwesomeIcon icon={faCircleUser} />
              <h1 className="sign-in-title">Sign In</h1>

              <form action="">
                <div className="input-container">
                    <label htmlFor="usename" className='bold'>Usename</label>
                    <input type="text" className="form-username" id='username' name='username' ref={usernameRef} />
                    {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                </div>
                <div className="input-container">
                    <label htmlFor="password" className='bold'>Password</label>
                    <input type="password" className="form-password" id='password' name='password' ref={passwordRef} />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
                <div className=" checkbox-container">
                    <input type="checkbox" name="Remember me" id="remember" className='form-checkbox' />
                    <label htmlFor="remember">Remember me</label>
                </div>
                 <button type="submit" onClick={handleSubmit} className='form-button'>Sign In</button>
              </form>
            </section>
        </main>

    )
}

export default SignIn