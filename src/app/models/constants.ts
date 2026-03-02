export class Constants {
    public static APP_NAME_STR1: string = 'Modern';
    public static APP_NAME_STR2: string = 'Nest';
    public static APP_NAME: string = `${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`;
    public static userDetails: string = 'userDetails';

    public static NAV_LINKS = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Properties', path: '/properties' },
        { id: 3, name: 'Agents', path: '/agents' },
        { id: 4, name: 'About', path: '/about' },
        { id: 5, name: 'Contact', path: '/contact' }
    ];

    public static MOCK_GALLERY_ITEMS = [
        {
            id: 1,
            title: 'Golden Valley Bungalow',
            type: 'Bungalow',
            location: 'Los Angeles, CA',
            price: 850000,
            specs: { beds: 3, baths: 3, sqft: 2400, garage: 2 },
            amenities: ['Pool', 'Gym', 'Garage'],
            img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
            description: 'Experience luxury living in this stunning bungalow located in the heart of Los Angeles. Featuring an open floor plan, modern kitchen with high-end appliances, and a private backyard oasis complete with a pool and outdoor entertaining area.',
            tag: 'Luxury',
            isFav: false
        },
        {
            id: 2,
            title: 'Skyline Penthouse',
            type: 'Apartment',
            location: 'Manhattan, NY',
            price: 1200000,
            specs: { beds: 4, baths: 3, sqft: 3200, garage: 2 },
            amenities: ['Rooftop Deck', 'Security', 'Private Elevator'],
            img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
            description: 'Live above it all in this breathtaking penthouse with panoramic views of the Manhattan skyline. This luxurious residence boasts floor-to-ceiling windows, a gourmet kitchen, and an expansive rooftop deck perfect for entertaining guests or enjoying quiet evenings under the stars.',
            tag: 'Trending',
            isFav: true
        },
        {
            id: 3,
            title: 'Emerald Lake Villa',
            type: 'Villa',
            location: 'Austin, TX',
            price: 975000,
            specs: { beds: 4, baths: 3, sqft: 3500, garage: 2 },
            amenities: ['Lake Access', 'Outdoor Kitchen', 'Fire Pit'],
            img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
            description: 'Escape to your own private retreat with this stunning villa overlooking Emerald Lake. Enjoy direct lake access, an outdoor kitchen perfect for summer barbecues, and a cozy fire pit area for relaxing evenings by the water. Inside, you’ll find spacious living areas, a modern kitchen, and luxurious bedrooms with serene views.',
            tag: 'New',
            isFav: false
        },
        {
            id: 4,
            title: 'Cedar Ridge Cabin',
            type: 'Cottage',
            location: 'Aspen, CO',
            price: 640000,
            specs: { beds: 2, baths: 1, sqft: 1800, garage: 1 },
            amenities: ['Fireplace', 'Hot Tub', 'Ski-in Access'],
            img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
            description: 'Cozy up in this charming cabin nestled in the picturesque mountains of Aspen. Featuring a rustic yet modern design, this cottage offers a warm fireplace, a relaxing hot tub, and ski-in access for winter adventures. Perfect for a romantic getaway or a peaceful retreat surrounded by nature.',
            tag: 'Cozy',
            isFav: false
        },
        {
            id: 5,
            title: 'Coastal Drift Mansion',
            type: 'Mansion',
            location: 'Miami, FL',
            price: 2400000,
            specs: { beds: 6, baths: 5, sqft: 5200, garage: 3 },
            amenities: ['Home Cinema', 'Infinity Pool', 'Wine Cellar'],
            img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
            description: 'Indulge in the ultimate luxury lifestyle with this magnificent mansion located in the vibrant city of Miami. Boasting a private home cinema, an infinity pool with stunning ocean views, and a climate-controlled wine cellar, this residence is designed for those who appreciate the finer things in life. The spacious interiors feature elegant finishes, a gourmet kitchen, and multiple living areas perfect for entertaining guests or enjoying quiet family moments.',
            tag: 'Exclusive',
            isFav: true
        },
        {
            id: 6,
            title: 'Urban Loft Studio',
            type: 'Studio',
            location: 'Chicago, IL',
            price: 450000,
            specs: { beds: 1, baths: 1, sqft: 950, garage: 0 },
            amenities: ['Brick Walls', 'High Ceilings', 'Smart Home Tech'],
            img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
            description: 'Discover the perfect blend of industrial charm and modern sophistication in this urban loft studio located in the heart of Chicago. Featuring exposed brick walls, soaring ceilings, and state-of-the-art smart home technology, this stylish residence offers a unique living experience for those seeking a vibrant city lifestyle with a touch of artistic flair.',
            tag: 'Modern',
            isFav: false
        },
        {
            id: 7,
            title: 'Willow Creek Estate',
            type: 'Estate',
            location: 'Nashville, TN',
            price: 1100000,
            specs: { beds: 5, baths: 4, sqft: 4100, garage: 2 },
            amenities: ['Stable', 'Guesthouse', 'Library'],
            img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
            description: 'Experience southern elegance at its finest with this exquisite estate located in the charming city of Nashville. This grand residence features a private stable for horse lovers, a separate guesthouse for visitors, and a cozy library filled with built-in bookshelves. The beautifully landscaped grounds offer a serene escape, while the luxurious interiors provide ample space for entertaining and comfortable family living.',
            tag: 'Elegant',
            isFav: true
        },
        {
            id: 8,
            title: 'Sunset Boulevard Condo',
            type: 'Condo',
            location: 'San Diego, CA',
            price: 720000,
            specs: { beds: 2, baths: 2, sqft: 1400, garage: 1 },
            amenities: ['Balcony', 'EV Charging', 'Yoga Studio'],
            img: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800',
            description: 'Live the coastal dream in this stylish condo located on the iconic Sunset Boulevard in San Diego. Featuring a private balcony with ocean views, an EV charging station for eco-conscious living, and a dedicated yoga studio for wellness enthusiasts, this residence offers a perfect blend of comfort and convenience in one of California’s most sought-after neighborhoods.',
            tag: 'Coastal',
            isFav: false
        },
        {
            id: 9,
            title: 'The Glass House',
            type: 'Modernist',
            location: 'Seattle, WA',
            price: 1550000,
            specs: { beds: 3, baths: 2, sqft: 2800, garage: 1 },
            amenities: ['Solar Panels', 'Garden', 'Smart Glass'],
            img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800',
            description: 'Embrace cutting-edge design and sustainability with this iconic glass house located in the vibrant city of Seattle. Featuring floor-to-ceiling smart glass that adjusts to sunlight, solar panels for energy efficiency, and a beautifully landscaped garden, this modernist masterpiece offers a unique living experience that seamlessly blends indoor and outdoor spaces while minimizing environmental impact.',
            tag: 'Sustainable',
            isFav: true
        }
    ];

    public static MOCK_AGENT_ITEMS = [
        {
            id: 1,
            name: 'Sarah Wilson',
            role: 'Luxury Villa Expert',
            email: 'sarah.wilson@modernnest.com',
            contact: '+1 (555) 123-4567',
            experience: '8 Years',
            img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
            socials: { linkedin: '#', instagram: '#' },
            specialty: 'Specializes in high-end villas and estates, with a deep understanding of the luxury real estate market and a proven track record of successful transactions.'
        },
        {
            id: 2,
            name: 'Marcus Chen',
            role: 'Commercial Specialist',
            email: 'marcus.chen@modernnest.com',
            contact: '+1 (555) 234-5678',
            experience: '12 Years',
            img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
            socials: { linkedin: '#', instagram: '#' },
            specialty: 'Expert in commercial real estate, with extensive experience in office spaces, retail properties, and industrial facilities. Known for his strategic approach and strong negotiation skills.'
        },
        {
            id: 3,
            name: 'Elena Rodriguez',
            role: 'Residential Consultant',
            email: 'elena.rodriguez@modernnest.com',
            contact: '+1 (555) 345-6789',
            experience: '5 Years',
            img: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&q=80',
            socials: { linkedin: '#', instagram: '#' },
            specialty: 'Focuses on residential properties, including single-family homes, condos, and townhouses. Passionate about helping clients find their perfect home.'
        },
        {
            id: 4,
            name: 'David Smith',
            role: 'Investment Advisor',
            email: 'david.smith@modernnest.com',
            contact: '+1 (555) 456-7890',
            experience: '10 Years',
            img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
            socials: { linkedin: '#', instagram: '#' },
            specialty: 'Specializes in investment properties and off-plan sites, with a strong background in analyzing market trends and identifying profitable opportunities.'
        },
        {
            id: 5,
            name: 'Jameson Blake',
            role: 'Waterfront Property Expert',
            email: 'jameson.blake@modernnest.com',
            contact: '+1 (555) 567-8901',
            experience: '15 Years',
            img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
            socials: { linkedin: '#', instagram: '#' },
            specialty: 'Specializes in coastal mansions and lakefront estates, ensuring clients find serene homes with breathtaking views and private docks.'
        },
        {
            id: 6,
            name: 'Sophie Laurent',
            role: 'Historic Home Specialist',
            email: 'sophie.laurent@modernnest.com',
            contact: '+1 (555) 678-9012',
            experience: '9 Years',
            img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
            socials: { linkedin: '#', instagram: '#' },
            specialty: 'Expert in heritage properties and architectural gems, providing deep insights into restoration potential and historical significance.'
        },
        {
            id: 7,
            name: 'Robert Miller',
            role: 'Industrial Asset Manager',
            email: 'robert.miller@modernnest.com',
            contact: '+1 (555) 789-0123',
            experience: '11 Years',
            img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
            socials: { linkedin: '#', instagram: '#' },
            specialty: 'Focuses on large-scale industrial warehouses and distribution centers, optimizing logistics and investment returns for corporate clients.'
        },
        {
            id: 8,
            name: 'Maya Patel',
            role: 'Sustainable Housing Advocate',
            email: 'maya.patel@modernnest.com',
            contact: '+1 (555) 890-1234',
            experience: '4 Years',
            img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&q=80',
            socials: { linkedin: '#', instagram: '#' },
            specialty: 'Passionate about eco-friendly architecture and LEED-certified homes, helping environmentally conscious buyers find green living spaces.'
        },
        {
            id: 9,
            name: 'Liam Thompson',
            role: 'Suburban Relocation Expert',
            email: 'liam.thompson@modernnest.com',
            contact: '+1 (555) 901-2345',
            experience: '7 Years',
            img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
            socials: { linkedin: '#', instagram: '#' },
            specialty: 'Helps families transition from city living to the suburbs, focusing on school districts, community safety, and spacious backyard living.'
        },
        {
            id: 10,
            name: 'Chloe Dubois',
            role: 'Penthouse Consultant',
            email: 'chloe.dubois@modernnest.com',
            contact: '+1 (555) 012-3456',
            experience: '10 Years',
            img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
            socials: { linkedin: '#', instagram: '#' },
            specialty: 'Provides exclusive access to sky-high luxury living, specializing in panoramic views and premium amenities in metropolitan skyscrapers.'
        },
        {
            id: 11,
            name: 'Daniel Kim',
            role: 'Retail Space Strategist',
            email: 'daniel.kim@modernnest.com',
            contact: '+1 (555) 123-4567',
            experience: '14 Years',
            img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
            socials: { linkedin: '#', instagram: '#' },
            specialty: 'Strategic advisor for retail brands, identifying high-traffic locations and negotiating lease terms for storefronts and shopping centers.'
        },
        {
            id: 12,
            name: 'Isabella Rossi',
            role: 'Vacation Rental Expert',
            email: 'isabella.rossi@modernnest.com',
            contact: '+1 (555) 234-5678',
            experience: '6 Years',
            img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
            socials: { linkedin: '#', instagram: '#' },
            specialty: 'Specializes in properties with high short-term rental yields, guiding investors through the nuances of the holiday home market.'
        },
        {
            id: 13,
            name: 'Nathaniel West',
            role: 'Rural Land Broker',
            email: 'nathaniel.west@modernnest.com',
            contact: '+1 (555) 345-6789',
            experience: '20 Years',
            img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&q=80',
            socials: { linkedin: '#', instagram: '#' },
            specialty: 'Expert in acreage, ranch land, and agricultural properties, offering unmatched knowledge of land rights and zoning regulations.'
        },
        {
            id: 14,
            name: 'Victor Vance',
            role: 'Foreclosure & REO Specialist',
            email: 'victor.vance@modernnest.com',
            contact: '+1 (555) 456-7890',
            experience: '13 Years',
            img: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&q=80',
            socials: { linkedin: '#', instagram: '#' },
            specialty: 'Expert in distressed property sales and bank-owned assets, helping clients navigate the complexities of foreclosure auctions and REO acquisitions.'
        },
        {
            id: 15,
            name: 'Sophia Martinez',
            role: 'Luxury Property Consultant',
            email: 'sophia.martinez@modernnest.com',
            contact: '+1 (555) 567-8901',
            experience: '9 Years',
            img: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&q=80',
            socials: { linkedin: '#', instagram: '#' },
            specialty: 'Expert in luxury property sales, helping clients find and purchase high-end homes with premium amenities and exclusive features.'
        },
        {
            id: 16,
            name: 'Ethan Lee',
            role: 'Urban Development Consultant',
            email: 'ethan.lee@modernnest.com',
            contact: '+1 (555) 678-9012',
            experience: '12 Years',
            img: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=400&q=80',
            socials: { linkedin: '#', instagram: '#' },
            specialty: 'Specializes in urban planning and development projects, guiding clients through zoning laws, building permits, and community impact assessments.'
        }
    ];

    public static MOCK_AMENITIES_LIST = ['Swimming Pool', 'Gym', 'Garden', 'Security', 'Parking', 'Elevator', 'Home Cinema', 'Solar Panels'];
}
