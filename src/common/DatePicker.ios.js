import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { View } from 'react-native';
import { BottomSheet } from './BottomSheet';
import Button from './Button';
import CustomLabel from './CustomLabel';


export const DatePickerModal = ({ date, isVisible, onCancel, onConfirm, ...otherProps }) => {
    const [currentDate, setCurrentDate] = useState(date);

    const handleChange = (event, date) => {
        if (event.type === 'dismissed') {
            onCancel();
            return;
        }

        date && setCurrentDate(date);
    };

    const onSubmit = () => {
        onConfirm(currentDate);
        onCancel();
    };

    if (!isVisible) return <></>;

    return (
        <BottomSheet>
            <View
                style={{
                    marginBottom: 24,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignContent: 'center',
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    // AddCalendaricon
                    <CustomLabel text="Date of birth" />
                </View>
                <SimplIcon name={'x'} size={20} onPress={onCancel} style={{ padding: 10 }} />
            </View>
            <DateTimePicker
                textColor={'#000000'}
                mode="date"
                display="spinner"
                value={currentDate}
                onChange={handleChange}
                {...otherProps}
            />
            <Button onPress={onSubmit}>Save</Button>
        </BottomSheet>
    );
};
