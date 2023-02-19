import axios from "@/api/axios";
import type { AxiosResponse } from "axios";

export default class CreateEntities {
  public static async createDeal(): Promise<AxiosResponse> {
    return axios.post("/deal");
  }

  public static async createContact(): Promise<AxiosResponse> {
    return axios.post("/contact");
  }

  public static async createCompany(): Promise<AxiosResponse> {
    return axios.post("/company");
  }
}
