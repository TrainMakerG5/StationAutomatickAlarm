import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // 現在の時間を保存する箱（ステート）を用意するよ
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // 1000ミリ秒（1秒）ごとに現在時刻を新しいものに更新するタイマー
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // アプリが裏に回った時などにタイマーを消す安全装置
    return () => clearInterval(timer);
  }, []);

  // 時間を「HH:MM:SS」の形式で見やすく整える処理
  const timeString = currentTime.toLocaleTimeString('ja-JP', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>現在時刻</Text>
      <Text style={styles.timeText}>{timeString}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: '#ffffff',
  },
  timeText: {
    fontSize: 48, // 文字を大きくして見やすくしているよ
    fontWeight: 'bold',
    color: '#ddffff',
  },
});