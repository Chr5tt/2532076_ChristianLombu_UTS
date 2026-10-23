import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InfoCard from './src/components/InfoCard';
import DirektoriMahasiswa from './src/screens/DirektoriMahasiswa';

export default function App() {
  const [tab, setTab] = useState('soal1');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, tab === 'soal1' && styles.tabAktif]}
          onPress={() => setTab('soal1')}
        >
          <Text style={[styles.tabText, tab === 'soal1' && styles.tabTextAktif]}>
            InfoCard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tab === 'soal2' && styles.tabAktif]}
          onPress={() => setTab('soal2')}
        >
          <Text style={[styles.tabText, tab === 'soal2' && styles.tabTextAktif]}>
            Direktori
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {tab === 'soal1' ? (
          <>
            <InfoCard
              title="UTS Lab. Pemrograman Mobile Ganjil 2026"
              status="selesai"
              onPress={() => Alert.alert('Detail', 'UTS Lab. Pemrograman Mobile Ganjil 2026: selesai')}
            />
            <InfoCard
              title="UAS Lab. Pemrograman Mobile Genap 2026"
              status="proses"
              onPress={() => Alert.alert('Detail', 'UAS Lab. Pemrograman Mobile Genap 2026: proses')}
            />
          </>
        ) : (
          <DirektoriMahasiswa />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F3F4F6' },
  tabBar: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    padding: 4,
  },
  tab: { flex: 1, paddingVertical: 8, borderRadius: 8, alignItems: 'center' },
  tabAktif: { backgroundColor: '#FFFFFF' },
  tabText: { color: '#6B7280', fontWeight: '600' },
  tabTextAktif: { color: '#1E4FA3' },
  content: { flex: 1, padding: 16 },
});
