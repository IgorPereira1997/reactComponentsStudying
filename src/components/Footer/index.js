import React from 'react';

import { Container } from './styles';

export default function Footer(props) {
  return (
    <Container>
      <span>Igor's JStack Blog. All Rights Reserved.</span>
      <button type="button" onClick={props.onToggleTheme}>
        {props.selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
