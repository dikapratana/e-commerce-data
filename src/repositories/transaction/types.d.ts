type TransactionParams = {
  createdAt_gte?: string;
  createdAt_lte?: string;
  customerName?: string;
  customerId?: string;
  status?: string;
  code?: string;
};

type TransactionPayload = {
  id?: string;
  code?: string;
  name?: string;
  email?: string;
  noTelp?: string;
  provider?: string;
  providerName?: string;
  isActive?: boolean;
  createdAt?: string;
};

type TransactionData = {
  id: string;
  code: string;
  customerId: string;
  customerName: string;
  provider: string;
  providerName: string;
  packageId: string;
  packageName: string;
  price: number;
  status: string;
  createdAt: string;
  customerNo: string;
  packageData?: {
    quota?: int;
    quotaUnit?: string;
    validity?: int;
    category?: string;
    description?: string;
  };
};
