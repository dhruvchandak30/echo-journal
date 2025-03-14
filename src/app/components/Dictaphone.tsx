'use client';
import React from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, {
    useSpeechRecognition,
} from 'react-speech-recognition';

const Dictaphone = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return (
            <div className="flex items-center justify-center h-screen text-xl text-red-600">
                Your Browser Does not Support Speech Recognition
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold mb-4">Voice Recognition</h1>
            <p
                className={`text-lg font-medium mb-4 ${
                    listening ? 'text-green-400' : 'text-red-400'
                }`}
            >
                Microphone: {listening ? 'On' : 'Off'}
            </p>
            <div className="flex gap-4 mb-6">
                {!listening && (
                    <button
                        onClick={() => SpeechRecognition.startListening()}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                    >
                        Start
                    </button>
                )}
                {listening && (
                    <button
                        onClick={() => SpeechRecognition.stopListening()}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                    >
                        Stop
                    </button>
                )}
                <button
                    onClick={() => resetTranscript()}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                >
                    Reset
                </button>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-xl">
                <h2 className="text-xl font-semibold mb-2">Transcript</h2>
                <p className="text-gray-300">
                    {transcript || 'No speech detected yet...'}
                </p>
            </div>
        </div>
    );
};

export default Dictaphone;
