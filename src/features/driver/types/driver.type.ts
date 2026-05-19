export type DriverStatus =
  | "active"
  | "inactive"
  | "suspended"
  | "blocked"
  | "pending_verification";

export type PayoutStatus =
  | "ready_to_withdraw"
  | "pending"
  | "processing"
  | "completed";

export interface DriverAddress {
  line1: string;
  line2?: string;
  area: string;
  city: string;
  postalCode?: string;
  country: string;
}

/**
 * Core Driver entity (backend-ready model)
 */
export interface Driver {
  // identity
  id: string;
  name: string;
  phone: string;
  nid: string;
  licenseNumber: string;
  photoUrl?: string;

  // status
  status: DriverStatus;

  // relations
  assignedRickshawId?: string;

  // location
  address: DriverAddress;

  // wallet (NEW - important for dashboard widgets)
  walletBalance: number;
  todayEarnings: number;
  payoutStatus: PayoutStatus;

  // timestamps
  createdAt?: string;
  updatedAt?: string;
}
