import { auth, db } from '../firebase';
import React, { useLayoutEffect, useState, useCallback, useEffect } from 'react';
import { View, Text } from 'reaact-native'
import { AntDesign } from '@expo/vector-icons';
import { Touchable, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { GiftedChat} from 'react-native-gifted-chat';

const ChatScreen = () => ({ navigation }) => {
    const [ message, setMessage] = useState([]);
        useEffect(() => {
            setMessage([
                {
                    _id : 1,
                    text: "Hello Developer",
                    createdAt = new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ])
        }, [])

        const onSend = useCallback((message = []) => {
            setMessage(previousMessage => GiftedChat.append(previousMessage, message))
            const { 
                _id,
                createdAt,
                text,
                user
            }=message[0]
            db.collection('chat').add({
                _id,
                createdAt,
                text,
                user
            })
        }, [])


    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft : () => (
                <View style = {{ marginLeft: 20 }}>
                    <Avatar>
                        rounded source={{
                            uri:auth?.currentUser?.photoURL
                        }}
                    </Avatar>
                </View>

            ),

            headerRight: () => (
                <TouchableOpacity style = {{ 
                    marginRight: 30
                }}
                    onPress={SignOut}
                >
                    <AntDesign name = "Logout" size={24} color = "black" />
                </TouchableOpacity>
            )

        })

    }, [])

    const signOut = () => {
        auth.signOut().then(() => {
            //Sign-Out successful.
            navigation.replace('Login')
        }).catch((error) => {

    
            //An error happened.
        });
    }

    return (
        <GiftedChat
            message={message}
            showAvatarForEveryMessage = {true}
            onSend={message => onSend(messages)}
            user={{ 
                _id: auth?.currentUser?.email,
                name:auth?.currentUser?.displayName,
                avatar: auth?.currentUser?.photoURL
            }}

        />

    
  
    )
}

export default ChatScreen