type CustomerParams = {
  createdAt_gte?: string;
  createdAt_lte?: string;
  name?: string;
  isActive?: boolean;
  provider?: string;
};

type CustomerData = {
  id: string;
  code: string;
  name: string;
  email: string;
  noTelp: string;
  provider: string;
  providerName: string;
  isActive: boolean;
  createdAt: string;
};
