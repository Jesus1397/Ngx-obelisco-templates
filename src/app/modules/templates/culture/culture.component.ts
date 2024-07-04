import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ONavbarModule } from 'ngx-obelisco-example/navbar';
import { OFooterComponent, OFooterModule } from 'ngx-obelisco-example/footer';
import { OCardModule } from 'ngx-obelisco-example/card';
import { OHighlightedModule } from 'ngx-obelisco-example/highlighted';
import { OButtonComponent, OButtonModule } from 'ngx-obelisco-example/button';
import { ODropdownModule } from 'ngx-obelisco-example/dropdown';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { DropdownNavigationItem } from 'ngx-obelisco-example/core/models';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component';
import { InstitutionalBlockComponent } from 'src/app/components/institutional-block/institutional-block.component';
import { MapInstitutionalData } from 'src/app/components/models/institutional-block.models';

export enum TagTypes {
  Danger = 'danger',
  Secondary = 'secondary',
}

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ONavbarModule,
    OFooterModule,
    OCardModule,
    OHighlightedModule,
    OButtonModule,
    PageHeaderComponent,
    ODropdownModule,
    ONavModule,
    InstitutionalBlockComponent,
  ],
})
export class CultureComponent {
  //Page Header
  public institutionalDropdownItems: DropdownNavigationItem[] = [
    {
      text: 'Ministerio de Cultura',
      link: '#',
    },
    {
      text: 'Subsecretaría Gestión Cultural',
      link: '#',
    },
    {
      text: 'Subsecretaría de Políticas Culturales y Nuevas Audiencias',
      link: '#',
    },
    {
      text: 'Ente Autárquico Teatro Colón',
      link: '#',
    },
    {
      text: 'Organigrama',
      link: '#',
    },
    {
      text: 'Guia de Funcionarios',
      link: '#',
    },
    {
      text: 'Contacto',
      link: '#',
    },
  ];

  public transparencyDropdownItems: DropdownNavigationItem[] = [
    {
      text: 'Escalas salariales',
      link: '#',
    },
    {
      text: 'Sueldos de funcionarios',
      link: '#',
    },
    {
      text: 'Concurso de personal',
      link: '#',
    },
    {
      text: 'Presupuesto abierto',
      link: '#',
    },
    {
      text: 'Compras y contrataciones de bienes y servicios',
      link: '#',
    },
    {
      text: 'Informes de auditoría',
      link: '#',
    },
    {
      text: 'Trámites y servicios',
      link: '#',
    },
    {
      text: 'Declaraciones juradas',
      link: '#',
    },
  ];

  public navOpening = [
    {
      title: 'Protocolo de apertura',
      route: '#',
    },
  ];

  //tarjetas Espacios Culturales
  public itemsCulturalSpaces = [
    {
      title: 'Museos',
      description: 'Conocé los once museos que la Ciudad tiene para vos.',
      route: '/',
      image: {
        src: '../../../../assets/templates/cultura/cultura-7.png',
        alt: 'Descripción de imagen',
      },
    },
    {
      title: 'Centro Cultural Recoleta',
      description:
        'Conocé los espacios para exhibiciones, obras, conciertos, conferencias y más.',
      route: '/',
      image: {
        src: '../../../../assets/templates/cultura/cultura-8.png',
        alt: 'Descripción de imagen',
      },
    },
    {
      title: 'El Cultural San Martín',
      description:
        'Conocé toda la programación y participa de cursos y talleres.',
      route: '/',
      image: {
        src: '../../../../assets/templates/cultura/cultura-9.png',
        alt: 'Descripción de imagen',
      },
    },
    {
      title: 'Usina del Arte',
      description:
        'Visitá el centro cultural multidisciplinario, declarado Patrimonio histórico dela Ciudad.',
      route: '/',
      image: {
        src: '../../../../assets/templates/cultura/cultura-10.png',
        alt: 'Descripción de imagen',
      },
    },
    {
      title: 'Teatro Colón',
      description: 'Visitá uno de los teatros más importante del mundo.',
      route: '/',
      image: {
        src: '../../../../assets/templates/cultura/cultura-11.png',
        alt: 'Descripción de imagen',
      },
    },
    {
      title: 'Estudio Urbano',
      description:
        'Capacitate en oficios vinculados con la música y herramientas de gestión para proyectos artísticos.',
      route: '/',
      image: {
        src: '../../../../assets/templates/cultura/cultura-12.png',
        alt: 'Descripción de imagen',
      },
    },
    {
      title: 'Complejo Teatral',
      description: 'Nuclea los cinco teatros públicos de la Ciudad.',
      route: '/',
      image: {
        src: '../../../../assets/templates/cultura/cultura-13.png',
        alt: 'Descripción de imagen',
      },
    },
    {
      title: 'Centro Cultural 25 de mayo',
      description:
        'Punto de encuentro y desarrollo cultural y creativo para los vecinos.',
      route: '/',
      image: {
        src: '../../../../assets/templates/cultura/cultura-14.png',
        alt: 'Descripción de imagen',
      },
    },
    {
      title: 'Música',
      description:
        'Disfrutá de la Banda Sinfónica, la Orquesta de Tango y los talleres de Estudio Urbano.',
      route: '/',
      image: {
        src: '../../../../assets/templates/cultura/cultura-15.png',
        alt: 'Descripción de imagen',
      },
    },
    {
      title: 'Casco histórico',
      description:
        'Inscribite en jornadas, visistas guiadas y participá de la formación en artes y oficios de la escuela taller.',
      route: '/',
      image: {
        src: '../../../../assets/templates/cultura/cultura-16.png',
        alt: 'Descripción de imagen',
      },
    },
    {
      title: 'Enseñanza Artística',
      description:
        'Conocé la oferta de carreras, cursos y talleres de los espacios de enseñanza artística que la Ciudad tiene para vos.',
      route: '/',
      image: {
        src: '../../../../assets/templates/cultura/cultura-17.png',
        alt: 'Descripción de imagen',
      },
    },
    {
      title: 'Espacio Casa de la Cultura',
      description:
        'Antigua sede del diario La Prensa, declarado Monumento Histórico Nacional.',
      route: '/',
      image: {
        src: '../../../../assets/templates/cultura/cultura-18.png',
        alt: 'Descripción de imagen',
      },
    },
    {
      title: 'Artes visuales',
      description:
        'Conocé la oferta cultural de las artes visuales de la Ciudad.',
      route: '/',
      image: {
        src: '../../../../assets/templates/cultura/cultura-19.png',
        alt: 'Descripción de imagen',
      },
    },
  ];

