import { useReduxSelctor } from "../../hooks/useRedux";
import AuthorizationModal from "./authorization-modals";
import TrackModal from "./track-modal";

const Modals = () => {
  const { modalAuthorizationVisiblty, trackModalVisiblty } = useReduxSelctor(
    (state) => state.modalSlice
  );
  return (
    <>
      {modalAuthorizationVisiblty && <AuthorizationModal />}
      {trackModalVisiblty && <TrackModal />}
    </>
  );
};

export default Modals;
