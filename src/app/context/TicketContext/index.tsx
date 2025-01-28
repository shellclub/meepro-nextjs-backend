
'use client'
import React, { createContext, useState, useEffect } from 'react';
import axios from '@/utils/axios';
import { TicketType } from '@/app/(DashboardLayout)/types/apps/ticket';

export interface TicketContextType {
    tickets: TicketType[];
    deleteTicket: (id: number) => void;
    setTicketSearch: (searchTerm: string) => void;
    searchTickets: (searchTerm: string) => void;
    ticketSearch: string;
    filter: string;
    setFilter: (filter: string) => void;
    addTicket: (newTicket: any) => void
}

// Create Context
export const TicketContext = createContext<TicketContextType>({} as TicketContextType);

// Provider Component
export const TicketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tickets, setTickets] = useState<TicketType[]>([]);
    const [ticketSearch, setTicketSearch] = useState<string>('');
    const [filter, setFilter] = useState<string>('total_tickets');

    // Fetch tickets from the API when the component mounts using useEffect
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get('/api/data/ticket/TicketData');
                setTickets(response.data);
            } catch (err) {
                console.error('Error fetching tickets:', err);
            }
        };
        fetchTickets();
    }, []);

    // Delete a ticket with the specified ID from the server and update the tickets state
    const deleteTicket = async (id: number) => {
        try {
            await axios.delete('/api/data/ticket/delete', { data: { id } });
            setTickets((prevTickets) =>
                prevTickets.map((ticket) => (ticket.Id === id ? { ...ticket, deleted: true } : ticket))
            );
        } catch (err) {
            console.error('Error deleting ticket:', err);
        }
    };

    // Update the ticket search term state based on the provided search term value.
    const searchTickets = (searchTerm: string) => {
        setTicketSearch(searchTerm);
    };


    // Add a new ticket
    const addTicket = async (newTicket: TicketType) => {
        try {

            await axios.post('/api/data/ticket/create', newTicket);
            setTickets((prevTickets) => [...prevTickets, newTicket]);

        } catch (err) {
            console.error('Error adding ticket:', err);
        }
    };

    return (
        <TicketContext.Provider
            value={{ tickets, deleteTicket, setTicketSearch, searchTickets, addTicket, ticketSearch, filter, setFilter }}
        >
            {children}
        </TicketContext.Provider>
    );
};


