const NavigationSidebar = () => {
    return(`<ul class="nav flex-column mb-3 mb-sm-0 list-group">
                    <li class="nav-item list-group-item list-group-item-action p-0 m-0"><i class="fab fa-twitter nav-link" style="color: black"></i></li>
                    <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                        <a class="nav-link"  href="home.html" style="color: black"><i class="fas fa-home" style="color: black;"></i>
                            <span class="d-none d-xxl-inline-block d-xl-inline-block ps-1"> Home</span></a>
                    </li>
                    <li class="nav-item list-group-item list-group-item-action active p-0 m-0">
                        <a class="nav-link list-group-item list-group-item-action active" href="index.html" style="color: white">
                            <i class="fas fa-hashtag" style="color: white;"></i>
                            <span class="d-none d-xxl-inline-block d-xl-inline-block ps-1"> Explore</span>
                        </a>
                    </li>
                    <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                        <a class="nav-link" href="../notifications/index.html" style="color: black"> <i class="fas fa-bell" style="color: black;"></i>
                            <span class="d-none d-xxl-inline-block d-xl-inline-block ps-1"> Notifications</span></a>
                    </li>
                    <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                        <a class="nav-link" href="../messages/index.html" style="color: black"> <i class="fas fa-envelope" style="color: black;"></i>
                            <span class="d-none d-xxl-inline-block d-xl-inline-block ps-1"> Messages</span></a>
                    </li>
                    <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                        <a class="nav-link" href="../bookmarks/index.html" style="color: black"> <i class="fas fa-bookmark" style="color: black;"></i>
                            <span class="d-none d-xxl-inline-block d-xl-inline-block ps-1"> Bookmarks</span></a>
                    </li>
                    <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                        <a class="nav-link" href="../lists/index.html" style="color: black"> <i class="fas fa-list" style="color: black;"></i>
                            <span class="d-none d-xxl-inline-block d-xl-inline-block ps-1"> Lists</span></a>
                    </li>
                    <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                        <a class="nav-link" href="../profile/index.html" style="color: black"> <i class="fas fa-user" style="color: black;"></i>
                            <span class="d-none d-xxl-inline-block d-xl-inline-block ps-1"> Profile</span></a>
                    </li>
                    <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                        <a class="nav-link ist-group-item list-group-item-action d-none d-xxl-block d-xl-block d-lg-block d-md-block" href="#" style="color: black"> <i class="fas fa-ellipsis-h" style="color: black;"></i>
                            <span class="d-none d-xxl-inline-block d-xl-inline-block ps-1"> More</span></a>
                    </li>
                </ul>
                <button class="btn btn-primary w-100 mt-2 rounded-pill">
                Tuit
            </button>
        `);
}

export default NavigationSidebar;