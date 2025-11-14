import { Card, Input } from '../../components';
import React from 'react'

const Home = ({ arr, getData }) => {
  return (
    <div className='mt-3'>
      <Input onChange={(e)=>console.log(e.target.value)} />
      <div className='d-flex gap-3 mt-2'>
        {arr.map((v, i) => <Card key={i} value={v} getData={getData} />)}
      </div>
    </div>
  )
}

export default Home;