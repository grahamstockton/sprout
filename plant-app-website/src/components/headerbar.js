import { ReactComponent as ProfileSvg } from "../profile.svg";

const HeaderBar = () => {
    return (
        <div class="navbar bg-white text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-85 backdrop-blur shadow-sm">
            <div class="flex-1">
                <a class="btn btn-ghost text-xl">Sprout</a>
            </div>
            <div class="flex-none">
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn border bg-base-100 btn-circle avatar">
                        <ProfileSvg class="w-10 rounded-full" />
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderBar;