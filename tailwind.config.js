/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './node_modules/flowbite-react/**/*.js',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   // plugins: [
   //    require("flowbite/plugin")
   // ],
   theme: {
      extend: {
         colors: {
            orange: '#FF4500',
            softOrange: '#F2B199',
            blue: '#86AEE1',
            softt: '#FFE6D6',
            black: {
               80: '#242428',
               50: '#3D3D3D',
            },
            gray: {
               300: '#E2E8F0',
            },
         },
         backgroundImage: {
            'metric-pattern': "url('/images/metricBG.png')",
            'userPannel-pattern': "url('/images/userPannelBG.png')",
         },
      },
   },
   plugins: [],
};
