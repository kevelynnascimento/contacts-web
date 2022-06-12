import { api } from "../Api";

export interface ContactFilterResponse {
  id: string;
  name: string;
  phoneNumber: string;
}

export interface ContactFindResponse {
  name: string;
  phoneNumber: string;
}

export interface ContactCreateRequest {
  name: string;
  phoneNumber: string;
}

export interface ContactUpdateRequest {
  name: string;
  phoneNumber: string;
}

export const filterContacts = async (): Promise<ContactFilterResponse[]> => {
  const { data } = await api.get<ContactFilterResponse[]>('contacts');
  return data;
};

export const createContact = async (request: ContactCreateRequest): Promise<void> => {
  await api.post('contacts', request);
};

export const updateContact = async (id: string, request: ContactUpdateRequest): Promise<void> => {
  await api.put(`contacts/${id}`, request);
};

export const findContactById = async (id: string): Promise<ContactFindResponse> => {
  const { data } = await api.get<ContactFindResponse>(`contacts/${id}`);
  return data;
};