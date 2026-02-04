import { useTransactionDetail } from "./use-queries";
import { useNavigate, useParams } from "@tanstack/react-router";

export default function useController() {
  const params = useParams({ strict: false });

  const navigate = useNavigate();

  const { data: dataDetail, isLoading: isLoadingDetail } = useTransactionDetail(
    params?.id,
  );

  return {
    navigate: navigate,
    data: dataDetail,
    loading: isLoadingDetail,
  };
}
