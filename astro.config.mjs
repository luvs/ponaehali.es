import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Понаехали в Испанию',
			social: {
				github: 'https://github.com/luvs/ponaehali.es',
			},
			sidebar: [
				{ label: 'FAQ', link: 'guides/faq' },
				{
					label: 'Гайды',
					items: [
						{ 
              label: 'Налоги', 
              items: [
                { label: "Intro", link: '/guides/taxes/' },
                { label: "chapter1", link: '/guides/taxes/chapter1' },
              ],
            },
						{ label: 'Соцстрах', link: '/guides/example/' },
						{ label: 'Aутономо (ИП)', link: '/guides/example/' },
					],
				},
				{
					label: 'Города',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
