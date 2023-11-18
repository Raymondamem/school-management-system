module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // This enables dark mode
	theme: {
		extend: {
			colors: {
				dark: {
					DEFAULT: '#1F2937',
					100: '#111827',
					200: '#1F2937',
					300: '#374151',
					400: '#4B5563',
					500: '#6B7280',
					600: '#9CA3AF',
					700: '#D1D5DB',
					800: '#E5E7EB',
					900: '#F3F4F6',
				},
			},
			backgroundImage: {
				'hero-pattern': "url('/imgs/BingWallpaper.jpg')",
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
