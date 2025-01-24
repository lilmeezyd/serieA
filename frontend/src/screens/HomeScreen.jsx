import LoginScreen from "./LoginScreen"
import { useSelector } from 'react-redux'
const HomeScreen = () => {

  const { userInfo } = useSelector((state) => state.auth)
  return (
    <>
    {userInfo ? 
    <div className="py-2" style={{fontWeight: 600}}>You&#39;re logged in as, {userInfo?.full_name}</div> : <LoginScreen />}
    <div>
      Moini, you're the admin!
    </div>
    </>
  )
}

export default HomeScreen