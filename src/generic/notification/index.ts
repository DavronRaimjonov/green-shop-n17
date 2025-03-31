import { notification } from "antd";

type NotificationApiType =
  | "login"
  | "register"
  | "login_google"
  | 406
  | "send_email"
  | "add_data"
  | "delete_data"
  | "not_coupon"
  | "404_coupon"
  | "coupon"
  | "adress"
  | "details"
  | "order"
  | "like"
  | "dislike";

export const notificationApi = () => {
  const notify = (type: NotificationApiType) => {
    switch (type) {
      case "login":
        return notification.success({ message: "Login succesful" });
      case "register":
        return notification.success({ message: "Register succesful" });
      case "login_google":
        return notification.success({ message: "Login with google succesful" });
      case 406:
        return notification.error({ message: "Email already exsit" });
      case "send_email":
        return notification.success({
          message: "Email successfully added to our daily newsletters.",
        });
      case "add_data":
        return notification.success({
          message: "Added data to cart",
        });
      case "delete_data":
        return notification.success({
          message: "Deleted data to cart",
        });
      case "not_coupon":
        return notification.error({
          message: "Plase enter cuopon",
        });
      case "404_coupon":
        return notification.error({
          message: "Coupon is not defined !",
        });
      case "coupon":
        return notification.success({
          message: "Coupon succses !",
        });
      case "adress":
        return notification.success({
          message: "Edited user adress !",
        });
      case "details":
        return notification.success({
          message: "Edited user details !",
        });
      case "order":
        return notification.success({
          message: "Order deleted !",
        });
      case "like":
        return notification.success({
          message: "Added to like !",
        });
      case "dislike":
        return notification.success({
          message: "Deleted to like !",
        });
      default:
        break;
    }
  };
  return notify;
};
//
