import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
    const initialState = { email: '', password: '' }
    const [data, setData] = useState(initialState)
    const { email, password } = data
    const [login, isLoading] = useLoginMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { userInfo } = useSelector((state) => state.auth)

    useEffect(() => {
        if(userInfo) {
          navigate('/')
        }
      }, [navigate, userInfo])

    const onSubmit = async (e) => {
        e.preventDefault()
        const res = await login({ email, password }).unwrap()
        dispatch(setCredentials({ ...res }))
        navigate('/')
        console.log(res)
        setData(initialState)
    }

    const onChange = (e) => {
        setData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }
    return (
        <div className='login-form'>
            <div className='login'>Login into SerieA villa</div>
            <form onSubmit={onSubmit}>
                <div className='form-group form-group-login'>
                    <label htmlFor="Email">Email</label>
                    <input className='form-control' onChange={onChange} placeholder='Enter Email' id='email' name='email' value={email} type="email" />
                </div>
                <div className='form-group form-group-login'>
                    <label htmlFor="Password">Password</label>
                    <input className='form-control' onChange={onChange} placeholder='Enter Password' id='password' name='password' value={password} type="password" />
                </div>
                <div className='form-group form-group-login'>
                    <button className='btn btn-warning form-control'>Login</button>
                </div>
            </form>
            <p className='forgot'><Link to="/request-password-reset">Forgot Password </Link> </p>
        </div>
    )
}

export default Login