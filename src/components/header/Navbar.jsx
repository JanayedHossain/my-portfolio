import resume from '../../assets/resume.pdf'
import logo from '../../assets/logo.png'
const Navbar = () => {
  const navItems = (
    <>
      <li className="hover:text-primary font-semibold">
        <a href="#">Home</a>
      </li>
      <li className="hover:text-primary font-semibold">
        <a href="#about">About</a>
      </li>
      <li className="hover:text-primary font-semibold">
        <a href="#projects">Projects</a>
      </li>
      <li className="hover:text-primary font-semibold">
        <a href="#contact">Contact</a>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-base-100 shadow-sm px-4 sticky top-0 z-[999]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a href='#' className="btn btn-ghost text-xl font-bold">
          <img src={logo} alt="" className='w-12'/>
        </a>
      </div>

      {/* Navbar Center - Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      {/* Navbar End - Resume Download */}
      <div className="navbar-end">
        <a href={resume} download className="btn btn-primary btn-sm">
          Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
