import { Pigeon } from './pigeon';

export class Order {
    deliveryPigeon: Pigeon;
    deliveryPinCode: string;
    pickUpPinCode: string;
    packageType: string;
}