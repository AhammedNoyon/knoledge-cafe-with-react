// import profile from "../../assets/images/profile";
const Header = () => {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center pt-4">
          <div className="">
            <h3 className="text-2xl font-bold">Knowledge Cafe</h3>
          </div>
          <div className="border-2 rounded-full p-4 w-fit">
            {/* <a href=""><img src={profile} alt="" /></a> */}
            <h3>img</h3>
          </div>
        </nav>
        <div className="border-b my-4"></div>
      </header>
    </>
  );
};

export default Header;
