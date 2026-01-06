import { environment } from "../../../environments/environment.development";

export class ApiUrlBuilder {

  static build(controller: string, method?: string, pathParams: Array<string | number> = []): string {

    const base = method
      ? `${environment.API_URL}${controller}/${method}`
      : `${environment.API_URL}${controller}`;

    return pathParams.length
      ? `${base}/${pathParams.join('/')}`
      : base;
  }
}
