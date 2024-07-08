import {useState} from 'react';
import {Button, Text, View} from 'react-native';

const UseStateExample = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <View>
      <Text>{count}</Text>
      <Button title="increase" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default UseStateExample;
