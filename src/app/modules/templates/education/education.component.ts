import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ONavbarModule } from 'ngx-obelisco-example/navbar';
import { OFooterModule } from 'ngx-obelisco-example/footer';
import { ODropdownModule } from 'ngx-obelisco-example/dropdown';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { OCardModule } from 'ngx-obelisco-example/card';
import { OHighlightedModule } from 'ngx-obelisco-example/highlighted';
import { OButtonModule } from 'ngx-obelisco-example/button';
import { OAccessModule } from 'ngx-obelisco-example/access';
import { OMapModule } from 'ngx-obelisco-example/map';
import {
  DropdownNavigationItem,
  Media,
} from 'ngx-obelisco-example/core/models';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component';
import { InstitutionalBlockComponent } from 'src/app/components/institutional-block/institutional-block.component';
import { MapInstitutionalData } from 'src/app/components/models/institutional-block.models';

interface SectionItem {
  title: string;
  description: string;
  image: string;
  date?: string;
  badge?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    ONavbarModule,
    OFooterModule,
    OCardModule,
    OHighlightedModule,
    OButtonModule,
    OAccessModule,
    OMapModule,
    PageHeaderComponent,
    ONavModule,
    ODropdownModule,
    InstitutionalBlockComponent,
  ],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  public title: string = 'miEscuela';

  public description: string =
    'Permite gestionar las tareas administrativas y académicas de las escuelas';

  public picture: Media = {
    src: 'https://gcba.github.io/Obelisco/panel/destacado.jpeg',
  };

  public shortcuts = [
    {
      icon: 'group',
      title: 'Estudiantes',
      description: 'Inscripción escolar, boleto estudiantil y programas.',
    },
    {
      icon: 'co_present',
      title: 'Docentes',
      description: 'Capacitación, información administrativa, beneficios.',
    },
    {
      icon: 'apartment',
      title: 'Escuelas',
      description: 'Áreas y Programas.',
    },
    {
      icon: 'family_restroom',
      title: 'Familias',
      description: 'Acompañamos a las familias en el recorrido educativo.',
    },
  ];

  public sectionOne: SectionItem[] = [
    {
      title: 'Hablemos de educación: La escuela primaria que queremos',
      description:
        'Más de 14.600 personas dejaron sus aportes en el proceso participativo para la transformación de la escuela primaria en la Ciudad',

      image:
        'https://gcba.github.io/obelisco-demo/assets/tarjetas/educacion/card-1.png',
    },
    {
      title: 'Educación para el trabajo',
      description:
        'Encontrá la formación para desarrollarte profesionalmente. ¡Inscripciones abiertas!',

      image:
        'https://gcba.github.io/obelisco-demo/assets/tarjetas/educacion/card-2.png',
    },
    {
      title: 'Fluidez y compresión lectora',
      description:
        'El Programa fortalece la lecto-comprensión de los niños y las niñas en tercer grado.',

      image:
        'https://gcba.github.io/obelisco-demo/assets/tarjetas/educacion/card-3.png',
    },
    {
      title: 'Práticas educativas',
      description:
        'Experiencias pedagógicas para acompañar la transición al mundo del trabajo y los estudiantes',

      image:
        'https://gcba.github.io/obelisco-demo/assets/tarjetas/educacion/card-4.png',
    },
    {
      title: 'Educar en comunidad',
      description:
        'Conocé los aprendizajes esperados, los resultados de las evaluaciones y explorá las propuestas para acompañar en casa.',

      image:
        'https://gcba.github.io/obelisco-demo/assets/tarjetas/educacion/card-5.png',
    },
    {
      title: 'Terminá la secundaria',
      description:
        'Conocé cómo sumarte para terminar la secundaria gratis, virtual y desde donde vivas.',

      image:
        'https://gcba.github.io/obelisco-demo/assets/tarjetas/educacion/card-6.png',
    },
  ];

  public sectionTwo: SectionItem[] = [
    {
      title: 'Aprendé Programando',
      description:
        'Sumate al mundo de la programación con nuestros cursos sobre tecnología.',

      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_horizontal/public/media/image/2022/03/17/6a3ce1dc50b02a37feb1480cfb15aaaaed89ea5d.jpg?itok=X9g1z9JZ',
    },
    {
      title: 'Secundaria del Futuro',
      description:
        'Profundiza la NES y propone un modelo de escuela más inclusivo que se adapte a las innovaciones tecnológicas y los nuevos formatos de enseñanza/aprendizaje.',

      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_horizontal/public/media/image/2017/10/24/42a68b5208b10851a686de34a99b08d8e7237de0.jpg?itok=_-RNYUHk',
    },
    {
      title: 'Escuela Abierta',
      description:
        'Es un espacio de encuentro entre chicos, familia y comunidad en la escuela.',

      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_horizontal/public/media/image/2015/08/11/4c97c15a4adba6043ae23b98dccf41f7d828f580.jpg?itok=00Opnd5E',
    },
    {
      title: 'Plan Sarmiento',
      description:
        'El camino hacia la innovación en los procesos de enseñanza y aprendizaje en el marco de los desafíos de una sociedad digital en continua expansión.',

      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_horizontal/public/media/image/2022/08/10/cdfe8acc9199ca47d999175b3b4dc277daddbf4c.jpeg?itok=9mLlKMBj',
    },
    {
      title: 'Matriculación en escuelas privadas - Ley 2681',
      description:
        'La matriculación o rematriculación no podrá negarse sin causa en establecimientos educativos de gestión privada.',

      image:
        'https://gcba.github.io/obelisco-demo/assets/tarjetas/educacion/card-5.png',
    },
  ];

  public sectionThree: SectionItem[] = [
    {
      title: '54 Nuevas Escuelas',
      description: 'Mirá el Plan del Compromiso de Gobierno.',
      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_horizontal/public/media/image/2021/08/27/34aa0800b616b5c2ac62ccd49de7fc6a13e2341f.jpg?itok=Lz284ZVV',
    },
    {
      title: 'Materiales didácticos',
      description:
        'Elaboramos documentos curriculares, orientaciones y propuestas de enseñanza para la comunidad educativa.',
      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_horizontal/public/media/image/2018/10/02/14a5476e561c2c20c5c11c6c3b953ccc24e9d602.jpg?itok=5k9K7w92',
    },
    {
      title: 'Agencia de Aprendizaje a lo Largo de la Vida',
      description:
        'Oferta de formación para jóvenes y adultos. Conocé nuestras propuestas y desarrollá tu potencial.',
      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_horizontal/public/media/image/2020/06/25/63500184e1f870563cee23619d118178d2d97d33.jpg?itok=Oa5BffY5',
    },
    {
      title: 'Escuelas Verdes',
      description:
        'Fomentamos el desarrollo sustentable a través de la Educación y la Gestión Ambiental en las escuelas.',
      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_horizontal/public/media/image/2017/06/16/8efeb8cb0ebce7dbbb87d2f55a5a4f252f0d7c7e.jpg?itok=AOR-YFyt',
    },
    {
      title: 'Presencialidad en las escuelas',
      description: 'Balances y desafíos que abordamos durante 2020 y 2021.',
      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_horizontal/public/media/image/2021/12/09/115e731405c32dd2d0ee87a17fe5113b3e0bf38d.jpg?itok=FaRpc7xp',
    },
    {
      title: 'Calidad y Equidad Educativa',
      description:
        'Producimos estadísticas del sistema educativo para mejorar la calidad y la equidad educativa de la Ciudad de Buenos Aires.',
      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_horizontal/public/media/image/2016/04/06/43b7fd1367af075d11e49728f3fc301fdc3e6350.jpg?itok=Yn3VuE5T',
    },
  ];

  public sectionFour: SectionItem[] = [
    {
      title: 'Ciudadanía Global',
      description:
        'Promovemos diversos recorridos de enseñanza y aprendizaje potenciados por tecnologías digitales y desde el enfoque de los Objetivos del Desarrollo Sostenible.',
      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_horizontal/public/media/image/2019/10/08/b9403462cd681063f2a0eae62fec085e5d163680.jpg?itok=EM41P43H',
    },
    {
      title: 'Consulta de Establecimientos',
      description:
        'Buscador de instituciones educativas de gestión estatal y privada.',
      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_horizontal/public/media/image/2018/01/23/d74ac6d18c2aa55204dfbf798948f7affc7fcb8e.jpg?itok=N6bMb_al',
    },
    {
      title: 'Centro de Reciclado Creativo',
      description:
        'Destinado a docentes y estudiantes de nivel inicial y niños de 3 a 5 años. Fomenta como recurso valioso a los materiales de descarte.',
      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_horizontal/public/media/image/2017/01/23/eb73a9957901ae5bc466cad9ae759de4d2dce71a.jpg?itok=VKbf-5sr',
    },
    {
      title: 'Educación inclusiva en la escuela',
      description:
        'Conocé los derechos de los niños, niñas y adolescentes con discapacidad a ser matriculados en escuelas comunes de gestión privada.',
      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_horizontal/public/media/image/2021/06/24/e6b8778b36448f4cf140d37a3d952e884363a9b1.jpg?itok=Z9rhjv8I',
    },
    {
      title: 'Gestión Cultural',
      description:
        'Visitá los Museos Quinquela Martín y Bernasconi, conocé el Programa Huellas de la Escuela y el Museo de las Escuelas y todas nuestras actividades culturales.',
      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_horizontal/public/media/image/2014/09/26/762ef83a61cd612b2a8ce2642b48b4a2dfa2d0ff.jpg?itok=Rlvf2iSJ',
    },
    {
      title: 'Pase Cultural',
      description:
        'Descubrí la nueva tarjeta cultural que ofrece beneficios exclusivos para estudiantes de 4º, 5º, 6º año y docentes de escuelas públicas de la Ciudad.',
      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_horizontal/public/media/image/2019/03/12/b997ac43ec48a30b263729696870a7bb99299530.jpg?itok=UlAgDGOv',
    },
  ];

  public sectionFive: SectionItem[] = [
    {
      title: 'Inscripciones para las Tecnicaturas Superiores',
      description:
        'Rodríguez Larreta les tomó la Promesa a la Bandera a más de 7.000 alumnos',
      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_img_top/public/2023-06/WhatsApp%20Image%202023-06-14%20at%2011.44.36.jpeg?itok=0oycMggq',
      badge: 'EDUCACIÓN',
      date: '22/04/2022',
    },
    {
      title: 'Continúan abiertas las inscripciones para Codo a Codo 2023',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed',
      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_img_top/public/2023-06/Iniciacion-a-la-programacion-1536x1024.jpg?itok=Yj3j60A2',
      badge: 'EDUCACIÓN',
      date: '22/04/2022',
    },
    {
      title: 'Día Internacional contra el Bullying',
      description:
        'Creá Tu Futuro, la feria que busca mejorar la empleabilidad de jóvenes y adultos',
      image:
        'https://buenosaires.gob.ar/sites/default/files/styles/card_img_top/public/2023-05/Feria%20Cre%C3%A1%20tu%20futuro%20D%C3%ADa%202_015.jpg?itok=FNgMQyvp',
      badge: 'ETIQUETA',
      date: '22/04/2022',
    },
  ];

  //Page Header
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

  //Bloque institucional
  public educationMap: MapInstitutionalData = {
    description: 'Dirección: Carlos H. Perette 750.',
    iframe: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.888755725674!2d-58.38227022454956!3d-34.581681272962264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb1fa6732c4b%3A0xe0081a9aaee2c67b!2sMinisterio%20de%20Educaci%C3%B3n%20de%20la%20Ciudad%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1686840819485!5m2!1ses!2sar',
    },
    srcButton:
      'https://mapa.buenosaires.gob.ar/informacion/?lat=-34.581573&lng=-58.380459&zl=15&modo=transporte&dir=Ministerio+de+Educaci%C3%B3n+GCBA+(CABA%2C+CABA)&ilat=-34.581573&ilng=-58.380459&fid=sitios_de_interes%7C2533',
  };

  sections = [
    {
      title: 'Conocé nuestros programas',
      items: this.sectionOne,
      isHorizontal: false,
    },
    {
      title: 'Lo más consultado',
      items: this.sectionTwo,
      isHorizontal: true,
    },
    {
      title: 'Destacadas',
      items: this.sectionThree,
      isHorizontal: true,
    },
    {
      title: 'Conocé más',
      items: this.sectionFour,
      isHorizontal: true,
    },
    {
      title: 'Noticias',
      items: this.sectionFive,
      isHorizontal: false,
      link: '#',
    },
  ];
}
