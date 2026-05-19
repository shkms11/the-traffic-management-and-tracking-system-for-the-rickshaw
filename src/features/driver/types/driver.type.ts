export type DriverStatus =
  | "active"
  | "inactive"
  | "suspended"
  | "blocked"
  | "pending_verification";

export interface DriverAddress {
  line1: string;
  line2?: string;
  area: string;
  city: string;
  postalCode?: string;
  country: string;
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  nid: string;
  licenseNumber: string;
  photoUrl?: string;

  status: DriverStatus;

  assignedRickshawId?: string;

  address: DriverAddress;

  createdAt?: string;
  updatedAt?: string;
}
