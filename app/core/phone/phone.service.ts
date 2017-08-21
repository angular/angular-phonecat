import * as angular from 'angular';

export interface IBattery {
  type: string;
  talkTime: string;
  standbyTaime: string;
}

export interface IStorage {
  ram: string;
  flash: string;
}

export interface IConnectivity {
  cell: string;
  wifi: string;
  bluetooth: string;
  infrared: boolean;
  gps: boolean;
}

export interface IAndroid {
  os: string;
  ui: string;
}

export interface ISizeAndWeight {
  dimensions: string;
  weight: string;
}

export interface IDisplay {
  screenSize: string;
  screenResolution: string;
  touchScreen: boolean;
}

export interface IHardware {
  cpu: string;
  usb: string;
  audioJack: string;
  fmRadio: boolean;
  accelerometer: boolean;
}

export interface ICamera {
  primary: string;
  features: Array<string>;
}

export interface IPhoneService {
  images: Array<string>;
  availability: string;
  battery: IBattery;
  storage: IStorage;
  connectivity: IConnectivity;
  android: IAndroid;
  sizeAndWeight: ISizeAndWeight;
  display: IDisplay;
  hardware: IHardware;
  camera: ICamera;
  additionalFeatures: string;

  getPhones(): ng.resource.IResourceClass<IPhoneService>;
}

export type IPhoneResource = ng.resource.IResourceClass<IPhoneService>;

export class PhoneService implements IPhoneService {
  public images: Array<string>;
  public availability: string;
  public battery: IBattery;
  public storage: IStorage;
  public connectivity: IConnectivity;
  public android: IAndroid;
  public sizeAndWeight: ISizeAndWeight;
  public display: IDisplay;
  public hardware: IHardware;
  public camera: ICamera;
  public additionalFeatures: string;

  constructor(public $resource: ng.resource.IResourceService) {
  }

  getPhones(): ng.resource.IResourceClass<any> {
    return this.$resource('phones/:phoneId.json', {}, {
      query: {
        method: 'GET',
        params: {phoneId: 'phones'},
        isArray: true
      }
    });
  }
}

angular.module('core.phone').factory('Phone', ['$resource', ($resource: ng.resource.IResourceService) => new PhoneService($resource).getPhones()]);
