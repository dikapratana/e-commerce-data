import { useCustomerDetail } from "../../edit/hooks/use-queries";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useTransactions } from "./use-queries";

export default function useController() {
  const params = useParams({ strict: false });

  const navigate = useNavigate();

  const { data: dataDetail, isLoading: isLoadingDetail } = useCustomerDetail(
    params?.id,
  );

  const { data: dataTransaction, isLoading: IsloadingTransaction } =
    useTransactions({ customerId: params?.id });

  return {
    navigate: navigate,
    data: dataDetail,
    loading: isLoadingDetail,
    transaction: {
      data: dataTransaction,
      isLoading: IsloadingTransaction,
    },
  };
}
