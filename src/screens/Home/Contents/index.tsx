import * as React from 'react';
import {Screen} from '@nativescript/core/platform';
import Theme from '../../../utils/theme';
import IconSet from '../../../utils/fonts';

const Contents = () => {
  return (
    <scrollView row={1}>
      <stackLayout padding={16}>
        <FeedComposer />
        {
          // Feeds
        }
        {[1,2,3,4].map((item) => {
          return (
            <FeedCard key={item} />
          )
        })}
      </stackLayout>
    </scrollView>
  )
}

const FeedCard = () => {
  const [active, setActive] = React.useState<FeedCardButtonType>('Like');
  const photoHeight = Screen.mainScreen.heightDIPs / 2;
  return (
    <gridLayout rows={`auto, auto`} style={{
      marginBottom: 24,
    }}>
      <flexboxLayout style={{
        width: '100%',
        height: photoHeight,
        background: Theme.Yellow,
        borderRadius: 40,
        marginBottom: 8
      }}/>
      <gridLayout paddingLeft={8} paddingRight={8} row={1} columns="*, 4, *, 4, *">
        <FeedCardButton type="Reply" active={active === "Reply"} col={0} onPress={setActive} />
        <FeedCardButton type="Like" active={active === "Like"} col={2} onPress={setActive} />
        <FeedCardButton type="Share" active={active === "Share"} col={4} onPress={setActive} />
      </gridLayout>
    </gridLayout>
  )
}

type FeedCardButtonType = "Like" | "Reply" | "Share"

interface FeedCardButtonProps {
  type: FeedCardButtonType,
  col:  number,
  active?: boolean;
  onPress(value: FeedCardButtonType): void;
}

const FeedCardButton = ({
  type,
  col,
  active,
  onPress
}: FeedCardButtonProps) => {
  const activeColor = type === "Reply" ? Theme.Blue : type === "Like" ? Theme.Yellow : Theme.Orange;
  const icon = type === "Reply" ? "comments" : type === "Like" ? "thumbs-o-up" : "retweet";
  return (
    <flexboxLayout col={col} style={{
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
      borderRadius: 8,
      background: active ? activeColor : ''
    }} onTap={() => onPress(type)}>
      <label className="FontAwesome size20" marginRight={6} visibility={active ? "visible" : "collapse"}>{IconSet.FontAwesome[icon]}</label>
      <label style={{
        fontSize: 14,
        fontWeight: active ? 'bold' : 'normal'
      }}>{type}</label>
    </flexboxLayout>
  )
}

const FeedComposer = () => {
  return (
    <gridLayout style={{
      background: Theme[50],
      padding: 8,
      borderRadius: 8,
      marginBottom: 16,
    }} columns="auto, *, auto, auto">
      <flexboxLayout col={0} style={{
        height: 35,
        width: 35,
        borderRadius: 5,
        background: Theme[500]
      }}>

      </flexboxLayout>

      <flexboxLayout col={1} style={{
        alignItems: 'center',
        height: '100%',
        marginLeft: 8,
        marginRight: 8
      }}>
        <label>What's on your mind?</label>
      </flexboxLayout>
      <FeedComposerIcon type="image" col={2} />
      <FeedComposerIcon type="video-camera" col={3} />
    </gridLayout>
  )
}

interface FeedComposerIconProps{
  type: 'video-camera' | 'image',
  col: number
}

const FeedComposerIcon = ({
  col,
  type
}: FeedComposerIconProps) => {
  return (
    <flexboxLayout col={col} style={{
      height: '100%',
      marginLeft: 8
    }}>
      <label color={type === "image" ? "lightgreen" : Theme.Pink } className="FontAwesome size25">{IconSet.FontAwesome[type]}</label>
    </flexboxLayout>
  )
}

export default Contents;
