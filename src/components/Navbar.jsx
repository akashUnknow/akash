import logo from '../assets/logo.png';

const Navbar = () => {

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='flex justify-between items-center w-full px-6 py-3 bg-[#1A0B2E] fixed top-0 z-50'>
      <div className='w-16 h-16 flex items-center'>
        <img src={logo} alt="Logo" className='w-full h-full object-contain invert' />
      </div>

      <div className="mr-6">
        <ul className="flex space-x-16">
          <li
            className="text-white hover:text-[#7127BA] transition cursor-pointer"
            onClick={() => handleScroll("home")}
          >
            Home
          </li>

          <li
            className="text-white hover:text-[#7127BA] transition cursor-pointer"
            onClick={() => handleScroll("about")}
          >
            About
          </li>

          <li
            className="text-white hover:text-[#7127BA] transition cursor-pointer"
            onClick={() => handleScroll("contact")}
          >
            contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
