import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/mohit1508/"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mohit-khandelwal-15aug/"},
    {icon: <SiLeetcode />, path: "https://leetcode.com/u/mohitk1508/"},
    // {icon: <FaYoutube />, path: ""},
    // {icon: <FaTwitter />, path: ""},
]

const Social = ( { containerStyles, iconStyles } ) => {
    return(
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} target="_blank" className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;