  //Mapa de bloque institucional
  public cultureMap: MapInstitutionalData = {
    description: 'Dirección: Av. de Mayo 575',
    iframe: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.838272722172!2d-58.3770198243719!3d-34.608250872952574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad3a824ceeb%3A0x17b5852c3ae7353c!2sAv.%20de%20Mayo%20575%2C%20C1059%20CABA!5e0!3m2!1ses!2sar!4v1686852040537!5m2!1ses!2sar',
    },
    srcButton:
      'https://mapa.buenosaires.gob.ar/comollego/?lat=-34.608485&lng=-58.374404&zl=15&modo=transporte&dir=De+Mayo+Av.+575',
  };

  public shortcuts = [
    {
      title: 'Talleres',
      description: 'Participá de talleres en todos los barrios.',
      icon: 'palette',
    },
    {
      title: 'Impulso Cultural',
      description: 'Solicitá subsidios y apoyo para tus proyectos.',
      icon: 'groups',
    },
    {
      title: 'Pase Cultural',
      description: 'Información sobre medidas, testeos y vacunación.',
      icon: 'confirmation_number',
    },
    {
      title: 'Cultura independiente',
      description: 'Conocé los espacios culturales independientes.',
      icon: 'theater_comedy',
    },
    {
      title: 'Biblioteca',
      description: 'Ingresá a la red de Bibliotecas de la Ciudad.',
      icon: 'bx bx-book card-icon',
    },
    {
      title: 'Barrios Creativos',
      description: 'Participá de la programación en tu barrio.',
      icon: 'map',
    },
  ];

  public cultureCards = [
    {
      title: 'Disfrutemos BA',
      description:
        'Discover the cultural agenda and everything you can do in the City.',
      image: {
        src: '../../../../assets/templates/cultura/cultura-1.png',
        alt: 'Image description',
      },
    },
    {
      title: 'Promotion of Books, Libraries and Culture',
      description:
        'Discover the cultural program in different parts of the City.',
      image: {
        src: '../../../../assets/templates/cultura/cultura-2.png',
        alt: 'Image description',
      },
    },
    {
      title: 'Data Cultura',
      description:
        'Access graphs, maps and statistics about culture in the City.',
      image: {
        src: '../../../../assets/templates/cultura/cultura-3.png',
        alt: 'Image description',
      },
    },
    {
      title: 'Heritage',
      description:
        'Learn about the activities and services of the cultural heritage of the City.',
      image: {
        src: '../../../../assets/templates/cultura/cultura-4.png',
        alt: 'Image description',
      },
    },
    {
      title: 'Festivals',
      description:
        'Participate in Ciudad Emergente, Tango BA, Bafici and more.',
      image: {
        src: '../../../../assets/templates/cultura/cultura-5.png',
        alt: 'Image description',
      },
    },
    {
      title: 'BA Audiovisual',
      description:
        'Learn about the plan that supports the audiovisual sector of the City.',
      image: {
        src: '../../../../assets/templates/cultura/cultura-6.png',
        alt: 'Image description',
      },
    },
  ];

  public news = [
    {
      title: 'All the proposals to enjoy the weekend in the City',
      description:
        'The highlights include the Tourism Weekend, the International Museum Day, the BA Open finals and much more.',
      image: {
        src: '../../../../assets/templates/cultura/noticias-cultura-1.png',
        alt: 'Image description',
      },
      tags: [
        {
          name: 'Culture',
          type: TagTypes.Secondary,
        },
      ],
      publicationDate: 'Publication date',
    },
    {
      title: 'Activities to enjoy the last days of the Book Fair',
      description:
        'There are talks, workshops, artistic interventions, film series and literary competitions. More than 1,500 authors and 1,000 exhibitors are participating in the 47th edition of the Buenos Aires International Book Fair.',
      image: {
        src: '../../../../assets/templates/cultura/noticias-cultura-2.png',
        alt: 'Image description',
      },
      tags: [
        {
          name: 'Culture',
          type: TagTypes.Danger,
        },
        {
          name: 'tag',
          type: TagTypes.Danger,
        },
      ],
      publicationDate: 'Publication date',
    },
    {
      title: 'Last days to enjoy BAFICI',
      description:
        'It is one of the most important in Latin America, it will have 450 functions in 15 venues and can be seen online throughout Argentina. The 23rd edition of the Buenos Aires Independent Film Festival began on March 17 and will run until March 31.',
      image: {
        src: '../../../../assets/templates/cultura/noticias-cultura-3.png',
        alt: 'Image description',
      },
      tags: [
        {
          name: 'Culture',
          type: TagTypes.Secondary,
        },
        {
          name: 'tag',
          type: TagTypes.Secondary,
        },
      ],
      publicationDate: 'Publication date',
    },
  ];
}
