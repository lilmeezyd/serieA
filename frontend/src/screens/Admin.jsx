import { Button, Spinner } from "react-bootstrap"
import { useState } from "react"
import { useFetchTop100Mutation,
  useFetchTop250Mutation, useFetchTop500Mutation,
  useGetTop100Query, useGetTop250Query, useGetTop500Query,
  useLoadTop100Mutation
 } from "../slices/managerApiSlice"

const Admin = () => {
  const [ managers, setManagers ] = useState(100)
  const [ fetchTop100, {isLoading: is100 }] = useFetchTop100Mutation()
  const [ fetchTop250, {isLoading: is250 }] = useFetchTop250Mutation()
  const [ fetchTop500, {isLoading: is500 }] = useFetchTop500Mutation()
  const [ loadTop100] = useLoadTop100Mutation()
  const { data: data100, isLoading: isGet100} = useGetTop100Query()
  const { data: data250, isLoading: isGet250} = useGetTop250Query()
  const { data: data500, isLoading: isGet500} = useGetTop500Query()
  console.log(data100)
  console.log(data250)
  console.log(data500)

  const onChange = e => {
    console.log(managers)
    console.log(e.target.value)
    setManagers(+e.target.value)
  }

  const fetchAndSaveManagers = async (e) => {
    console.log()
    e.preventDefault()
    if(managers === 100) {
      const res = await fetchTop100().unwrap()
      console.log(res)
    }
    if(managers === 250) {
      const res = await fetchTop250().unwrap()
      console.log(res)
    }
    if(managers === 500) {
      const res = await fetchTop500().unwrap()
      console.log(res)
    }

  }
  return (
    <>
    <div className="admin-options mt-2">
      <div className="mr-2">
        <label htmlFor="managers">Number of managers:</label>
      </div>
    <div className="form-group ml-2">
      <select
      onChange={onChange}
       className="form-control" name="managers" id="managers">
        <option value={100}>100</option>
        <option value={250}>250</option>
        <option value={500}>500</option>
      </select>
    </div>
    </div>
    
    <div className='admin-panel'>
      <div className='admin-panel-child'>
        <div>
          <h5 className='admin-h5'>Load Players</h5>
          <div className='admin-panel-line'></div>
          <div className="admin-actual-data mt-2 p-1">
            <div>
              <Button>Load</Button>
            </div>
            <div>
              Players
            </div>
          </div>
        </div>
      </div>
      <div className='admin-panel-child'>
        <div>
          <h5 className='admin-h5'>Load Managers</h5>
          <div className='admin-panel-line'></div>
          <div className="admin-actual-data mt-2 p-1">
            <div>
              <Button onClick={fetchAndSaveManagers}>{(is100 || is250 || is500) ? 
              <Spinner /> : 'Load'}</Button>
            </div>
            <div className="admin-wrapper">
              {data100?.slice(0, 10)?.map(data => 
                <div className="manager" key={data.user_id}>
                   <div>{data?.rank}</div> 
                   <div>{data?.name}</div>
                   <div>{data?.total_points}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='admin-panel-child'>
        <div>
          <h5 className='admin-h5'>Load Ownership data</h5>
          <div className='admin-panel-line'></div>
          <div className="admin-actual-data mt-2 p-1">
            <div>
              <Button>Load</Button>
            </div>
            <div>
              Players
            </div>
          </div>
        </div>
      </div>
      <div className='admin-panel-child'>
        <div>
          <h5 className='admin-h5'>Load Captaincy data</h5>
          <div className='admin-panel-line'></div>
          <div className="admin-actual-data mt-2 p-1">
            <div>
              <Button>Load</Button>
            </div>
            <div>
              Players
            </div>
          </div>
        </div>
      </div>
      <div className='admin-panel-child'>
        <div>
          <h5 className='admin-h5'>Load Vice captaincy data</h5>
          <div className='admin-panel-line'></div>
          <div className="admin-actual-data mt-2 p-1">
            <div>
              <Button>Load</Button>
            </div>
            <div>
              Players
            </div>
          </div>
        </div>
      </div>
      <div className='admin-panel-child'>
        <div>
          <h5 className='admin-h5' >Load EO data</h5>
          <div className='admin-panel-line'></div>
          <div className="admin-actual-data mt-2 p-1">
            <div>
              <Button>Load</Button>
            </div>
            <div>
              Players
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Admin