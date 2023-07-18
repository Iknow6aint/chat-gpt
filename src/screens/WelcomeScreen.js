import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1 flex justify-around bg-white">
            <View className="space-y-2">
                <Text className="text-center font-bold text-gray-700">
                    Jarvis
                </Text>
                <Text className="text-center tracking-wider font-semibold text-gray-600">
                    The future is here, powerd by AI.
                </Text>
            </View>
            {/* assistant image */}
            <View className="flex-row justify-center">
                <Image
                    source={require('../../assets/images/welcome.png')}
                    className="w-72 h-72"
                />
            </View>
            {/* start button */}
            <TouchableOpacity onPress={() => navigation.navigate('Home')} className="bg-emerald-600 mx-5 p-4 rounded-2xl">
                <Text className="text-center font-bold text-white">
                    Get Started
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default WelcomeScreen