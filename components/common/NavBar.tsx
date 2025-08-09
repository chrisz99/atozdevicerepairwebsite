import Image from "next/image";
import styles from "../../app/styles/global.module.css";
import Logo from "../../public/assets/logo_transparent.png";
import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
};

const NavLinkCollection: NavLinkProps[] = [
  { href: "/submitrepair", label: "Submit Repair" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const NavBar: React.FC = () => {
  return (
    <div className={styles.navbar} style={{ margin: "1.5vh", display: "flex", alignItems: "center" }}>
      <Link href="/">
        <Image unoptimized src={Logo} className={styles.navbar_logo} alt="Company Logo" />
      </Link>
      <div className={styles.navbar_links} style={{ display: "flex", gap: "1.5rem", marginLeft: "auto" }}>
        {NavLinkCollection.map((value, index) => (
          <NavLink key={index} href={value.href} label={value.label} />
        ))}
      </div>
    </div>
  );
};
const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <span>
      <Link className={styles.navlink} href={href}>
        <span>{label}</span>
      </Link>
    </span>
  );
};
