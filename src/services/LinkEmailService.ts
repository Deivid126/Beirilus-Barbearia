import { google, outlook } from "calendar-link";
import moment from "moment-timezone";
import { TEXT } from "../constants/text";
import { SUBJECT } from "../constants/subject";

class LinkEmailService {
  gerarLink(data: string) {
    const link = {
      linkGoogle: "",
      linkOutlook: "",
    };
    
    let date = new Date(data);

    const startDate = moment(data).tz("America/New_York");
    const newStarDate = startDate.clone().add(3, "hours")
    const endDate = newStarDate.clone().add( 1, "hour")
    const event = {
      title: SUBJECT.BOOKING_CUSTOMER.CREATE,
      description: TEXT.BOOKING_CUSTOMER.CREATE,
      start: newStarDate,
      end: endDate
    };

    link.linkGoogle = google(event);

    link.linkOutlook = outlook(event);

    return link;
  }
}


export default new LinkEmailService();
