import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetStableCoins = () => {
  return useQuery({
    queryKey: ["stablecoins"],
    queryFn: async () => {
      const res = await axios.get(
        "https://core.api.allbridgecoreapi.net/token-info?filter=all"
      );
      return res.data;
    },
  });
};

export const useGetStableCoinsTotals = ({
  chain,
  limit = "10",
  page = "1",
}: {
  chain?: string | null;
  limit?: string | null;
  page?: String | null;
}) => {
  return useQuery({
    queryKey: ["stablecoins-total", chain, limit, page],
    queryFn: async () => {
      const list: String[] = [
        "ARB",
        "AVA",
        "BAS",
        "BSC",
        "CEL",
        "ETH",
        "OPT",
        "POL",
      ];
      const baseUrl =
        "https://explorer-variant-filter.api.allbridgecoreapi.net/transfers/totals";
      const params = new URLSearchParams();
      params.append("limit", `${!!limit ? limit.toString() : "10"}`);
      if (!!chain && list.includes(`${chain}`))
        params.append("chain", chain.toString());
      if (!!page) params.append("page", page.toString());
      const queryString = params.toString();
      const url = `${baseUrl}${queryString ? "?" + queryString : ""}`;
      const res = await axios.get(url);
      return res.data;
    },
    refetchInterval: 3000*10,
    refetchOnWindowFocus: false,
  });
};

export const useGetStableCoinsTransfer = ({
  chain,
  limit = "10",
  page = "1",
}: {
  chain?: string | null;
  limit?: string | null;
  page?: String | null;
}) => {
  return useQuery({
    queryKey: ["stablecoins-transfer", chain, limit, page],
    queryFn: async () => {
      const list: String[] = [
        "ARB",
        "AVA",
        "BAS",
        "BSC",
        "CEL",
        "ETH",
        "OPT",
        "POL",
      ];
      const baseUrl =
        "https://explorer-variant-filter.api.allbridgecoreapi.net/transfers/";
      const params = new URLSearchParams();
      params.append("limit", `${!!limit ? limit.toString() : "10"}`);
      if (!!chain && list.includes(`${chain}`))
        params.append("chain", chain.toString());
      if (!!page) params.append("page", page.toString());
      const queryString = params.toString();
      const url = `${baseUrl}${queryString ? "?" + queryString : ""}`;
      const res = await axios.get(url);
      return res.data;
    },
    refetchInterval: 60,
    refetchOnWindowFocus: true,
    staleTime: 0,
    enabled:true
  });
};
