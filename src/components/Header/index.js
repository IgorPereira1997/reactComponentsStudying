import React from 'react';
import { Container } from './styles';

import { ThemeContext } from './../../contexts/ThemeContext';

export default class Header extends React.Component{
  render(){
    return (
      <ThemeContext.Consumer>
        {({theme, handleToggleTheme}) => ( //Destructuring contextData
          <Container>
            <h1>Igor's JStack Blog</h1>
            <button type="button" onClick={handleToggleTheme}>
            {theme === 'dark' ? '🌞' : '🌚'}
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
}

// export default function Header(props) {
//   return (
//     <Container>
//       <h1>Igor's JStack Blog</h1>
//       <button type="button" onClick={props.onToggleTheme}>
//       {props.selectedTheme === 'dark' ? '🌞' : '🌚'}
//       </button>
//     </Container>
//   );
// }
