const cardContainer = document.querySelector('.images-container')

const apiKey = 'DEMO_KEY';
const count = 10;
const apiUrl =`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

// let resultArr = [];

async function getNasaAPOD()
{
    try{
        const response = await fetch(apiUrl);
        resultArr = await response.json();
        console.log(resultArr)
    }
    catch(err)
    {
        console.log(err);
    }
}

function loadPhotos()
{
    

    resultArr.forEach((item)=>{
        
        const card = document.createElement('div')
        card.classList.add('card');

        // link and Img

        const link = document.createElement('a');
        link.href = item.url;
        link.title = 'View Full Image';
        link.target ='_blank';

        const Img = document.createElement('img');
        Img.src = item.url;
        Img.alt = 'NASA Images';
        Img.loading = 'lazy';
        Img.classList.add('card-img-top');

        link.appendChild(Img)

        // card body

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

            // title
            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.textContent = item.title;

            // Fav button/text
            const fav = document.createElement('p');
            fav.classList.add('clickable');
            fav.textContent = 'Add to Favourites ';

            const favIcon = document.createElement('i');
            favIcon.classList.add('fa-regular', 'fa-heart');

            fav.appendChild(favIcon);

            // card text
            const text = document.createElement('p');
            text.classList.add('card-text');
            text.textContent = item.explanation;

            // footer
            const footer = document.createElement('small');
            footer.classList.add('text-muted');

            const date = document.createElement('strong');
            date.textContent = `${item.date} | `;

            const copyrightIcon = document.createElement('i');
            copyrightIcon.classList.add('fa-regular', 'fa-copyright');

            const copyright = document.createElement('span');
            copyright.textContent = item.copyright ? `  ${item.copyright}` : ` unknown`;
            copyright.style.fontFamily = 'Verdana'
            copyrightIcon.appendChild(copyright)

            footer.append(date,copyrightIcon);
        cardBody.append(title,fav,text,footer);

        card.append(link,cardBody)

        cardContainer.appendChild(card);

    })
}




const resultArr = [
    {
        "date": "2021-11-09",
        "explanation": "Why would you want to fake a universe? For one reason -- to better understand our real universe. Many astronomical projects seeking to learn properties of our universe now start with a robotic telescope taking sequential images of the night sky. Next, sophisticated computer algorithms crunch these digital images to find stars and galaxies and measure their properties.  To calibrate these algorithms, it is useful to test them on fake images from a fake universe to see if the algorithms can correctly deduce purposely imprinted properties. The featured mosaic of fake images was created to specifically mimic the images that have appeared on NASA's Astronomy Picture of the Day (APOD).  Only one image of the 225 images is real -- can you find it? The accomplished deceptors have made available individual fake APOD images that can be displayed by accessing their ThisIsNotAnAPOD webpage or Twitter feed. More useful for calibrating and understanding our distant universe, however, are fake galaxies -- a sampling of which can be seen at their ThisIsNotAGalaxy webpage.    Astrophysicists: Browse 2,600+ codes in the Astrophysics Source Code Library",
        "hdurl": "https://apod.nasa.gov/apod/image/2111/AIapods01_Geach_3840.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "All of These Space Images are Fake Except One",
        "url": "https://apod.nasa.gov/apod/image/2111/AIapods01_Geach_960.jpg"
    },
    {
        "date": "1997-03-19",
        "explanation": "What and where are the Gamma-Ray Bursters? Since their discovery in the early 1970s, nobody has been able to explain the cause of mysterious flashes of gamma rays that come from seemingly random directions on the sky. Worse yet, it is even unclear whether these high energy explosions originate in our own Galaxy or in distant galaxies across the Universe. Until late last month, these bursters were known only by their gamma-ray flashes - no counterpart had been seen at any other wavelength. But on February 28, an Italian/Dutch satellite known as BeppoSAX detected what may well be X-rays from a burster, eight hours after the gamma-ray flash. The discovery image is shown above. Still hours later, using the position provided by this X-ray image, ground-based telescopes recovered an even better located variable optical source which also seems to be related to the burster. Dramatically, this optical transient has faded now. In its place lies a steady source that appears to be a dim, distant galaxy. Did this Gamma-Ray Burst originate in the distant galaxy? If so, it answers one facet of one of modern astronomy's greatest controversies. If not, this would not be the first fortuitous coincidence to mislead astronomers. Future satellite and ground-based observations will tell.",
        "hdurl": "https://apod.nasa.gov/apod/image/9703/grb970228_sax_big.gif",
        "media_type": "image",
        "service_version": "v1",
        "title": "Gamma Ray Burster\r\nCredit:",
        "url": "https://apod.nasa.gov/apod/image/9703/grb970228_sax.gif"
    },
    {
        "date": "2018-04-24",
        "explanation": "Sure, you've seen Saturn's rings -- but have you ever heard them? Well then please take this opportunity to play Saturn's rings like a harp.  In the featured sonification, increasing brighter regions of Saturn's central B-ring play as increasingly higher pitched notes. With a computer browser, click anywhere on the image to begin, and pluck consecutive strings by sliding the spacecraft icon's magnetometer boom across the strings.  Both manual and automatic modes are possible.  The featured natural-color image was taken by the late Cassini spacecraft in 2017 July as it grazed Saturn's rings and took the highest-resolution ring images ever.  The reason why the mostly water-ice rings have a tan hue -- instead of white -- is currently a topic of research.  Played in minor harmony, a different false-color version of the same image appears where regions with a greater abundance of water ice appears more red.",
        "media_type": "video",
        "service_version": "v1",
        "title": "Play Saturn's Rings Like a Harp",
        "url": "https://apod.nasa.gov/apod/image/1804/saturn-harp/index.html"
    },
    {
        "copyright": "Daniel LópezIAC",
        "date": "2018-01-08",
        "explanation": "What are those red clouds surrounding the Andromeda galaxy? This galaxy, M31, is often imaged by planet Earth-based astronomers. As the nearest large spiral galaxy, it is a familiar sight with dark dust lanes, bright yellowish core, and spiral arms traced by clouds of bright blue stars.  A mosaic of well-exposed broad and narrow-band image data, this colorful portrait of our neighboring island universe offers strikingly unfamiliar features though, faint reddish clouds of glowing ionized hydrogen gas in the same wide field of view. These ionized hydrogen clouds surely lie in the foreground of the scene, well within our Milky Way Galaxy. They are likely associated with the pervasive, dusty interstellar cirrus clouds scattered hundreds of light-years above our own galactic plane.   Free APOD Lecture Tomorrow: January 9 at the National Harbor near Washington, DC",
        "hdurl": "https://apod.nasa.gov/apod/image/1801/M31Clouds_DLopez_1500.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Clouds of Andromeda",
        "url": "https://apod.nasa.gov/apod/image/1801/M31Clouds_DLopez_960.jpg"
    },
    {
        "date": "2010-05-18",
        "explanation": "The largest, most violent star forming region known in the whole Local Group of galaxies lies in our neighboring galaxy the Large Magellanic Cloud (LMC).  Were the Tarantula Nebula at the distance of the Orion Nebula -- a local star forming region -- it would take up fully half the sky.  Also called 30 Doradus, the red and pink gas indicates a massive emission nebula, although supernova remnants and dark nebula also exist there.  The bright knot of stars left of center is called R136 and contains many of the most massive, hottest, and brightest stars known.  The above image taken with the European Southern Observatory's (ESO's) Wide Field Imager is one of the most detailed ever of this vast star forming region. A recent Hubble image of part of the nebula has uncovered a very massive star escaping from the region.",
        "hdurl": "https://apod.nasa.gov/apod/image/1005/30doradus_eso_big.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Tentacles of the Tarantula Nebula",
        "url": "https://apod.nasa.gov/apod/image/1005/30doradus_eso.jpg"
    },
    {
        "date": "2003-07-19",
        "explanation": "Far beyond the local group of galaxies lies NGC 3621, some 22 million light-years away. Found in the serpentine southern constellation Hydra, the loose spiral arms of this gorgeous island universe are loaded with luminous young star clusters and dark dust lanes. Still, for earthbound astronomers NGC 3621 is not just another pretty face-on spiral galaxy. Some of its brighter stars have been used as standard candles to establish important estimates of extragalactic distances and the scale of the Universe. This color picture was constructed from astronomical image data recorded with the Very Large Telescope Antu, at Paranal Observatory in Chile.  At the original resolution, individual, hot supergiant stars can be identified and studied across NGC 3621.",
        "hdurl": "https://apod.nasa.gov/apod/image/0307/ngc3621_bresolin_full.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "NGC 3621: Far Beyond the Local Group",
        "url": "https://apod.nasa.gov/apod/image/0307/ngc3621_bresolin_c2.jpg"
    },
    {
        "copyright": "Ben Cooper",
        "date": "2009-03-09",
        "explanation": "Streaking skyward, a Delta II rocket carries NASA's Kepler spacecraft aloft into the clear night of March 6. The dramatic scene was recorded in a time exposure from the crowded pier in Jetty Park at the northern end of Cocoa Beach, Florida, about 3 miles from the Cape Canaveral launch site. Kepler's mission is to search for Earth-like planets orbiting in the habitable zone of other stars. A planet orbiting within a star's habitable zone would have a surface temperature capable of supporting liquid water, an essential ingredient for life as we know it. To find Earth-like planets, Kepler's telescope and large, sensitive camera will examine a rich star field near the plane of our Milky Way Galaxy. Located in the constellation Cygnus, Kepler's field of view will allow it to monitor the brightness of many stars in the solar neighborhood and detect a slight dimming as a potential Earth-like planet crosses in front of the star.   digg_url = 'http://apod.nasa.gov/apod/ap090309.html'; digg_skin = 'compact';",
        "hdurl": "https://apod.nasa.gov/apod/image/0903/BenCooperKeplerStreak.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Kepler's Streak",
        "url": "https://apod.nasa.gov/apod/image/0903/BenCooperKeplerStreak.jpg"
    },
    {
        "copyright": "Joe Orman",
        "date": "2002-04-10",
        "explanation": "How did those big rocks end up on that strange terrain? One of the more unusual places here on Earth occurs inside Death Valley, California, USA.  There a dried lakebed named Racetrack Playa exists that is almost perfectly flat, with the odd exception of some very large stones, one of which is pictured above.  Now the flatness and texture of large playa like Racetrack are fascinating but not scientifically puzzling -- they are caused by mud flowing, drying, and cracking after a heavy rain.  Only recently, however, has a viable scientific hypothesis been given to explain how 300-kilogram stones ended up near the middle of such a large flat surface.  Unfortunately, as frequently happens in science, a seemingly surreal problem ends up having a relatively mundane solution.  It turns out that high winds after a rain can push even heavy rocks across a momentarily slick lakebed.",
        "hdurl": "https://apod.nasa.gov/apod/image/0204/flatlake_orman_big.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Unusual Rocks in Death Valley",
        "url": "https://apod.nasa.gov/apod/image/0204/flatlake_orman.jpg"
    },
    {
        "date": "2007-05-30",
        "explanation": "What is this vast dark region on Titan?  Quite possible a sea of liquid hydrocarbons. The region was imaged earlier this month when the robotic Cassini spacecraft swooped past Saturn's cloudy moon and illuminated part of it with radar.  The dark region in the above image reflected little radar, an effect expected were the dark surface relatively flat, as expected for a liquid.   Other indications that the vast dark area is liquid include the coastline-like topology of the brighter regions, which appear to include islands, inlets, and tributary channels. The uninterrupted smoothness of much of the dark sea may indicate that the sea runs deep, with speculation holding a depth estimate of tens of meters. A hydrocarbon sea on Titan holds particular interest for exobiologists as it might be a place where life could develop.  In 2005 the Huygens probe landed on Titan and returned the first surface images.  Cassini will continue to explore Titan, as 13 more flybys are planned.",
        "hdurl": "https://apod.nasa.gov/apod/image/0705/titansea_cassini_big.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Liquid Sea on Saturn's Titan",
        "url": "https://apod.nasa.gov/apod/image/0705/titansea_cassini.jpg"
    },
    {
        "date": "1998-11-24",
        "explanation": "More Leonids were visible at some places than others.  In Israel, early in the morning of 17 November, it rained meteors though a clear sky.  Observers there reported a peak rate for the 1998 Leonid Meteor Shower of about 600 meteors per hour.  Visible in the above picture are no fewer than seven Leonid meteors occurring over just a few minutes.  (Can you find them all?)  The dome of the Wise Observatory is visible on the right.  The Earth's rotation causes stars to appear as arcs. The 1998 Leonids might be remembered not for their numbers, however, but for the unusually high fraction of bright fireballs.  Another eventful Leonid Meteor Shower is forecast for the same time next year.",
        "hdurl": "https://apod.nasa.gov/apod/image/9811/leonid7_wise_big.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Seven Leonids Over Wise Observatory",
        "url": "https://apod.nasa.gov/apod/image/9811/leonid7_wise.jpg"
    }
]

const dateformat = resultArr[0].date.toString()

loadPhotos()