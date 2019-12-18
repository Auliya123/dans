import React, { Component } from 'react';
// import Navbar from '../layout/Navbar';
import DataPosisi from './dataposisi';


// import './assets/css/Home.css';

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Selamat Datang di Halaman Utama</h1>
                    <DataPosisi />
                </div>
            </div>
        );
    }
}



export default Home;
