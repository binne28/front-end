import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import React Query
import Head from './component/Header/head';
import Footer from './component/Footer/footer';
import Signin from './component/Signin/Signin';
import Signup from './component/Signup/Signup';
import TrangChu from './feature/pages/TrangChu/trangChu';
import TinTuc from './feature/pages/TinTuc/tinTuc';
import CuaHang from './feature/pages/CuaHang/cuaHang';
import KhuyenMai from './feature/pages/KhuyenMai/khuyenMai';
import DatHang from './feature/pages/DatHang/datHang';
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

function Coffe() {
  return (
    <QueryClientProvider client={queryClient}>

      <div className='body'>
        <Router>
          <Head />
          <Routes>
            <Route path="/" element={<TrangChu />} />
            <Route path="/trang-chu" element={<TrangChu />} />
            <Route path="/tin-tuc" element={<TinTuc />} />
            <Route path="/cua-hang" element={<CuaHang />} />
            <Route path="/khuyen-mai" element={<KhuyenMai />} />
            <Route path="/dat-hang" element={<DatHang />} />
            <Route path="/dang-nhap" element={<Signin />} />
            <Route path="/dang-ky" element={<Signup />} />
          </Routes>
        </Router>

      </div>
      <Footer />
    </QueryClientProvider>
  );
}

export default Coffe;
