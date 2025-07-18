// Sample travel data for the Travel Guide app
// This file contains categories and places with all necessary information

export const categories = [
  // Beaches, Mountains, Cities, Historical, Wildlife, Backwaters, Coastal, Cultural, Waterfalls, Temple, Temple
  {
    id: '1',
    name: 'Beaches',
    icon: '🏖️',
    image: 'https://i.pinimg.com/originals/39/87/7f/39877ff696c1ebc568c63ebf7a0e31cf.jpg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://www.indiatravelforum.in/attachments/chennai-jpg.2638?auto=compress&cs=tinysrgb&w=800',
    color: '#E74C3C'
  },
  {
    id: '4',
    name: 'Historical',
    icon: '🏛️',
    image: 'https://regal-holidays.net/wp-content/uploads/2017/04/taj-mahal-agra-india-P3CHN69_1.jpg?auto=compress&cs=tinysrgb&w=800',
    color: '#F39C12'
  },
  {
    id: '5',
    name: 'Wildlife',
    icon: '🦁',
    image: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/03/Tadoba-Maharashtra1.jpg?auto=compress&cs=tinysrgb&w=800',
    color: '#8E44AD'
  },
  {
    id: '6',
    name: 'Backwaters',
    icon: '🌊',
    image: 'https://cdn.kimkim.com/files/a/images/e1a35f4ab7e5e6784135780f34bdd78938b9b4e0/original-4f787f7ae22b5331fd58eba80f67693d.jpg?auto=compress&cs=tinysrgb&w=800',
    color: '#2980B9'
  },
  {
    id: '7',
    name: 'Coastal',
    icon: '🌅',
    image: 'https://kokanplaces.com/wp-content/uploads/2020/08/areware-beach.jpg?auto=compress&cs=tinysrgb&w=800',
    color: '#F1C40F'
  },
  {
    id: '8',
    name: 'Cultural',
    icon: '🎭',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJqfR_i-eAqmbLFPEakUtHjFxgGGKxRB3q7KlRShbNGPWUjAcZi90-xZn1LG9Inyq7vsQkbRnYSoq6haIkOj9LwDsAYhxeOWm3zI676kSsvyCPpMdtIiq9f0w-q0LxB2qnlIepPsMV1MI/s1600/festivals-of-india.jpg?auto=compress&cs=tinysrgb&w=800',
    color: '#2ECC71'
  },
  {
    id: '9',
    name: 'Waterfalls',
    icon: '💦',
    image: 'https://gangatimes.com/wp-content/uploads/2021/09/dudhsagar-falls_1479812208_sGcvOQ.jpg?auto=compress&cs=tinysrgb&w=800',
    color: '#3498DB'
  },
  {
    id: '10',
    name: 'Temple',
    icon: '⛪',
    image: 'https://describbe.com/images/2022-07-13%2004-03-00pm_Rishika%20Shree.jpg?auto=compress&cs=tinysrgb&w=800',
    color: '#E67E22'
  },
];

