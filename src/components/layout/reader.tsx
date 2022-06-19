import * as React from 'react';
import { LayoutProps } from '../../models';



export default function ReaderLayout ({children}: LayoutProps) {
  return (
    <div>
      <header>
        <p>Nav bar Top</p>
      </header>
      <div>
        {children}
      </div>
      <footer>
      <p>Nav bar Bottom</p>
      </footer>
    </div>
  );
}
