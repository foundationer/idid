import { LoginProps } from '@/utils/types'
import Header from './Header'

import EmailOTP from './auth/EmailOTP';

const Login = ({ token, setToken }: LoginProps) => {
  return (
    <div className="login-page">
      <Header />
      <div className="login-method-grid">
      
      
        <EmailOTP token={token} setToken={setToken} />      
  		
      </div>
    </div>
  )
}

export default Login
