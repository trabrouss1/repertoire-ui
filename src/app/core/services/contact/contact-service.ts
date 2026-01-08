import { inject, Injectable, signal } from '@angular/core';
import { PaginatedResponse } from '../../models/interfaces/base-entity.model';
import { ContactModel, ContactRequestDTO } from '../../models/interfaces/contact-model';
import { GlobalConstant } from '../../constants/global.constant';
import { MasterService } from '../master/master-service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private readonly masterService = inject(MasterService);

  private readonly _contacts = signal<ContactModel[]>([]);
  readonly contacts = this._contacts.asReadonly();

  loadContacts(): void {
    this.masterService
      .get<PaginatedResponse<ContactModel>>(
        GlobalConstant.API_END_POINT.CONTACT.CONTROLLER,
        GlobalConstant.API_END_POINT.CONTACT.METHOD.GET
      )
      .subscribe({
        next: res => this._contacts.set(res.data),
        error: err => console.error(err)
      });
  }


  // getAllContacts(): Observable<PaginatedResponse<ContactModel>> {
  //   return this.masterService.get<PaginatedResponse<ContactModel>>(
  //       GlobalConstant.API_END_POINT.CONTACT.CONTROLLER,
  //       GlobalConstant.API_END_POINT.CONTACT.METHOD.GET
  //     );
  // }

  // createContact(contactRequestDTO: ContactRequestDTO){
  //   return this.masterService.create<void>(
  //     GlobalConstant.API_END_POINT.CONTACT.CONTROLLER,
  //     GlobalConstant.API_END_POINT.CONTACT.METHOD.CREATE,
  //     contactRequestDTO
  //   )
  // }

  createContact(contactRequestDTO: ContactRequestDTO): void {
    this.masterService
      .create<ContactModel>(
        GlobalConstant.API_END_POINT.CONTACT.CONTROLLER,
        GlobalConstant.API_END_POINT.CONTACT.METHOD.CREATE,
        contactRequestDTO
      )
      .subscribe({
        next: () => this.loadContacts(),
        error: (error) => {
          console.log("Une erreur s'est produite lors de la soumission du formulaire de creation de contact", error.error.message);      
        }
      });
  }

  // updateContact(contactRequestDTO: ContactRequestDTO, id: string){
  //   return this.masterService.update<void>(
  //     GlobalConstant.API_END_POINT.CONTACT.CONTROLLER,
  //     GlobalConstant.API_END_POINT.CONTACT.METHOD.UPDATE,
  //     id,
  //     contactRequestDTO
  //   )
  // }

  updateContact(id: string, dto: ContactRequestDTO): void {
    this.masterService
      .update<ContactModel>(
        GlobalConstant.API_END_POINT.CONTACT.CONTROLLER,
        GlobalConstant.API_END_POINT.CONTACT.METHOD.UPDATE,
        id,
        dto
      )
      .subscribe({
        next: () => this.loadContacts(),
        error: (error) => {
          console.log(" Une erreur s'est produite lors du chargement après la mise à jour " + error.error.message);
        }
      });
  }

  // deleteContact(id: string){
  //   return this.masterService.delete<void>(
  //     GlobalConstant.API_END_POINT.CONTACT.CONTROLLER,
  //     GlobalConstant.API_END_POINT.CONTACT.METHOD.DELETE,
  //     id
  //   )
  // }

  deleteContact(id: string): void {
    this.masterService
      .delete<void>(
        GlobalConstant.API_END_POINT.CONTACT.CONTROLLER,
        GlobalConstant.API_END_POINT.CONTACT.METHOD.DELETE,
        id
      )
      .subscribe({
        next: () => this.loadContacts(),
        error: (error) => {
          console.log(`Une erreur s'est produite lors du chargement après la suppression  + ${error.error.message}`);
        }
      });
  }
}
