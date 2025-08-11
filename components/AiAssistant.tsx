



import React, { useState, useRef, useEffect, useCallback } from 'react';
import { marked } from 'marked';
import { geminiService } from '../services/geminiService.ts';
import { PaperAirplaneIcon, XIcon, SparklesIcon, ChatBubbleLeftRightIcon } from './icons/Icons.tsx';

interface AiAssistantProps {
    translations: {
        tooltip: string;
        title: string;
        placeholder: string;
        buttonClose: string;
        errorMessage: string;
        suggestionTitle: string;
        suggestions: string[];
    };
}

interface Message {
    role: 'user' | 'model';
    content: string;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ translations }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    
    useEffect(() => {
        marked.setOptions({
            gfm: true,
            breaks: true,
        });
    }, []);

    const handleSendMessage = useCallback(async (prompt?: string) => {
        const messageContent = prompt || inputValue;
        if (!messageContent.trim() || isLoading) return;
        

        const userMessage: Message = { role: 'user', content: messageContent };
        setMessages(prev => [...prev, userMessage]);
        
        if (!prompt) {
            setInputValue('');
        }
        
        setIsLoading(true);

        setMessages(prev => [...prev, { role: 'model', content: '' }]);

        try {
            const stream = await geminiService.sendMessageStream(messageContent);
            let fullResponse = '';
            for await (const chunk of stream) {
                const chunkText = chunk.text;
                if (chunkText) {
                    fullResponse += chunkText;
                    setMessages(prev => {
                        const newMessages = [...prev];
                        newMessages[newMessages.length - 1].content = fullResponse;
                        return newMessages;
                    });
                }
            }
        } catch (error) {
            console.error("Error sending message to Gemini:", error);
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].content = translations.errorMessage;
                return newMessages;
            });
        } finally {
            setIsLoading(false);
        }
    }, [inputValue, isLoading, translations.errorMessage]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSendMessage();
        }
    };

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    
    const handleSuggestionClick = (suggestion: string) => {
        handleSendMessage(suggestion);
    }

    return (
        <>
            {/* FAB */}
            <div className="fixed bottom-8 right-8 z-50">
                <button
                    onClick={toggleOpen}
                    className={`flex items-center justify-center space-x-3 rounded-full px-5 sm:px-6 py-4 font-bold text-white shadow-lg transform-gpu transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/50 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 ${
                        !isOpen ? 'animate-pulse-glow' : 'shadow-2xl'
                    }`}
                    aria-label={isOpen ? translations.buttonClose : translations.tooltip}
                >
                    {isOpen ? (
                        <>
                            <XIcon className="h-7 w-7" />
                            <span className="hidden sm:inline text-lg">{translations.buttonClose}</span>
                        </>
                    ) : (
                        <>
                            <SparklesIcon className="h-7 w-7" />
                            <span className="hidden sm:inline text-lg">{translations.tooltip}</span>
                        </>
                    )}
                </button>
            </div>


            {/* Chat Window */}
            <div
                className={`fixed bottom-28 right-8 z-50 w-[90vw] max-w-lg h-[70vh] max-h-[600px] bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out transform-gpu ${
                    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            >
                {/* Header */}
                <div className="flex-shrink-0 bg-gray-900/50 p-4 flex items-center justify-between rounded-t-2xl border-b border-white/10">
                    <div className="flex items-center">
                        <SparklesIcon className="h-7 w-7 text-teal-300" />
                        <h3 className="text-xl font-bold text-white ml-3">{translations.title}</h3>
                    </div>
                    <button onClick={toggleOpen} className="text-gray-400 hover:text-white">
                        <XIcon className="h-7 w-7" />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 p-6 overflow-y-auto space-y-6">
                    {messages.length === 0 && (
                        <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
                            <ChatBubbleLeftRightIcon className="h-16 w-16 mb-4 text-gray-600" />
                            <h4 className="text-xl font-semibold mb-4 text-gray-300">{translations.suggestionTitle}</h4>
                            <div className="flex flex-wrap justify-center gap-3">
                                {translations.suggestions.map((suggestion, i) => (
                                    <button 
                                        key={i}
                                        onClick={() => handleSuggestionClick(suggestion)}
                                        className="px-4 py-2 bg-gray-700/80 text-gray-200 rounded-full text-base font-medium transition-colors hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-end gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'model' && <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-500/20 flex items-center justify-center"><SparklesIcon className="h-6 w-6 text-teal-300"/></div>}
                            <div
                                className={`max-w-md lg:max-w-md p-4 rounded-2xl ${
                                    msg.role === 'user'
                                        ? 'bg-teal-600 text-white rounded-br-none'
                                        : 'bg-gray-700 text-gray-200 rounded-bl-none'
                                }`}
                            >
                                <div
                                    className="prose prose-invert prose-p:my-0 prose-ul:my-0 prose-ol:my-0 max-w-none text-white"
                                    dangerouslySetInnerHTML={{ __html: msg.role === 'model' && msg.content ? marked.parse(msg.content) : `<p>${msg.content}</p>` }}
                                />
                                {isLoading && msg.role === 'model' && index === messages.length - 1 && (
                                     <div className="flex items-center justify-start mt-2">
                                        <div className="h-2 w-2 bg-teal-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                        <div className="h-2 w-2 bg-teal-300 rounded-full animate-bounce [animation-delay:-0.15s] ml-1"></div>
                                        <div className="h-2 w-2 bg-teal-300 rounded-full animate-bounce ml-1"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="flex-shrink-0 p-4 border-t border-white/10">
                    <div className="flex items-center bg-gray-900 rounded-lg pr-2">
                        <textarea
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder={translations.placeholder}
                            rows={1}
                            className="flex-1 w-full bg-transparent p-3 text-lg text-gray-200 placeholder-gray-500 resize-none focus:outline-none"
                            disabled={isLoading}
                        />
                        <button
                            onClick={() => handleSendMessage()}
                            disabled={!inputValue.trim() || isLoading}
                            className="p-3 rounded-full text-white transition-colors disabled:text-gray-600 disabled:cursor-not-allowed enabled:bg-teal-500 enabled:hover:bg-teal-400"
                            aria-label="Enviar mensagem"
                        >
                            <PaperAirplaneIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};