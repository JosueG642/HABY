import { View,StyleSheet } from 'react-native'
import React, { useCallback, useLayoutEffect, useRef, useEffect } from 'react'
import { colors, globalStyles } from '../theme/theme'
import { AgendaList, CalendarProvider, DateData, WeekCalendar } from 'react-native-calendars'
import DayComponent from '../components/todos/DayComponent'
import AgendaItem from '../components/todos/AgendaItem'
import { agendaItems, getMarkedDates } from '../components/todos/agendaItems'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from '@expo/vector-icons/AntDesign';
import { RootStackParams } from '../routes/StackNavigator'


const ITEMS: any[] = agendaItems;

const TodosScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  
  const marked = useRef(getMarkedDates());
  const [selectedDate, setSelectedDate] = React.useState(ITEMS[0]?.title);

  const renderItem = useCallback(({ item }: { item: any }) => {
    return <AgendaItem item={item} />;
  }, []);
  
  const formattedDate = (d: Date) => {
    const formattedYear = d.toLocaleString('es-ES', { year: 'numeric' });
    const formattedMonth = d.toLocaleString('es-ES', { month: 'long'}).toUpperCase();
    return `${formattedMonth} ${formattedYear}`;
  }

  useLayoutEffect(() => {
    const date = new Date(ITEMS[0]?.title);

    navigation.setOptions({
      title: formattedDate(date)
    });
  }, [navigation]);

  const monthChange = (e:DateData) => {
    const date = new Date(e.dateString);

    navigation.setOptions({
      title: formattedDate(date)
    },);
  }

  useEffect(() => {
    if (ITEMS.length > 0) {
      setSelectedDate(ITEMS[0]?.title);
    }
  }, [ITEMS]);

  return (
    <View style={[globalStyles.mainContainer, {paddingHorizontal:10}]}>
      <View>
        <CalendarProvider date={selectedDate} onMonthChange={monthChange} onDateChanged={setSelectedDate}>
          <WeekCalendar
            firstDay={1}
            theme={{
              monthTextColor: 'black',
              textMonthFontSize: 16,
              calendarBackground: '#61ae92',
            }}
            markedDates={marked.current}
            dayComponent={DayComponent}
            ListFooterComponentStyle={{ gap: 100 }}
            hideDayNames={true}
            calendarHeight={100}
            calendarWidth={600}
            minDate={'2024-01-01'}
            maxDate={'2025-01-01'}
          />
          <View style={{backgroundColor: colors.tertiary,width: 40,borderRadius: 10,alignItems: 'center'}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Form')}>
              <AntDesign name="plus" size={40} color={colors.secundary} />
            </TouchableOpacity>
          </View>
          <AgendaList
            sections={ITEMS}
            renderItem={renderItem}
            sectionStyle={styles.section}
            markToday
          />
        </CalendarProvider>
      </View>
    </View>
  )
}

export default TodosScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61ae92',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50
  },
  section: {
    backgroundColor: 'transparent',
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 35,
    textAlign: 'center',
  },
});
