import { Injectable } from '@angular/core';

export class Product {
  Id: number;

  Name: string;

  Price: number;

  Current_Inventory: number;

  Backorder: number;

  Manufacturing: number;

  Category: string;

  ImageSrc: string;
}

const simpleProducts = [
  'HD Video Player',
  'SuperHD Video Player',
  'SuperPlasma 50',
  'SuperLED 50',
  'SuperLED 42',
  'SuperLCD 55',
  'SuperLCD 42',
  'SuperPlasma 65',
  'SuperLCD 70',
  'Projector Plus',
  'Projector PlusHT',
  'ExcelRemote IR',
  'ExcelRemote Bluetooth',
  'ExcelRemote IP',
];

const products: Product[] = [];

@Injectable()
export class Service {
  getProducts(): Product[] {
    return products;
  }

  getSimpleProducts(): string[] {
    return simpleProducts;
  }
}
