import React from "react";

export default function Users() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full">
      <BoxWrapper>
        <div className="flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
            <img
              src="https://source.unsplash.com//80x80?face"
              alt=""
              className="h-15 w-15 rounded-full "
            />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">CEO</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                Josh Woods
              </strong>
            </div>
          </div>
        </div>
        <div>
          <p className=" text-gray-700">Hey! I am Josh, the CEO of Company</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
            <img
              src="https://source.unsplash.com//80x80?face"
              alt=""
              className="h-15 w-15 rounded-full "
            />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Lead Developer
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                Tim David
              </strong>
            </div>
          </div>
        </div>
        <div>
          <p className=" text-gray-700">
            Hey! I am Tim, a lead developer at Company
          </p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
            <img
              src="https://source.unsplash.com//80x80?face"
              alt=""
              className="h-15 w-15 rounded-full "
            />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Frontend Developer
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                John Doe
              </strong>
            </div>
          </div>
        </div>
        <div>
          <p className=" text-gray-700">
            Hey! I am John, a Frontend Developer at Company
          </p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
            <img
              src="https://source.unsplash.com//80x80?face"
              alt=""
              className="h-15 w-15 rounded-full "
            />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Backend Developer
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                Jason Roy
              </strong>
            </div>
          </div>
        </div>
        <div>
          <p className=" text-gray-700">
            Hey! I am Jason, a Backend Developer at Company
          </p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
            <img
              src="https://source.unsplash.com//80x80?face"
              alt=""
              className="h-15 w-15 rounded-full "
            />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              UI/UX Designer
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                Mary Smith
              </strong>
            </div>
          </div>
        </div>
        <div>
          <p className=" text-gray-700">
            Hey! I am Mary, a UI/UX Designer at Company
          </p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
            <img
              src="https://source.unsplash.com//80x80?face"
              alt=""
              className="h-15 w-15 rounded-full "
            />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Server Administrator
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                Alex Carey
              </strong>
            </div>
          </div>
        </div>
        <div>
          <p className=" text-gray-700">
            Hey! I am Alex, a Server Administrator at Company
          </p>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border-gray-200 flex flex-col gap-4 shadow-lg hover:scale-110 transition ease-in">
      {children}
    </div>
  );
}
