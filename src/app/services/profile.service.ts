import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class ProfileService {

  private username: string;
  private clientid = '58cbd258ad3e31ff0bd3';
  private clientsecret = 'be542bcd473d956fe4d315ac816ebb0062ff0618';

  constructor(private http: Http) {
    console.log('service is now ready!');
    this.username = 'Rickyngotho';
  }
  getProfile() {
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' +
    this.clientid + '&client_secret=' + this.clientsecret);

  }
  getProfileRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?'  + this.clientsecret);
  }
  updateProfile(username: string) {
    this.username = username;
  }
}
