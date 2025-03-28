import { Outlet } from "react-router-dom";
import ProfileHeader from "./profile-header";

const ProfileComponent = () => {
  return (
    <section className="flex item-start gap-5 w-[90%] m-auto py-5">
      <ProfileHeader />
      <div className="w-full">
        <Outlet />
      </div>
    </section>
  );
};

export default ProfileComponent;
