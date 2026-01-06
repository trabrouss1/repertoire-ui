import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrlBuilder } from '../../constants/api-url.builder';

@Injectable({
  providedIn: 'root',
})
export class MasterService {

  /** 
  * B => body
  * R => return
  */

  private readonly http = inject(HttpClient);

  /* ======================
  * GET
  * ====================== */
  get<R>(
    controller: string,
    method?: string,
    params?: HttpParams
  ): Observable<R> {
    return this.http.get<R>(
      ApiUrlBuilder.build(controller, method),
      { params }
    );
  }

  /* ======================
  * POST
  * ====================== */
  create<B, R>(
    controller: string,
    method: string,
    body: B
  ): Observable<R> {
    return this.http.post<R>(
      ApiUrlBuilder.build(controller, method),
      body
    );
  }

  /* ======================
  * PUT
  * ====================== */
  update<B, R>(
    controller: string,
    method: string,
    body: B
  ): Observable<R> {
    return this.http.put<R>(
      ApiUrlBuilder.build(controller, method),
      body
    );
  }

  /* ======================
  * DELETE
  * ====================== */
  delete<R>(
    controller: string,
    method: string
  ): Observable<R> {
    return this.http.delete<R>(
      ApiUrlBuilder.build(controller, method)
    );
  }

}
