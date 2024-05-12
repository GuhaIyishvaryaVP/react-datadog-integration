import { Fragment, useEffect } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <header>
        <nav className="navbar bg-body-tertiary">
          <div className="container">
            <span className="navbar-brand mb-0 h1">Task</span>
            <ul className="navbar-nav ms-auto d-flex flex-row gap-3 fw-bold">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/monitor">
                  Monitor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/metrics">
                  Metrics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/webhooks">
                  WebHooks
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="container mt-2">
        <Outlet />
      </main>
    </Fragment>
  );
}

export default App;
