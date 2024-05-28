import React from "react";

const Header = () => {
  return (
    <div className="absolute px-10 w-full py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
      <div className="flex p-4">
        <img
          className="w-10 h-10 rounded-md mx-4"
          src="https://occ-0-2953-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          alt="userLogo"
        ></img>
        <button className="text-white h-10 rounded-md opacity-80 w-16">Sign out</button>
      </div>
    </div>
  );
};

export default Header;
