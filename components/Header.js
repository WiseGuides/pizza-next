import  { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default (args) => {
  return (
    <Fragment>
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

      <title>Wise Guides Pizza</title>
      <link rel="stylesheet" type="text/css" href="static/custom.css" />
      <link href="https://fonts.googleapis.com/css?family=Bungee+Hairline|Codystar|Londrina+Outline|Londrina+Sketch" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Arvo|Crete+Round|Fredericka+the+Great|Markazi+Text|Miniver|Oleo+Script|Roboto+Slab|Signika|Slabo+27px"
        rel="stylesheet" />
    </Head>

    <header>
      <img src="static/images/hero-2.png" width="1060" />
    </header>

    <nav className="top-nav">
      <Link href="/index"><a className={args.pathname === '/index' ? 'active item' : 'item'}>Home</a></Link>
      <Link href="/menu"><a className={args.pathname === '/menu' ? 'active item' : 'item'}>Menu</a></Link>
      <Link href="/company"><a className={args.pathname === '/company' ? 'active item' : 'item'}>Company</a></Link>
      <Link href="/careers"><a className={args.pathname === '/careers' ? 'active item' : 'item'}>Careers</a></Link>
    </nav>
    </Fragment>
  );
};