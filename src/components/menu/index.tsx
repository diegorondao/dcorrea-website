import { 
  FaGithub, FaLinkedin, FaTwitter, FaMedium, FaTiktok
} from "react-icons/fa";

import { Nav } from "./styles"

const socialMedia =[{
  url: "https://github.com/user/github",
  text: "Github",
  icon: <FaGithub size={50}/>,
},
{
  url: "https://linkedin.com/user/",
  text: "Linkedin",
  icon: <FaLinkedin size={50} />,
},
{
  url: "https://twitter.com/user/",
  text: "Twitter",
  icon: <FaTwitter size={50} />,
},
{
  url: "https://medium.com/user/",
  text: "Medium",
  icon: <FaMedium size={50} />,
},
{
  url: "https://tiktok.com/user/",
  text: "Tiktok",
  icon: <FaTiktok size={50} />,
}];

function Menu() {
  return (
    <Nav>
      <ul>
        {socialMedia.map((social) => {
          return (
            <li>
              <a 
                href={social.url} 
                className="icon brands"
                title={social.text} 
              >
                {social.icon} 
              </a>
            </li>
          )
        })}
      </ul>
    </Nav>
  )
}

export default Menu