import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { type DayProps} from 'react-native-calendars/src/calendar/day';
import { colors } from '../../theme/theme';

const getDayName = (day: number): string => {
  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  return dayNames[day];
};
const DayComponent = ({  state, onPress, date }: DayProps) => {
  if (!date) {
    return null;
  }

  const dayName = getDayName(new Date(date.dateString).getDay());

  let backgroundColor = colors.secundary; 
  if (state === 'selected') {
    backgroundColor = '#a3d0b5'; 
  }else{
    
  }

  return (
    <TouchableOpacity onPress={() => onPress?.(date)} >
      
      <View style={[styles.dayContainer, { backgroundColor }]}>
        <Text style={styles.dayName}>{dayName}</Text>
        <Text style={styles.dayNumber}>{date.day}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    width: 72,
    height: 85,
    alignItems: 'center',
    margin: 2,
    borderRadius: 8,
    justifyContent: 'space-evenly',
    marginHorizontal: 5,
  },
  dayName: {
    fontSize: 17,
    fontWeight: '900',
    color: 'white',
  },
  dayNumber: {
    fontSize: 30,
    backgroundColor: '#61ae92',
    paddingHorizontal: 13,
    paddingVertical: 1,
    fontWeight: '900',
    color: 'white',
    borderRadius: 8,
  },
});

export default DayComponent;
