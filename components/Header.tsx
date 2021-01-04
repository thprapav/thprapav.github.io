import React from 'react';
import Link from 'next/link';
type HeaderProps = {
  isMain: boolean;
};

const Header: React.FC<HeaderProps> = ({ isMain }: HeaderProps) => {
  return (
    <div>
      <a>CompanyLogo</a>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <div>{isMain ? <Link href="/about">About</Link> : <Link href="/">Home</Link>}</div>
    </div>
  );
};

export default Header;
