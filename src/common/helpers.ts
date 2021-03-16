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

  function getExcerpt(text: string, length: number): string {
    let excerpt = text;
    if (excerpt.length >= length) {
      excerpt = excerpt.substring(0, length) + "...";
    }
    return excerpt;
  }

  function formatDate(date: string, short?: boolean) {
    //format date to t.m.Y
    let months: string[] = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    if (short) {
      months = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
    }
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

  return { getImgObj, getImgPath, formatDate, getCookie, setCookie, getExcerpt };
}
