import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import './Home.scss';
function Home() {
  const [dataUser, setDataUser] = useState([]);
  const [dataCf, setDataCf] = useState([]);
  const [dataOrder, setDataOrder] = useState([]);
  useEffect(() => {
    //call api
   

    setTimeout(() => {
      const fetchedDataUser = [
        { date: '2024-02-10', users: 20 },
        { date: '2024-02-11', users: 10 },
        { date: '2024-02-12', users: 26 },
        { date: '2024-02-13', users: 40 },
        { date: '2024-02-14', users: 100 }
      ];

      const fetchedDataCf = [
        { date: '2024-02-10', cf: 18 },
        { date: '2024-02-11', cf: 33 },
        { date: '2024-02-12', cf: 22 },
        { date: '2024-02-13', cf: 10 },
        { date: '2024-02-14', cf: 30 }
      ];

      const fetchedOder = [
        { date: '2024-02-10', order: 32 },
        { date: '2024-02-11', order: 86 },
        { date: '2024-02-12', order: 24 },
        { date: '2024-02-13', order: 19 },
        { date: '2024-02-14', order: 1 }
      ];

      setDataOrder(fetchedOder);
      setDataCf(fetchedDataCf);
      setDataUser(fetchedDataUser);
    }, 100);
  }, []);

  return (
    <div className='w-full h-auto flex'>
      {/* start chartUser */}
      <div className='chartUser w-[33.33%]'>
        <ResponsiveContainer width={'100%'} height={300}>
          <LineChart data={dataUser}>
            <XAxis dataKey="date" stroke="white" tick={{ fill: "white" }} />
            <YAxis stroke="white" tick={{ fill: "white" }} />
            <Tooltip contentStyle={{ color: "white", backgroundColor: "black" }} />
            <Line type="linear" dataKey="users" stroke="#8884d8" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
        <div className="footer_chart">
          <p className='text-center'>Chart User</p>
        </div>
      </div>
      {/* end chartUser */}
      {/* start chartCf */}
      <div className='chartCf  w-[33.33%]'>
        <ResponsiveContainer width={'100%'} height={300}>
          <LineChart data={dataCf}>
            <XAxis dataKey="date" stroke="white" tick={{ fill: "white" }} />
            <YAxis stroke="white" tick={{ fill: "white" }} />
            <Tooltip contentStyle={{ color: "white", backgroundColor: "black" }} />
            <Line type="linear" dataKey="cf" stroke="#8884d8" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
        <div className="footer_chart">
          <p className='text-center'>Chart Cooffe</p>
        </div>
      </div>
      {/* end chartCf */}
      {/* start chartOrder */}
      <div className='chartOrder w-[33.33%]'>
        <ResponsiveContainer width={'100%'} height={300}>
          <LineChart data={dataOrder}>
            <XAxis dataKey="date" stroke="white" tick={{ fill: "white" }} />
            <YAxis stroke="white" tick={{ fill: "white" }} />
            <Tooltip contentStyle={{ color: "white", backgroundColor: "black" }} />
            <Line type="linear" dataKey="order" stroke="#8884d8" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
        <div className="footer_chart">
          <p className='text-center'>Chart Order</p>
        </div>
      </div>
      {/* end chartOrder */}
    </div>
  )
}
export default Home;