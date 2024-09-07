import React from "react";

export default function Features() {
  return (
    <div>
      <section classname="py-16 bg-gray-100">
        <div classname="container mx-auto px-4">
          <h2 classname="text-3xl font-bold text-center">
            Discover Our Features
          </h2>
          <p classname="text-center text-gray-600 mb-12">
            Explore how Cool Shade can enhance your experience with these key
            features.
          </p>
          <div classname="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div classname="p-6 bg-white rounded-lg shadow-md">
              <div classname="flex items-center justify-center mb-4">
                <img
                  src="/path/to/icon1.svg"
                  alt="Feature 1"
                  classname="w-12 h-12"
                />
              </div>
              <h3 classname="text-xl font-semibold mb-2">Feature 1</h3>
              <p classname="text-gray-700 mb-4">
                Detailed description of Feature 1. Highlight the benefits and
                functionality it provides to users.
              </p>
              <a href="#" classname="text-blue-600 hover:underline">
                Learn More
              </a>
            </div>
            {/* Feature 2 */}
            <div classname="p-6 bg-white rounded-lg shadow-md">
              <div classname="flex items-center justify-center mb-4">
                <img
                  src="/path/to/icon2.svg"
                  alt="Feature 2"
                  classname="w-12 h-12"
                />
              </div>
              <h3 classname="text-xl font-semibold mb-2">Feature 2</h3>
              <p classname="text-gray-700 mb-4">
                Detailed description of Feature 2. Explain how this feature
                contributes to a better user experience.
              </p>
              <a href="#" classname="text-blue-600 hover:underline">
                Learn More
              </a>
            </div>
            {/* Feature 3 */}
            <div classname="p-6 bg-white rounded-lg shadow-md">
              <div classname="flex items-center justify-center mb-4">
                <img
                  src="/path/to/icon3.svg"
                  alt="Feature 3"
                  classname="w-12 h-12"
                />
              </div>
              <h3 classname="text-xl font-semibold mb-2">Feature 3</h3>
              <p classname="text-gray-700 mb-4">
                Detailed description of Feature 3. Describe its key
                functionalities and advantages for the user.
              </p>
              <a href="#" classname="text-blue-600 hover:underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
