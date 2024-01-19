import React from 'react';
import { Container } from './styles';

import { ThemeContext } from './../../contexts/ThemeContext';

function HOC(HeaderComponent){
  return class Component extends React.Component{
    render(){
      return(
        <ThemeContext.Consumer>
        {(value) => (
          <HeaderComponent {... value }/>
        )}
      </ThemeContext.Consumer>
      );
    }
  }
}

class Header extends React.Component{

  componentDidUpdate(prevProps, prevState){
    if(this.props.theme !== prevProps.theme){
      console.log('Changed theme!');
    }
  }

  render(){
    return (
      <Container>
        <h1>Igor's JStack Blog</h1>
        <button type="button" onClick={this.props.handleToggleTheme}>
          {this.props.theme === 'dark' ? '🌞' : '🌚'}
        </button>
      </Container>
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

export default HOC(Header);
