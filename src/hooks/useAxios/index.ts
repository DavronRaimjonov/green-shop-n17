import axios from "axios";

interface RequestType {
  method?: "GET" | "DELETE" | "PUT" | "POST";
  body?: object;
  url: string;
  params?: object;
  headers?: object;
}

export const useAxios = () => {
  const request = ({
    method = "GET",
    url,
    params,
    headers,
    body,
  }: RequestType) => {
    return axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
      method,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...headers,
      },
      params: {
        access_token: "64eecf3b54abde61153d1fd3",
        //64ea18e295085f00ce1714bc
        //64bebc1e2c6d3f056a8c85b7
        ...params,
      },
    }).then((data) => data.data);
  };
  return request;
};
