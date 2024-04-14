import { StyleSheet, Modal, View, SafeAreaView, Pressable, Text, Pressable } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    rootStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#000000C0',
    },
    dialogStye: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: '#ffffff',
    },
    closeButtonStyleEnabled: {
        alignSelf: 'flex-end',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        marginRight: 16,
    },
});

export function BottomSheet({
    children,
    onCancel,
    animationType = 'none',
    testID = 'Bottom-Sheet',
    onRequestClose,
    showCloseIconButton = true,
}) {
    return (
        <Modal
            transparent
            animationType={animationType}
            onRequestClose={() => {
                onRequestClose && onRequestClose();
                return true;
            }}
        >
            <GestureHandlerRootView style={styles.rootStyle} testID={testID}>
                {showCloseIconButton && onCancel && (
                    <Pressable
                        testID="Bottom-Sheet-Cancel"
                        onPress={onCancel}
                        style={styles.closeButtonStyleEnabled}
                    >
                        <Text>X</Text>
                    </Pressable>
                )}
                <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
                    <View style={styles.dialogStye}>{children}</View>
                </SafeAreaView>
            </GestureHandlerRootView>
        </Modal>
    );
}
