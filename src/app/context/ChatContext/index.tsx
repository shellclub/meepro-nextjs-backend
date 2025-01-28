'use client'
import React, { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import axios from '@/utils/axios';
import { MessageType, ChatsType } from '../../(DashboardLayout)/types/apps/chat';

// Define context props interface
export interface ChatContextProps {
    chatData: ChatsType[];
    chatContent: any[];
    chatSearch: string;
    selectedChat: ChatsType | null;
    loading: boolean;
    activeChatId: number | null;
    setChatContent: Dispatch<SetStateAction<any[]>>;
    setChatSearch: Dispatch<SetStateAction<string>>;
    setSelectedChat: Dispatch<SetStateAction<ChatsType | null>>;
    setActiveChatId: Dispatch<SetStateAction<number | null>>;
    sendMessage: (chatId: number | string, message: MessageType) => void;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

// Create the context
export const ChatContext = createContext<ChatContextProps>({
    chatData: [],
    chatContent: [],
    chatSearch: '',
    selectedChat: null,
    loading: true,
    activeChatId: null,
    setChatContent: () => { },
    setChatSearch: () => { },
    setSelectedChat: () => { },
    setActiveChatId: () => { },
    sendMessage: () => { },
    setLoading: () => { },
});

// Create the provider component
export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [chatData, setChatData] = useState<ChatsType[]>([]);
    const [chatContent, setChatContent] = useState<any[]>([]);
    const [chatSearch, setChatSearch] = useState<string>('');
    const [selectedChat, setSelectedChat] = useState<ChatsType | null>(null);
    const [activeChatId, setActiveChatId] = useState<number | null>(1);
    const [loading, setLoading] = useState<boolean>(true);

    // Fetch chat data from the API
    useEffect(() => {
        const fetchChatData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/api/data/chat/ChatData');
                setChatData(response.data);
                if (response.data.length > 0) {
                    setSelectedChat(response.data[0]);
                }
            } catch (error) {
                console.error('Error fetching chat data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchChatData();
    }, []);

    // Function to send a message to a chat identified by `chatId` using an API call.
    const sendMessage = async (chatId: number | string, message: MessageType) => {
        try {
            // Send message via API
            const response = await axios.post(`/api/sendMessage`, {
                chatId,
                message,
            });

            if (response.status === 201) {
                // Update local state if API call succeeds
                const newMessage: MessageType = response.data;
                setSelectedChat((prevChat) => ({
                    ...prevChat!,
                    messages: [...prevChat!.messages, newMessage],
                }));
                setChatData((prevChats) =>
                    prevChats.map((chat) =>
                        chat.id === chatId
                            ? { ...chat, messages: [...chat.messages, newMessage] }
                            : chat
                    )
                );
            } else {
                console.error('Failed to send message:');
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
    const value: ChatContextProps = {
        chatData,
        chatContent,
        chatSearch,
        selectedChat,
        loading,
        activeChatId,
        setChatContent,
        setChatSearch,
        setSelectedChat,
        setActiveChatId,
        sendMessage,
        setLoading,
    };
    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
export type { ChatsType };

