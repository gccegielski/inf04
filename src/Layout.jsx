import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Katalog aplikacji</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Katalog</Link>
            <Link className="nav-link" to="/dodaj">Dodaj</Link>
          </div>
        </div>
      </nav>
      <main className="container">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
