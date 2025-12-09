import { SearchComponent } from "./components/SearchBar";
import { FiltersPanelComponent } from "./components/FiltersPanel";
import { PropertyListComponent } from "./components/PropertyList";
import { HomePageGraphHook } from "./hooks/homePageGraphHook.jxs";
import { HomePageContext } from "./HomePageContext";



export function HomePage() {
  const HomePageGraph = HomePageGraphHook();

  return (
    <HomePageContext.Provider value={HomePageGraph}>
      <div>
        <SearchComponent /> 
        <FiltersPanelComponent/>
         <p>Current search: {HomePageGraph.search.searchTerm} , {HomePageGraph.filter.filterPropertyName}</p>
        <PropertyListComponent/>
      </div>
    </HomePageContext.Provider>
  );
}

