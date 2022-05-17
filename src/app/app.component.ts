import { Component } from '@angular/core';
import { Service } from './app.services';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { LoadOptions } from 'devextreme/data/load_options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';

  public tagBoxDataSource: any = {};

  constructor(readonly service: Service, readonly httpClient: HttpClient) {
    this.tagBoxDataSource = new CustomStore({
      byKey: (key) => {
        return Promise.resolve(key);
      },
      load: (options: LoadOptions) => {
        const { searchValue } = options;
        console.log('options', options);
        return httpClient
          .get(`http://localhost:3100/products?search=${searchValue}`)
          .toPromise();
      },
    });
  }

  onCustomItemCreating(args) {
    const newValue = args.text;
    args.customItem = newValue;
  }

  public search(searchEvent): void {
    console.log('searchEvent', searchEvent);
    // this.onStateChange(this.internalGridState || { selectedRowKeys: [] });
  }
}
