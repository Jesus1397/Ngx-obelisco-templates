import { Media } from 'ngx-obelisco-example/core/models';

export interface CeoInstitutionalData {
  title?: string;
  description?: string;
  image?: Media;
}

export interface ContactInstitutionalData {
  phone?: string;
  email?: string;
  address?: string;
}

export interface SocialMediaInstitutionalData {
  title?: string;
  src?: string;
  sizeSm?: boolean;
  icon?: string;
}

export interface MapInstitutionalData {
  iframe: Media;
  srcButton?: string;
  description?: string;
  title?: string;
}
