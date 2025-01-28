"use client"
import React, { createContext, useState, useEffect } from 'react';
import axios from '@/utils/axios';
import { NotesType } from '@/app/(DashboardLayout)/types/apps/notes';

// Define context type
interface NotesContextType {
    notes: NotesType[];
    loading: boolean;
    error: Error | null;
    selectedNoteId: number;
    selectNote: (id: number) => void;
    addNote: (newNote: NotesType) => Promise<void>;
    updateNote: (id: number, title: string, color: string) => Promise<void>;
    deleteNote: (id: number) => Promise<void>;
}

// Initial context values
const initialContext: NotesContextType = {
    notes: [],
    loading: true,
    error: null,
    selectedNoteId: 1,
    selectNote: (id: number) => { },
    addNote: async (newNote: NotesType) => { },
    updateNote: async (id: number, title: string, color: string) => { },
    deleteNote: async (id: number) => { },
};

// Create context
export const NotesContext = createContext<NotesContextType>(initialContext);

// Provider component
export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [notes, setNotes] = useState<NotesType[]>(initialContext.notes);
    const [loading, setLoading] = useState<boolean>(initialContext.loading);
    const [error, setError] = useState<Error | null>(initialContext.error);
    const [selectedNoteId, setSelectedNoteId] = useState<number>(initialContext.selectedNoteId);

    // Fetch notes from the server
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get('/api/data/notes/NotesData');
                setNotes(response.data);
                setLoading(false);
            } catch (err) {
                // setError(err);
                setLoading(false);
            }
        };
        fetchNotes();
    }, []);

    // Select a note by its ID
    const selectNote = (id: number) => {
        setSelectedNoteId(id);
    };

    // Add a new note
    const addNote = async (newNote: NotesType) => {
        try {
            const response = await axios.post<NotesType>('/api/notes/add', newNote);
            setNotes((prevNotes) => [...prevNotes, response.data]);
        } catch (error) {
            console.error('Error adding note:', error);
            // Handle error as needed
        }
    };

    // Update a note by its ID
    const updateNote = async (id: number, title: string, color: string) => {
        try {
            const response = await axios.put<NotesType>('/api/notes/update', { id, title, color });
            const updatedNote = response.data;

            // Update notes state with the updated note
            setNotes((prevNotes) =>
                prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
            );

            // Optionally update selectedNoteId if needed
            if (selectedNoteId === updatedNote.id) {
                setSelectedNoteId(updatedNote.id);
            }
        } catch (error) {
            console.error('Error updating note:', error);
            // Handle error as needed
        }
    };

    // Delete a note by its ID
    const deleteNote = async (id: number) => {
        try {
            await axios.delete('/api/notes/delete', { params: { id } });
            setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
        } catch (error) {
            console.error('Error deleting note:', error);
            // Handle error as needed
        }
    };

    return (
        <NotesContext.Provider
            value={{
                notes,
                loading,
                error,
                selectedNoteId,
                selectNote,
                addNote,
                updateNote,
                deleteNote,
            }}
        >
            {children}
        </NotesContext.Provider>
    );
};


