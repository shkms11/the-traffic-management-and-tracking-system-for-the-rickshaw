import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/rickshaws", () => {
    return HttpResponse.json([
      { id: 1, lat: 23.8103, lng: 90.4125, status: "active" },
      { id: 2, lat: 23.812, lng: 90.415, status: "idle" },
      { id: 3, lat: 23.808, lng: 90.41, status: "active" },
    ]);
  }),
];
