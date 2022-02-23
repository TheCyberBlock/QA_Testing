import React from 'react';
import { withRouter } from "react-router-dom";
import { userId, admin } from '../isAuth.js';


class NameForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const search = event.target[0].value;
    this.props.history.push(`/search/${search}`);
    window.location.reload();
  }

  handleLogOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("profile");
    alert("Logged Out!!");
    this.props.history.push(`/`);
    window.location.reload();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <a className="navbar-brand" href="/">PRO GAMERS</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/games" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Games
                </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/games">All Games</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/games/category/RPG">RPG</a>
                <a className="dropdown-item" href="/games/category/Fantasy">Fantasy</a>
                <a className="dropdown-item" href="/games/category/FPS">FPS</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/softwares" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Other Softwares
                  </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/softwares">All Softwares</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/softwares/category/Internet">Internet</a>
                <a className="dropdown-item" href="/softwares/category/Productivity">Productivity</a>
                <a className="dropdown-item" href="/softwares/category/Communication">Communication</a>
              </div>
            </li>
            {

              userId ? (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/auth" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/account">View Account</a>
                    <a className="dropdown-item" href="/account/update">Update Account</a>
                    <a className="dropdown-item" href="/support">Contact Us</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href=" " onClick={this.handleLogOut}>Log Out</a>
                  </div>
                </li>
              ) : (
                <p></p>
              )
            }

            {
              userId ? (
                <li className="nav-item">
                  <a className="nav-link" href={`/cart/${userId}`}>Cart</a>
                </li>
              ) : (
                <a href="/auth" className="nav-link">Log In</a>
              )
            }

            {
              admin ? (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Admin
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/admin/users">View Users</a>
                    <a className="dropdown-item" href="/admin/products">View Products</a>
                    <a className="dropdown-item" href="/admin/product/insert">Insert Product</a>
                  </div>
                </li>
              ) : ( <li></li>)
            }

          </ul>

          <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">


            <input
              type="text"
              name="username"
              ref={node => (this.inputNode = node)}
              className="form-control mr-sm-2" placeholder="Search" aria-label="Search"
            />
            <button className="btn btn-outline-success2 my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default withRouter(NameForm);