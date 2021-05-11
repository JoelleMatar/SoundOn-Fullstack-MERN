const products = [
    {
        name: "Squier Bullet Mustang",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/mLyk54LhkcuvqaLMVULcj7-970-80.jpg.webp",
        description: "The Squier Bullet Mustang features a slightly smaller scale length which, combined with the basswood body, make it easy to get to grips with. But, importantly, its double humbuckers ensure it can keep up with most grown-up guitars.",
        price: 179,
        countInStock: 10,
        category: "guitarInstrument"
    },
    {
        name: "Gibson ES-335 Satin",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/iAgeL2EMXCUNeUWUjnUVMJ-970-80.jpg.webp",
        description: "The Gibson ES-335 is a heavyweight in this field. It marries up a range of exceptional tones, with the highest levels of build quality and silky-smooth playability.",
        price: 2599,
        countInStock: 1,
        category: "guitarInstrument"
    },
    {
        name: "Epiphone Les Paul Standard",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/fheYqTF35XYdaGyD8WtBkP-970-80.jpg.webp",
        description: "The Epiphone Les Paul Standard has been the go-to guitar for thousands of players over the years, and for good reason. Put simply, this guitar ticks a lot of boxes. It's exceptionally well-made, it sounds great and, importantly, it won't break the bank.",
        price: 599,
        countInStock: 10,
        category: "guitarInstrument"
    },
    {
        name: "PRS SE Hollowbody Standard",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/nd5MBtrp7QrR6oHAsWFo5S-970-80.jpg.webp",
        description: "Built in China by Cor-Tek, the SE Hollowbody Standard is typically immaculate, and it’s a real credit to the SE line that it manages to present that sense of PRS luxury for the price.",
        price: 999,
        countInStock: 2,
        category: "guitarInstrument"
    },
    {
        name: "Yamaha Piaggero NP-12 portable",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/DYC9Jh98zMqFpAMTbqyubA-970-80.jpg.webp",
        description: "A scaled-down, portable piano-style digital keyboard, the NP-12’s lifelike AWM Stereo Sampled piano sound and compact footprint make it a perfect choice for kids to learn on, or for more mature pianists who have downsized and no longer have room for a full-size piano.",
        price: 199.9,
        countInStock: 4,
        category: "pianoInstrument"
    },
    {
        name: "Casio Privia PX-770",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/cyiySb4tiAQJJXyT4t3aSe-970-80.jpg.webp",
        description: "The PX-770 features hammer and damper resonance and has three foot pedals like an acoustic piano: damper, soft and sustain. It also features half-damper pedalling and comes with a built-in library of ten classical pieces, giving you the opportunity to play along with recordings of a live symphony orchestra!",
        price: 749,
        countInStock: 5,
        category: "pianoInstrument"
    },
    {
        name: "Yamaha CP88 stage piano",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/6vDuHWPE6BUYdge8DnRjmY-970-80.jpg.webp",
        description: "Offering high-quality acoustic piano, electric piano, organ and other (including synth/string) sounds, the CP88 (also available in a 73-note configuration) is a well-equipped stage piano that benefits from a clean, retro-inspired interface that offers one-to-one access to all of the instrument’s main features.",
        price: 2499,
        countInStock: 1,
        category: "pianoInstrument"
    },
    {
        name: "Yamaha U1 acoustic upright piano",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/GaBbSRZgDfpuAErPMEwXCB-970-80.jpg.webp",
        description: "The U1 is built like a tank and available in a number of finishes. It comes with a 10-year warranty, three pedals (soft, mute and damper), and is great for learning or serious performance. ",
        price: 11399,
        countInStock: 0,
        category: "pianoInstrument"
    },
    {
        name: "Cavendish Contemporary acoustic",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/9qkmtJi2juK7A3yGCBpx9Y-970-80.jpg.webp",
        description: "Buying one of these beautiful pianos helps keep UK piano manufacturing alive; Cavendish is the UK’s only acoustic piano manufacturer. The pianos are hand-built to a very high standard, are priced very fairly, and come in several different styles (including various uprights and grands).",
        price: 6995,
        countInStock: 1,
        category: "pianoInstrument"
    },
    {
        name: "Pearl Roadshow 5-Piece",
        imageUrl: "https://consordini.com/wp-content/uploads/2019/10/pearl-roadshow-complete-5-piece-drum-set-rs525sc.jpg",
        description: "The Roadshow comes complete with hardware so you only need to make one purchase. The snare stand is adjustable so it can accommodate different size drums. There is a Pearl bass drum pedal, which is chain driven for extra durability.",
        price: 500,
        countInStock: 3,
        category: "drumInstrument"
    },
    {
        name: "PDP Player 5-Piece",
        imageUrl: "https://consordini.com/wp-content/uploads/2019/09/pdp-player-5-piece-junior-drum-set-pdjr18ktcb.jpg",
        description: "The PDP Player 5-Piece has been designed to be playable for children of ages 3 upwards. The upper age really depends on the individual child, but around 7 or 8 years old is a good estimate.",
        price: 350,
        countInStock: 5,
        category: "drumInstrument"
    },
    {
        name: "Ludwig Element Evolution 6-Piece",
        imageUrl: "https://consordini.com/wp-content/uploads/2020/02/ludwig-element-evolution-6-piece-drum-set-green.jpg",
        description: "The Ludwig Drum Company has been manufacturing drums now for over a century. Their name has long been associated with quality and the Element Evolution stays true to that reputation. This 6-piece acoustic drum set comes complete with hardware, cymbals and even a drum throne. ",
        price: 1000,
        countInStock: 2,
        category: "drumInstrument"
    },
    {
        name: "DW Design Series 5-Piece",
        imageUrl: "https://consordini.com/wp-content/uploads/2019/10/dw-design-series-5-piece-shell-pack-clear-acrylic.jpg",
        description: "Acrylic drum sets are a lot of fun to play. They are loud both in volume and in looks. This type of drum set is popular among rock drummers, as the extra volume means they can easily keep up with loud guitarists and huge stacks of amplifiers.",
        price: 1600,
        countInStock: 2,
        category: "drumInstrument"
    },
    {
        name: "Clip-On Guitar Tuner",
        imageUrl: "https://yourguitarbrain.com/wp-content/uploads/2017/01/snark-clip-on-tuner.jpg",
        description: "With it’s high sensitive vibration sensor that picks up your guitar notes with ease & impressive ability to tune guitar, bass, and violin you’ve no excuse to sound like a cat caught in a hurricane when you play now.",
        price: 50,
        countInStock: 15,
        category: "guitarAccessory"
    },
    {
        name: "VOX AP2AC amPlug AC30",
        imageUrl: "https://yourguitarbrain.com/wp-content/uploads/2017/01/Vox-AP2-AC30-Headphone-Amplifiers_500px.jpg",
        description: "The perfect practicing aid, the Vox amPlug simply plugs into your guitar or bass, you stick your headphones in and you’re good to go.",
        price: 50,
        countInStock: 10,
        category: "guitarAccessory"
    },
    {
        name: "Marshall Major II Headphones",
        imageUrl: "https://yourguitarbrain.com/wp-content/uploads/2017/01/Marshall-major-headphones-290x300.jpg",
        description: "Top notch headphones. The perfect guitar players cans. No more excuses to slack of practising your electric- make as much noise as you like through your amp now. These super cool looking Marshall Majors have customised drivers that give deeper bass, sweet mid-range and detailed crisp highs.",
        price: 100,
        countInStock: 10,
        category: "guitarAccessory"
    },
    {
        name: "Guitar Footstool",
        imageUrl: "https://yourguitarbrain.com/wp-content/uploads/2017/01/Guitar-foot-stool_600px.jpg",
        description: "With 4 adjustable settings for height and grippy rubber feet, this stand is perfect for adult and kid guitarists alike.",
        price: 70,
        countInStock: 9,
        category: "guitarAccessory"
    },
    {
        name: "Roland Micro Cube GX",
        imageUrl: "https://yourguitarbrain.com/wp-content/uploads/2017/01/roland-cube-amp-small.jpg",
        description: "This compact amp gives you an impressive 8 COSM amp tones including Extreme, Classic Stack distortion and Acoustic. You have 8 fx such as delay, flanger, and reverb to have hours of fun with, and even a memory function so you can save your own settings! Winner.",
        price: 200,
        countInStock: 3,
        category: "guitarAccessory"
    },
    {
        name: "Metronome",
        imageUrl: "https://azure.wgp-cdn.co.uk/app-pianist/posts/TigerClassicMechanicalMetronome.jpg",
        description: "By far the most essential piece of equipment (besides the piano, of course) for any pianist, a metronome will help advance your playing better than any other piano accessory.",
        price: 130,
        countInStock: 5,
        category: "pianoAccessory"
    },
    {
        name: "Music stand light",
        imageUrl: "https://azure.wgp-cdn.co.uk/app-pianist/posts/Cliplightforpiano.jpg",
        description: "This battery-operated clip-on light lets you choose your level of brightness and height, and - thankfully - is extremely energy efficient. ",
        price: 60,
        countInStock: 5,
        category: "pianoAccessory"
    },
    {
        name: "Castors",
        imageUrl: "https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00TY1HA18&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=pianist02-21&language=en_GB",
        description: "Castor wheels are designed to fit onto the bottom of your piano for easy transportation. These heavy duty wheels importantly have a 360 swivel and a brake.",
        price: 60,
        countInStock: 6,
        category: "pianoAccessory"
    },
    {
        name: "Rhymblock And Rhymbell",
        imageUrl: "https://3kie2h2bv1982onocv7b5lbz-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/RhymBlock.jpg",
        description: "Native Tongue Percussion makes incredible clip-on percussion for kit players and percussionists. Brent from the company reached out to me and sent over two of their offerings: the Rhymbell and Rhymblock.",
        price: 80,
        countInStock: 4,
        category: "drumAccessory"
    },
    {
        name: "Snareweight",
        imageUrl: "https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07FR2GB3Q&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=drummingreview1-20&language=en_US",
        description: "The difference between dampening with Moongel and Snareweight is massive: Snareweight adds additional mass to the drum head, allowing for taming of the lower-midrange frequencies that other dampeners cannot achieve.",
        price: 120,
        countInStock: 7,
        category: "drumAccessory"
    },
    {
        name: "Bass Plate",
        imageUrl: "https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B013UP7D60&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=drummingreview1-20&language=en_US",
        description: "Bass Plate is a metal adapter of sorts, that attaches to the kick drum via the lug screws. Once installed, you connect your kick drum to the Bass Plate allowing your kick to float free from the pedal.",
        price: 40,
        countInStock: 5,
        category: "drumAccessory"
    }
];

module.exports = products;