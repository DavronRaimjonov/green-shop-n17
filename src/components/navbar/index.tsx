import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import search from "../../assets/icons/search.svg";
import shop from "../../assets/icons/shop.svg";
import { BellOutlined, LoginOutlined } from "@ant-design/icons";
import { useReduxDispatch, useReduxSelctor } from "../../hooks/useRedux";
import { setModalAuthorizationModalVisiblty } from "../../redux/modalSlice";
import { cookieInfo } from "../../generic/cookies";
import { Badge } from "antd";

const Navbar = () => {
  const dispatch = useReduxDispatch();
  const { pathname } = useLocation();
  const { isAuthorization, getCookie } = cookieInfo();
  const user = getCookie("user");
  const navigate = useNavigate();
  const { data } = useReduxSelctor((state) => state.shopSlice);

  return (
    <header className="w-[90%] m-auto flex items-center justify-between py-5 border-b border-[#a2d1ab]">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <div className="flex items-center gap-5">
        <h3
          onClick={() => navigate("/")}
          className={`cursor-pointer ${pathname === "/" && "text-[#46a358]"}`}
        >
          Home
        </h3>
        <h3
          onClick={() => navigate("/blog")}
          className={`cursor-pointer ${
            pathname === "/blog" && "text-[#46a358]"
          }`}
        >
          Blog
        </h3>
      </div>
      <div className="flex items-center gap-6">
        <img src={search} alt="" />
        <BellOutlined className="text-[25px]" />
        <div
          className="cursor-pointer"
          onClick={() => navigate("/products-shop")}
        >
          <Badge count={data?.length}>
            <img src={shop} alt="" />
          </Badge>
        </div>
        <button
          onClick={() => {
            if (isAuthorization) {
              navigate("/profile");
            } else {
              dispatch(setModalAuthorizationModalVisiblty());
            }
          }}
          className="w-[100px] h-[35px] bg-[#46a358] text-white rounded-md flex items-center gap-2 justify-center"
        >
          {isAuthorization ? (
            user.name
          ) : (
            <>
              <LoginOutlined />
              Login
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
