import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

export default function PeopleNearMe() {
  let users = [
    {
      name: "Chris Hemsworth",
      username: "@chrishemsworth",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
    },
    {
      name: "Scarlett J",
      username: "@scarlettjohansson",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      rating: 5,
    },
    {
      name: "Tom Hiddleston",
      username: "@tomhiddleston",
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
      rating: 4,
    },
    {
      name: "Mark Ruffalo",
      username: "@markruffalo",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
      rating: 4,
    },
    {
      name: "Chris Evans",
      username: "@chrisevans",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg",
      rating: 4,
    },
    {
      name: "Tony Stark",
      username: "@tonystark",
      avatar: "https://randomuser.me/api/portraits/men/37.jpg",
      rating: 4,
    }
    
    
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md h-full">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">People Near Me</h1>
      <div className="flex overflow-x-auto space-x-6 h-full overflow-hidden">
        {users.map((user, index) => (
          <SuggestedUserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export const SuggestedUserCard = ({ user }) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 transform hover:scale-105 w-40 h-full">
      <Avatar className="w-20 h-20">
        <AvatarImage src={user.avatar} alt="User Avatar" />
        <AvatarFallback>{user.name[0]}</AvatarFallback>
      </Avatar>
      <div className="text-center mt-2">
        <h3 className="text-sm font-semibold text-gray-900">{user.name}</h3>
        <p className="text-xs text-gray-500">{user.username}</p>
        <div className="flex justify-center mt-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`w-4 h-4 ${
                i < user.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <button className="mt-3 bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full hover:bg-blue-600 transition duration-200">
          Follow
        </button>
      </div>
    </div>
  );
};
