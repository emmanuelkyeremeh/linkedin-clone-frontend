import styles from "../styles/feed.module.css";
import Image from "next/image";
import SearchIcon from "@material-ui/icons/Search";
import FeedNavIcon from "./FeedNavIcon";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import WorkIcon from "@material-ui/icons/Work";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { Avatar } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import LocalMallIcon from "@material-ui/icons/LocalMall";

const FeedNav = () => {
  return (
    <div className={styles.feedNavContainer}>
      <div className={styles.feedNav_Search}>
        <Image
          className={styles.feedNav_Search_image}
          src="/linkedin-icon.svg"
          width="35"
          height="35"
        />
        <div className={styles.feedNav_searchContainer}>
          <SearchIcon />
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <div className={styles.feedNav_IconContainer}>
        <FeedNavIcon
          Icon={<HomeIcon style={{ fontSize: "1.5rem" }} />}
          text="Home"
          OptionalIcon={null}
        />
        <FeedNavIcon
          Icon={<PeopleAltIcon style={{ fontSize: "1.5rem" }} />}
          text="My Network"
          OptionalIcon={null}
        />
        <FeedNavIcon
          Icon={<WorkIcon style={{ fontSize: "1.5rem" }} />}
          text="Jobs"
          OptionalIcon={null}
        />
        <FeedNavIcon
          Icon={<ChatRoundedIcon style={{ fontSize: "1.5rem" }} />}
          text="Messaging"
          OptionalIcon={null}
        />
        <FeedNavIcon
          Icon={<NotificationsActiveIcon style={{ fontSize: "1.5rem" }} />}
          text="Notifications"
          OptionalIcon={null}
        />
        <FeedNavIcon
          Icon={<Avatar className={styles.FeedNav_Avatar} />}
          text="Me"
          OptionalIcon={<ArrowDropDownIcon />}
        />
        <FeedNavIcon
          Icon={<MenuIcon style={{ fontSize: "1.5rem" }} />}
          text="Work"
          OptionalIcon={<ArrowDropDownIcon />}
        />
        <FeedNavIcon
          Icon={<LocalMallIcon style={{ fontSize: "1.5rem" }} />}
          text="Post a Job"
          OptionalIcon={null}
        />
      </div>
    </div>
  );
};

export default FeedNav;
