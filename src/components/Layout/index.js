import React, { useEffect } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout() {

  // useEffect(() => {
  //   function handleScroll(){
  //     console.debug('Scrolling...')
  //   }

  //   document.addEventListener('scroll', handleScroll);

  //   return () => document.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <>
      <Header />
      <PostsList />
      <Footer />
    </>
  );
}
