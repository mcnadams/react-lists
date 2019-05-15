import React from 'react';
import PhotoAlbum from './PhotoAlbum';
import Header from './Header';
import Footer from './Footer';

const photos = [
  '../../assets/pic1.jpg',
  '../../assets/pic2.jpg',
  '../../assets/pic3.jpg',
  '../../assets/pic4.jpg',
  '../../assets/pic5.jpg',
  '../../assets/pic6.jpg',
  '../../assets/pic7.jpg',
  '../../assets/pic8.jpg',
  '../../assets/pic9.jpg',
  '../../assets/pic10.jpg',
  '../../assets/pic11.jpg',
  '../../assets/pic12.jpg',
];

export default function App() {
  return (
    <>
      <Header />
      <PhotoAlbum photos={photos} />
      <Footer />
    </>
  );
}
