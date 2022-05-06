import React from 'react';

export default function Header({ text }) {
  return (
    <div className='App-header'>
      <img src='./popcorn.png'/>
      {text}
    </div>
  );
}
