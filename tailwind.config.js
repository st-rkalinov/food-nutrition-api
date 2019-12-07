module.exports = {
    theme: {
        extend: {
            width: {
                '96': '24rem'
            },
            zIndex: {
                '-1': -1,
            },
            screens: {
              'sm': '576px',
              // => @media (min-width: 576px) { ... }

              'md': '768px',
              // => @media (min-width: 768px) { ... }

              'lg': '992px',
              // => @media (min-width: 992px) { ... }

              'xl': '1200px',
              // => @media (min-width: 1200px) { ... }
            },
            inset: {
                '1/2': '50%',
                '1/3': '33.33%',
                '1/4': '25%',
            }
        }
    },
    variants: {
        borderWidth: ['responsive', 'hover', 'focus'],
    },
    plugins: []
};
