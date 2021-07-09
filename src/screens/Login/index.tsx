import * as React from 'react';
import { Screen } from '@nativescript/core/platform'
import Theme from '../../utils/theme';
import IconSet from '../../utils/fonts';
import { RNSStyle } from 'react-nativescript';
import { useNavigation } from '@react-navigation/core';
const RandomArray = [true,false,true,false,true,false];
const Login = () => {
  const navigation = useNavigation();
  const onLoginTap = React.useCallback(() => {
    navigation.navigate('Home')
  }, [])
  return (
    <absoluteLayout height={Screen.mainScreen.heightDIPs} width={Screen.mainScreen.widthDIPs} background="#fff">
      <scrollView scrollBarIndicatorVisible={false} isEnabled={false} style={{
        rotate: '45deg',
        marginLeft: -200
      }} top={0} left={0} height={Screen.mainScreen.heightDIPs} width={Screen.mainScreen.heightDIPs}>
        <stackLayout>
          <Row />
          <Row />
          <Row />
          <Row />
        </stackLayout>
      </scrollView>
      <flexboxLayout top={0} left={0} height={Screen.mainScreen.heightDIPs} width={Screen.mainScreen.widthDIPs} style={{
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 40,
      }}>
        <LoginButton onLoginTap={onLoginTap} type='Email' icon='mail' />
        <LoginButton onLoginTap={onLoginTap} type='Google' icon='google' />
        <LoginButton onLoginTap={onLoginTap} type='Facebook' icon='facebook-square' />
      </flexboxLayout>
    </absoluteLayout>
  )
}

const Row = () => {
  return (
    <stackLayout orientation="horizontal" marginBottom={16}>
      {RandomArray.map((item, index) => {
        const isEven = item;
        const height = 100;
        const width = 150;
        const style: RNSStyle = isEven ? {
          width,
          height,
          background: Theme['500'],
          marginRight: 16,
          borderRadius: 20
        } : {
          width: height,
          height,
          background: Theme.Orange,
          marginRight: 16,
          borderRadius: height / 2
        }
        return (
          <flexboxLayout key={index} style={style}/>
        )
      })}
    </stackLayout>
  )
}

type LoginButtonType = {
  type: 'Facebook' | 'Email' | 'Google',
  icon: 'facebook-square' | 'mail' | 'google',
  onLoginTap?(): void
}

const Colors: Record<LoginButtonType['type'], string> = {
  Email: Theme.Yellow,
  Facebook: Theme.Blue,
  Google: Theme.Orange
}

const LoginButton = ({
  icon,
  type,
  onLoginTap
}: LoginButtonType) => {
  return (
    <flexboxLayout onTap={onLoginTap} style={{
      padding: 16,
      borderRadius: 10,
      background: Colors[type],
      marginTop: 16,
      alignItems: 'center'
    }}>
      <label className="AntDesign size25" marginRight={16} text={IconSet.AntDesign[icon]}/>
      <label style={{
        fontSize: 20
      }} text={`Login with ${type}`}/>
    </flexboxLayout>
  )
}

export default Login;
