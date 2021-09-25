import { AddressRequestModel } from "./address-request-model";

export class SignUpRequestModel {

    constructor(
        public firstName:string,
        public lastName:string,
        public email:string,
        public password:string,
        public addresses : AddressRequestModel[] ){}
}

