import React from "react";
import { Container } from "../../helpers";

const Header = () => {
  return (
    <div className=" w-full bg-DarkPurple/400">
      <Container className="z-50 py-4">
        <a className="body-3 font-bold uppercase text-Teal/500" href="#">
          Virtual Friends
        </a>
      </Container>
    </div>
  );
};

export default Header;
