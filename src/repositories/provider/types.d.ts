type ProviderData = {
  value: string;
  label: string;
};

type PackageData = {
  id: string;
  provider: string;
  name: string;
  quota: int;
  quotaUnit: string;
  validity: int;
  price: number;
  category: string;
  description: string;
  isActive: boolean;
  createdAt: string;
};

type PackageParams = {
  provider: string;
};
