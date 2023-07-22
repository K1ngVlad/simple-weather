import { FC } from 'react';

import s from './BurgerMenu.module.scss';
import { CloseBtn } from './CloseBtn';
import { links } from './constants';
import { PageLink } from './PageLink';

const BurgerMenu: FC = () => {
  return (
    <aside className={s.burgerMenu}>
      <CloseBtn className={s.closeBtn} />
      <ul className={s.list}>
        {links.map((link) => (
          <PageLink key={link.text} href={link.href} className={s.pageLink}>
            {link.text}
          </PageLink>
        ))}
      </ul>
    </aside>
  );
};

export { BurgerMenu };
