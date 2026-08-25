import { api } from "@/shared/api/baseApi";

export type AdminSearchType =
  | "All"
  | "Users"
  | "Drivers"
  | "Trips"
  | "Payments"
  | "Complaints";

export type AdminSearchResult = {
  id: string;
  name: string;
  type: "user" | "driver" | "trip" | "payment" | "complaint";
  description?: string;
};

export type AdminSearchResponse = {
  results: AdminSearchResult[];
  total: number;
};

export type AdminSearchParams = {
  query: string;
  type: AdminSearchType;
};

export const adminApi = api.injectEndpoints({
  endpoints: (builder) => ({
    searchAdmin: builder.query<AdminSearchResponse, AdminSearchParams>({
      query: ({ query, type }) => ({
        url: "/admin/search",
        method: "GET",
        params: {
          q: query,
          ...(type !== "All" && {
            type: type.toLowerCase(),
          }),
        },
      }),
    }),
  }),
});

export const { useLazySearchAdminQuery } = adminApi;
