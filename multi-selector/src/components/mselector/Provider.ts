import {CustomOption} from './Models';
import {Injectable} from '@angular/core';

class Asset {}
class Product {}
class Owner {}

const raportMap = [
  {
    raportId: 1,
    entitys: [Asset, Product, Owner]
  },
  {
    raportId: 2,
    entitys: [Product, Owner]
  },
  {
    raportId: 3,
    entitys: [Owner]
  }
]

@Injectable()

export class ProviderService {

  provideOptions(reportId: number): CustomOption[] {
    return this.loadEntitys(raportMap.filter(item => item.raportId === reportId).pop().entitys);
  }

  private loadEntitys(entitys: any[]): CustomOption[] {
    var result: CustomOption[] = [];

    if (entitys.indexOf(Asset) !== -1) {
      result.push(this.loadAssets());
    }

    if (entitys.indexOf(Owner) !== -1) {
      result.push(this.loadOwners());
    }

    if (entitys.indexOf(Product) !== -1) {
      result.push(this.loadProducts());
    }

    return result;
  }

  private loadProducts(): CustomOption {
    return new CustomOption('Products', true, [
      {
        value: 1,
        label: 'Product 1',
        type: Product
      },
      {
        value: 2,
        label: 'Product 2',
        type: Product
      },
      {
        value: 3,
        label: 'Product 3',
        type: Product
      }
    ]);
  }

  private loadOwners(): CustomOption {
    return new CustomOption('Owners', true, [
      {
        value: 1,
        label: 'Owners 1',
        type: Owner
      },
      {
        value: 2,
        label: 'Owners 2',
        type: Owner
      },
      {
        value: 3,
        label: 'Owners 3',
        type: Owner
      }
    ]);
  }

  private loadAssets(): CustomOption {
    return new CustomOption('Assets', true, [
      {
        value: 1,
        label: 'Assets 1',
        type: Asset
      },
      {
        value: 2,
        label: 'Assets 2',
        type: Asset
      },
      {
        value: 3,
        label: 'Assets 3',
        type: Asset
      }
    ]);
  }
}
