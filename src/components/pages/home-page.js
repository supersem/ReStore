import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
  const books = [
    { id: 1,
      title: 'Production-Ready Micro',
      author: 'Susan Fowler'}
  ]
  return (
    <BookList books={books} />
  );
};

export default HomePage;
