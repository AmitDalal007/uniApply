import React from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid bg-primary">
                <div className="px-5">
                    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 ">
                        <div className='d-flex logowi'>
                            <a href="/" className="d-flex align-items-center mb-2 text-dark text-decoration-none">
                                <img src={logo} alt="" />
                            </a>

                            <select className="mx-2 mb-2 navDrop" aria-label="Default select example">
                                <option selected>Select City</option>
                                <option value="1">Mumbai</option>
                                <option value="2">Delhi</option>
                                <option value="3">Haryana</option>
                            </select>
                        </div>

                        <ul className="nav col-8 col-md-auto mb-2 d-flex justify-content-center mb-md-0">
                            <li><a href="/" className="nav-link px-1 link-light fw-bol">Explore Schools</a></li>
                            <li><a href="/" className="nav-link px-1 link-light fw-bol">Discover Localities</a></li>
                            <li><a href="/" className="nav-link px-1 link-light fw-bol">Admission Tracker</a></li>
                            <li><a href="/" className="nav-link px-1 link-light fw-bol">Compare Schools</a></li>
                            <li><a href="/" className="nav-link px-1 link-light fw-bol">Resources <i className="bi bi-chevron-down"></i></a></li>
                        </ul>

                        <div className="col-md-3 text-end">
                            <button type="button" className="btn btn-primary fw-bol mx-1"><i className="bi bi-cart-fill"></i>Cart</button>
                            <button type="button" className="btn btn-outline-light rounded-pill fw-bol mx-1">Sign In</button>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Navbar