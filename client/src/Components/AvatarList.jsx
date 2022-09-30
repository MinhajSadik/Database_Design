import React from "react";

const AvatarList = () => {
  return (
    <div>
      <div class="flex mb-5 -space-x-4">
        <img
          class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
          src="/me.jpeg"
          alt=""
        />
        <img
          class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
          src="me.jpeg"
          alt=""
        />
        <img
          class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
          src="me.jpeg"
          alt=""
        />
        <img
          class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
          src="me.jpeg"
          alt=""
        />
      </div>
      <div class="flex -space-x-4">
        <img
          class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
          src="me.jpeg"
          alt=""
        />
        <img
          class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
          src="me.jpeg"
          alt=""
        />
        <img
          class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
          src="me.jpeg"
          alt=""
        />
        <a
          class="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800"
          href="/99+"
        >
          +99
        </a>
      </div>
    </div>
  );
};

export default AvatarList;
