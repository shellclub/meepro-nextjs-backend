'use client'
import React, { createContext, useState, useEffect } from 'react';
import axios from '@/utils/axios';
import { PostType, profiledataType } from '@/app/(DashboardLayout)/types/apps/userProfile';

// Define context type
export type UserDataContextType = {
    posts: PostType[];
    users: any[];
    gallery: any[];
    loading: boolean;
    profileData: profiledataType;
    followers: any[];
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    addGalleryItem: (item: any) => void;
    addReply: (postId: number, commentId: number, reply: string) => void;
    likePost: (postId: number) => void;
    addComment: (postId: number, comment: string) => void;
    likeReply: (postId: number, commentId: number) => void;
    toggleFollow: (id: number) => void;
};

// Create context
export const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

// Default config values
const config = {
    posts: [],
    users: [],
    gallery: [],
    followers: [],
    search: '',
    loading: true,
};

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<PostType[]>(config.posts);
    const [users, setUsers] = useState<any[]>(config.users);
    const [gallery, setGallery] = useState<any[]>(config.gallery);
    const [followers, setFollowers] = useState<any[]>(config.followers);
    const [search, setSearch] = useState<string>(config.search);
    const [loading, setLoading] = useState<boolean>(config.loading);
    const [profileData, setProfileData] = useState<profiledataType>({
        name: 'Mathew Anderson',
        role: 'Designer',
        avatar: '/images/profile/user-1.jpg',
        coverImage: '/images/backgrounds/profilebg.jpg',
        postsCount: 938,
        followersCount: 3586,
        followingCount: 2659,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postsResponse = await axios.get('/api/data/postData');
                const usersResponse = await axios.get('/api/data/users');
                const galleryResponse = await axios.get('/api/data/gallery');
                setPosts(postsResponse.data);
                setUsers(usersResponse.data);
                setGallery(galleryResponse.data);
                setFollowers(usersResponse.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    // Function to add a new item to the gallery
    const addGalleryItem = (item: any) => {
        setGallery((prevGallery) => [...prevGallery, item]);
    };

    // Function to toggle follow/unfollow status of a user
    const toggleFollow = (id: number) => {
        setFollowers((prevFollowers) =>
            prevFollowers.map((follower) =>
                follower.id === id ? { ...follower, isFollowed: !follower.isFollowed } : follower
            )
        );
    };

    // Function to filter followers based on search input
    const filterFollowers = () => {
        if (followers) {
            return followers.filter((t) =>
                t.name.toLowerCase().includes(search.toLowerCase())
            );
        }
        return followers;
    };

    // Add comment to a post
    const addComment = async (postId: number, comment: string) => {
        try {
            const response = await axios.post('/api/data/posts/comments/add', {
                postId,
                comment,
            });

            if (response.status === 200) {
                const updatedPosts = response.data.posts;
                setPosts(updatedPosts);
            } else {
                console.error('Failed to add comment:', response.data.message);
            }
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    // Add reply to a comment
    const addReply = async (postId: number, commentId: number, reply: string) => {
        try {
            const response = await axios.post('/api/data/posts/replies/add', {
                postId,
                commentId,
                reply,
            });

            if (response.status === 200) {
                const updatedPosts = response.data.posts;
                setPosts(updatedPosts);
            } else {
                console.error('Failed to add reply:', response.data.message);
            }
        } catch (error) {
            console.error('Error adding reply:', error);
        }
    };

    // Function to toggle like/unlike a post
    const likePost = async (postId: number) => {
        try {
            const response = await axios.post('/api/data/posts/like', { postId });

            if (response.status === 200) {
                const updatedPosts = response.data.posts;
                setPosts(updatedPosts);
            } else {
                console.error('Failed to like post:', response.data.message);
            }
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };

    // Function to toggle like/unlike a reply to a comment
    const likeReply = async (postId: number, commentId: number) => {
        try {
            const response = await axios.post('/api/data/posts/replies/like', { postId, commentId });

            if (response.status === 200) {
                const updatedPosts = response.data.posts;
                setPosts(updatedPosts);
            } else {
                console.error('Failed to like reply:', response.data.message);
            }
        } catch (error) {
            console.error('Error liking reply:', error);
        }
    };

    return (
        <UserDataContext.Provider value={{
            posts,
            users,
            gallery,
            loading,
            profileData,
            addGalleryItem,
            addReply,
            likePost,
            addComment,
            likeReply,
            followers: filterFollowers(),
            toggleFollow,
            setSearch,
            search
        }}>
            {children}
        </UserDataContext.Provider>
    );
};


