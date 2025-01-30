import { useSelector } from 'react-redux'
const HomeScreen = () => {

  const { userInfo } = useSelector((state) => state.auth)
  return (
    <div>
      This is home
    </div>
  )
}

export default HomeScreen