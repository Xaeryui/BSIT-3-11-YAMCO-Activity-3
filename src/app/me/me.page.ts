import { Component, OnInit } from '@angular/core';
import { Me } from '../interfaces/me';
import { MeService } from '../services/me';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
  standalone: false,
})
export class MePage implements OnInit {
  me: Me | undefined;

  constructor(private meService: MeService) { }

  ngOnInit() {
    this.me = this.meService.getMe();
  }

}