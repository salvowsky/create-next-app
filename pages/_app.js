import '../styles/globals.css';
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: 'light',
  theme: {
    
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
   
  }
})

function MyApp({ Component, pageProps }) {
  return (
// 3. Wrap NextUIProvider with NextThemesProvider
// _app.jsx // _app.tsx
<NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
