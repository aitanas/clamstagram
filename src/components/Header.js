import React from 'react';

export function Header(){
  return (
    <div className='header'>
      <h1 id="brand">Clamstagram</h1>
      <div className='header-icons'>
        <i class="bi bi-plus-circle"></i>
        <i class="bi bi-heart"></i>
        <i class="bi bi-chat-dots"></i>
      </div>
    </div>
    );
}
