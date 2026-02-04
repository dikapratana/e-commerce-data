type TransactionController = {
  transaction: {
    data?: TransactionData[];
    isLoading: boolean;
    onSearch: (val: string) => void;
  };
  customer: {
    data?: CustomerData[];
    isLoading?: boolean;
    onSearch?: (val: string) => void;
  };
  onChangeParams: (params: TransactionParams) => void;
  navigate: AnyRouter;
};

type TransactionActionProps = {
  value: string;
  record: TransactionData;
  controller: TransactionController;
};
