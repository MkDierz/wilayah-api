type Path = "/" | "/province" | "/regency" | "/district" | "/village";
type Method = "GET";
type ApiEndpoint = `${Method} ${Path}`;
type Province = {
  id: string;
  name: string;
};
type Regency = {
  id: string;
  name: string;
  province_id: string;
};
type District = {
  id: string;
  name: string;
  regency_id: string;
};

type Village = {
  id: string;
  name: string;
  district_id: string;
};

interface getRegenciesOption {
  province_id?: string | null;
}

interface getDistrictOption {
  regency_id?: string | null;
}

interface getVillageOption {
  district_id?: string | null;
}
