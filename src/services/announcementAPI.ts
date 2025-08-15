import axios from "axios";

export const fetchAnnouncements = async () => {
  const res = await axios.get("http://localhost:8088/api/announcements");
  return res.data;
};
