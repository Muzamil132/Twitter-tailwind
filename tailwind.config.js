module.exports = {
    purge: ['./src/**/*.js', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {

        width:{
          '300px':  "300px"
        },
        colors: {
          // transparent: 'transparent',
          // current: 'currentColor',
          // blue: '#1DA1F2',
          // lb: '#BBDFEA',
          // black: '#14171A',
          // tb: '#000000',
          // white: '#FFFFFF',
          // dg: '#657786',
          // 'light-gray': '#AAB8C2',
          // elg: '#E1E8ED',
          // eelg: '#F5F8FA',
          'tw-blue':'#1DA1F2',
          'dark-main':'#15202b',
          'dark-second':'#192734',
          'dark-third':'#22303c',
          'tw-white':'#ffffff',
          'tw-border':'#657786'
        },
       }
     },
     variants: {},
     plugins: [],
     darkMode: 'class',

   }