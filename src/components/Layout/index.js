import React, { useEffect } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout(props) {

  useEffect(() => {
    function handleScroll(){
      console.debug('Scrolling...')
    }

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header onToggleTheme={props.onToggleTheme} selectedTheme={props.selectedTheme}/>
      <PostsList />
      <Footer onToggleTheme={props.onToggleTheme} selectedTheme={props.selectedTheme}/>
    </>
  );
}
