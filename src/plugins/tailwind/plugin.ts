import plugin from 'tailwindcss/plugin';
import flowbitPlugin from 'flowbite/plugin';

const laravelContent = [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
    './resources/**/*.ts',

    './vendor/kalel1500/laravel-hexagonal-and-ddd-architecture-utilities/resources/**/*.js',
    './vendor/kalel1500/laravel-hexagonal-and-ddd-architecture-utilities/resources/**/*.blade.php',
    './node_modules/flowbite/**/*.js',
];

const laravelPlugin = plugin.withOptions(function (options = {}) {
    return function({ addVariant }: { addVariant: any }) {
        // Definiciones de variantes personalizadas
        addVariant('sc', '&:is(.sc *)');
    };
}, function (options: any) {
    return {
        theme: {
            extend: {
                screens: {
                    'vsm': '440px',
                },
                boxShadow: {
                    'h-1xl': '0 0 4px 1px rgba(0, 0, 0, 0.2)',
                    'hb-1xl': '0 0 4px 1px rgba(0, 0, 0)',

                    'h-2xl': '0 0 5px 2px rgba(0, 0, 0, 0.3)',
                    'hb-2xl': '0 0 5px 2px rgba(0, 0, 0)',
                }
            }
        },
    };
});

const laravelDefaultPlugins = [
    flowbitPlugin,
    laravelPlugin
];

export {
    laravelContent,
    laravelPlugin,
    laravelDefaultPlugins,
};