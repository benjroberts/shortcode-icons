import { BrandLogos, LogosLoaded, BrandStyles } from './logos.js';

// NOTE: Always keep this list sorted alphabetically by brand id.
const DirectoryData = [
  {
    id: "acorns",
    name: "Acorns",
    fullName: "Acorns Alerts",
    category: "finance",
    shortcodes: ["22676"],
    sms: "Acorns: Your temporary access code is 123456."
  },
  {
    id: "adidas",
    name: "Adidas",
    fullName: "Adidas Orders",
    category: "retail",
    shortcodes: ["23432"],
    sms: "Adidas: Order #12345 is confirmed. We will notify you when it ships."
  },
  {
    id: "adobe",
    name: "Adobe",
    fullName: "Adobe Identity",
    category: "tech",
    shortcodes: ["23623"],
    sms: "Your Adobe verification code is 123456. Do not share."
  },
  {
    id: "affirm",
    name: "Affirm",
    fullName: "Affirm Security",
    category: "finance",
    shortcodes: ["23347"],
    sms: "Affirm: Your verification code is 123456. Shop now!"
  },
  {
    id: "airbnb",
    name: "Airbnb",
    fullName: "Airbnb Alerts",
    category: "services",
    shortcodes: ["24726"],
    sms: "Airbnb: Host says: 'Welcome! Code for front door lock is 1234.'"
  },
  {
    id: "airtable",
    name: "Airtable",
    fullName: "Airtable Verify",
    category: "tech",
    shortcodes: ["24782"],
    sms: "Your Airtable verification code is: 123456."
  },
  {
    id: "ally",
    name: "Ally Bank",
    fullName: "Ally Alerts",
    category: "finance",
    shortcodes: ["25592"],
    sms: "Ally: 123456 is your security verification code."
  },
  {
    id: "amazon",
    name: "Amazon",
    fullName: "Amazon Delivery",
    category: "retail",
    shortcodes: ["38356", "20961"],
    sms: "Your Amazon package is out for delivery."
  },
  {
    id: "americanairlines",
    name: "American Airlines",
    fullName: "AA Flight Alerts",
    category: "services",
    shortcodes: ["22479"],
    sms: "AA: Flight 500 baggage claim will be Carousel 4."
  },
  {
    id: "americanexpress",
    name: "American Express",
    fullName: "Amex Alerts",
    category: "finance",
    shortcodes: ["26397"],
    sms: "Amex: Security code 12345 for online purchase transaction."
  },
  {
    id: "apple",
    name: "Apple",
    fullName: "Apple ID Verification",
    category: "tech",
    shortcodes: ["81961"],
    sms: "Your Apple ID verification code is: 987654. Do not share."
  },
  {
    id: "att",
    name: "AT&T",
    fullName: "AT&T Alerts",
    category: "services",
    shortcodes: ["74636"],
    sms: "AT&T Free Msg: Your monthly bill of $85.00 is ready to view."
  },
  {
    id: "authy",
    name: "Authy / Shop Pay",
    fullName: "Shop Pay & Authy",
    category: "tech",
    shortcodes: ["22395"],
    sms: "Shop Pay: Your login code is 123456."
  },
  {
    id: "avis",
    name: "Avis",
    fullName: "Avis Preferred",
    category: "services",
    shortcodes: ["28477"],
    sms: "Avis: Your car keys are inside the dashboard. Stall B5."
  },
  {
    id: "bankofamerica",
    name: "Bank of America",
    fullName: "BofA Alerts",
    category: "finance",
    shortcodes: ["73981"],
    sms: "BofA: Alert - Large transaction of $250.00 at Apple Store."
  },
  {
    id: "benchmade",
    name: "Benchmade",
    fullName: "Benchmade Knife Company",
    category: "retail",
    shortcodes: ["95493"],
    sms: "Benchmade: Your custom knife order #12345 has shipped and is on its way."
  },
  {
    id: "bestbuy",
    name: "Best Buy",
    fullName: "Best Buy Orders",
    category: "retail",
    shortcodes: ["228289"],
    sms: "Best Buy: Your order is ready for pickup."
  },
  {
    id: "bookingcom",
    name: "Booking.com",
    fullName: "Booking.com Alerts",
    category: "services",
    shortcodes: ["26654"],
    sms: "Booking.com: Your reservation at Hotel Grand is confirmed! PIN: 1234."
  },
  {
    id: "budget",
    name: "Budget",
    fullName: "Budget Rent A Car",
    category: "services",
    shortcodes: ["90607"],
    sms: "BUDGET: Summer savings are here. Get up to 35% off."
  },
  {
    id: "burgerking",
    name: "Burger King",
    fullName: "Royal Perks Rewards",
    category: "food",
    shortcodes: ["25225"],
    sms: "Burger King: Crown deals! Get BOGO Whopper with code 9876."
  },
  {
    id: "canva",
    name: "Canva",
    fullName: "Canva Alerts",
    category: "tech",
    shortcodes: ["22682"],
    sms: "Canva: Your security verification code is 123456."
  },
  {
    id: "capitalone",
    name: "Capital One",
    fullName: "Capital One Alerts",
    category: "finance",
    shortcodes: ["22789"],
    sms: "Capital One: Large purchase alert at Best Buy."
  },
  {
    id: "cashapp",
    name: "Cash App",
    fullName: "Cash App Verification",
    category: "finance",
    shortcodes: ["28515"],
    sms: "Cash App: 123-456 is your sign-in code."
  },
  {
    id: "chase",
    name: "Chase Bank",
    fullName: "Chase Alerts",
    category: "finance",
    shortcodes: ["24273"],
    sms: "Chase Alert: Large transaction of $50.00 at Target."
  },
  {
    id: "chickfilay",
    name: "Chick-fil-A",
    fullName: "Chick-fil-A One",
    category: "food",
    shortcodes: ["23225"],
    sms: "Chick-fil-A: Order is prepared! Curbside spot #4."
  },
  {
    id: "chime",
    name: "Chime",
    fullName: "Chime Bank Alerts",
    category: "finance",
    shortcodes: ["24463"],
    sms: "Chime: Your card ending in 1234 was used for $25.50."
  },
  {
    id: "chipotle",
    name: "Chipotle",
    fullName: "Chipotle Rewards",
    category: "food",
    shortcodes: ["24476"],
    sms: "Chipotle: Your burrito bowl is ready on the pickup shelf!"
  },
  {
    id: "circlek",
    name: "Circle K",
    fullName: "Circle K Easy Rewards",
    category: "retail",
    shortcodes: ["25050"],
    sms: "Circle K: Get a free polar pop today! Scan your Easy Rewards bar code at checkout."
  },
  {
    id: "citibank",
    name: "Citi / Citibank",
    fullName: "Citi Alerts",
    category: "finance",
    shortcodes: ["24842"],
    sms: "Citi: Alert - Your card ending in 1234 was used for $99.00."
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    fullName: "Cloudflare Security",
    category: "tech",
    shortcodes: ["25372"],
    sms: "Your Cloudflare verification code is 123456."
  },
  {
    id: "coinbase",
    name: "Coinbase",
    fullName: "Coinbase Security",
    category: "finance",
    shortcodes: ["26462"],
    sms: "Coinbase: Your 2-step verification code is 123456."
  },
  {
    id: "costco",
    name: "Costco",
    fullName: "Costco Alerts",
    category: "retail",
    shortcodes: ["267826"],
    sms: "Costco: Thank you for shopping! Receipt details in link."
  },
  {
    id: "creditkarma",
    name: "Credit Karma",
    fullName: "Credit Karma Security",
    category: "finance",
    shortcodes: ["25762"],
    sms: "Credit Karma: Your login verification code is 123456."
  },
  {
    id: "cvs",
    name: "CVS Pharmacy",
    fullName: "CVS Alerts",
    category: "services",
    shortcodes: ["287747"],
    sms: "CVS: Your order is ready for pickup."
  },
  {
    id: "delta",
    name: "Delta Air Lines",
    fullName: "Delta Flight Alerts",
    category: "services",
    shortcodes: ["33582"],
    sms: "Delta Flight 123 is on time. Gate departure C12 at 4:30 PM."
  },
  {
    id: "discord",
    name: "Discord",
    fullName: "Discord Security",
    category: "tech",
    shortcodes: ["24365"],
    sms: "Your Discord security code is: 123456. It expires in 5 minutes."
  },
  {
    id: "discover",
    name: "Discover Bank",
    fullName: "Discover Alerts",
    category: "finance",
    shortcodes: ["34726"],
    sms: "Discover Alert: Transaction of $45.00 approved at Exxon."
  },
  {
    id: "disneyplus",
    name: "Disney+",
    fullName: "Disney+ Security",
    category: "services",
    shortcodes: ["34763"],
    sms: "Disney+: Use 123456 as your one-time verification passcode."
  },
  {
    id: "dominos",
    name: "Domino's",
    fullName: "Domino's Tracker",
    category: "food",
    shortcodes: ["366466"],
    sms: "Domino's: Your order is in the oven."
  },
  {
    id: "doordash",
    name: "DoorDash",
    fullName: "DoorDash Delivery",
    category: "food",
    shortcodes: ["366747"],
    sms: "DoorDash: Your dasher is arriving soon."
  },
  {
    id: "dropbox",
    name: "Dropbox",
    fullName: "Dropbox Security",
    category: "tech",
    shortcodes: ["37779"],
    sms: "Dropbox: Use 123456 as your security code for two-step verification."
  },
  {
    id: "dunkin",
    name: "Dunkin'",
    fullName: "Dunkin' Rewards",
    category: "food",
    shortcodes: ["38654"],
    sms: "Dunkin': Your cold brew is ready. Code: 1234."
  },
  {
    id: "ebay",
    name: "eBay",
    fullName: "eBay Security",
    category: "retail",
    shortcodes: ["70726"],
    sms: "eBay: Your security code is 987654. Do not share."
  },
  {
    id: "enterprise",
    name: "Enterprise",
    fullName: "Enterprise Rent-A-Car",
    category: "services",
    shortcodes: ["36877"],
    sms: "Enterprise: Rental contract completed. Thank you for renting."
  },
  {
    id: "etrade",
    name: "E*TRADE",
    fullName: "E*TRADE Alerts",
    category: "finance",
    shortcodes: ["95851"],
    sms: "E*TRADE: Alert! Your limit order to buy 10 shares of Apple was executed."
  },
  {
    id: "eventbrite",
    name: "Eventbrite",
    fullName: "Eventbrite Tickets",
    category: "services",
    shortcodes: ["38368"],
    sms: "Eventbrite: Ticket for Tech Summit. Scan code at entrance."
  },
  {
    id: "expedia",
    name: "Expedia",
    fullName: "Expedia Alerts",
    category: "services",
    shortcodes: ["39733"],
    sms: "Expedia: Flight UA100 departure gate changed to C24."
  },
  {
    id: "fedex",
    name: "FedEx",
    fullName: "FedEx Tracking",
    category: "services",
    shortcodes: ["46339"],
    sms: "FedEx: Package tracking update: Out for delivery."
  },
  {
    id: "fidelity",
    name: "Fidelity",
    fullName: "Fidelity Alerts",
    category: "finance",
    shortcodes: ["34335"],
    sms: "Fidelity: Your security code is 123456. Valid for 15 mins."
  },
  {
    id: "figma",
    name: "Figma",
    fullName: "Figma Verify",
    category: "tech",
    shortcodes: ["34462"],
    sms: "Use 123456 as two-factor authentication code for your Figma account."
  },
  {
    id: "gap",
    name: "Gap",
    fullName: "Gap Orders",
    category: "retail",
    shortcodes: ["42727"],
    sms: "Gap: Your order has shipped. Track it online. Thank you!"
  },
  {
    id: "github",
    name: "GitHub",
    fullName: "GitHub Security",
    category: "tech",
    shortcodes: ["44842"],
    sms: "[GitHub] Use 123456 as two-factor authentication code for your GitHub account."
  },
  {
    id: "google",
    name: "Google",
    fullName: "Google Verification",
    category: "tech",
    shortcodes: ["22000", "24444"],
    sms: "G-765359 is your Google verification code. Don't share your code with anyone."
  },
  {
    id: "grubhub",
    name: "Grubhub",
    fullName: "Grubhub Delivery",
    category: "food",
    shortcodes: ["47824"],
    sms: "Grubhub: Your order has been delivered. Enjoy!"
  },
  {
    id: "hertz",
    name: "Hertz",
    fullName: "Hertz Gold Plus",
    category: "services",
    shortcodes: ["43789"],
    sms: "Hertz: Gold alert! Your car is in Zone 4, Stall 22."
  },
  {
    id: "hilton",
    name: "Hilton",
    fullName: "Hilton Honors",
    category: "services",
    shortcodes: ["44586"],
    sms: "Hilton: Welcome to Hilton Downtown. Your room is ready."
  },
  {
    id: "hm",
    name: "H&M",
    fullName: "H&M Members",
    category: "retail",
    shortcodes: ["46468"],
    sms: "H&M: Member deal! Get 15% off your next purchase inside the app."
  },
  {
    id: "homedepot",
    name: "Home Depot",
    fullName: "Home Depot Orders",
    category: "retail",
    shortcodes: ["433768", "38698"],
    sms: "HOME DEPOT: Your order #12345 is ready for pickup."
  },
  {
    id: "hulu",
    name: "Hulu",
    fullName: "Hulu Alerts",
    category: "services",
    shortcodes: ["48582"],
    sms: "Hulu Account Alert: Security code 123456 requested for login."
  },
  {
    id: "hyatt",
    name: "Hyatt",
    fullName: "World of Hyatt",
    category: "services",
    shortcodes: ["49288"],
    sms: "Hyatt: Thank you for your stay. Your digital receipt is ready."
  },
  {
    id: "ikea",
    name: "IKEA",
    fullName: "IKEA Delivery",
    category: "retail",
    shortcodes: ["45322"],
    sms: "IKEA: Your delivery driver is on the way. Expected arrival: 2:00 PM."
  },
  {
    id: "instacart",
    name: "Instacart",
    fullName: "Instacart Delivery",
    category: "retail",
    shortcodes: ["46782"],
    sms: "Instacart: Your shopper is checking out. ETA: 20 minutes."
  },
  {
    id: "klarna",
    name: "Klarna",
    fullName: "Klarna Payments",
    category: "finance",
    shortcodes: ["55276"],
    sms: "Klarna: Your login code is 123-456. Do not share."
  },
  {
    id: "kohls",
    name: "Kohl's",
    fullName: "Kohl's Mobile",
    category: "retail",
    shortcodes: ["56457"],
    sms: "KOHL'S: Take an extra 15% off with code SUNNY15."
  },
  {
    id: "kroger",
    name: "Kroger",
    fullName: "Kroger Alerts",
    category: "retail",
    shortcodes: ["57643"],
    sms: "Kroger: Delivery alert. Your groceries have been dropped off."
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    fullName: "LinkedIn Security",
    category: "tech",
    shortcodes: ["54653"],
    sms: "Your LinkedIn verification code is 123456. Don't share it."
  },
  {
    id: "lowes",
    name: "Lowe's",
    fullName: "Lowe's Orders",
    category: "retail",
    shortcodes: ["56937"],
    sms: "LOWE'S: Your store pickup order #12345 is ready for pick up."
  },
  {
    id: "lululemon",
    name: "Lululemon",
    fullName: "Lululemon Alerts",
    category: "retail",
    shortcodes: ["58586"],
    sms: "Lululemon: Your order is ready for pickup at our local store."
  },
  {
    id: "lyft",
    name: "Lyft",
    fullName: "Lyft updates",
    category: "food",
    shortcodes: ["59381"],
    sms: "Lyft: Ride code 1234. Your driver is 2 mins away."
  },
  {
    id: "macys",
    name: "Macy's",
    fullName: "Macy's Alerts",
    category: "retail",
    shortcodes: ["62297"],
    sms: "Macy's: Your package has been delivered to your front door."
  },
  {
    id: "marriott",
    name: "Marriott",
    fullName: "Marriott Bonvoy",
    category: "services",
    shortcodes: ["62774"],
    sms: "Marriott: Mobile check-in is ready for room #101. Use digital key."
  },
  {
    id: "mastercard",
    name: "Mastercard",
    fullName: "Mastercard Alerts",
    category: "finance",
    shortcodes: ["62783"],
    sms: "Mastercard ID Check: Your secure code is 123456."
  },
  {
    id: "max",
    name: "Max",
    fullName: "Max (HBO) Security",
    category: "services",
    shortcodes: ["62982"],
    sms: "Your Max verification code is 123456."
  },
  {
    id: "mcdonalds",
    name: "McDonald's",
    fullName: "McDonald's Rewards",
    category: "food",
    shortcodes: ["62366"],
    sms: "McDonald's: Use code 1234 to claim your free fries inside the app."
  },
  {
    id: "meta",
    name: "Meta / Facebook",
    fullName: "Meta Security",
    category: "tech",
    shortcodes: ["32665"],
    sms: "123456 is your Facebook security code."
  },
  {
    id: "microsoft",
    name: "Microsoft",
    fullName: "Microsoft Security",
    category: "tech",
    shortcodes: ["87892", "69525"],
    sms: "Use 123456 as Microsoft account security code."
  },
  {
    id: "mintmobile",
    name: "Mint Mobile",
    fullName: "Mint Mobile Alerts",
    category: "services",
    shortcodes: ["64686"],
    sms: "Mint Mobile: Your high-speed data is 80% used. Text UPGRADE."
  },
  {
    id: "netflix",
    name: "Netflix",
    fullName: "Netflix Updates",
    category: "services",
    shortcodes: ["63835"],
    sms: "Netflix: Your verification code is 123456. Don't share."
  },
  {
    id: "nike",
    name: "Nike",
    fullName: "Nike Orders",
    category: "retail",
    shortcodes: ["64537"],
    sms: "Nike: Your order #98765 has been shipped. Track your package."
  },
  {
    id: "nordstrom",
    name: "Nordstrom",
    fullName: "Nordstrom Alerts",
    category: "retail",
    shortcodes: ["67376"],
    sms: "Nordstrom: Your pickup order is ready. Park in curbside spot 2."
  },
  {
    id: "notion",
    name: "Notion",
    fullName: "Notion Security",
    category: "tech",
    shortcodes: ["66846"],
    sms: "Notion: Your temporary login code is 123456."
  },
  {
    id: "okta",
    name: "Okta",
    fullName: "Okta Verify",
    category: "tech",
    shortcodes: ["65821"],
    sms: "Okta Verify: 123456 is your verification code."
  },
  {
    id: "panerabread",
    name: "Panera Bread",
    fullName: "MyPanera Rewards",
    category: "food",
    shortcodes: ["72637"],
    sms: "Panera: Your Rapid Pick-Up order is ready on the shelf."
  },
  {
    id: "papajohns",
    name: "Papa John's",
    fullName: "Papa Rewards",
    category: "food",
    shortcodes: ["72725"],
    sms: "Papa John's: Delivery driver is on their way with your hot pizza!"
  },
  {
    id: "paramountplus",
    name: "Paramount+",
    fullName: "Paramount+ Security",
    category: "services",
    shortcodes: ["72768"],
    sms: "Paramount+ Security Code: 123456. Expires in 15 minutes."
  },
  {
    id: "patreon",
    name: "Patreon",
    fullName: "Patreon Security",
    category: "tech",
    shortcodes: ["72873"],
    sms: "Patreon: Your verification code is 123456. Welcome back!"
  },
  {
    id: "paypal",
    name: "PayPal",
    fullName: "PayPal Security",
    category: "finance",
    shortcodes: ["72975"],
    sms: "PayPal: Your security code is 123456."
  },
  {
    id: "peacock",
    name: "Peacock",
    fullName: "Peacock TV Alerts",
    category: "services",
    shortcodes: ["73226"],
    sms: "Peacock TV: 123456 is your security verification code."
  },
  {
    id: "petsmart",
    name: "PetSmart",
    fullName: "PetSmart Treats",
    category: "retail",
    shortcodes: ["704704"],
    sms: "PetSmart: Your Treats points are ready to redeem! Show this bar code at checkout."
  },
  {
    id: "pinterest",
    name: "Pinterest",
    fullName: "Pinterest Alerts",
    category: "tech",
    shortcodes: ["74687"],
    sms: "Pinterest: Use 123456 as your verification code."
  },
  {
    id: "pizzahut",
    name: "Pizza Hut",
    fullName: "Pizza Hut Orders",
    category: "food",
    shortcodes: ["74992"],
    sms: "Pizza Hut: Order is in the oven! Estimated delivery: 30 minutes."
  },
  {
    id: "postmates",
    name: "Postmates",
    fullName: "Postmates Delivery",
    category: "food",
    shortcodes: ["76786"],
    sms: "Postmates: Courier is 2 minutes away from your delivery address."
  },
  {
    id: "progressive",
    name: "Progressive",
    fullName: "Progressive Insurance",
    category: "services",
    shortcodes: ["99354"],
    sms: "Progressive: Your auto policy renewal payment was processed successfully. Thank you!"
  },
  {
    id: "reddit",
    name: "Reddit",
    fullName: "Reddit Security",
    category: "tech",
    shortcodes: ["73338"],
    sms: "Your Reddit verification code is 123456. Enter it in the app."
  },
  {
    id: "riteaid",
    name: "Rite Aid",
    fullName: "Rite Aid Pharmacy",
    category: "retail",
    shortcodes: ["74832"],
    sms: "Rite Aid: Rx #123456 is ready for pickup at Main St."
  },
  {
    id: "robinhood",
    name: "Robinhood",
    fullName: "Robinhood Security",
    category: "finance",
    shortcodes: ["76246"],
    sms: "Robinhood login attempt: Code is 123456. Enter to verify."
  },
  {
    id: "schwab",
    name: "Charles Schwab",
    fullName: "Schwab Alerts",
    category: "finance",
    shortcodes: ["72492"],
    sms: "Schwab: Your security verification code is 123456."
  },
  {
    id: "sephora",
    name: "Sephora",
    fullName: "Sephora Alerts",
    category: "retail",
    shortcodes: ["73746"],
    sms: "Sephora Beauty Insider: Earn 2x points today only! Shop now."
  },
  {
    id: "seveneleven",
    name: "7-Eleven",
    fullName: "7-Eleven 7REWARDS",
    category: "retail",
    shortcodes: ["711711"],
    sms: "7-Eleven: Your 7REWARDS offer is ready! Scan in store for a free Slurpee."
  },
  {
    id: "shipt",
    name: "Shipt",
    fullName: "Shipt Shoppers",
    category: "retail",
    shortcodes: ["74478"],
    sms: "Shipt: Shopper is arriving soon. Please make sure porch light is on."
  },
  {
    id: "shopify",
    name: "Shopify",
    fullName: "Shopify Security",
    category: "tech",
    shortcodes: ["74674"],
    sms: "Shopify: Your login verification code is 123456."
  },
  {
    id: "signal",
    name: "Signal",
    fullName: "Signal Messenger",
    category: "tech",
    shortcodes: ["74462"],
    sms: "Your Signal verification code is: 123-456. Do not share."
  },
  {
    id: "skims",
    name: "SKIMS",
    fullName: "SKIMS Alerts",
    category: "retail",
    shortcodes: ["68805"],
    sms: "SKIMS: Shop the new Cotton Collection now before it sells out!"
  },
  {
    id: "slack",
    name: "Slack",
    fullName: "Slack Technologies",
    category: "tech",
    shortcodes: ["75225"],
    sms: "Slack confirmation code: 123-456. Enter this to log in."
  },
  {
    id: "slateauto",
    name: "Slate Auto",
    fullName: "Slate Auto Updates",
    category: "services",
    shortcodes: ["68406"],
    sms: "Slate Auto: One week until we announce the price."
  },
  {
    id: "snapchat",
    name: "Snapchat",
    fullName: "Snapchat Security",
    category: "tech",
    shortcodes: ["83395"],
    sms: "Snapchat: Your verification code is 123456. Happy Snapping!"
  },
  {
    id: "sofi",
    name: "SoFi",
    fullName: "SoFi Alerts",
    category: "finance",
    shortcodes: ["76342"],
    sms: "SoFi: Your security verification code is 123456."
  },
  {
    id: "southwest",
    name: "Southwest Airlines",
    fullName: "Southwest Flight Updates",
    category: "services",
    shortcodes: ["79227"],
    sms: "Southwest: Flight 998 check-in window is open. Boarding slot: B22."
  },
  {
    id: "spectrum",
    name: "Spectrum",
    fullName: "Spectrum Customer Alert",
    category: "services",
    shortcodes: ["77328"],
    sms: "Spectrum: Planned maintenance in your area tonight at 12:00 AM."
  },
  {
    id: "spotify",
    name: "Spotify",
    fullName: "Spotify Security",
    category: "services",
    shortcodes: ["77684"],
    sms: "Spotify: Use 123456 to verify your account login request."
  },
  {
    id: "squarespace",
    name: "Squarespace",
    fullName: "Squarespace Alerts",
    category: "tech",
    shortcodes: ["77722"],
    sms: "Squarespace: Your security verification code is 123456."
  },
  {
    id: "starbucks",
    name: "Starbucks",
    fullName: "Starbucks Rewards",
    category: "food",
    shortcodes: ["78645"],
    sms: "Starbucks: Happy Hour starts today at 2 PM!"
  },
  {
    id: "steam",
    name: "Steam",
    fullName: "Steam Guard",
    category: "tech",
    shortcodes: ["78326"],
    sms: "Steam Guard: Your security code is ABCDE."
  },
  {
    id: "stripe",
    name: "Stripe",
    fullName: "Stripe Verify",
    category: "finance",
    shortcodes: ["78747"],
    sms: "Stripe: Your login verification code is 123-456."
  },
  {
    id: "subway",
    name: "Subway",
    fullName: "Subway MVP Rewards",
    category: "food",
    shortcodes: ["78292"],
    sms: "Subway: 15% off any footlong sub today! Order inside the app."
  },
  {
    id: "sweetgreen",
    name: "Sweetgreen",
    fullName: "Sweetgreen Orders",
    category: "food",
    shortcodes: ["79334"],
    sms: "Sweetgreen: Order #123 is ready at the pickup station. Enjoy your greens!"
  },
  {
    id: "tacobell",
    name: "Taco Bell",
    fullName: "Taco Bell Rewards",
    category: "food",
    shortcodes: ["82262"],
    sms: "Taco Bell: Craving solved! 1234 is your mobile order pickup code."
  },
  {
    id: "target",
    name: "Target",
    fullName: "Target Alerts",
    category: "retail",
    shortcodes: ["827438"],
    sms: "Target: 20% off your next order! Use code SAVE20."
  },
  {
    id: "telegram",
    name: "Telegram",
    fullName: "Telegram Login",
    category: "tech",
    shortcodes: ["39454"],
    sms: "Telegram: login code 12345. Enter this code to verify your identity."
  },
  {
    id: "ticketmaster",
    name: "Ticketmaster",
    fullName: "Ticketmaster Alerts",
    category: "services",
    shortcodes: ["86278"],
    sms: "Ticketmaster: Your tickets for tomorrow's concert are ready."
  },
  {
    id: "tiktok",
    name: "TikTok",
    fullName: "TikTok Security",
    category: "tech",
    shortcodes: ["84586"],
    sms: "[TikTok] 123456 is your verification code. Expires in 5 minutes."
  },
  {
    id: "tmobile",
    name: "T-Mobile",
    fullName: "T-Mobile Alerts",
    category: "services",
    shortcodes: ["86645"],
    sms: "T-Mobile: Your temporary security pin is 987654."
  },
  {
    id: "turbotax",
    name: "TurboTax / Intuit",
    fullName: "Intuit Security",
    category: "finance",
    shortcodes: ["88728"],
    sms: "Intuit: Your TurboTax verification code is 123456."
  },
  {
    id: "twitch",
    name: "Twitch",
    fullName: "Twitch Alerts",
    category: "tech",
    shortcodes: ["84119"],
    sms: "Twitch: Your verification code is 987654."
  },
  {
    id: "uber",
    name: "Uber",
    fullName: "Uber updates",
    category: "food",
    shortcodes: ["82371", "92929"],
    sms: "Uber: Your verification code is 1234."
  },
  {
    id: "ulta",
    name: "Ulta Beauty",
    fullName: "Ulta Alerts",
    category: "retail",
    shortcodes: ["85822"],
    sms: "Ulta: Your order is on its way. Use code 1234 for tracking."
  },
  {
    id: "united",
    name: "United Airlines",
    fullName: "United Flight Updates",
    category: "services",
    shortcodes: ["86483"],
    sms: "United: Boarding group 3 for Flight UA450 is now boarding."
  },
  {
    id: "ups",
    name: "UPS",
    fullName: "UPS Tracking",
    category: "services",
    shortcodes: ["69877"],
    sms: "UPS: Package 1Z12345 will be delivered tomorrow."
  },
  {
    id: "usps",
    name: "USPS",
    fullName: "USPS Text Tracking",
    category: "services",
    shortcodes: ["28777", "69975"],
    sms: "USPS Text Tracking: Package delivered."
  },
  {
    id: "vanguard",
    name: "Vanguard",
    fullName: "Vanguard Alerts",
    category: "finance",
    shortcodes: ["82648"],
    sms: "Vanguard Security Code: 123456. Confirm registration."
  },
  {
    id: "venmo",
    name: "Venmo",
    fullName: "Venmo Verification",
    category: "finance",
    shortcodes: ["86753"],
    sms: "Venmo: 123456 is your code. Don't share it."
  },
  {
    id: "verizon",
    name: "Verizon",
    fullName: "Verizon Security",
    category: "services",
    shortcodes: ["87902"],
    sms: "Verizon: Your account security pin code is 123456."
  },
  {
    id: "visa",
    name: "Visa",
    fullName: "Visa Alerts",
    category: "finance",
    shortcodes: ["84722"],
    sms: "Verified by Visa: Your verification code is 123456."
  },
  {
    id: "vitaminshoppe",
    name: "The Vitamin Shoppe",
    fullName: "The Vitamin Shoppe",
    category: "services",
    shortcodes: ["848747"],
    sms: "The Vitamin Shoppe: For dads on the grind, 20% off energy."
  },
  {
    id: "vrbo",
    name: "Vrbo",
    fullName: "Vrbo Alerts",
    category: "services",
    shortcodes: ["87262"],
    sms: "Vrbo: Your check-in instructions for Cozy Cabin are ready."
  },
  {
    id: "walgreens",
    name: "Walgreens",
    fullName: "Walgreens Pharmacy",
    category: "services",
    shortcodes: ["92547"],
    sms: "Walgreens: Your prescription #12345 is ready."
  },
  {
    id: "walmart",
    name: "Walmart",
    fullName: "Walmart Alerts",
    category: "retail",
    shortcodes: ["85166", "60989"],
    sms: "Walmart Pharmacy: Your prescription is ready."
  },
  {
    id: "wayfair",
    name: "Wayfair",
    fullName: "Wayfair Orders",
    category: "retail",
    shortcodes: ["92937"],
    sms: "Wayfair: Your item has shipped! Track your package here."
  },
  {
    id: "wellsfargo",
    name: "Wells Fargo",
    fullName: "Wells Fargo Security",
    category: "finance",
    shortcodes: ["93557"],
    sms: "Wells Fargo: Your temporary access code is 123456. Expires in 10 mins."
  },
  {
    id: "wendys",
    name: "Wendy's",
    fullName: "Wendy's Rewards",
    category: "food",
    shortcodes: ["93639"],
    sms: "Wendy's: Your mobile order #1234 is ready for pickup at drive-thru."
  },
  {
    id: "wix",
    name: "Wix",
    fullName: "Wix Security",
    category: "tech",
    shortcodes: ["94999"],
    sms: "Wix: 123456 is your security verification code."
  },
  {
    id: "xfinity",
    name: "Xfinity",
    fullName: "Xfinity Alerts",
    category: "services",
    shortcodes: ["26627"],
    sms: "Xfinity Alert: Technician arriving today between 1:00 - 3:00 PM."
  },
  {
    id: "zara",
    name: "Zara",
    fullName: "Zara Customer Service",
    category: "retail",
    shortcodes: ["92722"],
    sms: "Zara: Order #98765 is out for delivery today. Enjoy your styles!"
  },
  {
    id: "zoom",
    name: "Zoom",
    fullName: "Zoom Video Communications",
    category: "tech",
    shortcodes: ["96667"],
    sms: "Your Zoom verification code is 123456. It is valid for 10 minutes."
  }

];

// App State
let selectedCategory = 'all';
let searchQuery = '';
let isMultiSelectMode = false;
let selectedBrandIds = new Set();
let displayLimit = 24;

// DOM Elements
const gridContainer = document.getElementById('directory-grid');
const searchBar = document.getElementById('search-bar');
const categoryFilters = document.getElementById('category-filters');
const multiSelectCheckbox = document.getElementById('chk-multi-select');
const floatingBatchBar = document.getElementById('floating-batch-bar');
const batchSelectedCount = document.getElementById('batch-selected-count');
const btnBatchDownload = document.getElementById('btn-batch-download');
const btnBatchClear = document.getElementById('btn-batch-clear');
const btnSubscribe = document.getElementById('btn-subscribe');

// Modals
const instructionsDialog = document.getElementById('instructions-dialog');
const btnShowGuide = document.getElementById('btn-show-guide');
const btnCloseDialog = document.getElementById('btn-close-dialog');

// Phone Mockup Elements
const phoneMockup = document.getElementById('phone-mockup');
const phoneChatList = document.getElementById('phone-chat-list');
const toggleBoring = document.getElementById('toggle-boring');
const toggleBranded = document.getElementById('toggle-branded');

// API Loader & Logo Renderers for CardDAV Source of Truth
async function loadLiveContacts() {
  try {
    const response = await fetch('https://sync.shortcodeicons.com/api/contacts');
    if (!response.ok) {
      throw new Error(`API returned HTTP ${response.status}`);
    }
    const data = await response.json();
    if (Array.isArray(data) && data.length > 0) {
      console.log(`Successfully fetched ${data.length} contacts from CardDAV API.`);
      
      // Override local DirectoryData with the live server entries
      DirectoryData.length = 0;
      DirectoryData.push(...data);
    }
  } catch (err) {
    console.warn("Failed to load contacts from CardDAV server API, falling back to local list:", err);
  }
}

