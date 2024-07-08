import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Post} from '../../model/Post';
import container from '../../dependencies/dependencies';
import {PostClient} from '../../networking/post/PostClient';

const initPost: Post[] = [];
const UseEffectExample = () => {
  const [reload, setReload] = useState(0);
  const [posts, setPosts] = useState<Post[]>(initPost);

  const postApi = container.get<PostClient>('PostClient');
  useEffect(() => {
    console.log('====> RELOAD');
    postApi.fetchPost().then(res => {
      setPosts(res);
    });
  }, [reload]);
  return (
    <View>
      <Button
        title="Reload"
        onPress={() => {
          setReload(reload + 1);
        }}
      />
      {posts.map(item => {
        return (
          <Text key={item.id}>
            {item.id}. {item.title}
          </Text>
        );
      })}
    </View>
  );
};

export default UseEffectExample;

const styles = StyleSheet.create({});
