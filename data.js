const listings = [
    // {
    //     title: "Oil Filter",
    //     description: "Premium oil filter for Honda Accord (2018-2022)",
    //     price: 15.99,
    //     category: "Filters"
    // },
    // {
    //     title: "Brakers",
    //     description: "High-performance brake pads for Toyota Camry (2015-2020)",
    //     price: 50.00,
    //     category: "Brakes"
    // },
    // {
    //     title: "Spark Plugs Set",
    //     description: "Set of 4 iridium spark plugs for Ford F-150 (2017-2021)",
    //     price: 32.50,
    //     category: "Ignition"
    // },
    // {
    //     title: "Air Filter",
    //     description: "Reusable air filter for Chevrolet Silverado (2019-2023)",
    //     price: 29.99,
    //     category: "Filters"
    // },
    // {
    //     title: "Alternator",
    //     description: "New alternator for Nissan Altima (2013-2018)",
    //     price: 120.00,
    //     category: "Electrical"
    // },
    // {
    //     title: "Timing Belt Kit",
    //     description: "Complete timing belt kit for Honda Civic (2006-2011)",
    //     price: 89.99,
    //     category: "Engine"
    // },
    // {
    //     title: "Headlight Assembly",
    //     description: "Driver side headlight assembly for BMW 3 Series (2012-2015)",
    //     price: 199.99,
    //     category: "Lighting"
    // },
    // {
    //     title: "Catalytic Converter",
    //     description: "Direct-fit catalytic converter for Toyota Corolla (2009-2013)",
    //     price: 250.00,
    //     category: "Exhaust"
    // },
    //CUT HERE
    //CUT HEREEEE
    {
        title: "LUGG TRAY (SHRT BLACK)",
        description: "Compatible with AVANZA 2012 ALL VARIANTS, Subcategory: Luggage Tray",
        price: 1000,
        category: "Body and Exterior"
    },
    {
        title: "SEAT COVER,CORD-OLD",
        description: "Compatible with HIACE 2017 GL Grandia (except 2014 MC), Subcategory: Seat Cover",
        price: 1905,
        category: "Seat Covers and Interior"
    },
    {
        title: "CAR COVER",
        description: "Compatible with INNOVA 2012 ALL VARIANTS, Subcategory: Car Cover",
        price: 2005,
        category: "Body and Exterior"
    },
    {
        title: "CAR COVER",
        description: "Compatible with RAV4 2015 ALL VARIANTS, Subcategory: Car Cover",
        price: 1865,
        category: "Body and Exterior"
    },
    {
        title: "ROOF RAIL",
        description: "Compatible with AVANZA 2015 ALL VARIANTS, Subcategory: Roof Rail",
        price: 5810,
        category: "Body and Exterior"
    },
    {
        title: "SEAT COVER,LEATHER BLACK",
        description: "Compatible with INNOVA 2012 E & J, Subcategory: Seat Cover",
        price: 7100,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER,KHAKI GRAY",
        description: "Compatible with GL Grandia 2015, Subcategory: Seat Cover",
        price: 1480,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER CORD BLACK",
        description: "Compatible with INNOVA 2016 V, Subcategory: Seat Cover",
        price: 1140,
        category: "Seat Covers and Interior"
    },
    {
        title: "SPARE WHEEL UNDR COVER",
        description: "Compatible with INNOVA 2012 ALL VARIANTS, Subcategory: Spare Wheel Cover",
        price: 3365,
        category: "Body and Exterior"
    },
    {
        title: "SIDE VISOR",
        description: "Compatible with AVANZA 2015 ALL VARIANTS, Subcategory: Side Visor",
        price: 2325,
        category: "Body and Exterior"
    },
    {
        title: "SIDE SKIRT,LH",
        description: "Compatible with VIOS 2013 ALL VARIANTS, Subcategory: Side Skirt",
        price: 4905,
        category: "Body and Exterior"
    },
    {
        title: "SEAT COVER,COR BEIGE",
        description: "Compatible with INNOVA 2012 G, Subcategory: Seat Cover",
        price: 975,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER, CORD BLACK",
        description: "Compatible with HILUX 2015 E, Subcategory: Seat Cover",
        price: 800,
        category: "Seat Covers and Interior"
    },
    {
        title: "ROOF RAIL",
        description: "Compatible with INNOVA 2012 ALL VARIANT, Subcategory: Roof Rail",
        price: 5500,
        category: "Body and Exterior"
    },
    {
        title: "LUGGAGE TRAY",
        description: "Compatible with INNOVA 2012 ALL VARIANT, Subcategory: Luggage Tray",
        price: 1405,
        category: "Body and Exterior"
    },
    {
        title: "MUDGUARD",
        description: "Compatible with RAV4 2013 ALL VARIANTS, Subcategory: Mudguard",
        price: 1675,
        category: "Body and Exterior"
    },
    {
        title: "SET,SENSOR CRASH DET",
        description: "Compatible with INNOVA 2012 E & J, Subcategory: Sensor",
        price: 4640,
        category: "Electronics"
    },
    {
        title: "SEAT COVER,CORD BLACK",
        description: "Compatible with , Subcategory: Seat Cover",
        price: 1160,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER, KHAKI BLACK",
        description: "Compatible with AVANZA 2015 VELOZ, G & E, Subcategory: Seat Cover",
        price: 960,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER, CORD BLACK",
        description: "Compatible with AVANZA 2015 J, Subcategory: Seat Cover",
        price: 895,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER,CORD BLACK",
        description: "Compatible with VIOS 2013 E, J Variants, Subcategory: Seat Cover",
        price: 660,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER,CORD BLACK",
        description: "Compatible with YARIS 2014 ALL VARIANTS, Subcategory: Seat Cover",
        price: 625,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER(GRAY CORD.)",
        description: "Compatible with HIACE 2015 SG Fabric, Subcategory: Seat Cover",
        price: 1775,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER CORD BLACK",
        description: "Compatible with INNOVA 2016 J VARIANT, Subcategory: Seat Cover",
        price: 1185,
        category: "Seat Covers and Interior"
    },
    {
        title: "BACK SENSOR",
        description: "Compatible with FORTUNER 2016 G, Subcategory: Sensor",
        price: 4435,
        category: "Electronics"
    },
    {
        title: "SIDE VISOR",
        description: "Compatible with , Subcategory: Side Visor",
        price: 2710,
        category: "Body and Exterior"
    },
    {
        title: "SEAT COVER KHAKI,GRAY",
        description: "Compatible with INNOVA 2012 E & J, Subcategory: Seat Cover",
        price: 750,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER(GRAY KHAKI)",
        description: "Compatible with HIACE 2015 SG Fabric, Subcategory: Seat Cover",
        price: 1265,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER, CORD BLACK",
        description: "Compatible with AVANZA 2012 J Grade (May 2013), Subcategory: Seat Cover",
        price: 870,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER, KHAKI BLACK",
        description: "Compatible with COROLLA ALTIS 2014 1.6 E, Subcategory: Seat Cover",
        price: 590,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER KHAKI BLACK",
        description: "Compatible with YARIS 2014 ALL VARIANTS, Subcategory: Seat Cover",
        price: 545,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER KHAKI BLACK",
        description: "Compatible with INNOVA 2016 V, Subcategory: Seat Cover",
        price: 955,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT,COVER LEATHER GRAY",
        description: "Compatible with INNOVA 2012 E & J, Subcategory: Seat Cover",
        price: 7075,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER,CORD BEIGE",
        description: "Compatible with AVANZA 2012 G Grade (May 2013), Subcategory: Seat Cover",
        price: 970,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER KHAKI BLACK",
        description: "Compatible with RAV4 2013 4X2 ONLY, Subcategory: Seat Cover",
        price: 700,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER,KHAKI BLACK",
        description: "Compatible with FJ CRUISER 2013, Subcategory: Seat Cover",
        price: 890,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER, CORD GRAY",
        description: "Compatible with COROLLA ALTIS 2014 1.6 E, Subcategory: Seat Cover",
        price: 740,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER, CORD BLACK",
        description: "Compatible with HILUX 2020 Conquest 4x4 MT, Conquest 4x2, G, Subcategory: Seat Cover",
        price: 810,
        category: "Seat Covers and Interior"
    },
    {
        title: "CHROME MIRROR COVER",
        description: "Compatible with INNOVA 2012 E & J, Subcategory: Mirror Cover",
        price: 1380,
        category: "Body and Exterior"
    },
    //CUT HERE
    {
        title: "MUDGUARD",
        description: "RAV4 2013 ALL VARIANTS",
        price: 1675.00,
        category: "Body and Exterior"
    },
    {
        title: "SET,SENSOR CRASH DET",
        description: "INNOVA 2012 E & J",
        price: 4640.00,
        category: "Safety and Sensors"
    },
    {
        title: "SEAT COVER,CORD BLACK",
        description: "",
        price: 1160.00,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER, KHAKI BLACK",
        description: "AVANZA 2015 VELOZ, G & E",
        price: 960.00,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER, CORD BLACK",
        description: "AVANZA 2015 J",
        price: 895.00,
        category: "Seat Covers and Interior"
    },
    // Comment: Starting with seat covers for various models.
    {
        title: "SEAT COVER,CORD BLACK",
        description: "VIOS 2013 E, J Variants",
        price: 660.00,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER,CORD BLACK",
        description: "YARIS 2014 ALL VARIANTS",
        price: 625.00,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER(GRAY CORD.)",
        description: "HIACE 2015 SG Fabric",
        price: 1775.00,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER CORD BLACK",
        description: "INNOVA 2016 J VARIANT",
        price: 1185.00,
        category: "Seat Covers and Interior"
    },
    {
        title: "BACK SENSOR",
        description: "FORTUNER 2016 G",
        price: 4435.00,
        category: "Safety and Sensors"
    },
    // Comment: Moving on to sensors and some exterior components.
    {
        title: "SIDE VISOR",
        description: "",
        price: 2710.00,
        category: "Body and Exterior"
    },
    {
        title: "SEAT COVER KHAKI,GRAY",
        description: "INNOVA 2012 E & J",
        price: 750.00,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER(GRAY KHAKI)",
        description: "HIACE 2015 SG Fabric",
        price: 1265.00,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER, CORD BLACK",
        description: "AVANZA 2012 J Grade (May 2013)",
        price: 870.00,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER, KHAKI BLACK",
        description: "COROLLA ALTIS 2014 1.6 E",
        price: 590.00,
        category: "Seat Covers and Interior"
    },
    // Comment: Including some seat covers for different variants.
    {
        title: "SEAT COVER KHAKI BLACK",
        description: "YARIS 2014 ALL VARIANTS",
        price: 545.00,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER KHAKI BLACK",
        description: "INNOVA 2016 V",
        price: 955.00,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT,COVER LEATHER GRA",
        description: "INNOVA 2012 E & J",
        price: 7075.00,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER,CORD BEIGE",
        description: "AVANZA 2012 G Grade (May 2013)",
        price: 970.00,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER KHAKI BLACK",
        description: "RAV4 2013 4X2 ONLY",
        price: 700.00,
        category: "Seat Covers and Interior"
    },
    // Comment: Continuing with seat covers and leather options.
    {
        title: "SEAT COVER,KHAKI BLACK",
        description: "FJ CRUISER 2013",
        price: 890.00,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER, CORD GRAY",
        description: "COROLLA ALTIS 2014 1.6 E",
        price: 740.00,
        category: "Seat Covers and Interior"
    },
    {
        title: "SEAT COVER, CORD BLACK",
        description: "HILUX 2020 Conquest 4x4 MT, Conquest 4x2, G",
        price: 810.00,
        category: "Seat Covers and Interior"
    },
    {
        title: "CHROME MIRROR COVER",
        description: "INNOVA 2012 E & J",
        price: 1380.00,
        category: "Body and Exterior"
    },
    {
        title: "MUDGUARD",
        description: "RAV4 2015 ALL VARIANTS",
        price: 1665.00,
        category: "Body and Exterior"
    },
    // Comment: Continuing with various exterior and accessory components.
    {
        title: "SIDE STEP",
        description: "RAV4 2015 ALL VARIANTS",
        price: 18325.00,
        category: "Body and Exterior"
    },
    {
        title: "CARGO LINES",
        description: "RAV4 2015 ALL VARIANTS",
        price: 1865.00,
        category: "Body and Exterior"
    },
    {
        title: "RR DOOR STEP",
        description: "RAV4 2013 ALL VARIANTS",
        price: 2585.00,
        category: "Body and Exterior"
    },
    {
        title: "MUFFLER CUTTER LONG",
        description: "WIGO 2013 ALL VARIANTS",
        price: 1100.00,
        category: "Exhaust and Mufflers"
    },
    {
        title: "SPOILER",
        description: "WIGO 2015 E VARIANT",
        price: 6095.00,
        category: "Body and Exterior"
    },
    // Comment: Moving to various exterior enhancements and parts.
    {
        title: "CHROME GRILLE ORNAMENT",
        description: "AVANZA 2015 ALL VARIANTS",
        price: 5895.00,
        category: "Body and Exterior"
    },
    {
        title: "FR GRILLE UPPER CHROME",
        description: "AVANZA 2015 ALL VARIANTS",
        price: 4210.00,
        category: "Body and Exterior"
    },
    {
        title: "SIDE MOULDING SET CHROME",
        description: "AVANZA 2019 G, E, J Variants",
        price: 6285.00,
        category: "Body and Exterior"
    },
    {
        title: "LOWER CHROME BACK GLASS",
        description: "AVANZA 2019 G, E, J Variants",
        price: 1900.00,
        category: "Body and Exterior"
    },
    {
        title: "FRONT BUMPER GARNISH",
        description: "",
        price: 23685.00,
        category: "Body and Exterior"
    },
    // Comment: Includes chrome and garnish components for various models.
    {
        title: "ROOF TRAY",
        description: "",
        price: 19900.00,
        category: "Body and Exterior"
    },
    {
        title: "REAR EMBLEM",
        description: "LC TRD 2016",
        price: 5685.00,
        category: "Body and Exterior"
    },
    {
        title: "FOG LAMP CHR (RND)",
        description: "COROLLA ALTIS 2016 V, G Variants",
        price: 2060.00,
        category: "Lighting and Fog Lamps"
    },
    {
        title: "MIRROR COVER LOWER",
        description: "WIGO 2013 ALL VARIANTS",
        price: 5410.00,
        category: "Body and Exterior"
    },
    {
        title: "FIT-IN SHAPE FR SUN",
        description: "AVANZA 2012 ALL VARIANTS",
        price: 775.00,
        category: "Interior Accessories"
    },
    // Comment: Transitioning to roof, emblem, and various lighting components.
    {
        title: "SIDE VISOR",
        description: "YARIS 2014 ALL VARIANTS",
        price: 2950.00,
        category: "Body and Exterior"
    },
    {
        title: "REAR LOWER GARNISH",
        description: "COROLLA ALTIS 2016 ALL VARIANTS",
        price: 3160.00,
        category: "Body and Exterior"
    },
    {
        title: "MUDGUARD",
        description: "INNOVA 2012 E & J",
        price: 2025.00,
        category: "Body and Exterior"
    },
    // {
    //     "title": "TAPE STRIPE",
    //     "description": "FORTUNER 2016 ALL VARIANTS",
    //     "price": 6500.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "ROOF RACK",
    //     "description": "FORTUNER 2016-2020 ALL VARIANTS",
    //     "price": 13960.00,
    //     "category": "Roof and Luggage"
    // },
    // {
    //     "title": "FOG LAMP CHROME COVER",
    //     "description": "HILUX 2015 G, E Variants",
    //     "price": 2545.00,
    //     "category": "Lighting and Fog Lamps"
    // },
    // {
    //     "title": "FR LOWER GRILL VENT",
    //     "description": "HILUX 2015 ALL VARIANTS",
    //     "price": 2295.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "LUGGAGE TRAY",
    //     "description": "YARIS 2014",
    //     "price": 1760.00,
    //     "category": "Interior Accessories"
    // },
    // // Comment: Various exterior and accessory components.
    // {
    //     "title": "CHROME DR HOUSING",
    //     "description": "HILUX 2011 ALL VARIANTS",
    //     "price": 3010.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "FRONT BUMPER CHROME",
    //     "description": "VIOS 2013 ALL VARIANTS",
    //     "price": 2890.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "MUFFLER CUTTER",
    //     "description": "",
    //     "price": 535.00,
    //     "category": "Exhaust and Mufflers"
    // },
    // {
    //     "title": "FOG LAMP CHR (STR)",
    //     "description": "COROLLA ALTIS 2016 ALL VARIANTS",
    //     "price": 1725.00,
    //     "category": "Lighting and Fog Lamps"
    // },
    // {
    //     "title": "HEADLAMP CHROME COVER",
    //     "description": "FORTUNER 2011 ALL VARIANTS",
    //     "price": 2010.00,
    //     "category": "Lighting and Fog Lamps"
    // },
    // // Comment: Covers and components for various models.
    // {
    //     "title": "RR BUMPER STEP COVER",
    //     "description": "AVANZA 2015 ALL VARIANTS",
    //     "price": 3060.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "FOG LAMP SET",
    //     "description": "YARIS 2014",
    //     "price": 8410.00,
    //     "category": "Lighting and Fog Lamps"
    // },
    // {
    //     "title": "SIDE MOULDING",
    //     "description": "RAV4 2013 ALL VARIANTS",
    //     "price": 5555.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "SIDE VISOR",
    //     "description": "HILUX 2011",
    //     "price": 2600.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "SCUFF PLATE",
    //     "description": "RAV4 2013 ALL VARIANTS",
    //     "price": 3140.00,
    //     "category": "Body and Exterior"
    // },
    // // Comment: Various accessories and exterior enhancements.
    // {
    //     "title": "CONSOLE BOX",
    //     "description": "AVANZA 2015 G VARIANT",
    //     "price": 7670.00,
    //     "category": "Interior Accessories"
    // },
    // {
    //     "title": "SIDE MOULDING SET PAINTABLE",
    //     "description": "AVANZA 2019 G, E, J Variants",
    //     "price": 5615.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "FOGLAMP CHROME COVER",
    //     "description": "VIOS 2013 G, E Variants",
    //     "price": 1020.00,
    //     "category": "Lighting and Fog Lamps"
    // },
    // {
    //     "title": "MUFFLER CUTTER",
    //     "description": "INNOVA 2012 ALL VARIANTS",
    //     "price": 595.00,
    //     "category": "Exhaust and Mufflers"
    // },
    // {
    //     "title": "BACK SENSOR",
    //     "description": "COROLLA ALTIS 2014 G & E Variants",
    //     "price": 5145.00,
    //     "category": "Sensors and Safety"
    // },
    // // Comment: Moving to sensors and more interior components.
    // {
    //     "title": "CHROME LIST BCK DR",
    //     "description": "WIGO 2017 ALL VARIANTS",
    //     "price": 2075.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "BACK DOOR LOWER GARNISH",
    //     "description": "AVANZA 2019 G, E, J Variants",
    //     "price": 2340.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "SIDE STEP",
    //     "description": "",
    //     "price": 17695.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "SIDE VISOR, B-CAB",
    //     "description": "HILUX 2015 C&C and FX Variant Only",
    //     "price": 2180.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "SCUFF PLATE, D-CAB",
    //     "description": "HILUX 2020 All except C&C",
    //     "price": 3040.00,
    //     "category": "Body and Exterior"
    // },
    // // Comment: Includes various scuff plates, side steps, and visors.
    // {
    //     "title": "HD LAMP CHROME COVER",
    //     "description": "HILUX 2015 ALL VARIANTS",
    //     "price": 2450.00,
    //     "category": "Lighting and Fog Lamps"
    // },
    // {
    //     "title": "SCUFF PLATE",
    //     "description": "FORTUNER 2011 ALL VARIANTS",
    //     "price": 3095.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "SIDE VISOR",
    //     "description": "CAMRY 2016 ALL VARIANTS",
    //     "price": 5900.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "REAR BUMPER CHROME",
    //     "description": "VIOS 2013 ALL VARIANTS",
    //     "price": 3140.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "AROMA THERAPY ORANGE",
    //     "description": "COMMON",
    //     "price": 1550.00,
    //     "category": "Interior Accessories"
    // },
    // // Comment: Final items include aroma therapy, side body moulding, and roof trays.
    // {
    //     "title": "SIDE BODY MOULDING",
    //     "description": "VIOS 2013 ALL VARIANTS",
    //     "price": 3255.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "CHROME SIDE MOULDING",
    //     "description": "RAV4 2013 ALL VARIANT",
    //     "price": 3800.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "ROOF TRAY",
    //     "description": "FORTUNER 2016-2020 ALL VARIANTS",
    //     "price": 28035.00,
    //     "category": "Roof and Luggage"
    // },
    // {
    //     "title": "FRONT GRILL EMBLEM",
    //     "description": "LC TRD 2016",
    //     "price": 3790.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "FENDER PEARL WHITE",
    //     "description": "LC 2016 Standard and Full Option",
    //     "price": 121260.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "FR BUMPER LWR GARNISH",
    //     "description": "COROLLA ALTIS 2016 1.6V, G, E Variants",
    //     "price": 3920.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "LUGGAGE TRAY",
    //     "description": "CAMRY 2012 ALL VARIANTS",
    //     "price": 2340.00,
    //     "category": "Interior Accessories"
    // },
    // {
    //     "title": "CENTER CONSOLE BOX",
    //     "description": "AVANZA 2012 G & E",
    //     "price": 8015.00,
    //     "category": "Interior Accessories"
    // },
    // {
    //     "title": "REAR SPOILER",
    //     "description": "INNOVA 2012 ALL VARIANTS",
    //     "price": 8295.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "SIDE VISOR",
    //     "description": "INNOVA 2012 ALL VARIANTS",
    //     "price": 3710.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "HOOD MOULD GRAY",
    //     "description": "",
    //     "price": "",
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "FOG LAMP CHROME COVER",
    //     "description": "COROLLA ALTIS 2014 All Variants (except E variant)",
    //     "price": 2545.00,
    //     "category": "Lighting and Fog Lamps"
    // },
    // {
    //     "title": "SK,RAV4 ROOF RAIL",
    //     "description": "RAV4 2015 4x2 Only",
    //     "price": 13960.00,
    //     "category": "Roof and Luggage"
    // },
    // {
    //     "title": "CARGO NET",
    //     "description": "VIOS 2018 ALL VARIANTS",
    //     "price": 1760.00,
    //     "category": "Interior Accessories"
    // },
    // {
    //     "title": "TABLET HOLDER BLACK",
    //     "description": "INNOVA 2016 ALL VARIANTS",
    //     "price": 2610.00,
    //     "category": "Interior Accessories"
    // },
    // {
    //     "title": "MUDGUARD",
    //     "description": "INNOVA 2012 V & G",
    //     "price": 2200.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "SCOOP COVER",
    //     "description": "FORTUNER 2011 ALL VARIANTS",
    //     "price": 2010.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "SPARE WHEEL LOCK",
    //     "description": "INNOVA 2012 ALL VARIANTS",
    //     "price": 1150.00,
    //     "category": "Accessories"
    // },
    // {
    //     "title": "CHROME RR LICENSE PL",
    //     "description": "FORTUNER 2011 ALL VARIANTS",
    //     "price": 2070.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "ROOF RACK",
    //     "description": "FORTUNER 2016 ALL VARIANTS",
    //     "price": 13960.00,
    //     "category": "Roof and Luggage"
    // },
    // {
    //     "title": "FLOORMAT,BLACK",
    //     "description": "",
    //     "price": 1500.00,
    //     "category": "Interior Accessories"
    // },
    // {
    //     "title": "SCUFF PLATE",
    //     "description": "AVANZA 2015 ALL VARIANTS",
    //     "price": 3140.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "HDLMP GRNSH CHROME",
    //     "description": "VIOS 2019 ALL VARIANTS",
    //     "price": 1980.00,
    //     "category": "Lighting and Fog Lamps"
    // },
    // {
    //     "title": "FOGLAMP GARNISH",
    //     "description": "YARIS 2017 ALL VARIANTS",
    //     "price": 1530.00,
    //     "category": "Lighting and Fog Lamps"
    // },
    // {
    //     "title": "OVERFENDER HB",
    //     "description": "YARIS 2017 ALL VARIANTS",
    //     "price": 4190.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "REAR SKIRT SET",
    //     "description": "WIGO 2019 ALL VARIANTS",
    //     "price": 3120.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "CHROME DOOR HOUSING",
    //     "description": "VIOS 2018 ALL VARIANTS",
    //     "price": 2610.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "REVERSE SENSOR",
    //     "description": "WIGO 2017 ALL VARIANTS",
    //     "price": 2745.00,
    //     "category": "Sensors and Safety"
    // },
    // {
    //     "title": "SCUFF PLATE HB",
    //     "description": "YARIS 2017 ALL VARIANTS",
    //     "price": 2370.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "GPS KIT",
    //     "description": "",
    //     "price": 6590.00,
    //     "category": "Technology and Electronics"
    // },
    // {
    //     "title": "FRONT UNDER RUN",
    //     "description": "YARIS 2017 ALL VARIANTS",
    //     "price": 3390.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "DAYTIME RUN LIGHT",
    //     "description": "YARIS 2017 1.3E Variants",
    //     "price": 3150.00,
    //     "category": "Lighting and Fog Lamps"
    // },
    // {
    //     "title": "ROOF ORNAMENT HB",
    //     "description": "YARIS 2017 ALL VARIANTS",
    //     "price": 2780.00,
    //     "category": "Roof and Luggage"
    // },
    // {
    //     "title": "LUGGAGE TRAY WIDE",
    //     "description": "RUSH 2018 ALL VARIANTS",
    //     "price": 2260.00,
    //     "category": "Interior Accessories"
    // },
    // {
    //     "title": "RR LAMP GARNISH",
    //     "description": "VIOS 2019 ALL VARIANTS",
    //     "price": 2570.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "TRUNK L GARNISH",
    //     "description": "VIOS 2019 ALL VARIANTS",
    //     "price": 2040.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "SIDE SKIRT,RH",
    //     "description": "VIOS 2013 ALL VARIANTS",
    //     "price": 3080.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "REAR CAMERA V",
    //     "description": "FORTUNER 2016 V",
    //     "price": 8750.00,
    //     "category": "Technology and Electronics"
    // },
    // {
    //     "title": "SUNSHADE",
    //     "description": "CAMRY 2020 ALL VARIANTS",
    //     "price": 3450.00,
    //     "category": "Interior Accessories"
    // },
    // {
    //     "title": "SIDE VISOR (CHROME)",
    //     "description": "CAMRY 2020 ALL VARIANTS",
    //     "price": 4670.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "SEAT COVER CORD E",
    //     "description": "RUSH E 2017-2018",
    //     "price": 4970.00,
    //     "category": "Interior Accessories"
    // },
    // {
    //     "title": "TRD FRONT SPOILER",
    //     "description": "YARIS TRD 2019",
    //     "price": 6990.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "SEAT COVER CORD BLACK",
    //     "description": "ALTIS 2019 G Variant",
    //     "price": 5690.00,
    //     "category": "Interior Accessories"
    // },
    // {
    //     "title": "SIDE VISOR",
    //     "description": "WIGO 2020 ALL VARIANTS",
    //     "price": 2510.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "FOG LAMP GARNISH",
    //     "description": "HILUX 2020 G & E",
    //     "price": 1590.00,
    //     "category": "Lighting and Fog Lamps"
    // },
    // {
    //     "title": "FR SUNSHADE",
    //     "description": "",
    //     "price": 2200.00,
    //     "category": "Interior Accessories"
    // },
    // {
    //     "title": "FOGLAMP COVER",
    //     "description": "",
    //     "price": 1150.00,
    //     "category": "Lighting and Fog Lamps"
    // },
    // {
    //     "title": "FR BUMPER SPOILER",
    //     "description": "",
    //     "price": 2800.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "SIDE BAR",
    //     "description": "",
    //     "price": 12600.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "BATTERY LN2",
    //     "description": "",
    //     "price": 6750.00,
    //     "category": "Accessories"
    // },
    // {
    //     "title": "BOLT, HUB",
    //     "description": "AVANZA/RUSH 2008-2016",
    //     "price": 160.00,
    //     "category": "Accessories"
    // },
    // {
    //     "title": "GASKET,16X21X2.3",
    //     "description": "86",
    //     "price": 50.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "RETAINER, SIDE",
    //     "description": "VIOS/HILUX",
    //     "price": 120.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "RUBBER, RR WIPER BLA",
    //     "description": "WIGO/RUSH",
    //     "price": 130.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "NUT, HUB",
    //     "description": "COROLLA/CAMRY/INNOVA/FORTUNER/HILUX",
    //     "price": 85.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "RUBBER, WIPER BLADE",
    //     "description": "AVANZA/WIGO",
    //     "price": 150.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "BLADE RUBBER",
    //     "description": "VIOS",
    //     "price": 135.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "BLADE RUBBER",
    //     "description": "YARIS/VIOS",
    //     "price": 145.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "RUBBER, WIPER BLADE",
    //     "description": "RAV4/LC/ALPHARD",
    //     "price": 200.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "RUBBER, RR WIPER BLA",
    //     "description": "AVANZA/LITEACE",
    //     "price": 180.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "BOLT, HUB",
    //     "description": "AVANZA/LITEACE",
    //     "price": 160.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "BLADE RUBBER",
    //     "description": "FORTUNER/HILUX",
    //     "price": 145.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "BLADE, FR WIPER, RH",
    //     "description": "COROLLA",
    //     "price": 135.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "RUBBER, WIPER BLADE",
    //     "description": "ALPHARD",
    //     "price": 220.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "FILTER, FUEL",
    //     "description": "COROLLA/HILUX",
    //     "price": 980.00,
    //     "category": "Filters"
    // },
    // {
    //     "title": "FILTER, FUEL",
    //     "description": "HIACE",
    //     "price": 980.00,
    //     "category": "Filters"
    // },
    // {
    //     "title": "FILTER, OIL",
    //     "description": "HILUX/HIACE",
    //     "price": 850.00,
    //     "category": "Filters"
    // },
    // {
    //     "title": "RUBBER, WIPER BLADE",
    //     "description": "CAMRY",
    //     "price": 150.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "MVP WIPER BLADE",
    //     "description": "",
    //     "price": 175.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "SEAL, TYPE T OIL",
    //     "description": "COROLLA/ALTIS CORLLA CROSS",
    //     "price": 230.00,
    //     "category": "Seals and Gaskets"
    // },
    // {
    //     "title": "CUSHION, SLIDE DOOR",
    //     "description": "HIACE",
    //     "price": 620.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "RUBBER, WIPER BLADE",
    //     "description": "HIACE/LC",
    //     "price": 200.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "MT,GL-4 75W-90 1L",
    //     "description": "",
    //     "price": 780.00,
    //     "category": "Fluids"
    // },
    // {
    //     "title": "RUBBER, WIPER BLADE",
    //     "description": "COROLLA/RAV4/LC",
    //     "price": 185.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "FILTER SUB-ASSY, OIL",
    //     "description": "",
    //     "price": 950.00,
    //     "category": "Filters"
    // },
    // {
    //     "title": "BELT, V-RIBBED",
    //     "description": "YARIS/VIOS",
    //     "price": 1230.00,
    //     "category": "Belts and Hoses"
    // },
    // {
    //     "title": "COVER, TRANSMITTER",
    //     "description": "FORTUNER/HILUX/HIACE/ALPHARD",
    //     "price": 1150.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "PLUG, SPARK",
    //     "description": "CAMRY/LC/RAV4",
    //     "price": 560.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "MVP WIPER BLADE",
    //     "description": "AVANZA",
    //     "price": 175.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "PANEL, FR DOOR",
    //     "description": "RAV4",
    //     "price": 3890.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "LM RADIATOR CLEANER",
    //     "description": "",
    //     "price": 480.00,
    //     "category": "Fluids"
    // },
    // {
    //     "title": "ENGINE FLUSH",
    //     "description": "",
    //     "price": 550.00,
    //     "category": "Fluids"
    // },
    // {
    //     "title": "LOCK SUB-ASSEMBLY, GLOVE",
    //     "description": "FORTUNER/HILUX",
    //     "price": 640.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "WEATHERSTRIP ASSY, F",
    //     "description": "",
    //     "price": 1500.00,
    //     "category": "Weatherstrips"
    // },
    // {
    //     "title": "SEAL, RADIATOR, UPR",
    //     "description": "FORTUNER",
    //     "price": 210.00,
    //     "category": "Seals and Gaskets"
    // },
    // {
    //     "title": "SEAL, TYPE T OIL",
    //     "description": "FORTUNER/HILUX",
    //     "price": 230.00,
    //     "category": "Seals and Gaskets"
    // },
    // {
    //     "title": "CHANNEL SUB-ASSEMBLY, RR",
    //     "description": "INNOVA/FORTUNER/HILUX",
    //     "price": 1450.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "PLUG, SPARK",
    //     "description": "CAMRY/RAV4/ALPHARD",
    //     "price": 560.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "WEATHERSTRIP, RR DOOR",
    //     "description": "WIGO",
    //     "price": 650.00,
    //     "category": "Weatherstrips"
    // },
    // {
    //     "title": "WAY, 2",
    //     "description": "INNOVA/FORTUNER/HILUX",
    //     "price": 1180.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "ORNAMENT, WHEEL HUB",
    //     "description": "WIGO/RAIZE/VELOZ",
    //     "price": 950.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "WEATHERSTRIP ASSY, R",
    //     "description": "FORTUNER",
    //     "price": 1800.00,
    //     "category": "Weatherstrips"
    // },
    // {
    //     "title": "PLATE ASSY, DOOR",
    //     "description": "VIOS/COROLLA",
    //     "price": 1600.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "COVER ASSY, DOOR OUT",
    //     "description": "ALTIS/COROLLA",
    //     "price": 2200.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "MOULDING, RR DOOR BE",
    //     "description": "FORTUNER",
    //     "price": 1850.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "MOULDING, RR DOOR BE",
    //     "description": "FORTUNER",
    //     "price": 1850.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "PLATE, LUGGAGE COMPT DOOR NAME, NO.4",
    //     "description": "VIOS/COROLLA",
    //     "price": 680.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "COVER ASSY, DOOR",
    //     "description": "COROLLA/ALTIS",
    //     "price": 2850.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "TRUNK SPOILER",
    //     "description": "",
    //     "price": 3500.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "BULB",
    //     "description": "VIOS/COROLLA",
    //     "price": 90.00,
    //     "category": "Lighting"
    // },
    // {
    //     "title": "WEATHERSTRIP ASSY, F",
    //     "description": "FORTUNER",
    //     "price": 1500.00,
    //     "category": "Weatherstrips"
    // },
    // {
    //     "title": "WEATHERSTRIP ASSY, F",
    //     "description": "FORTUNER",
    //     "price": 1500.00,
    //     "category": "Weatherstrips"
    // },
    // {
    //     "title": "WEATHERSTRIP ASSY, F",
    //     "description": "FORTUNER",
    //     "price": 1500.00,
    //     "category": "Weatherstrips"
    // },
    // {
    //     "title": "MOULDING, RADIATOR G",
    //     "description": "INNOVA",
    //     "price": 970.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "COVER, RELAY BLOCK",
    //     "description": "INNOVA/FORTUNER/HILUX",
    //     "price": 720.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "DAM, BACK DOOR GLASS",
    //     "description": "FORTUNER",
    //     "price": 1000.00,
    //     "category": "Body and Exterior"
    // },
    // {
    //     "title": "ELEMENT SUB-ASSEMBLY",
    //     "description": "CAMRY/ALPHARD",
    //     "price": 1200.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "ELEMENT SUB-ASSEMBLY",
    //     "description": "HILUX/LC",
    //     "price": 1200.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "TRIM, BACK WINDOW",
    //     "description": "INNOVA",
    //     "price": 950.00,
    //     "category": "Parts"
    // },
    // {
    //     "title": "PLATE, BACK DOOR NAME",
    //     "description": "INNOVA",
    //     "price": 780.00,
    //     "category": "Parts"
    // },
];