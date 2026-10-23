import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Komponen kartu yang dipakai ulang lewat props: title, status, onPress.
export default function InfoCard({ title, status, onPress }) {
  const selesai = status === 'selesai';
  const warna = selesai ? '#2E9E4F' : '#F28C28';
  const warnaLatar = selesai ? '#E3F5E9' : '#FEF0DD';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={[styles.badge, { backgroundColor: warnaLatar }]}>
        <Text style={[styles.badgeText, { color: warna }]}>
          {selesai ? 'Selesai' : 'Proses'}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    marginBottom: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#1E4FA3',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
