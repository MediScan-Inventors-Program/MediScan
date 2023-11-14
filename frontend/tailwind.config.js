/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': '#fcfcfd',
        'primary': {
          'DEFAULT': '#652f98',
          '50': '#faf6fe',
          '100': '#f2eafd',
          '200': '#e8dafa',
          '300': '#d6bcf6',
          '400': '#bd91ef',
          '500': '#a466e6',
          '600': '#8d47d6',
          '700': '#7834bc',
          '800': '#652f98',
          '900': '#54277c',
          '950': '#38115a',
        },
        'accent': {
          'DEFAULT': '#a0319e',
          '50': '#fdf5fe',
          '100': '#faebfc',
          '200': '#f5d6f8',
          '300': '#eeb6f1',
          '400': '#e58ae8',
          '500': '#d55dd8',
          '600': '#bc3dbc',
          '700': '#a0319e',
          '800': '#7f297c',
          '900': '#692666',
          '950': '#440e41',
        },
        'secondary': {
          'DEFAULT': '#ededed',
          '50': '#f8f8f8',
          '100': '#ededed',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
        'text': {
          'DEFAULT': '#030203',
          '50': '#f9f6f9',
          '100': '#f3ebf3',
          '200': '#e3d3e4',
          '300': '#caadcc',
          '400': '#ac80b0',
          '500': '#926097',
          '600': '#7a4c7d',
          '700': '#643e66',
          '800': '#543656',
          '900': '#483149',
          '950': '#030203',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter Variable', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}

