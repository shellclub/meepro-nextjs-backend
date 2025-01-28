"use client"
import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import axios from '@/utils/axios';
import { EmailType } from '@/app/(DashboardLayout)/types/apps/email';

interface EmailContextType {
  emails: EmailType[];
  selectedEmail: EmailType | null;
  setSelectedEmail: (email: EmailType | null) => void;
  deleteEmail: (emailId: number) => void;
  toggleStar: (emailId: number) => void;
  toggleImportant: (emailId: number) => void;
  setFilter: Dispatch<SetStateAction<string>>;
  filter: string,
  searchQuery: string,
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const initialEmailContext: EmailContextType = {
  emails: [],
  selectedEmail: null,
  filter: 'inbox',
  searchQuery: '',
  setSelectedEmail: () => { },
  deleteEmail: () => { },
  toggleStar: () => { },
  toggleImportant: () => { },
  setFilter: () => { },
  setSearchQuery: () => { },
};

export const EmailContext = createContext<EmailContextType>(initialEmailContext);

export const EmailContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [emails, setEmails] = useState<EmailType[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<EmailType | null>(null);
  const [filter, setFilter] = useState<string>('inbox');
  const [searchQuery, setSearchQuery] = useState<string>('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data/email/EmailData');
        setEmails(response.data);
        // Set the default selected email to the first email in the list
        if (response.data.length > 0) {
          setSelectedEmail(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching email data:', error);
      }
    };
    fetchData();
  }, []);

  const deleteEmail = async (emailId: number) => {
    try {
      // Make DELETE request to mock API endpoint
      await axios.delete('/api/data/email/delete', { data: { emailId } });
      // Remove deleted email from state
      setEmails(emails.filter(email => email.id !== emailId));
      // If the deleted email was selected, clear selectedEmail
      if (selectedEmail && selectedEmail.id === emailId) {
        setSelectedEmail(null);
      }
    } catch (error) {
      console.error('Error deleting email:', error);
    }
  };

  const toggleStar = (emailId: number) => {
    setEmails(prevEmails =>
      prevEmails.map(email =>
        email.id === emailId ? { ...email, starred: !email.starred } : email
      )
    );

    if (selectedEmail?.id === emailId) {
      setSelectedEmail((prevEmail: any) => ({
        ...(prevEmail as EmailType),
        starred: !(prevEmail as EmailType).starred
      }));
    }
  };

  const toggleImportant = (emailId: number) => {
    setEmails(prevEmails =>
      prevEmails.map(email =>
        email.id === emailId ? { ...email, important: !email.important } : email
      )
    );

    if (selectedEmail?.id === emailId) {
      setSelectedEmail((prevEmail: any) => ({
        ...(prevEmail as EmailType),
        important: !(prevEmail as EmailType).important
      }));
    }
  };

  return (
    <EmailContext.Provider value={{ emails, selectedEmail, setSelectedEmail, deleteEmail, toggleStar, toggleImportant, setFilter, filter, searchQuery, setSearchQuery }}>
      {children}
    </EmailContext.Provider>
  );
};
