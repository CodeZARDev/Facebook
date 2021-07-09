import * as React from 'react';
import { Screen } from '@nativescript/core/platform'
import Header from './Header';
import Footer from './Footer/index';
import Contents from './Contents';
import { NSVElement } from 'react-nativescript';
import { Color, GridLayout } from '@nativescript/core';
import Theme from '../../utils/theme';
import IconSet from '../../utils/fonts';
import { getStatusBarHeight } from '../../utils/index';
import DrawerContent from './DrawerContent';

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const drawer: React.RefObject<NSVElement<GridLayout>> = React.useRef<NSVElement<GridLayout>>();
  const content: React.RefObject<NSVElement<GridLayout>> = React.useRef<NSVElement<GridLayout>>();
  const closeDrawer = React.useCallback(() => {
    if (!drawer.current || !content.current) {
      return;
    };
    const {nativeView: mContent} = content.current;
    setIsDrawerOpen(false)
    mContent.animate({
      translate: {
        x: 0,
        y: 0
      },
      scale: {
        x: 1,
        y: 1
      },
      rotate: {
        x: 0,
        y: 0,
        z: 0
      }
    })
  }, [])

  const openDrawer = React.useCallback(() => {
    if (!drawer.current || !content.current) {
      return;
    };
    const {nativeView: mContent} = content.current;
    setIsDrawerOpen(true)
    mContent.animate({
      translate: {
        x: (Screen.mainScreen.widthDIPs / 2) + 20,
        y: 0
      },
      scale: {
        x: 0.8,
        y: 0.8
      },
      rotate: {
        x: 0,
        y: 0,
        z: -5
      }
    })
  }, [])

  return (
    <absoluteLayout height={Screen.mainScreen.heightDIPs} width={Screen.mainScreen.widthDIPs} background="#fff">
      <gridLayout rows="auto, *" ref={drawer} top={0} left={0} height={Screen.mainScreen.heightDIPs} width={Screen.mainScreen.widthDIPs} row={0} background="#fff">
        <gridLayout padding={16} paddingTop={getStatusBarHeight() + 40} col={0} onTap={closeDrawer} columns="auto, *">
          <label col={0} color={Theme[500]} className="AntDesign size25">{IconSet.AntDesign.close}</label>
        </gridLayout>
        <gridLayout row={1} rows="*, auto, auto">
          <DrawerContent />
        </gridLayout>
      </gridLayout>
      <gridLayout borderRadius={isDrawerOpen ? 40 : 0} ref={content} rows="auto, *, auto" top={0} left={0} height={Screen.mainScreen.heightDIPs} width={Screen.mainScreen.widthDIPs} background="#fff" style={{
        ... isDrawerOpen ? {
          boxShadow: {
            color: new Color(Theme[50]),
            offsetX: 0,
            offsetY: 0,
            inset: false,
            spreadRadius: 10
          }
        } : {}
      }}>
        <Header onLogoPress={openDrawer} />
        <Contents />
        <Footer />
      </gridLayout>
    </absoluteLayout>
  )
}

export default Home;
