import React from 'react'
import './cat.css'


const Categories = () => {
    return (
        <>
            <div className='altnav'>
                <h1>Posts(368)</h1>
                <button className='btn btn-light'>Filter</button>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">

                <div className="container-fluid">

                    <button
                        data-mdb-collapse-init
                        className="navbar-toggler"
                        type="button"
                        data-mdb-target="/navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse align-items-center justify-content-center" id="navbarSupportedContent">



                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Projects</a>
                            </li>
                        </ul>

                    </div>



                    <div className="d-flex align-items-center">


                        <button type="button" class="btn btn-light" data-mdb-ripple-init data-mdb-ripple-color="dark">Light</button>

                        <button type="button" class="btn btn-primary ml-3" data-mdb-ripple-init>Button</button>



                    </div>

                </div>

            </nav>
        </>

    )
}

export default Categories
