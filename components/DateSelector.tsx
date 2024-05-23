import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import DatePicker from 'react-native-date-picker';

const DateSelector = ({ date, onDateChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button title="Seleccionar Fecha" onPress={() => setOpen(true)} />
      {open && (
        <View style={{ flex: 1 }}>
          <DatePicker
            mode="date"
            date={date}
            onDateChange={(selectedDate) => {
              setOpen(false);
              onDateChange(selectedDate); // Llama a la función onDateChange del formulario con la fecha seleccionada
            }}
          />
          <Button title="Cancelar" onPress={() => setOpen(false)} />
        </View>
      )}
    </>
  );
};

export default DateSelector;
