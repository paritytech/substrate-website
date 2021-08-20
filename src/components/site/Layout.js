import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container py-20">{children}</div>
      </main>
      <Footer />
    </>
  );
}
