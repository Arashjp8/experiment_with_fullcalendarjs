import FullCalendar from "@fullcalendar/react";
import listWeek from "@fullcalendar/list";
import dayGrid from "@fullcalendar/daygrid";
import timeGrid from "@fullcalendar/timegrid";

export const FullCallendar = () => {
  return (
    <>
      <FullCalendar
        plugins={[timeGrid]}
        initialView={"timeGridWeek"}
        // weekends={false}
        events={[
          { title: "event 1", date: "2024-02-08" },
          { title: "event 2", date: "2024-02-09" },
        ]}
      />
      {/*  <FullCalendar*/}
      {/*  plugins={[listWeek]}*/}
      {/*  initialView={"listWeek"}*/}
      {/*  // weekends={false}*/}
      {/*  events={[*/}
      {/*    { title: "event 1", date: "2024-02-08" },*/}
      {/*    { title: "event 2", date: "2024-02-09" },*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<FullCalendar*/}
      {/*  plugins={[dayGrid]}*/}
      {/*  initialView={"dayGridMonth"}*/}
      {/*  // weekends={false}*/}
      {/*  events={[*/}
      {/*    { title: "event 1", date: "2024-02-08" },*/}
      {/*    { title: "event 2", date: "2024-02-09" },*/}
      {/*  ]}*/}
      {/*/>*/}
    </>
  );
};
