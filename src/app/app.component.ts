import { Component } from '@angular/core';
import { Service } from './app.services';
import ArrayStore from 'devextreme/data/array_store';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  public tagBoxDataSource: any = {};

  constructor(readonly service: Service, readonly httpClient: HttpClient) {
    this.tagBoxDataSource = new DataSource({
      store: new CustomStore({
          key: "ID",
          loadMode: "raw",
          load: () => {
              return httpClient.get('http://localhost:3100/products').toPromise();
          }
      })
  });
  }

  onCustomItemCreating(args) {
    const newValue = args.text;
    args.customItem = newValue;
  }
}
