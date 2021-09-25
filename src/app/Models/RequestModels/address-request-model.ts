import { addressType } from "src/app/Constants/AppConstants";

export class AddressRequestModel {
    constructor(
        public city:string,
        public country : string,
        public streetName: string,
        public postalCode : string,
        public type : addressType
        
    ){}
}
