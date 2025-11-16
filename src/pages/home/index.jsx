import { Card, Input, BasicCard, AppLayout } from '../../components';
import Dashboarder from '../dashboard/Dashboarder.jsx';

const Home = ({ arr, getData }) => {
  return (
    <Dashboarder>
      <div className='mt-3'>
        <label htmlFor="home">home<Input onChange={(e) => console.log(e.target.value)} /></label>
        <div className='d-flex gap-3 mt-2'>
          {arr.map((v, i) => <Card key={i} value={v} getData={getData} />)}
        </div>
        <div className='mt-3 BasicCard'>
          <BasicCard />
          {arr.map((v, i) => <BasicCard key={i} value={v} getData={getData} />)}
        </div>
      </div>
    </Dashboarder>
  )
}

export default Home;