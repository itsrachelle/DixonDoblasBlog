import { apiRequest } from "./queryClient";
import type { InsertContact, InsertSubscriber } from "@shared/schema";

export async function submitContact(data: InsertContact) {
  const response = await apiRequest("POST", "/api/contact", data);
  return response.json();
}

export async function subscribeNewsletter(data: InsertSubscriber) {
  const response = await apiRequest("POST", "/api/subscribe", data);
  return response.json();
}
