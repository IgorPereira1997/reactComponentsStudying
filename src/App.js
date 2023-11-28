import React, { useState, useMemo, useEffect, useRef } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import themes from './styles/themes';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      theme: 'dark',
      posts: [{}],
    };
  }

  render(){
    const {theme} = this.state;
    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
       <GlobalStyle />
         <Layout
         onToggleTheme={() => {
          this.setState((prevState) => ({
            theme: prevState.theme === 'dark'
              ? 'light'
              : 'dark'
            }
          ));
         }}
         selectedTheme={theme}
         />
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
