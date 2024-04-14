import DateTimePicker from '@react-native-community/datetimepicker';
import React, { memo, useRef } from 'react';

// Memo workaround for https://github.com/react-native-community/datetimepicker/issues/54
const areEqual = (prevProps, nextProps) => prevProps.isVisible === nextProps.isVisible;

export const DatePickerModal = memo(({ date, isVisible, onCancel, onConfirm, ...otherProps }) => {
    const currentDateRef = useRef(date);

    const handleChange = (event, date) => {
        if (event.type === 'dismissed') {
            onCancel();
            return;
        }

        currentDateRef.current = new Date(date || '');
        onConfirm(currentDateRef.current);
    };

    if (!isVisible) return <></>;

    return <DateTimePicker mode="date" value={date} onChange={handleChange} {...otherProps} />;
}, areEqual);
