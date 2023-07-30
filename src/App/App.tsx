/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout/Layout';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import Cocktail from '../components/Cocktail/Cocktail';
import AboutUs from '../components/AboutUs/AboutUs';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cocktail" element={<Cocktail />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
