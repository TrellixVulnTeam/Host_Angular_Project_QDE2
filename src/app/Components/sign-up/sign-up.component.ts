import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  formsValidationMessages,
  responseMessages,
  appURLs,
  addressType,
  diplayMessages
} from 'src/app/Constants/AppConstants';
import { AddressRequestModel } from 'src/app/Models/RequestModels/address-request-model';
import { SignUpRequestModel } from 'src/app/Models/RequestModels/sign-up-request';
import { SignUpService } from 'src/app/Services/SignUp/sign-up.service';
import { ModalComponent } from '../Shared/modal/modal.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  SignUpForm: FormGroup = new FormGroup(
    {
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change',
      }),
      addresses: new FormArray([
        new FormGroup({
          streetName: new FormControl('', [Validators.required]),
          city: new FormControl('', [
            Validators.required,
            Validators.pattern('^[a-zA-Z ]*$'),
          ]),
          country: new FormControl('', [
            Validators.required,
            Validators.pattern('^[a-zA-Z ]*$'),
          ]),
          postalCode: new FormControl('', [
            Validators.required,
            Validators.pattern('^[0-9]{6}$'),
          ]),
          type: new FormControl(addressType.shipping, [
            Validators.required,
          ]),
        }),
        new FormGroup({
          streetName: new FormControl('', [Validators.required]),
          city: new FormControl('', [
            Validators.required,
            Validators.pattern('^[a-zA-Z ]*$'),
          ]),
          country: new FormControl('', [
            Validators.required,
            Validators.pattern('^[a-zA-Z ]*$'),
          ]),
          postalCode: new FormControl('', [
            Validators.required,
            Validators.pattern('^[0-9]{6}$'),
          ]),
          type: new FormControl(addressType.billing, [
            Validators.required,
          ]),
        }),
      ]),
    },
    {
      updateOn: 'blur',
    }
  );

  formsValidationMessages = formsValidationMessages;
  appURLs = appURLs;
  addressTypes=addressType; 
  responseMessages=responseMessages;
  diplayMessages=diplayMessages;

  public signUpRequest: SignUpRequestModel;
  public testSignUpRequest: SignUpRequestModel;
  title = 'appBootstrap';
  public isCredentialsFormCollapsed = false;
  public isBillingAddresssFormCollapsed=true;
  public isShippingAddressFormCollpased=true;

  constructor(private service: SignUpService) {}
  @ViewChild('modal') modal: ModalComponent;

  getAddressControlProperty(typeOfAddress: addressType, control: string,property:string) {

    let index = -1;
    if (typeOfAddress == addressType.shipping) index = 0;
    if (typeOfAddress == addressType.billing) index = 1;
    return (this.SignUpForm.controls.addresses as FormArray).controls[
      index
    ].get(control)[property];
  }

  isAddressFormInvalid(typeOfAddress: addressType) {
    let index = -1;
    if (typeOfAddress == addressType.shipping) index = 0;
    if (typeOfAddress == addressType.billing) index = 1;
    return (this.SignUpForm.controls.addresses as FormArray).controls[
      index
    ].invalid;
  }

  SignUp() {
   
    console.log(this.SignUpForm.value)
      this.signUpRequest  =this.SignUpForm.value;

     this.service.SignUp(this.signUpRequest).subscribe(
       res=>{
        if(res.userId!=null)
       {
          this.SignUpForm.reset();
          this.modal.openModal();
        }

      },
       err=>{
         alert(responseMessages.fail);
         console.log(err);
       },
       );
  }

  sameAddressCheckBoxClick(){
    let addresses= this.SignUpForm.controls.addresses as FormArray;
    if(this.isAddressFormInvalid(addressType.billing))
    {
      addresses.controls[1].patchValue(addresses.controls[0].value);
    }
    else
    {
      addresses.controls[1].reset();
    }

  }

  validateAndCollapseForm() {
    if (this.SignUpForm.valid) {
       this.isCredentialsFormCollapsed = false;
       this.isBillingAddresssFormCollapsed=true;
       this.isShippingAddressFormCollpased=true;
    }
  }

  openModal(method) {
    method();
  }

  ngOnInit(): void {
    // shrinks collapse once the form is valid
    //this.SignUpForm.statusChanges.subscribe(newStatus=> {this.isCollapsed=true});
  }
}
