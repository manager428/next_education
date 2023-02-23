import GlobalStyle from './GlobalStyle'
import { Media, MediaContextProvider } from './MediaProvider'
import ThemeProvider from './ThemeProvider'
import themes from './themes'

// TODO: change when use multiple themes
const theme = themes.main

export { GlobalStyle, Media, MediaContextProvider, theme, ThemeProvider }

export default themes
