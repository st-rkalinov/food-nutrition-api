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
        }
    },
    variants: {
        borderWidth: ['responsive', 'hover', 'focus'],
    },
    plugins: []
};
