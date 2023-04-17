import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Header = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">
          {sessionData?.user ? sessionData?.user?.name : "Noteyy"}
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input-bordered input"
          />
        </div>
        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <>
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <div className="w-10 rounded-full">
                  <img
                    src={sessionData?.user?.image ?? ""}
                    alt={sessionData?.user?.name ?? ""}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={() => void signOut()}>Logout</a>
                </li>
              </ul>
            </>
          ) : (
            <>
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={() => void signIn()}>signin</a>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