function drawContactLogo(canvas, brand) {
  const ctx = canvas.getContext('2d');
  const size = canvas.width;
  
  if (brand.photoBase64) {
    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
    };
    img.onerror = () => {
      drawFallbackLogo(ctx, brand.name || brand.fullName, size);
    };
    img.src = 'data:image/jpeg;base64,' + brand.photoBase64;
  } else {
    // Resolve matching local brand key in BrandStyles
    const matchedKey = resolveLocalBrandKey(brand.id, brand.name || brand.fullName);
    if (matchedKey && BrandLogos[matchedKey]) {
      BrandLogos[matchedKey](ctx, size);
    } else {
      drawFallbackLogo(ctx, brand.name || brand.fullName, size);
    }
  }
}

function resolveLocalBrandKey(brandId, brandName) {
  const cleanId = (brandId || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const cleanName = (brandName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  
  if (BrandStyles[cleanId]) return cleanId;
  if (BrandStyles[cleanName]) return cleanName;
  
  const keys = Object.keys(BrandStyles);
  for (const key of keys) {
    if (cleanId.startsWith(key) || key.startsWith(cleanId) || cleanName.startsWith(key) || key.startsWith(cleanName)) {
      return key;
    }
  }
  return null;
}

function drawFallbackLogo(ctx, name, size) {
  ctx.fillStyle = '#F3F4F6';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = '#4B5563';
  ctx.font = `bold ${Math.round(size * 0.35)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const initials = (name || '??').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  ctx.fillText(initials, size / 2, size / 2);
}

// Initialize Website
document.addEventListener('DOMContentLoaded', async () => {
  // iOS detection to hide batch/combined vCard download features due to WebKit/Safari multi-vCard preview limits
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (isIOS) {
    const bulkToggle = document.querySelector('.bulk-actions-toggle');
    if (bulkToggle) bulkToggle.style.display = 'none';
  }

  setupEventListeners();
  updateSearchPlaceholder();
  window.addEventListener('resize', updateSearchPlaceholder);

  // Load contacts from CardDAV JSON API
  await loadLiveContacts();

  // Wait for both custom fonts and logo SVGs to load before initial render
  const fontPromise = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  
  Promise.all([LogosLoaded, fontPromise]).then(() => {
    renderGrid();
    renderPhoneMockup();
  });
});

function updateSearchPlaceholder() {
  if (searchBar) {
    if (window.innerWidth < 640) {
      searchBar.placeholder = "Search brand or shortcode...";
    } else {
      searchBar.placeholder = "Search by brand name or shortcode (e.g. Google, 22000)...";
    }
  }
}

// Event Listeners
function setupEventListeners() {
  // Search
  searchBar.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    displayLimit = 24; // Reset display limit on new search
    renderGrid();
  });

  // Category Filter
  categoryFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-chip')) {
      document.querySelector('.filter-chip.active').classList.remove('active');
      e.target.classList.add('active');
      selectedCategory = e.target.dataset.category;
      displayLimit = 24; // Reset display limit on category change
      renderGrid();
      if (typeof gtag === 'function') {
        gtag('event', 'filter_category', {
          'category': selectedCategory
        });
      }
    }
  });

  // Multi-Select Mode Toggle
  multiSelectCheckbox.addEventListener('change', (e) => {
    isMultiSelectMode = e.target.checked;
    if (isMultiSelectMode) {
      document.body.classList.add('select-mode');
    } else {
      document.body.classList.remove('select-mode');
      clearSelection();
    }
    if (typeof gtag === 'function') {
      gtag('event', 'toggle_multi_select', {
        'enabled': isMultiSelectMode
      });
    }
  });

  // Batch actions
  btnBatchClear.addEventListener('click', clearSelection);
  btnBatchDownload.addEventListener('click', downloadSelectedVcard);



  // Hero Subscribe Button
  if (btnSubscribe) {
    btnSubscribe.addEventListener('click', (e) => {
      e.preventDefault(); // Always prevent default download action on the hero button click
      const isApple = /iPad|iPhone|iPod|Mac/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      instructionsDialog.showModal();
      if (typeof gtag === 'function') {
        gtag('event', 'click_subscribe_hero', {
          'platform': isApple ? 'apple' : 'other'
        });
      }
    });
  }

  // Instruction Dialog Modal Events
  if (btnShowGuide) {
    btnShowGuide.addEventListener('click', () => {
      instructionsDialog.showModal();
      if (typeof gtag === 'function') {
        gtag('event', 'view_guide');
      }
    });
  }

  // Load More Button Event
  const btnLoadMore = document.getElementById('btn-load-more');
  if (btnLoadMore) {
    btnLoadMore.addEventListener('click', () => {
      displayLimit += 24;
      renderGrid();
    });
  }

  // Show All Button Event
  const btnShowAll = document.getElementById('btn-show-all');
  if (btnShowAll) {
    btnShowAll.addEventListener('click', () => {
      displayLimit = Infinity;
      renderGrid();
    });
  }

  btnCloseDialog.addEventListener('click', () => {
    instructionsDialog.close();
  });

  // Close dialog on clicking backdrop
  instructionsDialog.addEventListener('click', (e) => {
    const rect = instructionsDialog.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      instructionsDialog.close();
    }
  });

  // Phone Mockup Toggles
  toggleBoring.addEventListener('click', () => {
    toggleBoring.classList.add('active');
    toggleBranded.classList.remove('active');
    phoneMockup.classList.remove('branded-mode');
    if (typeof gtag === 'function') {
      gtag('event', 'toggle_mockup', {
        'state': 'before'
      });
    }
  });

  toggleBranded.addEventListener('click', () => {
    toggleBranded.classList.add('active');
    toggleBoring.classList.remove('active');
    phoneMockup.classList.add('branded-mode');
    if (typeof gtag === 'function') {
      gtag('event', 'toggle_mockup', {
        'state': 'after'
      });
    }
  });

  // Privacy Modal
  const privacyDialog = document.getElementById('privacy-dialog');
  const btnShowPrivacy = document.getElementById('btn-show-privacy');
  const btnClosePrivacy = document.getElementById('btn-close-privacy');

  btnShowPrivacy.addEventListener('click', () => {
    privacyDialog.showModal();
    if (typeof gtag === 'function') {
      gtag('event', 'view_privacy_policy');
    }
  });
  btnClosePrivacy.addEventListener('click', () => privacyDialog.close());
  privacyDialog.addEventListener('click', (e) => {
    const rect = privacyDialog.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
      privacyDialog.close();
    }
  });

  // Submit Modal
  const submitDialog = document.getElementById('submit-dialog');
  const btnSubmitCode = document.getElementById('btn-submit-code');
  const btnCloseSubmit = document.getElementById('btn-close-submit');
  const submitForm = document.getElementById('submit-shortcode-form');

  btnSubmitCode.addEventListener('click', () => {
    submitDialog.showModal();
    if (typeof gtag === 'function') {
      gtag('event', 'open_submit_form');
    }
  });
  btnCloseSubmit.addEventListener('click', () => submitDialog.close());
  submitDialog.addEventListener('click', (e) => {
    const rect = submitDialog.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
      submitDialog.close();
    }
  });

  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Gather form data and convert to JSON for Web3Forms API
    const formData = new FormData(submitForm);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Disable submit button and show loading state
    const submitBtn = submitForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
    .then(async (response) => {
      const res = await response.json();
      if (response.status === 200) {
        showToast("Thank you! Your suggestion was sent successfully. We'll add the logo in our next release.", "success");
        if (typeof gtag === 'function') {
          gtag('event', 'submit_shortcode_success', {
            'brand_name': object.brand || '',
            'shortcode': object.code || ''
          });
        }
      } else {
        showToast("Oops! Submission failed: " + (res.message || "Please try again later."), "error");
      }
    })
    .catch(error => {
      console.error("Web3Forms Submission Error:", error);
      showToast("Network error. Please check your internet connection and try again.", "error");
    })
    .finally(() => {
      // Re-enable button, clear inputs, and close dialog
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
      submitForm.reset();
      submitDialog.close();
    });
  });

  // Share Modal
  const shareDialog = document.getElementById('share-dialog');
  const btnHeaderShare = document.getElementById('btn-header-share');
  const btnCloseShare = document.getElementById('btn-close-share');
  const btnModalCopyLink = document.getElementById('btn-modal-copy-link');
  const copyBtnText = document.getElementById('copy-btn-text');

  const btnModalSystemShare = document.getElementById('btn-modal-system-share');

  if (btnHeaderShare) {
    btnHeaderShare.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'share_dialog_open');
      }
      shareDialog.showModal();
    });
  }

  // Handle system share inside the modal
  const shareData = {
    title: 'SMS Short Codes',
    text: 'Clean up your text messages inbox! Banish cryptic numbers and gray bubbles with custom brand logos.',
    url: 'https://shortcodeicons.com'
  };

  if (navigator.share && btnModalSystemShare) {
    btnModalSystemShare.style.display = 'flex';
    btnModalSystemShare.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'share', { 'method': 'native' });
      }
      navigator.share(shareData).catch(err => {
        console.log("Device share cancelled or failed:", err);
      });
    });
  } else if (btnModalSystemShare) {
    btnModalSystemShare.style.display = 'none';
  }

  // Hide Facebook share button on mobile devices since the Facebook app intercepts sharer.php and fails to open the composer, and we already have navigator.share
  const btnFacebookShare = shareDialog ? shareDialog.querySelector('.btn-share-social.facebook') : null;
  if (btnFacebookShare) {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      btnFacebookShare.style.display = 'none';
    }
  }

  btnCloseShare.addEventListener('click', () => shareDialog.close());
  shareDialog.addEventListener('click', (e) => {
    const rect = shareDialog.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
      shareDialog.close();
    }
  });

  btnModalCopyLink.addEventListener('click', () => {
    navigator.clipboard.writeText("https://shortcodeicons.com").then(() => {
      const originalText = copyBtnText.textContent;
      copyBtnText.textContent = "Copied!";
      if (typeof gtag === 'function') {
        gtag('event', 'share_copy_link');
      }
      setTimeout(() => {
        copyBtnText.textContent = originalText;
      }, 2000);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });

  // Sticky header scroll class toggle with hysteresis to prevent layout feedback jitter
  const headerEl = document.querySelector('header');
  if (headerEl) {
    const updateHeaderHeight = () => {
      const wasScrolled = headerEl.classList.contains('scrolled');
      if (wasScrolled) headerEl.classList.remove('scrolled');
      
      const height = headerEl.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${height}px`);
      
      if (wasScrolled) headerEl.classList.add('scrolled');
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight, { passive: true });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = headerEl.classList.contains('scrolled');
      
      if (!isScrolled && scrollY > 60) {
        headerEl.classList.add('scrolled');
      } else if (isScrolled && scrollY < 20) {
        headerEl.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run on load
  }

  // Outbound Buy Me a Coffee link tracking
  document.querySelectorAll('a[href*="buymeacoffee.com"]').forEach(link => {
    link.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'click_support', {
          'location': link.classList.contains('btn-coffee-header') ? 'header' : 'footer'
        });
      }
    });
  });
}

