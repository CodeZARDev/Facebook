import * as React from 'react';
import { Screen } from '@nativescript/core/platform'
import { getStatusBarHeight } from '../../../utils/index';
import IconSet from '../../../utils/fonts';
import Theme from '../../../utils/theme';

interface FooterButtonIcon {
  label: string;
  icon: string;
}

const ICONS: FooterButtonIcon[] = [
  {
    label: 'Home',
    icon: 'home'
  },
  {
    label: 'Friends',
    icon: 'users'
  },
  {
    label: 'Issues',
    icon: 'flag'
  },
  {
    label: 'Location',
    icon: 'home'
  }
];

const Footer = () => {
  const [active, setActive] = React.useState(0);
  const bgColor = (index: number) => active === index ? Theme.Blue : '';
  const color = (index: number) => active === index ? '#000': Theme[300];
  return (
    <flexboxLayout height={70} justifyContent="center" alignItems="center" row={2}>
      {ICONS.map((item, index) => {
        return (
          <flexboxLayout key={index} style={{
            padding: 12,
            background: bgColor(index),
            borderRadius: 20,
            ... active === index ? {
              marginLeft: 8,
              marginRight: 8
            } : {}
          }} onTap={() => setActive(index)}>
            <label color={color(index)} className="FontAwesome size22">{IconSet.FontAwesome[item.icon]}</label>
            {active === index && (
              <label color={color(index)} marginLeft={4}>{item.label}</label>
            )}
          </flexboxLayout>
        )
      })}
    </flexboxLayout>
  )
}

export default Footer;
