import { EventsNearMe } from "@/components/events-near-me";
import GroupList from "@/components/explore/GroupList";
import PeopleNearMe from "@/components/explore/PeopleNearMe";
import BuyLocalProducts from "@/components/explore/BuyLocalProducts";
import RentHotel from "@/components/explore/RentHotel";
import { WelcomeToPlace } from "@/components/welcome-to-place";
import { PlacesNearMe } from "@/components/explore/PlacesNearMe";

export default function page() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-center">
            {/* <CurrentLocation /> */}
            <WelcomeToPlace />
            <div className="flex flex-col w-full overflow-x-auto gap-8 py-4 px-2 scrollbar-hide">
              <PlacesNearMe />
              <EventsNearMe />
              <PeopleNearMe />
              <GroupList />
              <BuyLocalProducts />
              <RentHotel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
