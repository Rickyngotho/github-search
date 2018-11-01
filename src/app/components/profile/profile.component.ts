import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   profile;
   repos;
   username: string;

  constructor(private profileService: ProfileService) {
    this.profileService.getProfile().subscribe(profile => {
      console.log(profile['_body']);
     this.profile = profile['_body'];
    });

    this.profileService.getProfileRepos().subscribe(repos => {
      console.log(repos['_body']);
      this.repos = repos;
    });
  }
  findProfile() {
    this.profileService.updateProfile(this.username);
  }

  ngOnInit() {
  }

}
