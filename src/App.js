import React from 'react';
import ScrollContainer from 'react-scroll-horizontal';
import './images/1.jpg'

import './App.css';

const pages = [
  {
    title: 'Page 1',
    imageUrl: 'https://img.freepik.com/free-photo/dramatic-white-clouds-blue-sky-from-airplane-window-view-colorful-sunset-cloudscape-background_90220-1208.jpg',
    text: 'Welcome to Page 1',
  },
  {
    title: 'Page 2',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0070/7032/files/best-free-stock-photo-websites.jpg?v=1619036042',
    text: 'Welcome to Page 2',
  },
  {
    title: 'Page 3',
    imageUrl: 'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg',
    text: 'Welcome to Page 3',
  },
  {
    title: 'Page 4',
    imageUrl: 'https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?cs=srgb&dl=pexels-lukas-296282.jpg&fm=jpg',
    text: 'Welcome to Page 3',
  },
  {
    title: 'Page 5',
    imageUrl: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
    text: 'Welcome to Page 3',
  },
];

function App() {
  return (
    <div className="App">
      <ScrollContainer>
        {pages.map((page, index) => (
          <div key={index} className="page">
            <img src={page.imageUrl} alt={`Page ${index + 1}`} />
            <div className="page-content">
              <h2>{page.title}</h2>
              <p>{page.text}</p>
            </div>
          </div>
        ))}
      </ScrollContainer>
    </div>
  );
}

export default App;
