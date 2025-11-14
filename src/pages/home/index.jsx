import { Card } from '../../components';
import React from 'react'

const Home = ({arr,getData}) => {
  return (
    <div className='d-flex gap-3 mt-2'>
     {arr.map((v,i)=> <Card key={i} value={v} getData={getData} />)}
    </div>
  )
}

export default Home;