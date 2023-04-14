import React from "react";

import { Content } from "components/Content";
import { Header } from "components/Header";
import { MainPromotion } from "components/MainPromotion";

export const App = () => {
   return (
      <>
         <Header />
         <main>
            <MainPromotion />
            <Content />
         </main>
      </>
   );
};
