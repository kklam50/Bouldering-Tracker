import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
          main: '#212121',
          dark: '#212121',
          contrastText: 'rgba(255, 255, 255, 0.822)',
        },
        secondary: {
          light: '#0066ff',
          main: '#0044ff',
        },
        // Provide every color token (light, main, dark, and contrastText) when using
        // custom colors for props in Material UI's components.
        // Then you will be able to use it like this: `<Button color="custom">`
        // (For TypeScript, you need to add module augmentation for the `custom` value)
        custom: {
          light: '#32a852',
          main: 'rgb(224, 224, 224)',
          dark: '#ef6c00',
        //   contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        accent: {
            main: '#263238',
            contrastText: '#FDFCFC'
        },
        form: {
          background: "#383838",
          borderColor: "#4f4f4f",
          text: "rgba(255, 255, 255, 0.822)"
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 4.5,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,

    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            backgroundColor: "#383838",
            color: "rgba(255, 255, 255, 0.822)",
            borderRadius: "0.5rem"
          }
        }
      },
      MuiList: {
        styleOverrides: {
          root: {
            maxHeight: 200
          }
        }
      }
    }
});

export default theme;