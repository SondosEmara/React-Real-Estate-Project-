import { MapPin, Bed ,Bath,Maximize} from "lucide-react";


export function PropertyComponent({property})
{
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        
        <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {property.type}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{property.title}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-2">
          ${property.price.toLocaleString()}
        </p>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="flex justify-between text-gray-600 mb-3">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Maximize className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.area} sqft</span>
          </div>
        </div>
    
      </div>
    </div>
  );
};

