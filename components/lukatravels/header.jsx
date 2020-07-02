import { LukatravelsIcon } from "./Icon";

const Header = () => {
  return (
    <header>
      <LukatravelsIcon />
      <style jsx>{`
        header {
          display: flex;
          flex-direction: row;
          justify-content: center;
          height: 120px;
          padding: 20px;
          width: 100%;
        }
      `}</style>
    </header>
  );
};

export default Header;
