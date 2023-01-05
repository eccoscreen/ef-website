import React from 'react';
import css from './Nav.module.scss';
import MouseDownLink from '../MouseDownLink';
import EFLogo from 'assets/images/ef-logo.svg';
import HamburgerIcon from 'assets/icons/hamburger.svg';

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <MouseDownLink href="/">
        <EFLogo className={(() => {
          let className = css['ef-logo'];

          if (open) {
            className += ` ${css['open']}`;
          }

          return className;
        })()} />
      </MouseDownLink>

      <div className={(() => {
        let className = css['hamburger-menu'];

        if (open) {
          className += ` ${css['open']}`;
        }

        return className;
      })()} >
        <HamburgerIcon onMouseDown={() => setOpen(!open)} />
      </div>

      <section className={`${css['main--menu--container']} ${open ? css['open'] : ''}`} id="main--menu--container">
        <div className={css['main--menu--internal--container']} id="main--menu--internal--container">
          <div className={`${css['menu--content--container']}`}>
            <span className={`${css['one']} ${css['menu--content--dot']}`} id="menu--content--text--one"> • </span>
            <MouseDownLink href="/" className={`${css['two']} ${css['menu--content--text']}`} id="menu--content--text--two"> Home </MouseDownLink>
            <span className={`${css['three']} ${css['menu--content--dot']}`} id="menu--content--text--three"> • </span>
            <MouseDownLink href="/infinitegarden" className={`${css['four']} ${css['menu--content--text']}`} id="menu--content--text--four"> Infinite Garden </MouseDownLink>
            <span className={`${css['five']} ${css['menu--content--dot']}`} id="menu--content--text--five"> • </span>
            <MouseDownLink href="/ethereum" className={`${css['six']} ${css['menu--content--text']}`} id="menu--content--text--six"> What is Ethereum? </MouseDownLink>
            <span className={`${css['seven']} ${css['menu--content--dot']}`} id="menu--content--text--seven"> • </span>
            <MouseDownLink href="/ef" className={`${css['eight']} ${css['menu--content--text']}`} id="menu--content--text--eight"> What is the EF? </MouseDownLink>
            <span className={`${css['nine']} ${css['menu--content--dot']}`} id="menu--content--text--nine"> • </span>
            <MouseDownLink href="/philosophy" className={`${css['ten']} ${css['menu--content--text']}`} id="menu--content--text--ten"> EF Philosophy </MouseDownLink>
            <span className={`${css['eleven']} ${css['menu--content--dot']}`} id="menu--content--text--eleven"> • </span>
          </div>
          <div className={css['secondary--links--container']} id="secondary--links--container">
            <MouseDownLink href="https://blog.ethereum.org/" id="ef--blog--link" target="_blank" rel="noopener noreferrer" className={css['main--menu--secondary--link']}> EF Blog </MouseDownLink>
            <span className={css['main--menu--secondary--link']}> : </span>
            <MouseDownLink href="https://ethereum.foundation/report-2022-04.pdf" id="report--link" target="_blank" rel="noopener noreferrer" className={css['main--menu--secondary--link']}> EF Report </MouseDownLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nav;