const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 bg-alternateColor w-full flex flex-row justify-between py-2 px-4 text-primaryColor text-md font-bold">
      <div className="flex gap-4">
        <span className="hover:text-secondaryColor hover:cursor-pointer">
          About
        </span>
        <span className="hover:text-secondaryColor hover:cursor-pointer">
          Terms of Service
        </span>
        <span className="hover:text-secondaryColor hover:cursor-pointer">
          Privacy Policy
        </span>
        <span className="hover:text-secondaryColor hover:cursor-pointer">
          Cookie Usage
        </span>
      </div>
      <div>
        <span>&copy; Dodobey - 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
