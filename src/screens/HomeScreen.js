import React, { useState, useRef, useEffect } from 'react'
import { SafeAreaView, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/Features';
const dummyMessages = [
    {
        role: 'user',
        content: 'How are you?'
    },
    {
        role: 'assistant',
        content: "I'm fine, How may i help you today."
    },
    {
        role: 'user',
        content: 'create an image of a dog playing with cat'
    },
    {
        role: 'assistant',
        content: 'https://storage.googleapis.com/pai-images/ae74b3002bfe4b538493ca7aedb6a300.jpeg'
    }
]
const HomeScreen = () => {
    const [result, setResult] = useState('');
    const [recording, setRecording] = useState(false);
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState(dummyMessages);
    const [speaking, setSpeaking] = useState(false);
    // const scrollViewRef = useRef();

    const startRecording = async () => {
        // setRecording(true);
        // Tts.stop();
        // try {
        //     await Voice.start('en-GB'); // en-US

        // } catch (error) {
        //     console.log('error', error);
        // }
    };
    return (
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex-1 flex mx-5">
                <View className="flex-row justify-center">
                    <Image
                        source={require('../../assets/images/bot.png')}
                        style={{ height: hp(15), width: hp(15) }}
                    />
                </View>

                {
                    messages.length > 0 ? (
                        <View className="space-y-2 flex-1">
                            <Text className="text-gray-700 font-semibold ml-1" style={{ fontSize: wp(5) }}>Assistant</Text>
                            <View
                                style={{ height: hp(58) }}
                                className="bg-neutral-200 rounded-3xl p-4">
                                <ScrollView
                                    //ref={scrollViewRef}
                                    bounces={false}
                                    className="space-y-4"
                                    showsVerticalScrollIndicator={false}
                                >
                                    {
                                        messages.map((message, index) => {
                                            if (message.role == "assistant") {
                                                if (message.content.includes('https')) {
                                                    //iit an ai image
                                                    return (
                                                        <View key={index} className="flex-row justify-start">
                                                            <View
                                                                className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                                                                <Image
                                                                    source={{ uri: message.content }}
                                                                    className="rounded-2xl"
                                                                    resizeMode="contain"
                                                                    style={{ height: wp(60), width: wp(60) }}
                                                                />
                                                            </View>
                                                        </View>


                                                    )

                                                } else {
                                                    //text responce
                                                    return (
                                                        <View
                                                            style={{ width: wp(70) }}
                                                            className="bg-emerald-100 rounded-xl p-2 rounded-tr-none"
                                                        >
                                                            <Text>
                                                                {message.content}
                                                            </Text>
                                                        </View>

                                                    )
                                                }
                                            } else {
                                                //user input
                                                return (
                                                    <View key={index} className='flex-row justify-end'>
                                                        <View
                                                            style={{ width: wp(70) }}
                                                            className="bg-white rounded-xl p-2 rounded-tr-none"
                                                        >
                                                            <Text>
                                                                {message.content}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                )
                                            }
                                        })
                                    }
                                </ScrollView>
                            </View>
                        </View>
                    ) : (
                        <Features />
                    )
                }
                {/* recording, clear and stop buttons */}
                <View className="flex justify-center items-center">
                    {
                        recording ? (
                            <TouchableOpacity className="space-y-2" onPress={stopRecording}>
                                {/* recording stop button */}
                                <Image
                                    className="rounded-full"
                                    source={require('../../assets/images/voiceLoading.gif')}
                                    style={{ width: hp(10), height: hp(10) }}
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={startRecording}>
                                {/* recording start button */}
                                <Image
                                    className="rounded-full"
                                    source={require('../../assets/images/recordingIcon.png')}
                                    style={{ width: hp(10), height: hp(10) }}
                                />
                            </TouchableOpacity>
                        )
                    }
                </View>
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen