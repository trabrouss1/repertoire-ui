import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedResponse } from '../../models/interfaces/base-entity.model';
import { ContactModel } from '../../models/interfaces/contact-model';
import { GlobalConstant } from '../../constants/global.constant';
import { MasterService } from '../master/master-service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private readonly masterService = inject(MasterService);

  getAllContacts(): Observable<PaginatedResponse<ContactModel>> {
    return this.masterService.get<PaginatedResponse<ContactModel>>(
        GlobalConstant.API_END_POINT.CONTACT.CONTROLLER,
        GlobalConstant.API_END_POINT.CONTACT.METHOD.GET
      );
  }
}
