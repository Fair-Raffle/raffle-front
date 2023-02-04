module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,tsx}'],
	theme: {
		extend: {
			fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'bourgeois': ['Bourgeois Rounded', 'sans-serif'],
      },
      boxShadow: {
        'step': '16px 1px 92px 10px rgba(46,51,87, 0.5) inset, 0px 2px 11px 3px rgba(1,2,12, 0.468531)',
        'step-hover': '16px 1px 92px 10px rgba(46,51,87, 0.5) inset, 0px 2px 11px 3px rgba(95,109,255, 0.468531)',
        'step-head': '0px 1px 5px 1px rgba(66,99,206, 0.5) inset',
        'raffle-holder': '16px 1px 92px 10px rgba(46,51,87, 0.5) inset, 0px 2px 11px 3px rgba(1,2,12, 0.468531)',
        'uploaded': '0px 0px 6px 1px rgba(66,99,206, 0.5) inset, 0px 0px 7px rgba(0,108,255, 0.859621)',
        'wallet': '0px 1px 4px 2px rgba(112,110,150, 0.741559) inset'
      },
      backgroundImage: {
        'step': 'linear-gradient(90deg, rgba(26, 28, 42, 1) 0%, rgba(11, 12, 17, 1) 100%)',
        'step-head': 'radial-gradient(rgba(17, 20, 43, 1) 0%, rgba(9, 11, 23, 1) 100%)',
        'raffle-holder': 'linear-gradient(90deg, rgba(26, 28, 42, 1) 0%, rgba(11, 12, 17, 1) 100%)',
        'raffle-item': 'linear-gradient(270deg, rgba(51, 60, 91, 1) 0%, rgba(36, 42, 70, 1) 54%, rgba(55, 59, 87, 1) 100%)',
        'uploaded': 'radial-gradient(rgba(43, 190, 255, 1) 0%, rgba(46, 73, 255, 0.748006) 100%)',
        'blackbox': 'linear-gradient(90deg, rgba(26, 28, 42, 1) 0%, rgba(11, 12, 17, 1) 100%)',
      },
      opacity: {
        '85': '.85',
      },
      borderWidth: {
        "1":"1px"
      }
		},
	},
	plugins: [],
}