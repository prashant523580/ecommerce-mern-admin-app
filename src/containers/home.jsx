import React from 'react';
import Sidenav from '../components/SideNav';
import "./home.css"

const Home = () => {

    return(
        <>
        <div className="page-container fade-in">
            <Sidenav/>
            <div className="main-container">
            <div className="page-header">
                        <h1> home page </h1>
                        <div className="buttons">
                            {/* <button className="btn" onClick={() => setShowModal(true)}>create page</button> */}
                        </div>
                    </div>
            </div>

        </div>
        </>
    )
}

export default Home;