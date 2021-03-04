import { environment } from "./envionment";
import { Image } from "./models/image";

export default function() {
  function getImgPath(image: Image, variant: string) {
    return `${environment.publicUrl}/storage/${image.path}${image.title}${variant}.${image.extension}`;
  }

  function getImgObj(image: Image, variant: string) {
    return {
      src: getImgPath(image, variant),
      loading: getImgPath(image, `${variant}_lazy`),
    };
  }

  function formatDate(date) {
    //format date to t.m.Y
    const months: string[] = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    const d: Date = new Date(date);
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    return day + "." + months[month] + "." + year;
  }

  function getCookie(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return false;
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  return { getImgObj, getImgPath, formatDate, getCookie, setCookie };
}
