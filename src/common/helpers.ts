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

  return { getImgObj, getImgPath, formatDate };
}

