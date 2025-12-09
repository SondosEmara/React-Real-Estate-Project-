
import { useContext } from "react"; 
import { HomePageContext } from "../HomePageContext";


export function FiltersPanelComponent()
{
  const { filter , propertyTypes } = useContext(HomePageContext);

  return (
    <div className="flex gap-2 overflow-x-auto">
      {propertyTypes.map(type => (
        <button
          key={type}
          onClick={() => filter.onFilterPropertyChange(type)}
          className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
            filter.filterPropertyName === type ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
    );
}
