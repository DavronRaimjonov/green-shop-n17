import { Modal } from "antd";
import Login from "./login";
import { useState } from "react";
import Register from "./register";
import { useReduxDispatch, useReduxSelctor } from "../../../hooks/useRedux";
import { setModalAuthorizationModalVisiblty } from "../../../redux/modalSlice";

const AuthorizationModal = () => {
  const { modalAuthorizationVisiblty } = useReduxSelctor(
    (state) => state.modalSlice
  );
  const dispatch = useReduxDispatch();
  const [active, setActive] = useState(true);
  return (
    <Modal
      open={modalAuthorizationVisiblty}
      onCancel={() => dispatch(setModalAuthorizationModalVisiblty())}
      footer={false}
    >
      <div>
        <div className="flex items-center justify-center gap-7 mt-7 ">
          <h3
            onClick={() => setActive(true)}
            className={`text-[20px] font-medium cursor-pointer ${
              active && "text-[#46A358]"
            }`}
          >
            Login
          </h3>
          <div className="w-[1px] h-[20px] bg-[#000]"></div>
          <h3
            onClick={() => setActive(false)}
            className={`text-[20px] font-medium cursor-pointer ${
              !active && "text-[#46A358]"
            }`}
          >
            Register
          </h3>
        </div>
        {active ? <Login /> : <Register />}
      </div>
    </Modal>
  );
};

export default AuthorizationModal;
