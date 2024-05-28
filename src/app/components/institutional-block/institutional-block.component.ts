import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  CeoInstitutionalData,
  ContactInstitutionalData,
  MapInstitutionalData,
  SocialMediaInstitutionalData,
} from '../models/institutional-block.models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OMapModule } from 'ngx-obelisco-example/map';
import { OButtonModule } from 'ngx-obelisco-example/button';
import { OAccessModule } from 'ngx-obelisco-example/access';
import {
  getSocialMediaIcon,
  formatTitleNetwork,
} from 'src/app/constants/functions.constants';
@Component({
  selector: 'institutional-block',
  templateUrl: './institutional-block.component.html',
  styleUrls: ['./institutional-block.component.scss'],
  standalone: true,
  imports: [CommonModule, OMapModule, OButtonModule, OAccessModule],
})
export class InstitutionalBlockComponent implements OnInit {
  @Input() ceo?: CeoInstitutionalData;
  @Input() contact?: ContactInstitutionalData;
  @Input() socialMedia?: SocialMediaInstitutionalData[];
  @Input() isSocialMediaHorizontal?: boolean;
  @Input() maxSocialmediaAccess?: number;
  @Input() map?: MapInstitutionalData;

  public getIcon = getSocialMediaIcon;

  public formatTitle = formatTitleNetwork;

  constructor(private sanitizer: DomSanitizer) {}

  sanitizedMapUrl: SafeResourceUrl = '';

  ngOnInit(): void {}
}
