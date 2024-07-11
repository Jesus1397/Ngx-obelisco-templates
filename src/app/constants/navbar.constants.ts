import { NavbarRoute, SearchbarItem } from 'ngx-obelisco-example/core/models';

export const TEMPLATES_ROUTES: NavbarRoute[] = [
  {
    title: 'Templates',
    route: 'templates',
  },
  {
    title: 'Documentación',
    route: 'doc',
  },
];

export const TEMPLATES_ROUTES_SEARCHBARITEMS: SearchbarItem[] = [
  {
    title: 'Inicio',
    route: '/',
  },
  {
    title: 'Templates',
    route: 'templates',
  },
  {
    title: 'Cultura',
    route: 'templates/culture',
  },
  {
    title: 'Educación',
    route: 'templates/education',
  },
  {
    title: 'Trámites',
    route: 'templates/procedure',
  },
  {
    title: 'Noticias - Galería',
    route: 'templates/news-gallery',
  },
];
