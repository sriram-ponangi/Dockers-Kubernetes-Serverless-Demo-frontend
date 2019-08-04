import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private static configs;

  constructor(private http: HttpClient) { }

  public nodejsURL(): string {
    return ConfigService.configs.nodejsURL;
  }

  public springbootURL(): string {
    return ConfigService.configs.springbootURL;
  }

  public loadConfigurationData() {
    const promise = this.http.get('./assets/configs/config.json').toPromise();
    promise.then(configData => ConfigService.configs = configData);
    return promise;
  }
}