export const places = [
  {
    id: '1',
    name: 'Marina Beach, Chennai',
    category: 'Beaches',
    description: 'Marina Beach is India’s longest urban beach, stretching along the Bay of Bengal in Chennai. Known for its golden sands, lively atmosphere, and historic landmarks, it is a favorite spot for sunrise views and local street food.',
    image: 'https://images.pexels.com/photos/28351717/pexels-photo-28351717.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    price: '₹3000 – ₹8000\n(Local food & rides)',
    coordinates: { latitude: 13.0500, longitude: 80.2824 },
    highlights: ['Golden sands', 'Sunrise views', 'Street food', 'Historic landmarks'],
  },
  {
    id: '2',
    name: 'Kodaikanal, Tamil Nadu',
    category: 'Mountains',
    description: 'Known as the “Princess of Hill Stations,” Kodaikanal is famous for its misty mountains, lush valleys, and scenic lakes. Perfect for trekking, boating, and enjoying cool weather year-round.',
    image: 'https://images.pexels.com/photos/127177/pexels-photo-127177.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    price: '₹3000 – ₹6000\n(Stay + Travel)',
    coordinates: { latitude: 10.2381, longitude: 77.4892 },
    highlights: ['Coaker’s Walk', 'Kodaikanal Lake', 'Pine forests', 'Trekking trails'],
  },
  {
    id: '3',
    name: 'Madurai, Tamil Nadu',
    category: 'Cities',
    description: 'One of the oldest living cities in the world, Madurai is famous for its historic Meenakshi Amman Temple, vibrant markets, and authentic South Indian cuisine.',
    image: 'https://images.pexels.com/photos/16681047/pexels-photo-16681047.png?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    price: '₹1000 – ₹2500\n(Local Travel + Food)',
    coordinates: { latitude: 9.9252, longitude: 78.1198 },
    highlights: ['Meenakshi Temple', 'Street markets', 'Jigarthanda', 'Cultural heritage'],
  },
  {
    id: '4',
    name: 'Brihadeeswarar Temple, Thanjavur',
    category: 'Historical',
    description: 'A UNESCO World Heritage Site built by Raja Raja Chola I in the 11th century. This magnificent temple is known for its towering vimana, detailed sculptures, and rich Chola history.',
    image: 'https://images.pexels.com/photos/13226733/pexels-photo-13226733.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    price: '₹500 – ₹1500\n(Travel + Entry)',
    coordinates: { latitude: 10.7847, longitude: 79.1316 },
    highlights: ['Chola architecture', 'Stone carvings', 'Cultural history', 'UNESCO site'],
  },
  {
    id: '5',
    name: 'Rameswaram Beach, Tamil Nadu',
    category: 'Beaches',
    description: 'Rameswaram Beach is known for its shallow turquoise waters, golden sands, and spiritual significance. Located near the famous Ramanathaswamy Temple, it is a peaceful destination ideal for both relaxation and cultural exploration.',
    image: 'https://images.pexels.com/photos/175773/pexels-photo-175773.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    price: '₹1500 – ₹3000\n(Travel + Local Food)',
    coordinates: { latitude: 9.2887, longitude: 79.3129 },
    highlights: ['Shallow waters', 'Golden sands', 'Sunrise views', 'Close to temples'],
  },
  {
    id: '6',
    name: 'Ooty, Tamil Nadu',
    category: 'Mountains',
    description: 'A popular hill station in the Nilgiris, Ooty is known for its lush tea gardens, scenic valleys, and pleasant climate. A perfect getaway for nature lovers and photographers.',
    image: 'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    price: '₹2500 – ₹5000\n(Travel + Stay)',
    coordinates: { latitude: 11.4064, longitude: 76.6932 },
    highlights: ['Tea gardens', 'Botanical gardens', 'Nilgiri toy train', 'Doddabetta Peak'],
  },
  {
    id: '7',
    name: 'Mahabalipuram, Tamil Nadu',
    category: 'Historical',
    description: 'A UNESCO World Heritage site known for its ancient rock-cut temples, stone carvings, and unique coastal architecture from the Pallava dynasty.',
    image: 'https://www.travelure.in/wp-content/uploads/2018/12/Shore-Temple-for-Blog-Header-1.jpg',
    rating: 4.8,
    price: '₹500 – ₹1500\n(Travel + Entry)',
    coordinates: { latitude: 12.6269, longitude: 80.1925 },
    highlights: ['Shore Temple', 'Five Rathas', 'Stone carvings', 'Cultural history'],
  },
  {
    id: '8',
    name: 'Mudumalai National Park, Tamil Nadu',
    category: 'Wildlife',
    description: 'A rich wildlife sanctuary nestled in the Nilgiri Hills, famous for its elephants, tigers, and lush forest safaris. Perfect for wildlife enthusiasts and photographers.',
    image: 'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    price: '₹2000 – ₹4000\n(Travel + Safari)',
    coordinates: { latitude: 11.5994, longitude: 76.5196 },
    highlights: ['Elephant safaris', 'Bird watching', 'Tigers & leopards', 'Nature trails'],
  },
  {
    id: '9',
    name: 'Pichavaram Mangrove Forest, Tamil Nadu',
    category: 'Backwaters',
    description: 'One of the world’s largest mangrove forests, known for its serene backwaters and boat rides through scenic water channels.',
    image: 'https://images.pexels.com/photos/3762995/pexels-photo-3762995.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    price: '₹1000 – ₹2500\n(Travel + Boat Ride)',
    coordinates: { latitude: 11.4294, longitude: 79.7694 },
    highlights: ['Mangrove boat rides', 'Bird watching', 'Eco-tourism', 'Serene backwaters'],
  },
  {
    id: '10',
    name: 'Kanyakumari, Tamil Nadu',
    category: 'Coastal',
    description: 'The southernmost tip of mainland India, known for its unique sunrise and sunset views over the ocean and the Vivekananda Rock Memorial.',
    image: 'https://images.pexels.com/photos/230535/pexels-photo-230535.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    price: '₹1000 – ₹3000\n(Travel + Food)',
    coordinates: { latitude: 8.0883, longitude: 77.5385 },
    highlights: ['Sunset views', 'Vivekananda Rock Memorial', 'Triveni Sangam', 'Beaches'],
  },
  {
    id: '11',
    name: 'Thanjavur Art Gallery, Thanjavur',
    category: 'Cultural',
    description: 'Home to exquisite Chola bronzes and traditional arts, the Thanjavur Art Gallery showcases rich cultural heritage.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Thanjavur_Painting_Museum.JPG',
    rating: 4.5,
    price: '₹500 – ₹1000\n(Entry fee)',
    coordinates: { latitude: 10.7871, longitude: 79.1394 },
    highlights: ['Chola bronzes', 'Traditional arts', 'Cultural heritage'],
  },
  {
    id: '12',
    name: 'Courtallam Waterfalls, Courtallam',
    category: 'Waterfalls',
    description: 'Courtallam is known as the Spa of South India, famous for its many waterfalls and natural springs.',
    image: 'https://images.pexels.com/photos/104655/pexels-photo-104655.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    price: '₹200 – ₹500\n(Local travel)',
    coordinates: { latitude: 8.9361, longitude: 77.2927 },
    highlights: ['Waterfalls', 'Natural springs', 'Spa'],
  },
  {
    id: '13',
    name: 'Thiruchendur Murugan Temple, Thiruchendur',
    category: 'Temple',
    description: 'An ancient temple dedicated to Lord Murugan, located on the shores of the Bay of Bengal.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Thiruchendur_temple.JPG',
    rating: 4.7,
    price: '₹100 – ₹300\n(Entry)',
    coordinates: { latitude: 8.4910, longitude: 78.1453 },
    highlights: ['Lord Murugan', 'Sea view', 'Pilgrimage'],
  },
  {
    id: '14',
    name: 'Srivilliputhur Andal Temple, Srivilliputhur',
    category: 'Temple',
    description: 'Dedicated to the poet-saint Andal and a vibrant temple known for its Dravidian architecture.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Srivilliputtur_Temple.jpg',
    rating: 4.6,
    price: '₹100 – ₹300\n(Entry)',
    coordinates: { latitude: 9.4629, longitude: 77.5037 },
    highlights: ['Dravidian architecture', 'Andal shrine', 'Cultural festivals'],
  },
  {
    id: '15',
    name: 'Chettinad Palace, Karaikudi',
    category: 'Historical',
    description: 'Chettinad is famous for its grand mansions, unique architecture, and rich cultural legacy.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Ayyanar_temple_in_Chettinad_Mansion.JPG',
    rating: 4.5,
    price: '₹300 – ₹800\n(Entry + Guide)',
    coordinates: { latitude: 10.0748, longitude: 78.7702 },
    highlights: ['Chettinad mansions', 'Architecture', 'Cultural heritage'],
  },
  {
    id: '16',
    name: 'Vaigai Dam, Madurai',
    category: 'Dam',
    description: 'A popular dam near Madurai offering picnic spots and boating.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Vaigai_Dam_01.JPG',
    rating: 4.2,
    price: '₹100 – ₹200\n(Entry + Boating)',
    coordinates: { latitude: 9.9333, longitude: 78.3766 },
    highlights: ['Picnic spots', 'Boating', 'Scenic views'],
  },
  {
    id: '17',
    name: 'Alagar Kovil, Madurai',
    category: 'Temple',
    description: 'A temple dedicated to Lord Vishnu located in the scenic Alagar Hills.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Alagar_Kovil_Temple_IMG_4206.JPG',
    rating: 4.4,
    price: '₹50 – ₹200\n(Entry)',
    coordinates: { latitude: 9.9840, longitude: 78.0709 },
    highlights: ['Vishnu temple', 'Alagar Hills', 'Pilgrimage'],
  },
  {
    id: '18',
    name: 'Tiruparankundram Murugan Temple, Madurai',
    category: 'Temple',
    description: 'One of the six sacred abodes of Lord Murugan, located on a hillock.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Tiruparankundram_Temple2.JPG',
    rating: 4.5,
    price: '₹100 – ₹300\n(Pilgrimage)',
    coordinates: { latitude: 9.8949, longitude: 78.0666 },
    highlights: ['Lord Murugan', 'Hill temple', 'Pilgrimage'],
  },
  {
    id: '19',
    name: 'Thirumalai Nayakkar Mahal, Madurai',
    category: 'Historical Palace',
    description: 'A 17th-century palace blending Dravidian and Rajput styles, famous for its grand architecture.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Thirumalai_Nayakar_Palace.jpg',
    rating: 4.5,
    price: '₹500 – ₹1000\n(Entry fee)',
    coordinates: { latitude: 9.9298, longitude: 78.1084 },
    highlights: ['Palace architecture', 'Historical significance', 'Cultural events'],
  },
  {
    id: '20',
    name: 'Gandhi Memorial Museum, Madurai',
    category: 'Museum',
    description: 'Museum showcasing the life and ideals of Mahatma Gandhi, with historical artifacts.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Gandhi_Memorial_Museum_Madurai.jpg',
    rating: 4.3,
    price: '₹50 – ₹150\n(Entry fee)',
    coordinates: { latitude: 9.9305, longitude: 78.1171 },
    highlights: ['Historical artifacts', 'Gandhi life', 'Education'],
  },
  {
    id: '21',
    name: 'Athisayam Theme Park, Madurai',
    category: 'Amusement Park',
    description: 'A popular water and amusement park ideal for family outings.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Athisayam_madurai_park.jpg',
    rating: 4.1,
    price: '₹300 – ₹600\n(Entry + Rides)',
    coordinates: { latitude: 9.9390, longitude: 78.1050 },
    highlights: ['Water rides', 'Family fun', 'Amusement activities'],
  },
  {
    id: '22',
    name: 'Pazhamudhir Cholai, Madurai',
    category: 'Temple',
    description: 'One of the six abodes of Lord Murugan located amidst lush greenery.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Pazhamudircholai.JPG',
    rating: 4.4,
    price: '₹100 – ₹300\n(Entry)',
    coordinates: { latitude: 9.9875, longitude: 78.1133 },
    highlights: ['Murugan temple', 'Scenic location', 'Pilgrimage'],
  },
  {
    id: '23',
    name: 'Samanar Hills, Madurai',
    category: 'Hill',
    description: 'Known for Jain beds and ancient Tamil inscriptions, offering scenic views.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Samanar_Hills.JPG',
    rating: 4.3,
    price: '₹0\n(Free access)',
    coordinates: { latitude: 9.9368, longitude: 78.1207 },
    highlights: ['Jain beds', 'Ancient inscriptions', 'Hiking'],
  },
  {
    id: '24',
    name: 'Koodal Azhagar Temple, Madurai',
    category: 'Temple',
    description: 'A historic temple dedicated to Lord Vishnu, located in the heart of Madurai.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Koodal_Azhagar_Temple_Madurai.jpg',
    rating: 4.4,
    price: '₹50 – ₹200\n(Entry)',
    coordinates: { latitude: 9.9263, longitude: 78.1190 },
    highlights: ['Vishnu temple', 'Historic site', 'Pilgrimage'],
  },
  {
    id: '25',
    name: 'Yanai Malai, Madurai',
    category: 'Hill',
    description: 'A hillock offering panoramic views and nature trails, located near Madurai.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Yanai_Malai_Madurai.jpg',
    rating: 4.2,
    price: '₹0\n(Free access)',
    coordinates: { latitude: 9.8898, longitude: 78.1230 },
    highlights: ['Scenic views', 'Nature trails', 'Hiking'],
  }
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