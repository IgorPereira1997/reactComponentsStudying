import React from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import themes from './styles/themes';

import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

class App extends React.Component{

  //In house way to handle this properties and states

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     theme: 'dark',
  //   };
  //   this.handleToggleTheme = this.handleToggleTheme.bind(this);
  // }

  // handleToggleTheme(){
  //   this.setState((prevState) => ({
  //     theme: prevState.theme === 'dark'
  //       ? 'light'
  //       : 'dark'
  //     }
  //   ));
  // }

  //Using the babel plugin '@babel/plugin-transform-class-properties' (replacing
  //plugin-proposal-class-properties).
  //DISCALIMER -> With the current babel & react of project, this wasn't really
  //necessary since:
  /*
    @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to
    the ECMAScript standard and thus this plugin is no longer maintained.
    Please use @babel/plugin-transform-class-properties instead.
  */

  // state = {
  //   theme: 'dark',
  // };

  // handleToggleTheme = () => {
  //   this.setState((prevState) => ({
  //     theme: prevState.theme === 'dark'
  //       ? 'light'
  //       : 'dark'
  //     }
  //   ));

  //   //This method forces render method to be called again, even with no Component
  //   //changes were detected. Useful if you wanna make sure it will update the
  //   //Component
  //   this.forceUpdate();
  // }

  render(){
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => ( //Destructuring contextData
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

// function App() {

//   const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')));

//   const firstRender = useRef(true);

//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark;
//   }, [theme]);

//   function handleToggleTheme(){
//     setTheme((prevState) => (
//       prevState === 'dark'
//         ? 'light'
//         : 'dark'
//     ));
//   }

//   useEffect(() => {
//     if(firstRender.current){
//       firstRender.current = false;
//       return;
//     }
//     localStorage.setItem('theme', JSON.stringify(theme));
//   }, [theme]);

//   return (
//     <ThemeProvider theme={currentTheme}>
//       <GlobalStyle />
//       {/*<button onClick={handleToggleTheme}>Restore Layout</button>
//       {theme === 'dark' && ( */}
//         <Layout
//         onToggleTheme={handleToggleTheme}
//         selectedTheme={theme}
//         />
//       {/*)}
//       {<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//       <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//       <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//       <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />*/}
//     </ThemeProvider>
//   );
// };

export default App;
