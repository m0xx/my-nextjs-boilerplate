import Link from 'next/link';
import cn from 'classnames';

function InternalLink({ href, className, children, ...rest }) {
  return (
    <Link {...rest} href={href}>
      <a className={cn(className, 'link')}>{children}</a>
    </Link>
  );
}

export default InternalLink;
