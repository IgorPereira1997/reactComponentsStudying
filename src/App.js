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

  state = {
    changed: false
  };

  //Method is executed in the first componente execution
  //similar to useEffect(() => {}, [])
  componentDidMount(){
    console.log('Did mount executed');
  }

  //Method is executed after any component update, monitoring both props
  //and state of youy component
  //similar to useEffect(() => {})
  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate:",{
      currentState: this.state,
      prevProps,
      prevState
    })
  }

  // used to catch any error inside the component and its children
  componentDidCatch(error, info){
    console.log("componentDidCatch:", {error: error, info: info});
  }

  //Method is executed before any component update, monitoring both props
  //and state of youy component
  //it returns true, if you want the component to make the new render, or
  //false, to block the new render of a component. better if used in an
  //conditional situation, to ease up configuring the return
  //similar to useEffect(() => {})
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate:",{
      currentState: this.state,
      nextProps,
      nextState
    });
    return true;
  }

  render(){
    console.log('rendered page');
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme, handleToggleTheme }) => ( //Destructuring contextData
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              {/* <button onClick={() => this.setState({ changed: true})}>Change state</button>
              */}
              {/* <button onClick={handleToggleTheme}>Change state</button> */}

              {/* {theme === 'dark' && <Layout/>} */}
              <Layout />
              {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
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
