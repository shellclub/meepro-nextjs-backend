import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from '@/utils/axios';
import { ContactType } from '../../(DashboardLayout)/types/apps/contact'

// Define the shape of the context
export interface ContactContextType {
  selectedDepartment: string;
  setSelectedDepartment: React.Dispatch<React.SetStateAction<string>>;
  contacts: ContactType[];
  setContacts: React.Dispatch<React.SetStateAction<ContactType[]>>;
  starredContacts: number[];
  setStarredContacts: React.Dispatch<React.SetStateAction<number[]>>;
  selectedContact: ContactType | null;
  setSelectedContact: React.Dispatch<React.SetStateAction<ContactType | null>>;
  addContact: (newContact: ContactType) => void;
  deleteContact: (contactId: number) => void;
  updateContact: (updatedContact: ContactType) => void;
  selectContact: (contact: ContactType) => void;
  toggleStarred: (contactId: number) => void;
  searchTerm: string;
  updateSearchTerm: (term: string) => void;
  openModal: boolean;
  setOpenModal: (collapse: boolean) => void;

}
export const ContactContext = createContext<ContactContextType | any>(undefined);
export const ContactContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [starredContacts, setStarredContacts] = useState<number[]>([]);
  const [selectedContact, setSelectedContact] = useState<ContactType | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  // Fetch contacts data from the API on component mount
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('/api/data/contacts/contactsData');
        const contactData = response.data;
        setContacts(contactData);
        const initialStarredContacts = contactData.filter((contact: { starred: any; }) => contact.starred).map((contact: { id: any; }) => contact.id);
        setStarredContacts(initialStarredContacts);
        if (contactData.length > 0) {
          setSelectedContact(contactData[0]);
        }
      } catch (error) {
        console.error('Failed to fetch contacts data:', error);
      }
    };

    fetchContacts();
  }, []);

  const updateSearchTerm = (term: string) => {
    setSearchTerm(term);
  };


  const addContact = (newContact: ContactType) => {
    setContacts([newContact, ...contacts]);
  };


  // Function to delete a contact
  const deleteContact = async (contactId: string | number) => {
    try {
      const response = await axios.delete('/api/data/contacts/deleteContact', { data: { contactId } });
      setContacts(response.data);

      if (selectedContact && selectedContact.id === contactId) {
        setSelectedContact(null);
      }
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };
  // Function to update a contact
  const updateContact = async (updatedContact: React.SetStateAction<ContactType | null>) => {
    try {
      const response = await axios.put('/api/data/contacts/updateContact', updatedContact);
      const updatedContactData = response.data;
      setContacts(prevContacts =>
        prevContacts.map(contact =>
          contact.id === updatedContactData.id ? updatedContactData : contact
        )
      );
      setSelectedContact(updatedContact);
    } catch (error) {
      console.error('Failed to update contact:', error);
    }
  };
  // Function to select a contact
  const selectContact = (contact: ContactType) => {
    setSelectedContact(contact);
  };

  // Function to toggle the starred status of a contact
  const toggleStarred = (contactId: number) => {
    if (starredContacts.includes(contactId)) {
      setStarredContacts(prevStarred => prevStarred.filter(id => id !== contactId));
    } else {
      setStarredContacts(prevStarred => [...prevStarred, contactId]);
    }
  };

  // Value provided by the context provider
  const contextValue: ContactContextType = {
    selectedDepartment,
    setSelectedDepartment,
    contacts,
    setContacts,
    starredContacts,
    setStarredContacts,
    selectedContact,
    setSelectedContact,
    addContact,
    deleteContact,
    updateContact,
    selectContact,
    toggleStarred,
    searchTerm,
    updateSearchTerm,
    openModal, setOpenModal
  };

  return (
    <ContactContext.Provider value={contextValue}>
      {children}
    </ContactContext.Provider>
  );
};
