import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export const FullCallendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView={"dayGridMonth"}
      // weekends={false}
      events={[
        { title: "event 1", date: "2024-02-08" },
        { title: "event 2", date: "2024-02-09" },
      ]}
    />
  );
};
