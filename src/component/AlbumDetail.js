import React from 'react';
import { Image, Linking, Text, View } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardItem from './CardItem';

const AlbumDetail = ({ album }) => {
  const { image, thumbnail_image, title, artist, url } = album;
  const {
    imageStyle,
    thumbnail_imageStyle,
    headerTextStyle,
    headerContentStyle,
    thumbnail_imageContainerStyle,
  } = styles;

  return (
    <Card>
      <CardItem>
        <View style={thumbnail_imageContainerStyle}>
          <Image style={thumbnail_imageStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>

      <CardItem>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardItem>

      <CardItem>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardItem>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnail_imageStyle: {
    height: 50,
    width: 50,
  },
  thumbnail_imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default AlbumDetail;
