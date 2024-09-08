'use client'
import { useState } from 'react';
import { LucideUser, LucideMapPin, LucideUpload } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function CreatePostPage() {
  return (
    <div className='w-full  flex flex-col items-center justify-center  min-h-screen mx-auto p-6 bg-white rounded-lg shadow-md space-y-6'>
      <CreatePost />
    </div>
  )
}

const CreatePost = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [text, setText] = useState('');
  const [location, setLocation] = useState('');

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file ? URL.createObjectURL(file) : null);
  };

  // Handle text input
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Handle location input
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Post submission handler (can integrate with API later)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ text, location, file: selectedFile });
    // Submit form logic here
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      {/* User Profile Section */}
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-gray-200 rounded-full">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <span className="font-semibold text-gray-700">Sh Raj</span>
      </div>

      {/* Post Text Area */}
      <textarea
        placeholder="What's on your mind?"
        className="w-full h-24 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        value={text}
        onChange={handleTextChange}
      />

      {/* File Upload and Preview */}
      <div>
        <label
          htmlFor="file-upload"
          className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
          <LucideUpload className="text-gray-500 w-8 h-8 mr-2" />
          <span className="text-gray-500">Click to upload images/videos</span>
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Preview */}
      {selectedFile && (
        <div className="relative w-full h-64 rounded-lg overflow-hidden border border-gray-300 mt-4">
          <Image
            src={selectedFile}
            alt="Preview"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      {/* Location Input */}
      <div className="flex items-center space-x-3">
        <LucideMapPin className="text-gray-500 w-6 h-6" />
        <input
          type="text"
          placeholder="Add location"
          value={location}
          onChange={handleLocationChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
        Post
      </button>
    </div>
  );
};

