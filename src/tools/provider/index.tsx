import { FC } from "react";
import { ComponentType } from "../../@types";
import Modals from "../../components/modals";
import { Provider } from "react-redux";
import { store as store2 } from "../../redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const ProdivderConf: FC<ComponentType> = ({ children }) => {
  return (
    <Provider store={store2}>
      <QueryClientProvider client={queryClient}>
        <Modals />
        {children}
      </QueryClientProvider>
    </Provider>
  );
};

export default ProdivderConf;
