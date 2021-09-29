export const baseUrl = 'http://192.168.1.18:8080/mobile-app-ws/';

export enum formsValidationMessages {
  redirectRequest = 'Redirect to SignIn Page ?',
  formInvalidName = 'Invalid name',
  formInvalidEmail = 'Invalid emailId',
  formMissingPassword = 'Please enter a password',
  formInvalidStreetName = 'Enter location ',
  formInvalidCity = 'Invalid City',
  formInvalidCountry = 'Invalid country',
  formInvalidPostalCode = 'Please enter a valid postal code',
}

export enum responseMessages {
  sucess = 'Signup Sucessfull !!!',
  fail = 'Signup failed !!! ',
}
export enum diplayMessages {
  redirectRequest = 'Redirect to SignIn Page ?',
}

export enum addressType {
  billing = 'billing',
  shipping = 'shipping',
}

export enum securityConstants {
  headerString = 'Authorization',
  tokenString = 'token',
}

export enum appURLs {
  login = '/Login',
  signUp = '/SignUp',
  home = '/Home',
}
