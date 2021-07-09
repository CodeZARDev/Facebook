import * as React from 'react';
import Theme from '../../../utils/theme';
import { Screen } from '@nativescript/core/platform';
import { Color } from '@nativescript/core';

const DrawerContent = () => {
  return (
    <>
      <scrollView row={0}>
        <stackLayout>
          <DrawerContentHeader />
          <DrawerContentMenu />
        </stackLayout>
      </scrollView>
      <DrawerContentFooter />
      <flexboxLayout row={2} padding={24} paddingLeft={Screen.mainScreen.widthDIPs / 6}>
        <label style={{
          fontSize: 20,
          color: "#000"
        }}>Logout</label>
      </flexboxLayout>
    </>
  )
}

const DrawerContentHeader = () => {
  return (
    <gridLayout paddingLeft={16} marginBottom={16} columns="auto, *">
      <flexboxLayout col={0} style={{
        height: 50,
        width: 50,
        background: Theme[500],
        borderRadius: 10,
        marginRight: 8
      }}/>
      <stackLayout style={{
        color: Theme[500]
      }} col={1}>
        <label>Hello,</label>
        <label style={{
          fontWeight: 'bold',
          fontSize: 24
        }}>Aliziwe</label>
      </stackLayout>
    </gridLayout>
  )
}

const ITEMS = ["News Feed", "Pages", "Events", "Pages Feed", "Saved"]
const DrawerContentMenu = () => {
  return (
    <flexboxLayout style={{
      flexDirection: 'column',
      alignItems: 'center',
      paddingRight: Screen.mainScreen.widthDIPs / 2,
      marginTop: 40,
    }}>
      {ITEMS.map((item) => {
        return (
          <label key={item} style={{
            color: "#444",
            fontSize: 20,
            marginBottom: 24
          }}>{item}</label>
        )
      })}
    </flexboxLayout>
  )
}

const DrawerContentFooter = () => {
  return (
    <gridLayout row={1} rows="auto, *" style={{
      height: Screen.mainScreen.heightDIPs / 3.5
    }}>
      <flexboxLayout row={0} style={{
        background: `linear-gradient(to right, ${Theme[50]}, #fff,#fff)`,
        padding: 8,
        paddingLeft: Screen.mainScreen.widthDIPs / 6
      }}>
        <label color={Theme[500]} fontWeight="500" fontSize={18} text="Memories" />
      </flexboxLayout>
      <stackLayout margin={16} row={1}>
        <Row />
        <Row />
        <Row />
      </stackLayout>
    </gridLayout>
  )
}


const MockArray = [1, 2, 3, 4];

const Row = () => {
  return (
    <stackLayout orientation="horizontal" marginBottom={8}>
      {MockArray.map((item, i) => {
        const bgColor = i % 2 === 0 ? Theme.Blue : Theme.Yellow
        return (
          <flexboxLayout key={item} style={{
            width: 35,
            height: 35,
            marginRight: 8,
            background: bgColor,
            borderRadius: 8
          }}/>
        )
      })}
    </stackLayout>
  )
}

export default DrawerContent;
