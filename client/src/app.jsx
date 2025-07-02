import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import './appStyle.css'

export default function App() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
};