import Link from 'next/link';
import React from 'react';

function Home(){
  return (
    <React.Fragment>
      <h1>Next JS Pre.rendering</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </React.Fragment>
    );
}

export default Home;