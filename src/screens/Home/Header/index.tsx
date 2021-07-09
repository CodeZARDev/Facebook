import * as React from 'react';
import { Screen } from '@nativescript/core/platform'
import { getStatusBarHeight } from '../../../utils/index';
import Theme from '../../../utils/theme';
import IconSet from '../../../utils/fonts';

interface HeaderButtonIcon {
  icon: 'messenger' | 'zoom' | 'bell-alt',
  color: string;
}

const ICONS: HeaderButtonIcon[] = [
  {
    icon: 'zoom',
    color: Theme[500]
  },
  {
    icon: 'bell-alt',
    color: Theme.Pink
  },
  {
    icon: 'messenger',
    color: Theme.Blue
  }
]

interface HeaderProps {
  onLogoPress(): void;
}

const Header = ({
  onLogoPress
}: HeaderProps) => {
  return (
    <gridLayout columns="*, auto" padding={16} marginTop={getStatusBarHeight()} row={0}>
      <label onTap={onLogoPress} color={Theme['500']} col={0} text="Chacebook" style={{
        fontWeight: 'bold',
        fontSize: 24
      }} />
      <gridLayout height="100%" columns="auto, auto, auto" col={1}>
        {ICONS.map((icon, i) => {
          return (
            <flexboxLayout key={i} padding={6} paddingLeft={8} paddingRight={8} borderRadius={8} background={Theme[100]} justifyContent="center" col={i} marginLeft={16}>
              <label className="Fontisto size18" color={icon.color}>{IconSet.Fontisto[icon.icon]}</label>
            </flexboxLayout>
          )
        })}
      </gridLayout>
    </gridLayout>
  )
}

export default Header;
