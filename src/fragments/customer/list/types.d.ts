type CustomerController = {
  customer: {
    data?: CustomerData[];
    isLoading: boolean;
    onSearch: (val: string) => void;
  };
  provider: {
    data?: ProviderData[];
    isLoading: boolean;
  };
  onChangeParams: (params: CustomerParams) => void;
  navigate: AnyRouter;
  delete: {
    confirm: (val: CustomerData) => void;
    cancel: () => void;
    holder: React.ReactNode;
    loading: boolean;
  };
  snackbar: {
    contextHolder: React.ReactNode;
  };
  selectedData?: CustomerData;
};

type ActionProps = {
  value: string;
  record: CustomerData;
  controller: CustomerController;
};
