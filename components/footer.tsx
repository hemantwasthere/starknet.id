/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";
import styles from "../styles/footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className="mb-4">
        Powered by&nbsp;<strong>Starknet</strong>
      </div>
      <div className="flex text-s">
        <a className="underline" href="/pdfs/PrivacyPolicy.pdf">
          Privacy policy
        </a>
        &nbsp;-&nbsp;
        <a className="underline" href="/pdfs/Terms.pdf">
          Terms of use
        </a>
      </div>
    </footer>
  );
};

export default Footer;
