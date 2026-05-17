import { api } from "../../../shared/api/baseApi";

export type Rickshaw = {
  id: number;
  lat: number;
  lng: number;
  status: "active" | "idle";
};

export const rickshawApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRickshaws: builder.query<Rickshaw[], void>({
      query: () => "/rickshaws",
    }),
  }),
});

export const { useGetRickshawsQuery } = rickshawApi;
