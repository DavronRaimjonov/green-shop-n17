import { useMutation, useQueryClient } from "react-query";
import { useAxios } from "../../useAxios";
import { useReduxDispatch } from "../../useRedux";
import {
  setModalAuthorizationModalVisiblty,
  setOrderModalVisiblty,
} from "../../../redux/modalSlice";
import { notificationApi } from "../../../generic/notification";
import { signInWithGoogle } from "../../../config";
import { cookieInfo } from "../../../generic/cookies";
import { getCoupon } from "../../../redux/shopSlice";
import { OrderType } from "../../../@types";

export const useLoginMutate = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  const { setCookie } = cookieInfo();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-in", method: "POST", body: data }),
    onSuccess: (data) => {
      const { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      notify("login");
      dispatch(setModalAuthorizationModalVisiblty());
    },
  });
};

export const useRegisterMutate = () => {
  const axios = useAxios();
  const notify = notificationApi();
  const dispatch = useReduxDispatch();
  const { setCookie } = cookieInfo();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-up", method: "POST", body: data }),
    onSuccess: (data) => {
      console.log(data);
      const { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      notify("register");
      dispatch(setModalAuthorizationModalVisiblty());
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useLoginWithGogole = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  const { setCookie } = cookieInfo();

  return useMutation({
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return axios({
        url: "user/sign-in/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },
    onSuccess: (data) => {
      const { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      notify("login_google");
      dispatch(setModalAuthorizationModalVisiblty());
    },
  });
};
export const useRegisterWithGogole = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  const { setCookie } = cookieInfo();
  return useMutation({
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return axios({
        url: "user/sign-up/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },
    onSuccess: (data) => {
      const { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      notify("login_google");
      dispatch(setModalAuthorizationModalVisiblty());
    },
    onError: (error: { status: number }) => {
      if (error.status === 406) {
        notify(406);
      }
    },
  });
};

export const useSendEmail = () => {
  const axios = useAxios();
  const notify = notificationApi();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "features/email-subscribe", method: "POST", body: data }),
    onSuccess: () => {
      notify("send_email");
    },
  });
};

export const useGetCoupon = () => {
  const axios = useAxios();
  const notify = notificationApi();
  const dispatch = useReduxDispatch();
  return useMutation({
    mutationFn: (coupon_code: string) =>
      axios({ url: "features/coupon", params: { coupon_code } }),
    onSuccess: (data) => {
      dispatch(getCoupon(Number(data.data.discount_for)));
      notify("coupon");
    },
    onError: () => {
      notify("404_coupon");
    },
  });
};

export const useMakeOrderList = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  return useMutation({
    mutationFn: (data: object) => {
      return axios({ url: "order/make-order", method: "POST", body: data });
    },
    onSuccess: () => {
      dispatch(setOrderModalVisiblty());
    },
  });
};

export const useEditDetails = () => {
  const axios = useAxios();
  const notify = notificationApi();

  return useMutation({
    mutationFn: (data: object) => {
      return axios({ url: "user/account-details", method: "POST", body: data });
    },
    onSuccess: () => {
      notify("details");
    },
  });
};
export const useEditAdress = () => {
  const axios = useAxios();
  const notify = notificationApi();

  return useMutation({
    mutationFn: (data: object) => {
      return axios({ url: "user/address", method: "POST", body: data });
    },
    onSuccess: () => {
      notify("adress");
    },
  });
};

const useDeleteOrderCashe = () => {
  const queryClinet = useQueryClient();
  return ({ _id }: { _id: string }) => {
    queryClinet.setQueryData(
      "order-list",
      (oldData: OrderType[] | undefined) => {
        if (oldData) {
          return oldData.filter((value) => value._id !== _id);
        } else {
          return [];
        }
      }
    );
  };
};
export const useDeleteOrder = () => {
  const axios = useAxios();
  const deleteOrder = useDeleteOrderCashe();
  const notify = notificationApi();

  return useMutation({
    mutationFn: (data: { _id: string }) => {
      deleteOrder(data);
      return axios({ url: "order/delete-order", method: "DELETE", body: data });
    },
    onSuccess: () => {
      notify("order");
    },
  });
};
export const useIsLiked = () => {
  const axios = useAxios();
  const notify = notificationApi();

  return useMutation({
    mutationFn: (data: object) => {
      return axios({ url: "user/create-wishlist", method: "POST", body: data });
    },
    onSuccess: () => {
      notify("like");
    },
  });
};
export const useDeleteIsLiked = () => {
  const axios = useAxios();
  const notify = notificationApi();

  return useMutation({
    mutationFn: (data: { _id: string }) => {
      return axios({
        url: "user/delete-wishlist",
        method: "DELETE",
        body: data,
      });
    },
    onSuccess: () => {
      notify("dislike");
    },
  });
};
