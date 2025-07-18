// Sample travel data for the Travel Guide app
// This file contains categories and places with all necessary information

export const categories = [
  {
    id: '1',
    name: 'Beaches',
    icon: '🏖️',
    image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#3498DB'
  },
  {
    id: '2',
    name: 'Mountains',
    icon: '🏔️',
    image: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#27AE60'
  },
  {
    id: '3',
    name: 'Cities',
    icon: '🏙️',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#E74C3C'
  },
  {
    id: '4',
    name: 'Historical',
    icon: '🏛️',
    image: 'https://images.pexels.com/photos/161797/rome-italy-bridge-river-161797.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#F39C12'
  }
];

export const places = [
  {
    id: '1',
    name: 'Marina Beach, Chennai',
    category: 'Beaches',
    description:
      'Marina Beach is India’s longest urban beach, stretching along the Bay of Bengal in Chennai. Known for its golden sands, lively atmosphere, and historic landmarks, it is a favorite spot for sunrise views and local street food.',
    image:
      'https://images.pexels.com/photos/28351717/pexels-photo-28351717.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    price: '  ₹3000 – ₹8000\n(Local food & rides)',
    coordinates: { latitude: 13.0500, longitude: 80.2824 },
    highlights: ['Golden sands', 'Sunrise views', 'Street food', 'Historic landmarks'],
  },
  {
    id: '2',
    name: 'Kodaikanal, Tamil Nadu',
    category: 'Mountains',
    description:
      'Known as the “Princess of Hill Stations,” Kodaikanal is famous for its misty mountains, lush valleys, and scenic lakes. Perfect for trekking, boating, and enjoying cool weather year-round.',
    image:
      'https://images.pexels.com/photos/127177/pexels-photo-127177.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    price: '₹3000 – ₹6000\n(Stay + Travel)',
    coordinates: { latitude: 10.2381, longitude: 77.4892 },
    highlights: ['Coaker’s Walk', 'Kodaikanal Lake', 'Pine forests', 'Trekking trails'],
  },
  {
    id: '3',
    name: 'Madurai, Tamil Nadu',
    category: 'Cities',
    description:
      'One of the oldest living cities in the world, Madurai is famous for its historic Meenakshi Amman Temple, vibrant markets, and authentic South Indian cuisine.',
    image:
      'https://images.pexels.com/photos/16681047/pexels-photo-16681047.png?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    price: '   ₹1000 – ₹2500\n(Local Travel + Food)',
    coordinates: { latitude: 9.9252, longitude: 78.1198 },
    highlights: ['Meenakshi Temple', 'Street markets', 'Jigarthanda', 'Cultural heritage'],
  },
  {
    id: '4',
    name: 'Brihadeeswarar Temple, Thanjavur',
    category: 'Historical',
    description:
      'A UNESCO World Heritage Site built by Raja Raja Chola I in the 11th century. This magnificent temple is known for its towering vimana, detailed sculptures, and rich Chola history.',
    image:
      'https://images.pexels.com/photos/13226733/pexels-photo-13226733.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    price: '  ₹500 – ₹1500\n(Travel + Entry)',
    coordinates: { latitude: 10.7847, longitude: 79.1316 },
    highlights: ['Chola architecture', 'Stone carvings', 'Cultural history', 'UNESCO site'],
  },
  {
    id: '5',
    name: 'Rameswaram Beach, Tamil Nadu',
    category: 'Beaches',
    description:
      'Rameswaram Beach is known for its shallow turquoise waters, golden sands, and spiritual significance. Located near the famous Ramanathaswamy Temple, it is a peaceful destination ideal for both relaxation and cultural exploration.',
    image:
      'https://images.pexels.com/photos/175773/pexels-photo-175773.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    price: '  ₹1500 – ₹3000\n(Travel + Local Food)',
    coordinates: { latitude: 9.2887, longitude: 79.3129 },
    highlights: ['Shallow waters', 'Golden sands', 'Sunrise views', 'Close to temples'],
  },
  {
    id: '6',
    name: 'Ooty, Tamil Nadu',
    category: 'Mountains',
    description:
      'A popular hill station in the Nilgiris, Ooty is known for its lush tea gardens, scenic valleys, and pleasant climate. A perfect getaway for nature lovers and photographers.',
    image:
      'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    price: '₹2500 – ₹5000\n(Travel + Stay)',
    coordinates: { latitude: 11.4064, longitude: 76.6932 },
    highlights: ['Tea gardens', 'Botanical gardens', 'Nilgiri toy train', 'Doddabetta Peak'],
  },
  {
    id: '7',
    name: 'Chennai, Tamil Nadu',
    category: 'Cities',
    description:
      'A bustling metropolitan city on the Bay of Bengal, Chennai is known for its Marina Beach, temples, colonial architecture, and vibrant South Indian culture.',
    image:
      'https://images.pexels.com/photos/8783188/pexels-photo-8783188.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    price: '₹1500 – ₹3500\n(Travel + Food)',
    coordinates: { latitude: 13.0827, longitude: 80.2707 },
    highlights: ['Marina Beach', 'Kapaleeshwarar Temple', 'Cultural festivals', 'South Indian cuisine'],
  },
  {
    id: '8',
    name: 'Mahabalipuram, Tamil Nadu',
    category: 'Historical',
    description:
      'A UNESCO World Heritage site known for its ancient rock-cut temples, stone carvings, and unique coastal architecture from the Pallava dynasty.',
    image:
      'https://www.travelure.in/wp-content/uploads/2018/12/Shore-Temple-for-Blog-Header-1.jpg',
    rating: 4.8,
    price: '₹500 – ₹1500\n(Travel + Entry)',
    coordinates: { latitude: 12.6269, longitude: 80.1925 },
    highlights: ['Shore Temple', 'Five Rathas', 'Stone carvings', 'Cultural history'],
  },
  {
    id: '9',
    name: 'Mudumalai National Park, Tamil Nadu',
    category: 'Wildlife',
    description:
      'A rich wildlife sanctuary nestled in the Nilgiri Hills, famous for its elephants, tigers, and lush forest safaris. Perfect for wildlife enthusiasts and photographers.',
    image:
      'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    price: '₹2000 – ₹4000\n(Travel + Safari)',
    coordinates: { latitude: 11.5994, longitude: 76.5196 },
    highlights: ['Elephant safaris', 'Bird watching', 'Tigers & leopards', 'Nature trails'],
  },
  {
    id: '10',
    name: 'Pichavaram Mangrove Forest, Tamil Nadu',
    category: 'Backwaters',
    description:
      'One of the world’s largest mangrove forests, known for its serene backwaters and boat rides through scenic water channels.',
    image:
      'https://images.pexels.com/photos/3762995/pexels-photo-3762995.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    price: '₹1000 – ₹2500\n(Travel + Boat Ride)',
    coordinates: { latitude: 11.4294, longitude: 79.7694 },
    highlights: ['Mangrove boat rides', 'Bird watching', 'Eco-tourism', 'Serene backwaters'],
  },
];


// Helper functions for data manipulation
export const getPlacesByCategory = (categoryName) => {
  return places.filter(place => place.category === categoryName);
};

export const getFeaturedPlaces = () => {
  return places.filter(place => place.rating >= 4.7);
};

export const searchPlaces = (query) => {
  if (!query) return places;

  const lowercaseQuery = query.toLowerCase();
  return places.filter(place =>
    place.name.toLowerCase().includes(lowercaseQuery) ||
    place.category.toLowerCase().includes(lowercaseQuery) ||
    place.description.toLowerCase().includes(lowercaseQuery)
  );
};