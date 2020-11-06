import cn from 'classnames';
import Link from 'next/link';

import Spacer from './../spacer';
import Text from './../text';
import Button from './../button';

function Navbar({ className }) {
  return (
    <div className={cn('bg-white w-full py-6 border-b', className)}>
      <div className="container mx-auto flex flex-row items-center">
        <img src="/logo.png" />
        <Spacer w={8} />
        <div className="flex">
          <Text display="paragraph-1">Tarifications</Text>
          <Spacer w={6} />
          <Text display="paragraph-1">Aide</Text>
        </div>
        <Spacer w={7} />
        <div className="flex-grow flex justify-end items-center">
          <Link href="/dashboard">
            <Text as="a" className="hover:cursor-pointer" display="paragraph-1">
              Connexion
            </Text>
          </Link>
          <Spacer w={6} />
          <Link href="/signup">
            <Button rounded>Démarrer</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
