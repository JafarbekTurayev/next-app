import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'

import {appWithTranslation} from 'next-i18next'

const MyApp = ({Component, pageProps}) => <Component {...pageProps} />

export default appWithTranslation(MyApp)


// export default function MyApp({Component, pageProps}) {
//     return <Component {...pageProps} />
// }