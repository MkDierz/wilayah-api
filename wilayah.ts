import { getData } from "idn-area-data";

export async function getProvinces() {
  return getData<Province>("provinces", {
    transform: {
      headers: {
        code: "id",
        name: "name",
      },
    },
  });
}
export async function getRegencies(option: getRegenciesOption = {}) {
  const data = await getData<Regency>("regencies", {
    transform: {
      headers: {
        code: "id",
        province_code: "province_id",
      },
      values: {
        code: (value) => value.split(".").join(""),
      },
    },
  });

  if (option.province_id) {
    return data.filter((data) => data.province_id === option.province_id);
  }
  return data;
}
export async function getDistricts(option: getDistrictOption = {}) {
  const data = await getData<District>("districts", {
    transform: {
      headers: {
        code: "id",
        regency_code: "regency_id",
      },
      values: {
        code: (value) => value.split(".").join(""),
        regency_code: (value) => value.split(".").join(""),
      },
    },
  });

  if (option.regency_id) {
    return data.filter((data) => data.regency_id === option.regency_id);
  }
  return data;
}
export async function getVillages(option: getVillageOption = {}) {
  const data = await getData<Village>("villages", {
    transform: {
      headers: {
        code: "id",
        district_code: "district_id",
      },
      values: {
        code: (value) => value.split(".").join(""),
        district_code: (value) => value.split(".").join(""),
      },
    },
  });

  if (option.district_id) {
    return data.filter((data) => data.district_id === option.district_id);
  }
  return data;
}
