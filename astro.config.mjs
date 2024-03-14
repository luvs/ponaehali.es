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
				            { label: 'Вычеты — какие типы бывают и как применяются', link: '/guides/taxes/faq/deductions' },
				          ]
				        },
				        {
				          label: "Гайд по налогам от CEF",
				          items: [
				            { label: 'Введение', link: '/guides/taxes/cef-tax-guide' },
				            { label: 'Глава 1. Введение в налогообложение', link: '/guides/taxes/cef-tax-guide/chapter-01' },
				            { label: "Глава 2. Налоги и налоговые процедуры", link: '/guides/taxes/cef-tax-guide/chapter-02' },
				            { label: "Глава 3. Подоходный налог с физических лиц (IRPF)", link: '/guides/taxes/cef-tax-guide/chapter-03' },
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
				            { label: 'Местный режим Бекхема', link: '/guides/taxes/basque-country-backham' },
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
				        {
				          label: "Страна Басков",
				          items: [
				            { label: 'О стране Басков', link: '/guides/regions/basque-country' },
				            { label: 'Бильбао', link: '/guides/regions/basque-country/bilbao' },
				          ]
				        },
				      ]
				},
				    {
				      label: "Транспорт",
				      items: [
				        { label: "Гайды, ссылки, чаты", link: "/guides/autonomo" },
				        { label: "Регистрация ИП через PAE", link: "/guides/autonomo/pae" },
				        { label: "Сервисы для ведения ИП", link: "/guides/autonomo/services" },
				      ]
				    },
			],
		}),
	],
});
