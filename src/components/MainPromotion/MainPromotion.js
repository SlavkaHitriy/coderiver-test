import cn from "classnames";
import React from "react";

import android from "assets/images/icons/android.svg";
import ios from "assets/images/icons/ios.svg";

import styles from "./index.module.scss";

export const MainPromotion = () => {
   return (
      <div className={styles.promo}>
         <svg
            className={styles.promoLine}
            viewBox="0 0 1321 303"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M3 158.961C11.6696 158.961 28.1895 172.113 28.1895 172.113C41.4696 177.85 62.1954 186.803 62.1954 186.803C62.1954 186.803 88.9817 197.38 106.837 201.774C125.953 206.479 156.656 209.469 156.656 209.469C220.265 214.51 282.407 227.204 317.869 182.886C324.074 175.131 326.461 161.479 312.831 161.479C299.087 161.479 292.877 164.812 281.344 170.294C261.57 179.693 243.054 193.977 239.921 208.07C235.661 227.239 231.76 262.265 244.819 278.585C264.479 303.154 343.059 299.852 343.059 299.852C343.059 299.852 422.794 297.83 472.645 287.959C494.059 283.719 526.942 274.668 526.942 274.668L594.954 249.064L678.3 214.887C678.3 214.887 704.687 201.101 721.641 192.355C746.799 179.376 786.217 159.424 786.217 159.424C786.217 159.424 818.696 144.873 839.526 135.592C865.976 123.805 907.304 105.515 907.304 105.515C907.304 105.515 945.937 91.5604 965.24 84.6682C980.085 79.3676 996.043 76.7171 1010.58 70.2573C1028.13 62.4586 1065.86 54.5873 1065.86 54.5873C1065.86 54.5873 1102.61 43.4971 1126.45 37.5181C1170.2 26.5496 1281.49 15.1687 1318 3"
               stroke="#647CE9"
               strokeWidth="6"
               strokeLinecap="round"
            />
         </svg>

         <div className={cn("container", styles.promoInner)}>
            <div className={styles.promoContent}>
               <div className={styles.promoApps}>
                  <div className={styles.promoAppsBox}>
                     <div className={styles.promoAppsItem}>
                        <img src={ios} alt="ios" />
                     </div>
                     <div className={styles.promoAppsItem}>
                        <img src={android} alt="android" />
                     </div>
                  </div>
                  <div>App available</div>
               </div>
               <h1 className={styles.promoTitle}>
                  CHOOSE YOUR WINTER <span>Look</span> APPAREL
               </h1>
            </div>
            <div className={styles.promoImage}></div>
         </div>
      </div>
   );
};
