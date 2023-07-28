function TopNavbar() {
  return (
    <>
      <nav class="py-3 relative">
        <div class="navbar bg-base-100 container mx-auto">
          <div class="navbar-start flex-row-reverse justify-between w-full">
            <div class="dropdown dropdown-end">
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 w-52 md:w-[550px] bg-transparent"
              >
                <div class="form-control w-full">
                  <div class="input-group">
                    <input
                      type="text"
                      placeholder="Search…"
                      class="input input-bordered w-full"
                    />
                    <button class="btn btn-square btn-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </ul>
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-xl cursor-pointer font-semibold"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                  <path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path>
                </svg>
              </label>
            </div>
            <a class="w-[50%] px-[5px] py-[12px]" href="/">
              <img src="" alt="" />
            </a>
          </div>
          <div class="navbar-center hidden lg:flex w-[65%]">
            <ul class="menu menu-horizontal px-1 w-[75%]">
              <div class="form-control w-full">
                <div class="input-group">
                  <input
                    type="text"
                    placeholder="Search…"
                    class="input input-bordered w-full"
                  />
                  <button class="btn btn-square btn-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="invisible">
                <div>
                  <a href="/allProducts/63e609401d5cd800d414809a">
                    <li class="flex items-center flex-nowrap">
                      <div class="w-20 h-20 hover:bg-transparent">
                        <img
                          src="https://i.ibb.co/hC1XM5r/ideapad-gaming-3-001-500x500.jpg"
                          alt=""
                        />
                      </div>
                      <div class="flex flex-col items-start text-sm hover:bg-transparent">
                        <h2 class="hover:text-primary hover:text-underline">
                          Lenovo IdeaPad Gaming 3 Ryzen 5 5600H GTX 1650 4GB
                          Graphics Laptop
                        </h2>
                        <p>
                          Price: TK.<span class="text-green-500">97,000</span>
                        </p>
                      </div>
                    </li>
                  </a>
                  <a href="/allProducts/63e609401d5cd800d41480a9">
                    <li class="flex items-center flex-nowrap">
                      <div class="w-20 h-20 hover:bg-transparent">
                        <img
                          src="https://i.ibb.co/n1T7vqn/galaxy-s21-fe-5g-olive-500x500.webp"
                          alt=""
                        />
                      </div>
                      <div class="flex flex-col items-start text-sm hover:bg-transparent">
                        <h2 class="hover:text-primary hover:text-underline">
                          Samsung Galaxy S21 FE 5G Smartphone (8/128GB)
                        </h2>
                        <p>
                          Price: TK.<span class="text-green-500">18,000</span>
                        </p>
                      </div>
                    </li>
                  </a>
                  <a href="/allProducts/63e609401d5cd800d41480c1">
                    <li class="flex items-center flex-nowrap">
                      <div class="w-20 h-20 hover:bg-transparent">
                        <img
                          src="https://i.ibb.co/z5hrRfk/m206bt-010-500x500.jpg"
                          alt=""
                        />
                      </div>
                      <div class="flex flex-col items-start text-sm hover:bg-transparent">
                        <h2 class="hover:text-primary hover:text-underline">
                          Edifier M206BT 2.1 Multimedia Bluetooth Speaker
                        </h2>
                        <p>
                          Price: TK.<span class="text-green-500">5400</span>
                        </p>
                      </div>
                    </li>
                  </a>
                  <a href="/allProducts/63e609401d5cd800d41480cf">
                    <li class="flex items-center flex-nowrap">
                      <div class="w-20 h-20 hover:bg-transparent">
                        <img
                          src="https://i.ibb.co/jfrkvww/xbox-wireless-controller-shock-blue-01-500x500.webp"
                          alt=""
                        />
                      </div>
                      <div class="flex flex-col items-start text-sm hover:bg-transparent">
                        <h2 class="hover:text-primary hover:text-underline">
                          Microsoft Xbox Wireless Controller - Shock Blue
                        </h2>
                        <p>
                          Price: TK.<span class="text-green-500">8200</span>
                        </p>
                      </div>
                    </li>
                  </a>
                  <a href="/allProducts/63e609401d5cd800d41480d4">
                    <li class="flex items-center flex-nowrap">
                      <div class="w-20 h-20 hover:bg-transparent">
                        <img
                          src="https://i.ibb.co/smCvyYJ/ps4-slim-jet-1-500x500.jpg"
                          alt=""
                        />
                      </div>
                      <div class="flex flex-col items-start text-sm hover:bg-transparent">
                        <h2 class="hover:text-primary hover:text-underline">
                          Sony PS4 Slim Jet Black 8Gb RAM, 500GB Gaming Console
                        </h2>
                        <p>
                          Price: TK.<span class="text-green-500">55,500</span>
                        </p>
                      </div>
                    </li>
                  </a>
                  <p class="text-center text-base py-3 cursor-pointer text-red-500">
                    Close Search Tab
                  </p>
                </div>
              </div>
            </ul>
          </div>
          <div class="text-2xl">
            <a class="relative" href="/favorite">
              <p class="absolute top-[-10px] right-0 btn btn-disabled btn-xs btn-circle border-0 bg-yellow-400 text-[13px] text-black">
                0
              </p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-2xl mr-3 cursor-pointer font-semibold hover:text-primary duration-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
              </svg>
            </a>
            <a class="mx-[5px]" href="/cart">
              <div class="relative">
                <p class="absolute top-[-10px] right-0 btn btn-disabled btn-xs btn-circle border-0 bg-yellow-400 text-[13px] text-black">
                  0
                </p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="text-2xl mr-3 cursor-pointer font-semibold hover:text-primary duration-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </svg>
              </div>
            </a>
            <a href="/userProfile">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                class="text-2xl mr-3 cursor-pointer font-semibold hover:text-primary duration-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopNavbar;
