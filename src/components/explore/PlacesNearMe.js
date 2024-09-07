"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function PlacesNearMe() {
  const places = [
    {
      id: 1,
      name: "Science City",
      location: "Science museum in Kolkata, West Bengal",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNebyxdRvlVoMS-CVtO8Hyc0ZO6NuqKON97nV4p=s1360-w1360-h1020",
    },
    {
      id: 2,
      name: "Hawa Mahal",
      location: "Jaipur, Rajasthan",
      image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQn9d-0JHPDTgWWgmO2UCccv7uPwGvzCt1ovZzTrF-UGofXAcbgKNnYo681RfDCjO7eSU9GKBRP-r6yVWD08duHChJpIq41_xWi1bugbwc",
    },
    {
      id: 3,
      name: "Victoria Memorial, Kolkata",
      location: "Kolkata, West Bengal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Victoria_Memorial_situated_in_Kolkata.jpg/1200px-Victoria_Memorial_situated_in_Kolkata.jpg",
    },
    {
      id: 4,
      name: "Belur Math",
      location: "Hindu temple in Howrah, West Bengal",
      image:
        "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRlXnUCRVU1SMw6Ca44Vx79lD_4pEER26iHQr3O1P_GrIuqgg1W6XV_1mEShE_-SvaX41aaStuaaYlQutspY6zYyiJwNnZGtwAY2_1EDA",
    },
  ];
  const [showAll, setShowAll] = useState(false);
  const displayedPlaces = showAll ? places : places.slice(0, 6);

  return (
    <div className="bg-white shadow-sm">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">Places Near Me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPlaces.map((place) => (
            <div
              key={place.id}
              className="bg-white shadow-sm rounded-lg overflow-hidden"
            >
              <img
                src={place.image}
                alt={place.name}
                width={400}
                height={225}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{place.name}</h3>
                <p className="text-gray-500">{place.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button variant="link" size="sm" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show All"}
          </Button>
        </div>
      </section>
    </div>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
