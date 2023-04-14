import React from "react";

import styles from "./index.module.scss";

export const Title = ({ children }) => {
   return <h3 className={styles.title}>{children}</h3>;
};