// Render Directory Grid
function renderGrid() {
  gridContainer.innerHTML = '';
  const template = document.getElementById('card-template');

  const filteredData = DirectoryData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery) ||
                          item.fullName.toLowerCase().includes(searchQuery) ||
                          item.shortcodes.some(sc => sc.includes(searchQuery)) ||
                          item.sms.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  // Toggle load-more button container visibility
  const loadMoreContainer = document.getElementById('load-more-container');
  if (loadMoreContainer) {
    if (filteredData.length > displayLimit) {
      loadMoreContainer.style.display = 'flex';
    } else {
      loadMoreContainer.style.display = 'none';
    }
  }

  const itemsToRender = filteredData.slice(0, displayLimit);
  itemsToRender.forEach(item => {
    const clone = template.content.cloneNode(true);
    const cardEl = clone.querySelector('.card');
    
    cardEl.dataset.id = item.id;
    if (selectedBrandIds.has(item.id)) {
      cardEl.classList.add('selected');
      clone.querySelector('.card-checkbox').checked = true;
    }

    // Canvas drawing
    const canvas = clone.querySelector('.logo-canvas');
    drawContactLogo(canvas, item);

    // Meta details
    clone.querySelector('.card-brand-name').textContent = item.name;
    clone.querySelector('.card-badge.cat').textContent = getCategoryLabel(item.category);
    clone.querySelector('.card-badge.shortcodes').textContent = item.shortcodes.join(', ');
    
    // SMS Preview
    clone.querySelector('.sms-sender').textContent = item.shortcodes[0];
    clone.querySelector('.sms-text').textContent = item.sms;

    // Card interactions
    cardEl.addEventListener('click', (e) => {
      // Ignore click if button was clicked
      if (e.target.closest('.btn-card-action')) return;
      
      if (isMultiSelectMode) {
        toggleSelection(item.id, cardEl);
      }
    });

    // Checkbox interaction
    const checkbox = clone.querySelector('.card-checkbox');
    checkbox.addEventListener('change', (e) => {
      toggleSelection(item.id, cardEl, e.target.checked);
    });

    // Download buttons
    clone.querySelector('.btn-download-vcf').addEventListener('click', (e) => {
      e.stopPropagation();
      downloadSingleVcard(item);
    });

    gridContainer.appendChild(clone);
  });
}

