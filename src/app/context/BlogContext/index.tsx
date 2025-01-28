'use client'
import React, { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import axios from "@/utils/axios";
import { BlogType, BlogPostType } from '../../(DashboardLayout)/types/apps/blog';

// Define BlogContextProps interface
export interface BlogContextProps {
    posts: BlogPostType[];
    sortBy: string;
    selectedPost: BlogPostType | null;
    isLoading: boolean;
    setPosts: Dispatch<SetStateAction<BlogPostType[]>>;
    setSortBy: Dispatch<SetStateAction<string>>;
    setSelectedPost: Dispatch<SetStateAction<BlogPostType | null>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
    addComment: (postId: number, newComment: BlogType) => void;
    fetchPostByTitle: (title: string) => Promise<void>;
}

// Create context with default values
export const BlogContext = createContext<BlogContextProps>({
    posts: [],
    sortBy: 'newest',
    selectedPost: null,
    isLoading: true,
    setPosts: () => { },
    setSortBy: () => { },
    setSelectedPost: () => { },
    setLoading: () => { },
    addComment: () => { },
    fetchPostByTitle: async () => { },
});

// BlogProvider component
export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<BlogPostType[]>([]);
    const [sortBy, setSortBy] = useState<string>('newest');
    const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);

    // Fetch Post data from the API
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/data/blog/BlogPosts');
                console.log(response);
                setPosts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Adds a new comment to a specific post by updating the state.
    const addComment = (postId: number, newComment: BlogType) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId ? { ...post, comments: [newComment, ...(post.comments || [])] } : post
            )
        );
    }

    // Fetches a specific blog post by its title from the API endpoint and updates the selected post in the state.
    const fetchPostByTitle = async (title: string) => {
        try {
            const response = await axios.post('/api/data/blog/post', { title });
            setSelectedPost(response.data.post);
        } catch (error) {
            console.error('Error fetching blog post:', error);
        }
    };

    const value: BlogContextProps = {
        posts,
        sortBy,
        selectedPost,
        isLoading,
        setPosts,
        setSortBy,
        setSelectedPost,
        setLoading,
        addComment,
        fetchPostByTitle,
    };

    return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
