import React, { Component } from 'react';

import { Container } from './styles';

export default class Header extends React.Component{
  render(){

    const { onToggleTheme, selectedTheme } = this.props;

    return (
      <Container>
        <h1>Igor's JStack Blog</h1>
        <button type="button" onClick={onToggleTheme}>
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
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