// Render Phone Mockup Chat Items (One-time render)
function renderPhoneMockup() {
  phoneChatList.innerHTML = '';
  
  // Random name generator helper
  const firstNames = ["Liam", "Noah", "Oliver", "James", "Elijah", "William", "Henry", "Lucas", "Benjamin", "Emma", "Olivia", "Ava", "Sophia", "Isabella", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor"];
  
  const getRandomContact = () => {
    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    return {
      name: `${first} ${last}`,
      initials: `${first[0]}${last[0]}`
    };
  };

  const contact1 = getRandomContact();
  const contact2 = getRandomContact();
  
  // Custom mock chat items matching the screenshot context + brand options
  const mockChats = [
    { type: 'brand', id: 'budget', shortcode: '90607', text: 'BUDGET: Summer savings are here. Get up to 35% off your rental when yo...', time: 'Yesterday' },
    { type: 'contact', name: contact1.name, initials: contact1.initials, bg: '#D97706', text: "basically another fitness app but it's great because every app I have ever u...", time: 'Yesterday' },
    { type: 'contact', name: contact2.name, initials: contact2.initials, bg: '#059669', text: "You laughed at \"Got it. You gotta add voiceover on those videos. I almost tri...", time: 'Yesterday' },
    { type: 'brand', id: 'google', shortcode: '22000', text: 'G-765359 is your Google verification code. Don\'t share your code with any...', time: 'Wednesday' },
    { type: 'brand', id: 'slateauto', shortcode: '68406', text: 'Slate Auto: One week until we announce the price and open preorde...', time: 'Wednesday' },
    { type: 'brand', id: 'homedepot', shortcode: '433768', text: 'HOME DEPOT: They\'re Here > 4th of July Appliance Deals + Free Delivery...', time: 'Wednesday' },
    { type: 'brand', id: 'kohls', shortcode: '56457', text: 'KOHL\'S: Get 20% off with coupon + earn Kohl\'s Cash! Time\'s running out t...', time: 'Wednesday' }
  ];

  mockChats.forEach(chat => {
    const itemEl = document.createElement('div');
    itemEl.className = 'phone-chat-item';

    const avatarEl = document.createElement('div');
    avatarEl.className = 'phone-chat-avatar';

    const infoEl = document.createElement('div');
    infoEl.className = 'phone-chat-info';

    const nameEl = document.createElement('div');
    nameEl.className = 'phone-chat-name';

    const msgEl = document.createElement('div');
    msgEl.className = 'phone-chat-msg';
    msgEl.textContent = chat.text;

    const timeEl = document.createElement('div');
    timeEl.className = 'phone-chat-time';
    timeEl.textContent = chat.time;

    if (chat.type === 'contact') {
      avatarEl.innerHTML = `<div class="avatar-contact" style="background-color: ${chat.bg}; color: white;">${chat.initials}</div>`;
      nameEl.innerHTML = `<div class="name-contact">${chat.name}</div>`;
    } else {
      const brandObj = DirectoryData.find(d => d.id === chat.id);
      const brandedName = brandObj ? brandObj.fullName : chat.shortcode;
      
      avatarEl.innerHTML = `
        <div class="avatar-boring">
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
        </div>
        <div class="avatar-branded">
          <canvas width="64" height="64"></canvas>
        </div>
      `;
      
      nameEl.innerHTML = `
        <div class="name-boring">${chat.shortcode}</div>
        <div class="name-branded">${brandedName}</div>
      `;

      // Draw the logo on the mockup canvas immediately
      const canvas = avatarEl.querySelector('canvas');
      if (canvas) {
        drawContactLogo(canvas, brandObj || { id: chat.id, name: chat.shortcode, fullName: chat.shortcode });
      }
    }

    infoEl.appendChild(nameEl);
    infoEl.appendChild(msgEl);
    
    itemEl.appendChild(avatarEl);
    itemEl.appendChild(infoEl);
    itemEl.appendChild(timeEl);

    phoneChatList.appendChild(itemEl);
  });
}

// Multi-selection management
function toggleSelection(brandId, cardEl, forceState = null) {
  const checkbox = cardEl.querySelector('.card-checkbox');
  const isSelected = forceState !== null ? forceState : !selectedBrandIds.has(brandId);

  if (isSelected) {
    selectedBrandIds.add(brandId);
    cardEl.classList.add('selected');
    checkbox.checked = true;
  } else {
    selectedBrandIds.delete(brandId);
    cardEl.classList.remove('selected');
    checkbox.checked = false;
  }

  updateFloatingBar();
}

function clearSelection() {
  selectedBrandIds.clear();
  document.querySelectorAll('.card.selected').forEach(card => {
    card.classList.remove('selected');
    card.querySelector('.card-checkbox').checked = false;
  });
  updateFloatingBar();
}

function updateFloatingBar() {
  const count = selectedBrandIds.size;
  batchSelectedCount.textContent = count;
  
  const trayContainer = document.getElementById('batch-selected-logos');
  if (trayContainer) {
    trayContainer.innerHTML = '';
    selectedBrandIds.forEach(brandId => {
      const item = DirectoryData.find(d => d.id === brandId);
      if (item) {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        canvas.className = 'tiny-batch-logo';
        canvas.title = item.name;
        drawContactLogo(canvas, item);
        trayContainer.appendChild(canvas);
      }
    });
  }
  
  if (count > 0 && isMultiSelectMode) {
    floatingBatchBar.classList.add('visible');
  } else {
    floatingBatchBar.classList.remove('visible');
  }
}

// vCard Generation Engine

// Helper to draw the logo to an offscreen canvas and return raw base64 JPEG data
function getBase64JpegLogo(brand) {
  if (brand.photoBase64) {
    return brand.photoBase64;
  }
  const canvas = document.createElement('canvas');
  canvas.width = 192;
  canvas.height = 192;
  drawContactLogo(canvas, brand);
  const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
  return dataUrl.split(',')[1];
}

// Helper to return the base64 photo line (single continuous line for iOS compatibility)
function buildVcardPhotoLine(base64) {
  return 'PHOTO;ENCODING=b;TYPE=JPEG:' + base64;
}

// Compile a single brand into its vCard block
function buildContactVcardString(brand) {
  try {
    const base64Photo = getBase64JpegLogo(brand);
    const photoLine = buildVcardPhotoLine(base64Photo);

    let vcf = `BEGIN:VCARD\r\n`;
    vcf += `VERSION:3.0\r\n`;
    vcf += `UID:${brand.id}\r\n`;
    vcf += `FN:${brand.fullName}\r\n`;
    vcf += `N:;${brand.fullName};;;\r\n`;
    vcf += `ORG:${brand.name}\r\n`;
    vcf += `X-ABShowAs:COMPANY\r\n`;
    
    // Add all shortcodes as cellular numbers
    brand.shortcodes.forEach(sc => {
      vcf += `TEL;TYPE=CELL:${sc}\r\n`;
    });

    vcf += `${photoLine}\r\n`;
    vcf += `END:VCARD\r\n`;
    return vcf;
  } catch (err) {
    console.error(`Error compiling logo/vCard for brand ${brand.id}:`, err);
    // Resilient fallback: compile contact without photo to prevent breaking the batch loop
    let vcf = `BEGIN:VCARD\r\n`;
    vcf += `VERSION:3.0\r\n`;
    vcf += `UID:${brand.id}\r\n`;
    vcf += `FN:${brand.fullName}\r\n`;
    vcf += `N:;${brand.fullName};;;\r\n`;
    vcf += `ORG:${brand.name}\r\n`;
    vcf += `X-ABShowAs:COMPANY\r\n`;
    
    brand.shortcodes.forEach(sc => {
      vcf += `TEL;TYPE=CELL:${sc}\r\n`;
    });
    
    vcf += `END:VCARD\r\n`;
    return vcf;
  }
}

// Compile and download a vCard for a single brand
function downloadSingleVcard(brand) {
  const vcfString = buildContactVcardString(brand);
  const filename = `${brand.id}-shortcode.vcf`;
  downloadFile(vcfString, filename, 'text/vcard;charset=utf-8');
  if (typeof gtag === 'function') {
    gtag('event', 'download_single_vcard', {
      'brand_id': brand.id,
      'brand_name': brand.name,
      'shortcode': brand.shortcodes ? brand.shortcodes.join(',') : ''
    });
  }
}

// Compile and download a combined vCard for selected brands
function downloadSelectedVcard() {
  const selectedBrands = DirectoryData.filter(item => selectedBrandIds.has(item.id));
  if (selectedBrands.length === 0) return;
  
  downloadCombinedVcard(selectedBrands, "shortcode-icons-selected.vcf");
  clearSelection();
  multiSelectCheckbox.checked = false;
  isMultiSelectMode = false;
  document.body.classList.remove('select-mode');
}

// Universal combined vCard download
function downloadCombinedVcard(brands, filename) {
  try {
    let combinedVcf = '';
    brands.forEach(brand => {
      combinedVcf += buildContactVcardString(brand);
    });
    downloadFile(combinedVcf, filename, 'text/vcard;charset=utf-8');
    if (typeof gtag === 'function') {
      const isAll = filename.includes('all');
      gtag('event', isAll ? 'download_all_vcards' : 'download_selected_vcards', {
        'count': brands.length
      });
    }
  } catch (err) {
    console.error("Error compiling combined vCard:", err);
    showToast("Could not compile contacts: " + err.message, "error");
  }
}

// Trigger file download in browser
function downloadFile(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Draw and download high-res logo as PNG
function downloadLogoPng(brand) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  drawContactLogo(canvas, brand);

  const url = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = url;
  a.download = `${brand.id}-logo.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  if (typeof gtag === 'function') {
    gtag('event', 'download_logo_png', {
      'brand_id': brand.id,
      'brand_name': brand.name
    });
  }
}

// UI Category Mappings
function getCategoryLabel(category) {
  switch (category) {
    case 'tech': return 'Tech & Sec';
    case 'finance': return 'Finance';
    case 'retail': return 'Retail';
    case 'services': return 'Utility';
    case 'food': return 'Food & Deliv';
    default: return 'Other';
  }
}

// Premium custom toast helper
function showToast(message, type = 'success') {
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = '';
  if (type === 'success') {
    icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
  } else {
    icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
  }

  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
  `;

  document.body.appendChild(toast);

  // Trigger browser transition animations
  setTimeout(() => {
    toast.classList.add('visible');
  }, 10);

  // Remove toast automatically after 4 seconds
  setTimeout(() => {
    toast.classList.remove('visible');
    toast.addEventListener('transitionend', () => {
      toast.remove();
    });
  }, 4000);
}

// Expose variables globally for Puppeteer automation
window.LogosLoaded = LogosLoaded;
window.DirectoryData = DirectoryData;
window.buildContactVcardString = buildContactVcardString;
