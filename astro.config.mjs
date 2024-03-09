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
            { label: "Справки о несудимости", link: '/guides/digital-nomad/criminal-record-certificate' },
            {
              label: "Шенген",
              items: [
                { label: 'Получение шенгена', link: '/guides/digital-nomad/shengen' },
                { label: 'Шенген в Армении', link: '/guides/digital-nomad/shengen/armenia' }
              ]
            },
            {
              label: 'Digital Nomad', 
              items: [
                { label: "Гайды, ссылки, чаты", link: '/guides/digital-nomad/' },
              ]
            },
            {
              label: 'Startup',
              items: [
                { label: "Гайды, ссылки, чаты", link: '/guides/startup/' },
              ]
            },
          ]
        },
				{
          label: 'Налоги в Испании', 
          items: [
            { label: "Intro", link: '/guides/taxes/' },
				    { label: 'FAQ', link: 'guides/taxes/faq' },
            { label: "chapter1", link: '/guides/taxes/chapter1' },
          ],
        },
				{ label: 'Соцстрах', link: '/guides/example/' },
				{ label: 'Aутономо (ИП)', link: '/guides/example/' },
				{
					label: 'Города',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
