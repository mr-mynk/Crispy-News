import React,{useEffect} from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  useEffect(()=>{
  },[location])
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{position:"fixed", top:0,width:'100%',zIndex:3,}}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">CrispyNews</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className={`nav-link fs-4 ${location.pathname==='/business'?'active':''}`} to="/business">Business</Link></li>
              <li className="nav-item"><Link className={`nav-link fs-4 ${location.pathname==='/entertainment'?'active':''}`} to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className={`nav-link fs-4 ${location.pathname==='/health'?'active':''}`} to="/health">Health</Link></li>
              <li className="nav-item"><Link className={`nav-link fs-4 ${location.pathname==='/science'?'active':''}`} to="/science">Science</Link></li>
              <li className="nav-item"><Link className={`nav-link fs-4 ${location.pathname==='/sports'?'active':''}`} to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className={`nav-link fs-4 ${location.pathname==='/technology'?'active':''}`} to="/technology">Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
