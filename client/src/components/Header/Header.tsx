import { useState } from "react";
import NoImage from "../../assets/noImage.png";
import Logo from "../../assets/logox540.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="fixed top-0 left-0 bg-alternateColor w-full flex flex-row justify-around py-2 px-8 text-primaryColor text-md font-bold">
      <img
        src={Logo}
        alt=""
        className="w-8 object-contain"
      />
      <div className="relative inline-block">
        <button onClick={handleDropdown}>
          <img
            src={NoImage}
            alt="Profile picture object-contain"
            className="rounded-full w-8 hover:scale-110"
          />
        </button>
        {isOpen && (
          <div className="absolute right-0 z-10  w-24 origin-top-right rounded-md bg-secondAlternateColor shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <ul>
              <li className="block px-4 py-2 text-sm text-right hover:bg-secondaryColor">
                Profile
              </li>
              <li className="block px-4 py-2 text-sm text-right hover:bg-secondaryColor">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
