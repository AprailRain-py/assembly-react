import React from "react";

const navigation = (props) => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <ul>
            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  {props.userName}
                </span>
                <img
                  className="img-profile rounded-circle"
                  src={props.imgSrc}
                  alt={props.altText}
                ></img>
              </a>
            </li>
            <li>
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                <button
                  className="btn btn-circle"
                  type="button"
                  onClick={props.logoutControl}
                ></button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default navigation;
