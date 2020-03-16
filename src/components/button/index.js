import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import styles from "./index.module.scss";

const Button = ({ children, type, href, to, onClick, fullWidth }) => {
  const buttonStyles = classnames(styles.main, styles.fullWidth && fullWidth);
  const El = href ? "a" : to ? Link : "button";
  return (
    <El
      className={buttonStyles}
      type={type}
      href={href}
      to={to}
      onClick={onClick}
      fullWidth={fullWidth || true}
    >
      <span className={styles.children}>{children}</span>
    </El>
  );
};

export default Button;
