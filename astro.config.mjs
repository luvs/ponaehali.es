import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Понаехали в Испанию',
			favicon: './favicon.ico',
			defaultLocale: 'root',
			locales: {
        root: {
          label: 'Russian',
          lang: 'ru',
        },
      },
			social: {
        telegram: 'https://t.me/ponaehali_es',
				github: 'https://github.com/luvs/ponaehali.es',
			},
		  customCss: [
        './src/styles/custom.css',
      ],
 	    logo: {
        src: './src/assets/flag.png',
      },
			sidebar: [
				{ label: 'Welcome', link: 'guides/welcome' },
        {
          label: 'Получение ВНЖ',
          items: [
            {
              label: "Шенген",
              items: [
                { label: 'Получение шенгена', link: '/guides/visa/shengen' },
                { label: 'Шенген в Армении', link: '/guides/visa/shengen/armenia' }
              ]
            },
            {
              label: 'Digital Nomad',
              items: [
                { label: "Гайды, ссылки, чаты", link: '/guides/visa/digital-nomad/' },
                { label: "Справки о несудимости", link: '/guides/visa/criminal-record-certificate' },
              ]
            },
            {
              label: 'Startup',
              items: [
                { label: "Гайды, ссылки, чаты", link: '/guides/visa/startup/' },
              ]
            },
          ]
        },
        {
          label: 'Налоги в Испании',
          items: [
            { label: "Гайды, ссылки, чаты", link: '/guides/taxes/' },
            { label: "Калькулятор", link: '/guides/taxes/calculator' },
            { label: 'Глоссарий', link: '/guides/taxes/glossary' },
            { label: 'Законы', link: '/guides/taxes/laws' },
            {
              label: "FAQ",
              items: [
                { label: 'Как работает прогрессивная шкала', link: '/guides/taxes/faq/progressive' },
                { label: 'Вычеты — какие типы бывают и как применяются', link: '/guides/taxes/faq/deductions-types' },
                { label: 'Вычеты — список', link: '/guides/taxes/faq/deductions' },
                { label: 'Как получить цифровой сертификат (FNMT, cl@ve)', link: '/guides/taxes/faq/fnmt' },
              ]
            },
            {
              label: "Modelo",
              items: [
                { label: "Какие modelo бывают и когда надо сдавать", link: '/guides/taxes/modelo' },
                { label: "Modelo 030", link: '/guides/taxes/modelo/modelo-030' },
                { label: "Modelo 100", link: '/guides/taxes/modelo/modelo-100' },
                { label: "Modelo 130", link: '/guides/taxes/modelo/modelo-130' },
                { label: "Modelo 303", link: '/guides/taxes/modelo/modelo-303' },
                { label: "Modelo 347", link: '/guides/taxes/modelo/modelo-347' },
                { label: "Modelo 349", link: '/guides/taxes/modelo/modelo-349' },
                { label: "Modelo 720", link: '/guides/taxes/modelo/modelo-720' },
                { label: "Modelo 721", link: '/guides/taxes/modelo/modelo-721' },
              ]
            },
            {
              label: "Гайд по налогам от CEF",
              items: [
                { label: 'Введение', link: '/guides/taxes/cef-tax-guide' },
                { label: 'Глава 1. Введение в налогообложение', link: '/guides/taxes/cef-tax-guide/chapter-01' },
                { label: "Глава 2. Налоги и налоговые процедуры", link: '/guides/taxes/cef-tax-guide/chapter-02' },
                { label: "Глава 3. Подоходный налог с физических лиц (IRPF)", link: '/guides/taxes/cef-tax-guide/chapter-03' },
                { label: "Глава 4. Корпоративное налогообложение", link: '/guides/taxes/cef-tax-guide/chapter-04' },
              ]
            },
            {
              label: "Соцстрах",
              items: [
                { label: 'FAQ по соцстраху', link: '/guides/taxes/social-security' },
                { label: 'Cоцстрах в найме', link: '/guides/taxes/social-security/worker' },
                { label: 'Cоцстрах у ИП', link: '/guides/taxes/social-security/autonomo' },
              ]
            },
            {
              label: "Страна Басков",
              items: [
                { label: 'Налоги в Стране Басков', link: '/guides/taxes/basque-country' },
              ]
            },
          ],
        },
        {
          label: "Autonomo (ИП)",
          items: [
            { label: "Гайды, ссылки, чаты", link: "/guides/autonomo" },
            { label: "Регистрация ИП через PAE", link: "/guides/autonomo/pae" },
            { label: "Сервисы для ведения ИП", link: "/guides/autonomo/services" },
          ]
        },
				{
					label: 'Города',
				      items: [
  				      { label: "Мадрид", link: '/guides/regions/madrid' },
  				      { label: "Барселона", link: '/guides/regions/barcelona' },
			          { label: "Валенсия", link: '/guides/regions/valencia' },
  				      { label: "Страна Басков, Бильбао", link: '/guides/regions/basque-country' },
				      ]
				},
        {
          label: "Образование",
          items: [
            { label: "Гайды, ссылки, чаты", link: "/guides/education" },
          ]
        },
        {
          label: "Транспорт",
          items: [
            { label: "Гайды, ссылки, чаты", link: "/guides/transport" },
            {
              label: "Водительские права",
              items: [
                { label: 'Общая информация', link: '/guides/transport/pdd' },
                {
                  label: "Учебник от PracticaTest",
                  items: [
                    { label: 'Учебник от PracticaTest', link: '/guides/transport/pdd/practicatest' },
                    { label: 'Дорожные знаки', link: '/guides/transport/pdd/practicatest/signs' },
                    { label: 'Глава 1. Типы транспортных средств (Vehicle Types)', link: '/guides/transport/pdd/practicatest/chapter-01' },
                    { label: 'Глава 2. Использование дорог общего пользования (Use of Public Roads)', link: '/guides/transport/pdd/practicatest/chapter-02' },
                    { label: 'Глава 3. Скорость (Speed)', link: '/guides/transport/pdd/practicatest/chapter-03' },
                    { label: 'Глава 4. Маневры (Maneuvers)', link: '/guides/transport/pdd/practicatest/chapter-04' },
                    { label: 'Глава 5. Преимущественное право проезда (Right of Way)', link: '/guides/transport/pdd/practicatest/chapter-05' },
                    { label: 'Глава 6. Перевозка людей и грузов (Transport of People and Goods)', link: '/guides/transport/pdd/practicatest/chapter-06' },
                    { label: 'Глава 7. Освещение и оптические сигналы (Lighting and Optical Signals)', link: '/guides/transport/pdd/practicatest/chapter-07' },
                    { label: 'Глава 8. Дорожные сигналы (Traffic Signals)', link: '/guides/transport/pdd/practicatest/chapter-08' },
                    { label: 'Глава 9. Водительское удостоверение (Driver licence)', link: '/guides/transport/pdd/practicatest/chapter-09' },
                    { label: 'Глава 10. Физическое состояние водителя (Physical Condition of the Driver)', link: '/guides/transport/pdd/practicatest/chapter-10' },
                    { label: 'Глава 11. Другие участники дорожного движения (Other Users)', link: '/guides/transport/pdd/practicatest/chapter-11' },
                    { label: 'Глава 12. Видимость и опасности на дороге (Visibility and Road Hazards)', link: '/guides/transport/pdd/practicatest/chapter-12' },
                    { label: 'Глава 13. Сцепление, Шины и Тормоза (Traction, Tires and Brakes)', link: '/guides/transport/pdd/practicatest/chapter-13' },
                    { label: 'Глава 14. Безопасное и экономичное вождение (Safety and Economical Driving)', link: '/guides/transport/pdd/practicatest/chapter-14' },
                    { label: 'Глава 15. Аварии и Первая Помощь (Accidents and First Aid)', link: '/guides/transport/pdd/practicatest/chapter-15' },
                    { label: 'Глава 16. Техническое обслуживание автомобиля (Automobile Maintenance)', link: '/guides/transport/pdd/practicatest/chapter-16' },
                  ]
                },
                {
                  label: "Учебник от Todotest",
                  items: [
                    { label: 'Об учебнике', link: '/guides/transport/pdd/todotest' },
                    { label: 'Тема 0. Общие определения', link: '/guides/transport/pdd/todotest/tema-00' },
                    { label: 'Тема 1. Общие правила поведения', link: '/guides/transport/pdd/todotest/tema-01' },
                    { label: 'Тема 2. Вес, габариты, перевозка людей', link: '/guides/transport/pdd/todotest/tema-02' },
                    { label: 'Тема 3. Безопасность на дороге', link: '/guides/transport/pdd/todotest/tema-03' },
                    { label: 'Тема 4. Трасса', link: '/guides/transport/pdd/todotest/tema-04' },
                    { label: 'Тема 5. Скорость', link: '/guides/transport/pdd/todotest/tema-05' },
                    { label: 'Тема 6. Перекрестки', link: '/guides/transport/pdd/todotest/tema-06' },
                    { label: 'Тема 7. Манёвры', link: '/guides/transport/pdd/todotest/tema-07' },
                    { label: 'Тема 8. Освещение', link: '/guides/transport/pdd/todotest/tema-08' },
                    { label: 'Тема 9. Сигналы', link: '/guides/transport/pdd/todotest/tema-09' },
                    { label: 'Тема 10. Документы, элементы управления и настройки автомобиля', link: '/guides/transport/pdd/todotest/tema-10' },
                    { label: 'Тема 11. Несчастные случаи', link: '/guides/transport/pdd/todotest/tema-11' },
                    { label: 'Тема 12. Механика и техническое обслуживание', link: '/guides/transport/pdd/todotest/tema-12' },
                    { label: 'Тема 13. Техника вождения', link: '/guides/transport/pdd/todotest/tema-13' },
                  ]
                },
              ]
            },
            { label: "Велосипеды", link: "/guides/transport/bicycle" },
          ]
        },
			],
		}),
	],
});
