import { Component } from '@angular/core';
import { DropdownNavigationItem } from 'ngx-obelisco-example/core/models';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss'],
})
export class DocComponent {
  //Page Header example
  public institutionalDropdownItems: DropdownNavigationItem[] = [
    {
      text: 'Ministerio de Educación',
      link: '#',
    },
    {
      text: 'Subsecretaría de Carrera Docente',
      link: '#',
    },
    {
      text: 'Subsecretaría de Coordinación Pedagógica y Equidad Educativa',
      link: '#',
    },
    {
      text: 'Subsecretaría de Tecnología Educativa y Sustentabilidad',
      link: '#',
    },
    {
      text: 'Subsecretaría Agencia de aprendizaje a lo largo de la vida',
      link: '#',
    },
    {
      text: 'Subsecretaría de Gestión Económico Financiera y Administración de Recursos',
      link: '#',
    },
    {
      text: 'Unidad de Evaluación Integral de la Calidad y Equidad Educativa',
      link: '#',
    },
    {
      text: 'Unidad de Coordinación del Sistema de Formación Docente',
      link: '#',
    },
    {
      text: 'Organigrama',
      link: '#',
    },
    {
      text: 'Guía de funcionarios',
      link: '#',
    },
  ];

  public transparencyDropdownItems: DropdownNavigationItem[] = [
    {
      text: 'Declaraciones juradas',
      link: '#',
    },
    {
      text: 'Trámites y servicios',
      link: '#',
    },
    {
      text: 'Compras y contrataciones de obra pública',
      link: '#',
    },
  ];

  public navJournal = [
    {
      title: 'Agenda educativa 2023',
      route: '#',
    },
  ];

  public pageHeaderExample = `<page-header
  title="Educación"
  description="Nos ocupamos de crear, promover y ejecutar políticas educativas en
sus niveles inicial, primario, secundario y superior, que conformen un sistema educativo innovador, único e integrado."
  [badges]="[
    { text: 'Etiqueta 1' },
    {
      text: 'Etiqueta 2',
      type: 'secondary',
      url: 'https://www.google.com/'
    }
  ]"
  headline="Jueves 17 de junio de 2022"
  [socialMedia]="[{title:'facebook', src:'#'}, {title:'instagram', src:'#', icon: 'bx bxl-instagram'}, {title:'twitter', src:'#'}, {title:'linkedin', src:'#'}]"
>
  <div class="mb-2 mb-md-3 mr-3">
    <o-dropdown-navigation
      dataTarget="education-institutional-dropdown"
      [dropNavItems]="institutionalDropdownItems"
      iconRight="expand_more"
      title="Institucional"
      [isAnimatedIconRight]="true"
    ></o-dropdown-navigation>
  </div>
  <div class="mb-2 mb-md-3 mr-3">
    <o-nav-horizontal
      [navHorItems]="navJournal"
      size="lg"
      [isBordered]="true"
    ></o-nav-horizontal>
  </div>
  <div class="mb-0 mb-md-3">
    <o-dropdown-navigation
      dataTarget="education-transparency-dropdown"
      [dropNavItems]="transparencyDropdownItems"
      iconRight="expand_more"
      title="Transparencia activa"
      [isAnimatedIconRight]="true"
    ></o-dropdown-navigation>
  </div>
</page-header>
  `;

  //Institutional Block

  public institutionalExample = `
  <institutional-block
    [ceo]="{
      title: 'Soledad Acuña',
      description: 'Ministro de Educación',
      image: {
        alt: 'Soledad Acuña',
        src: 'https://gcba.github.io/obelisco-demo/assets/panel/soledadAcuna.png'
      }
    }"
    [contact]="{
      phone: '6076-6000',
      email: 'soledad@bue.edu.ar'
    }"
    [socialMedia]="[
      { title: 'Facebook', src: '#' },
      { title: 'Instagram', src: '#' },
      { title: 'Youtube', src: '#' },
      { title: 'Twitter', src: '#' }
    ]"
    [map]="{
      description: 'Dirección: Carlos H. Perette 750.',
      iframe: {
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.888755725674!2d-58.38227022454956!3d-34.581681272962264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb1fa6732c4b%3A0xe0081a9aaee2c67b!2sMinisterio%20de%20Educaci%C3%B3n%20de%20la%20Ciudad%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1686840819485!5m2!1ses!2sar',
      },
      srcButton:
        'https://mapa.buenosaires.gob.ar/informacion/?lat=-34.581573&lng=-58.380459&zl=15&modo=transporte&dir=Ministerio+de+Educaci%C3%B3n+GCBA+(CABA%2C+CABA)&ilat=-34.581573&ilng=-58.380459&fid=sitios_de_interes%7C2533',
    }"
  >
  </institutional-block>
  `;
}
