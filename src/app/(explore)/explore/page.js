import { EventsNearMe } from "@/components/events-near-me";

export default function page() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center ">
          <EventsNearMe />
          

        </div>
      </div>
    </div>
  );
}
