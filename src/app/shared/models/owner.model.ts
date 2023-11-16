import { Vehicle } from '../models/vehicle.model';

export type VehicleCollection = Vehicle[];

export class Owner {
  id: number = 0
  name: string = ""
  cpf: string = ""
  address: string = ""
  phone: string = ""
  vehicles: VehicleCollection = [];
}
