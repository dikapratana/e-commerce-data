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
};
