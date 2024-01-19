import React, { useEffect } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

// export default function Layout() {

//   // useEffect(() => {
//   //   function handleScroll(){
//   //     console.debug('Scrolling...')
//   //   }

//   //   document.addEventListener('scroll', handleScroll);

//   //   return () => document.removeEventListener('scroll', handleScroll);
//   // }, []);

//   return (
//     <>
//     {/* {undefined.map(item => item)} */}
//       <Header />
//       <PostsList />
//       <Footer />
//     </>
//   );
// }

export default class Layout extends React.Component{

  componentDidMount(){
    console.log("component mounted!");
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    console.log('component unmounted!');
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log('Scrolled!');
  }

  render(){
    return (
      <>
      {/* {undefined.map(item => item)} */}
        <Header />
        <PostsList />
        <Footer />
      </>
    );
  };
}
