import {
  getProvinces,
  getRegencies,
  getDistricts,
  getVillages,
} from "./wilayah";

class JsonResponse extends Response {
  constructor(response: Record<any, any>, headerOverride?: Bun.ResponseInit) {
    const responseHeaders: Bun.ResponseInit = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const headers = {
      status: 200,
      ...responseHeaders.headers,
      ...response.headers,
      ...headerOverride?.headers,
    };
    super(JSON.stringify(response), { ...responseHeaders, headers });
  }
}

const available_routes = [
  "GET /province",
  "GET /regency",
  "GET /district",
  "GET /village",
];

Bun.serve({
  port: 3000,
  async fetch(req) {
    try {
      const url = new URL(req.url);
      const method = req.method;

      const apiEndpoint: ApiEndpoint = `${method as Method} ${
        url.pathname as Path
      }`;

      switch (apiEndpoint) {
        case "GET /": {
          return new JsonResponse(
            {
              message: "api wilayah indonesia",
              available_routes,
            },
            { status: 200 }
          );
        }
        case "GET /province": {
          const provinces = await getProvinces();
          return new JsonResponse(provinces);
        }
        case "GET /regency": {
          const province_id = url.searchParams.get("province_id");
          const regencies = await getRegencies({ province_id });
          return new JsonResponse(regencies);
        }
        case "GET /district": {
          const regency_id = url.searchParams.get("regency_id");
          const district = await getDistricts({ regency_id });
          return new JsonResponse(district);
        }
        case "GET /village": {
          const district_id = url.searchParams.get("district_id");
          const village = await getVillages({ district_id });
          return new JsonResponse(village);
        }
        default:
          return new JsonResponse(
            {
              message: `not found`,
              available_routes,
            },
            { status: 404 }
          );
      }
    } catch (err) {
      console.log(err);
      return new JsonResponse(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }
  },
});
