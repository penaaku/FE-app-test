import config from "../config";
import AuthService from "./AuthService";
import HTTPService from "./HTTPService";

const BrandsService = {};
const CONFIG_HTTP = {
  headers: {
    "x-access-token": AuthService.getToken(),
  },
};

BrandsService.list = (query) => {
  CONFIG_HTTP.params = query;
  return HTTPService.get(`${config.BASE_URL}/brands`, CONFIG_HTTP);
};

BrandsService.create = (brands) => {
  return HTTPService.post (`${config.BASE_URL}/brands`, brands, CONFIG_HTTP);
};
BrandsService.get = (ID_Brands) => {
  CONFIG_HTTP.params = null;
  return HTTPService.get(
      `${config.BASE_URL}/brands/${ID_Brands}`,
      CONFIG_HTTP
  );
};
BrandsService.edit = (ID_Brands, brands) => {
  CONFIG_HTTP.params = null;
  return HTTPService.put(
    `${config.BASE_URL}/brands/${ID_Brands}`,
    brands,
    CONFIG_HTTP
  );
};
BrandsService.delete = (ID_Brands) => {
  CONFIG_HTTP.params = null;
  return HTTPService.delete(
    `${config.BASE_URL}/brands/${ID_Brands}`,
    CONFIG_HTTP
  );
};
export default BrandsService;