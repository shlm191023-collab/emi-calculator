import carSeo from "./car";
import personalSeo from "./personal";
import homeSeo from "./home";
import loanSeo from "./loan";
/*import loan10LSeo from "./loan10L";
import loan5LSeo from "./loan5L";
import loan3LSeo from "./loan3L";*/

export const seoMap = {
  car: carSeo,
  personal: personalSeo,
  home: homeSeo,
  loan: loanSeo,
  /*"10L": loan10LSeo,
  "5L": loan5LSeo,
  "3L": loan3LSeo,*/
};