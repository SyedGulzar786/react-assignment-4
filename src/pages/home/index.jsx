import { Card, Input } from '../../components';
import React from 'react'

const Home = ({ arr, getData }) => {
  return (
    <div className='mt-3'>
    <label htmlFor="home">home<Input onChange={(e)=>console.log(e.target.value)} /></label>
      <div className='d-flex gap-3 mt-2'>
        {arr.map((v, i) => <Card key={i} value={v} getData={getData} />)}
      </div>
    </div>
  )
}

export default Home;