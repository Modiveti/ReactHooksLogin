import React from 'react';
import './UserProfile.scss';

const UserProfile = () => {
  return (
    <div className=" sign_in_page">
      <div className="dropdown">
        <a
          className=" dropdown-toggle"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Courses
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-white dropdown-toggle float-right p-0"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          John@gmail.com
          <span className="profile_logo">G</span>
        </button>
        <div
          className="dropdown-menu drop_down_content text-center"
          aria-labelledby="dropdownMenuButton"
        >
          <div>
            <div>
              <span className="profile_logo">G</span>
              <p>John</p>
              <p>John@gmail.com</p>
              <button
                type="button"
                className="btn btn-outline-dark rounded-pill mb-3"
              >
                Manage Your Google Account
              </button>
            </div>
          </div>
          <div className="dropdown-divider m-0"></div>
          <a className="dropdown-item py-3" href="#">
            Add Another Account
          </a>
          <div className="dropdown-divider m-0"></div>
          <a className="dropdown-item " href="#">
            <button className="btn btn-primary rounded-pill w-100">
              Sign Out
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
