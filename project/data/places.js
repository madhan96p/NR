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
    id: '11',
    name: 'Food',
    icon: '🍽️',
    image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#27AE60'
  },
  {
    id: '10',
    name: 'Temple',
    icon: '⛪',
    image: 'https://describbe.com/images/2022-07-13%2004-03-00pm_Rishika%20Shree.jpg?auto=compress&cs=tinysrgb&w=800',
    color: '#E67E22'
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

];

export const places = [
  {
    id: '1',
    name: 'Marina Beach, Chennai',
    category: 'Beaches',
    description: 'Marina Beach, the longest urban beach in India, is famous for its golden sands, breathtaking sunrises, and vibrant street food culture. A must-visit spot for locals and tourists alike.',
    image: 'https://i.pinimg.com/736x/76/79/3d/76793da7bfafd0a39c5a47d896d2d730.jpg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    price: '₹3000 – ₹8000\n(Local food & rides)',
    coordinates: { latitude: 13.0500, longitude: 80.2824 },
    highlights: ['Golden sands', 'Sunrise views', 'Street food', 'Historic landmarks'],
  },
  {
    id: '2',
    name: 'Kodaikanal, Tamil Nadu',
    category: 'Mountains',
    description: "Famed as the 'Princess of Hill Stations,' Kodaikanal offers mist-covered mountains, lush valleys, crystal-clear lakes, and a cool climate perfect for trekking, boating, and year-round relaxation.",
    image: 'https://www.namasteindiatrip.com/blog/wp-content/uploads/2017/04/Pillar-Rocks-Kodaikanal-in-tamil-nadu.webp?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    price: '₹3000 – ₹6000\n(Stay + Travel)',
    coordinates: { latitude: 10.2381, longitude: 77.4892 },
    highlights: [
      'Coaker’s Walk – scenic viewpoint',
      'Kodaikanal Lake – boating & cycling',
      'Pine Forests – iconic photo spots',
      'Trekking Trails – misty hills & waterfalls'
    ]
    ,
  },
  {
    id: '3',
    name: 'Madurai, Tamil Nadu',
    category: 'Cities',
    description: 'Madurai, one of the world’s oldest continuously inhabited cities, is renowned for the majestic Meenakshi Amman Temple, bustling street markets, and its authentic South Indian culinary delights.',
    image: 'https://images.pond5.com/meenakshi-temple-madurai-4k-hyperlapse-footage-107654040_iconl.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    price: '₹1000 – ₹2500\n(Local Travel + authentic food)',
    coordinates: { latitude: 9.9252, longitude: 78.1198 },
    highlights: ['Meenakshi Temple', 'Street markets', 'Jigarthanda', 'Cultural heritage'],
  },
  {
    id: '4',
    name: 'Brihadeeswarar Temple, Thanjavur',
    category: 'Historical',
    description: 'An architectural marvel of the Chola dynasty, Brihadeeswarar Temple is a UNESCO World Heritage Site built by Raja Raja Chola I in the 11th century. Renowned for its 66-meter tall vimana (tower), intricate stone carvings, and grand scale, it’s a timeless masterpiece of South Indian temple architecture.',
    image: 'https://ramyashotels.com/wp-content/uploads/2021/06/Thanjavur-temple-Ramyas-Hotels-Trichy.jpg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    price: '₹500 – ₹1500\n(Travel + Entry: Free)',
    coordinates: { latitude: 10.7847, longitude: 79.1316 },
    highlights: ['Grand Chola architecture', 'Intricate stone sculptures', 'UNESCO World Heritage Site', 'Historical significance'],
  },
  {
    id: '5',
    name: 'Rameswaram Beach, Tamil Nadu',
    category: 'Beaches',
    description: 'Rameswaram Beach, with its shallow turquoise waters and golden sands, offers a blend of natural beauty and spiritual serenity. Located near the sacred Ramanathaswamy Temple, it’s a perfect spot for tranquil walks, cultural exploration, and breathtaking sunrise views.',
    image: 'https://beachesofindia.in/wp-content/uploads/2017/07/RAMESWARAM-BEACH-%E2%80%93-TAMIL-NADU.jpg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    price: '₹1500 – ₹3000\n(Travel + Local Food)',
    coordinates: { latitude: 9.2887, longitude: 79.3129 },
    highlights: ['Shallow turquoise waters', 'Golden sandy shoreline', 'Breathtaking sunrise views', 'Close proximity to Ramanathaswamy Temple'],
  },
  {
    id: '6',
    name: 'Ooty, Tamil Nadu',
    category: 'Mountains',
    description: "Nestled in the Nilgiris, Ooty is famed for its sprawling tea gardens, misty hills, and serene lakes. Known as the 'Queen of Hill Stations,' it’s an ideal escape for nature lovers, couples, and photographers.",
    image: 'https://www.noblehousetours.com/wp-content/uploads/2017/03/ooty-tamilnadu-india.jpg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    price: '₹2500 – ₹5000\n(Travel + Stay)',
    coordinates: { latitude: 11.4064, longitude: 76.6932 },
    highlights: ['Scenic tea estates', 'Ooty Lake boating', 'Nilgiri Mountain Railway', 'Doddabetta Peak'],
  },
  {
    id: '7',
    name: 'Mahabalipuram, Tamil Nadu',
    category: 'Historical',
    description: 'A UNESCO World Heritage Site on the Coromandel Coast, Mahabalipuram is famous for its ancient rock-cut temples, intricate stone carvings, and unique coastal architecture from the Pallava dynasty. Highlights include the Shore Temple and the Five Rathas, showcasing India’s early Dravidian architectural brilliance.',
    image: 'https://www.india.com/wp-content/uploads/2018/11/Mahabalipuram.jpg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://www.mudumalainationalpark.in/images/things-to-do-mudumalai.jpg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://xplro.com/wp-content/uploads/2024/05/Xplro-2024-05-14T184958.297.jpg.webp?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://ecoplore.com/wp-content/uploads/2021/06/kanyakumari-1.jpg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://www.trawell.in/admin/images/upload/921956631Thanjavur_Art_Gallery_Main.jpg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://assets.telegraphindia.com/telegraph/2022/Aug/1660132403_courtallam-main-falls-1.jpg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://theverandahclub.com/uploads/article/temp/f6b8d8d1-8f11-419d-b2ce-32976488e9f8.jpg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://cultureandheritage.org/wp-content/uploads/2022/08/image-565.png?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    price: '₹100 – ₹300\n(Entry)',
    coordinates: { latitude: 9.4629, longitude: 77.5037 },
    highlights: ['Dravidian architecture', 'Andal shrine', 'Cultural festivals'],
  },
  {
    id: '15',
    name: 'Chettinad Palace, Karaikudi',
    category: 'Historical',
    description: 'The Chettinad Palace in Karaikudi is a stunning example of traditional Chettiar architecture, blending South Indian design with European influences. Known for its intricate woodwork, spacious courtyards, and artistic tiles, it reflects the opulence and cultural heritage of the Chettinad community.',
    image: 'https://www.holidify.com/images/cmsuploads/compressed/2649_20231220183502.jpg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.5,
    price: '₹300 – ₹800 (Entry + Guide)',
    coordinates: { latitude: 10.0748, longitude: 78.7702 },
    highlights: [
      'Grand Chettinad mansions with unique architecture',
      'Handcrafted Athangudi tiles and antique woodwork',
      'Guided tours with cultural history of the Chettiar community'
    ],
  }
  ,
  {
    id: '16',
    name: 'Vaigai Dam, Madurai',
    category: 'Dam',
    description: 'The Vaigai Dam, located near Madurai, is a popular weekend getaway known for its serene surroundings, landscaped gardens, and boating facilities. It is a great spot for families, nature lovers, and photography enthusiasts.',
    image: 'https://www.sterlingholidays.com/activities/madurai/bannerimage/madurai-vaigai-dam-activity.jpg.imgw.1280.1280.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.2,
    price: '₹50 – ₹200 (Entry + Boating)',
    coordinates: { latitude: 9.9333, longitude: 78.3766 },
    highlights: [
      'Beautifully maintained gardens and picnic areas',
      'Boating and water activities',
      'Scenic views of the dam and surrounding hills',
      'Popular for evening sunsets and photography'
    ],
  }
  ,
  {
    id: '17',
    name: 'Alagar Kovil, Madurai',
    category: 'Temple',
    description: 'A historic temple dedicated to Lord Vishnu, nestled in the scenic Alagar Hills near Madurai. Known for its ancient architecture, serene surroundings, and spiritual significance, it is a must-visit for both pilgrims and travelers seeking peace.',
    image: 'https://maduraitourism.co.in/images/places-to-visit/headers/azhagar-kovil-alagar-koyil-temple-madurai-entry-fee-timings-holidays-reviews-header.jpg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.4,
    price: '₹50 – ₹200 (Entry + Special Darshan)',
    coordinates: { latitude: 9.9840, longitude: 78.0709 },
    highlights: [
      'Ancient Dravidian-style architecture',
      'Vishnu temple with rich history',
      'Surrounded by lush Alagar Hills',
      'Popular during Chithirai Festival'
    ]
  }
  ,
  {
    id: '18',
    name: 'Tiruparankundram Murugan Temple, Madurai',
    category: 'Temple',
    description: 'Tiruparankundram Murugan Temple, one of the six sacred abodes (Arupadai Veedu) of Lord Murugan, is renowned for its rock-cut architecture and spiritual significance. Set on a hillock near Madurai, the temple is a major pilgrimage center attracting devotees and tourists alike.',
    image: 'https://www.omspiritualshop.com/cdn/shop/articles/murugan-temple-03_1_1024x1024.jpg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.5,
    price: '₹50 – ₹300 (Special Entry & Pilgrimage Donations)',
    coordinates: { latitude: 9.8949, longitude: 78.0666 },
    highlights: [
      'One of Lord Murugan’s 6 sacred abodes',
      'Magnificent rock-cut architecture',
      'Panoramic views from the hill',
      'Spiritual & cultural significance'
    ]
  }
  ,
  {
    id: '19',
    name: 'Thirumalai Nayakkar Mahal, Madurai',
    category: 'Historical Palace',
    description: 'Built in the 17th century by King Thirumalai Nayak, this majestic palace is a stunning blend of Dravidian and Rajput architecture. It is renowned for its massive pillars, intricate stucco work, and vibrant light-and-sound shows that narrate the history of Madurai.',
    image: 'https://www.laurewanders.com/wp-content/uploads/2023/09/Thirumalai-Nayakar-Palace-00002-scaled.jpg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.5,
    price: '₹50 (Indian visitors) – ₹100 (Foreign visitors)',
    coordinates: { latitude: 9.9298, longitude: 78.1084 },
    highlights: [
      'Magnificent 25m tall pillars and courtyard',
      'Light and sound show on Madurai’s history',
      'Blend of Dravidian and Rajput architectural styles',
      'Cultural significance and historical artifacts'
    ],
  }
  ,
  {
    id: '20',
    name: 'Gandhi Memorial Museum, Madurai',
    category: 'Museum',
    description: 'A historic museum dedicated to Mahatma Gandhi, featuring rare photographs, letters, and personal artifacts that highlight his life and freedom struggle.',
    image: 'https://www.trawell.in/admin/images/upload/705432486Gandhi_Museum_Main.jpg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.3,
    price: '₹50 – ₹150 (Entry Fee)',
    coordinates: { latitude: 9.9305, longitude: 78.1171 },
    highlights: [
      'Rare artifacts & personal belongings of Gandhi',
      'Interactive exhibits on India’s freedom movement',
      'Peaceful campus with historical significance'
    ]
  }
  ,
  {
    id: '21',
    name: 'Athisayam Theme Park, Madurai',
    category: 'Amusement Park',
    description: 'Athisayam is a well-known water and amusement park in Madurai, featuring thrilling water slides, family-friendly rides, and entertainment zones. It’s perfect for a fun-filled day with kids and friends.',
    image: 'https://i.ytimg.com/vi/-3uBjKw8uss/maxresdefault.jpg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.3,
    price: '₹300 – ₹600 (Entry + Unlimited Rides)',
    coordinates: { latitude: 9.9390, longitude: 78.1050 },
    highlights: [
      'Over 40 water and dry rides',
      'Wave pool and rain dance',
      'Kids’ play area and family attractions',
      'On-site food court and rest areas'
    ]
  }
  ,
  {
    id: '22',
    name: 'Pazhamudhir Cholai, Madurai',
    category: 'Temple',
    description: 'Pazhamudhir Cholai, one of the six sacred abodes of Lord Murugan, is nestled amidst the serene hills of Madurai. Renowned for its spiritual significance and lush green surroundings, it’s a peaceful retreat for devotees and nature lovers alike.',
    image: 'https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/21/a87540ce5aa169669e49bad274149709_400x400.jpg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.4,
    price: 'Free entry \n(Special darshan tickets: ₹100–₹300)',
    coordinates: { latitude: 9.9875, longitude: 78.1133 },
    highlights: [
      'Famous Murugan temple with historical significance',
      'Beautiful hilltop views and lush greenery',
      'Popular spot for spiritual seekers and nature lovers'
    ],
  }
  ,
  {
    id: '23',
    name: 'Samanar Hills, Madurai',
    category: 'Hill',
    description: 'A historic hill site featuring centuries-old Jain caves, rock-cut sculptures, and ancient Tamil-Brahmi inscriptions. The hilltop offers serene surroundings and panoramic views of Madurai.',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/samanar-hills-madurai-tamil-nadu-1-attr-hero?auto=compress&cs=tinysrgb&w=800',
    rating: 4.3,
    price: '₹0\n(Free Entry)',
    coordinates: { latitude: 9.9368, longitude: 78.1207 },
    highlights: [
      'Jain cave beds and carvings',
      'Tamil-Brahmi inscriptions',
      'Hiking with scenic sunset views',
      'Peaceful, heritage-rich environment'
    ],
  }
  ,
  {
    id: '24',
    name: 'Koodal Azhagar Temple, Madurai',
    category: 'Temple',
    description: "Koodal Azhagar Temple is an ancient Dravidian-style temple dedicated to Lord Vishnu, located in the heart of Madurai. It is renowned for its intricate carvings and spiritual significance.",
    image: 'https://puliyogaretravels.com/wp-content/uploads/2015/11/img_20151031_124946-02.jpg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.4,
    price: '₹5000 – ₹2000\n(Entry: Free)',
    coordinates: { latitude: 9.9263, longitude: 78.1190 },
    highlights: [
      'Dedicated to Lord Vishnu',
      'Dravidian architecture',
      'Popular pilgrimage site'
    ]
    ,
  },
  {
    id: '25',
    name: 'Yanai Malai, Madurai',
    category: 'Hill',
    description: 'A serene hillock near Madurai, known for its panoramic views, peaceful trekking trails, and rich natural surroundings.',
    image: 'https://www.trawell.in/admin/images/upload/137275224Yanaimalai.jpg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.2,
    price: 'Free Entry',
    coordinates: { latitude: 9.8898, longitude: 78.1230 },
    highlights: ['Panoramic city views', 'Peaceful trekking trails', 'Ideal for nature walks'],
  },
  {
  id: '26',
  name: 'Karaikudi Chettinad Mess, Karaikudi',
  category: 'Food',
  description: 'Experience the authentic taste of Chettinad cuisine, famous for its fiery spices, aromatic curries, and traditional cooking techniques.',
  image: 'https://www.thebusinessads.com/Upload/Images/irip0bpq.ui0images(11).jpg?auto=compress&cs=tinysrgb&w=800',
  rating: 4.6,
  price: '₹250 – ₹500 (Meal for 2)',
  coordinates: { latitude: 10.0700, longitude: 78.7735 },
  highlights: [
    'Signature Chettinad chicken and mutton curries',
    'Traditional banana-leaf meals',
    'Authentic homemade spice blends'
  ],
},
{
  id: '27',
  name: 'Madurai Jigarthanda Shop, Madurai',
  category: 'Food',
  description: 'Famous for the iconic Madurai Jigarthanda drink, a cooling dessert-like beverage made with milk, ice cream, and natural flavorings.',
  image: 'https://mfjllp.com/wp-content/uploads/2023/08/Mfj-board-logo-40-2-2048x683.png?auto=compress&cs=tinysrgb&w=800',
  rating: 4.7,
  price: '₹50 – ₹150 (per drink)',
  coordinates: { latitude: 9.9252, longitude: 78.1198 },
  highlights: [
    'Authentic Madurai Jigarthanda recipe',
    'Refreshing summer drink',
    'Must-try street food experience'
  ],
},
{
  id: '28',
  name: 'Amma’s Idli Kadai, Trichy',
  category: 'Food',
  description: 'A legendary South Indian breakfast spot serving soft idlis, crispy dosas, and flavorful chutneys made from fresh ingredients.',
  image: 'https://mudidli.com/images/NewImg/mud-idli.jpeg?auto=compress&cs=tinysrgb&w=800',
  rating: 4.8,
  price: '₹100 – ₹300 (Breakfast for 2)',
  coordinates: { latitude: 10.7905, longitude: 78.7047 },
  highlights: [
    'Melt-in-your-mouth idlis',
    'Variety of chutneys and sambar',
    'Pocket-friendly traditional meals'
  ],
},
{
  id: '29',
  name: 'Annapoorna Veg Restaurant, Coimbatore',
  category: 'Food',
  description: 'A popular vegetarian restaurant known for its South Indian thalis, filter coffee, and authentic Tamil flavors.',
  image: 'https://www.sreeannapoorna.com/cdn/shop/files/Annapoorna_Logo_Transparent.png?auto=compress&cs=tinysrgb&w=800',
  rating: 4.5,
  price: '₹200 – ₹400 (Meal for 2)',
  coordinates: { latitude: 11.0168, longitude: 76.9558 },
  highlights: [
    'Traditional South Indian thali',
    'Rich filter coffee experience',
    'Family-friendly dining'
  ],
},
{
  id: '30',
  name: 'Murugan Idli Shop, Chennai',
  category: 'Food',
  description: 'One of the most famous chains in Tamil Nadu for idlis, dosas, and authentic ghee pongal served with a variety of chutneys.',
  image: 'https://muruganidlishop.com/wp-content/uploads/2022/11/murugan-idli-logo-2x.png?auto=compress&cs=tinysrgb&w=800',
  rating: 4.7,
  price: '₹150 – ₹350 (Meal for 2)',
  coordinates: { latitude: 13.0827, longitude: 80.2707 },
  highlights: [
    'Authentic ghee pongal and chutneys',
    'Consistent taste across outlets',
    'Popular breakfast destination'
  ],
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