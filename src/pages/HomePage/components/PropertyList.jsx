import { useContext } from "react"; 
import { HomePageContext } from "../HomePageContext";
import {PropertyComponent } from "./Property"

export function PropertyListComponent()
{
  const {filteredProperties } = useContext(HomePageContext);

   if (filteredProperties.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">No properties found</p>
        <p className="text-gray-500 mt-2">Try adjusting your filters or search terms</p>
      </div>
    );
}
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProperties.map(property => (
        <PropertyComponent
          key={property.id}
          property={property}
        />
      ))}
    </div>
  );

}
