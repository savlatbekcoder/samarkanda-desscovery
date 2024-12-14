import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../hero";
import tour1 from "../../assests/bg/tour1.jpg";
import tour2 from "../../assests/bg/tour2.jpg";
import tour3 from "../../assests/bg/tour3.jpg";
import tour4 from "../../assests/bg/tour4.jpg";
import tour5 from "../../assests/bg/tour5.jpg";
import tour6 from "../../assests/bg/tour6.jpg";

const TourPageCard = () => {
  const { id } = useParams();

  const tourData = {
    t1: {
      image: tour1,
      content: `Day 1: Moscow/Urgench/Khiva <br />
Arrival at Urgench airport. Our driver will meet you and take you to the hotel in Khiva (35 km, 40 min). Accommodation at the hotel. Free time. Night at the hotel.
    
<br /><br /><br />

Day 2: Khiva<br />

Full day of excursions in Khiva. Visit to the Ichan-Kala fortress, listed as a UNESCO World Heritage Site. Visit to the Muhammad Amin Khan Madrasah (18th century), Muhammad Rahim Khan Madrasah (19th century), Kalta-Minor, Pakhlavan Makhmud Mausoleum, Islam Khoja Minaret, Juma Mosque, Tash-Khavli Palace, Kunya-Ark and the local bazaar. Overnight at the hotel.
<br /><br /><br />

Day 3: Khiva/Bukhara<br />

In the morning, departure from Khiva to Bukhara (480 km, 7-8 hours). The modern highway crosses the Kyzylkum desert, repeating the ancient route of the Great Silk Road. A stop along the way, during which you will have the opportunity to enjoy panoramic views of the desert and the Amu Darya River. Arrival in Bukhara in the late afternoon, accommodation and rest at the hotel. Night at the hotel.
   
<br /><br /><br />

Day 4: Bukhara<br />
In the morning, departure from Khiva to Bukhara (480 km, 7-8 hours). The modern highway crosses the Kyzylkum desert, repeating the ancient route of the Great Silk Road. A stop along the way, during which you will have the opportunity to enjoy panoramic views of the desert and the Amu Darya River. Arrival in Bukhara in the late afternoon, accommodation and rest at the hotel. Night at the hotel.
   
<br /><br /><br />

Day 5: Bukhara/Samarkand<br />
Continuation of the excursion program in Bukhara. Trip to the summer residence of the Bukhara emirs Sitorai Mohi-Khosa. After lunch, transfer to Samarkand (268 km, 4 hours). Arrival in Samarkand. Accommodation at the hotel. Free time. Night at the hotel.
   <br /><br /><br />

Day 6: Samarkand
<br />
Full day excursions in Samarkand. Visit to Registan Square (15th-17th centuries), Bibi-Khanum Mosque (14th century), Shahi-Zinda Complex (9th-19th centuries), Gur-Emir Mausoleum (14th century), Ulugbek Observatory (15th century), Afrasiab Museum and the Central Bazaar. Overnight at the hotel.
<br />
<br />
   

Day 7: Samarkand<br />

Transfer to the airport and flight to Moscow.
  <br /><br /><br /> 

      `,
      comment: "Not comments yet",
      price: "545$",
      name: "Tour to Uzbekistan from Moscow",
    },
    t2: {
      image: tour2,
      content: `
      Day 1: Arrival in Tashkent/Bukhara<br />

Arrival in Tashkent. You will be met by our driver and guide. Excursion around Tashkent, the capital of Uzbekistan and the largest city in Central Asia. On this day, a visit to the Old City is planned, where the religious center of Tashkent is located - the Khast-Imam complex. It is here that the famous Koran of Caliph Osman (VII century) is kept. In Khast-Imam, you will visit the Barak-Khan madrasah, the Tillya-Sheikh mosque, the Kaffal-Shashi mausoleum and the Imam al-Bukhari Islamic Institute. Then you will visit one of the oldest bazaars in the city - Chorsu. After sightseeing in the Old City, you will take the Tashkent metro to the center, where Amir Timur Square, Independence Square and the Museum of Applied Arts are located. In the evening, transfer to the local airport for a flight to Bukhara. Meeting at the Bukhara airport and transfer to the hotel. Night at the hotel.
<br /><br /><br />

Day 2: Bukhara<br />

Full day guided tour of the Old City. Visit to the Lyabi-Khauz complex, Magoki-Attori Mosque, Chor-Minor Madrasah, trading domes, Kalyan Minaret, Kalyan Mosque and Miri-Arab Madrasah, Ulugbek Madrasah and Abdulazizkhan Madrasah, Ark Fortress, Bolo-Khauz Mosque, Samanid Mausoleum and Chashma-Ayub Mausoleum. Overnight at the hotel.
<br /><br /><br />

Day 3: Bukhara/Samarkand<br />

On this day, a trip out of town to the summer residence of the last Bukhara emir Sitorai Mohi-Khosa is planned, as well as a visit to the Mausoleum of Bahauddin Naqshbandi, the founder of the Sufi order Naqshbandi. In the afternoon, you will be transferred to Samarkand (280 km, 4 hours). On the way, you will have the opportunity to stop at the ancient caravanserai Rabati Malik (11th century). Arrival in Samarkand at the end of the day, accommodation at the hotel. Night at the hotel.
<br /><br /><br />

Day 4: Samarkand/Tashkent<br />

On this day you will visit the famous Registan Square, Bibi Khanum Mosque, Siab Bazaar, Ulugbek Observatory and Shahi-Zinda Necropolis. The day will end with an excursion to the Gur-Emir Mausoleum - the burial place of Amir Timur and the Timurids. At 16:00 transfer to the railway station. The high-speed Afrasiab train leaves for Tashkent at 17:00 (300 km) and arrives at 19:10. Upon arrival you will be met and taken to the hotel. Night at the hotel.
<br /><br /><br />

Day 5: Tashkent - departure<br />

Check out from the hotel at 12:00. Free time until transfer to Tashkent airport. Departure.
<br /><br /><br />  
`,
      comment: "Not comments yet",
      price: "555$",
      name: "Three pearls of the East",
    },
    t3: {
      image: tour3,
      content: `
      Day 1: Tashkent<br />

Arrival in Tashkent. Accommodation at the hotel. City tours - visit to Amir Temur Square, Independence Square, the old part of Tashkent with the Khast Imam complex, the Barakhan madrasah of the 16th century, the Museum of Applied Arts. Dinner. Night at the hotel.
<br /><br /><br />

Day 2: Tashkent - Urgench - Khiva<br />

Flight to Urgench. Arrival in Urgench. Transfer to Khiva. Accommodation at the hotel. Excursions in Khiva. Visit to the fortress Ichan-Kala, madrasah of Muhammad Amin Khan (XVIII B), Muhammad Rahimkhan (XIX B), Kalta Minor, mausoleum of Pakhlavan Makhmud, minaret of Islam Khoja, mosque of Juma, Tash Khauli Harem of Khiva Khan, Caravanserai of the XIX century. Free time. Dinner. Night at the hotel.
<br /><br /><br />

Day 3: Khiva-Bukhara<br />

In the morning departure from Khiva to Bukhara. On the way stop at the river. Amu Darya. Arrival in Bukhara. Accommodation at the hotel. Free time. Night at the hotel.

<br /><br /><br />
Day 4: Bukhara<br />

Excursions in Bukhara - visit to the Ark Fortress, Samanid Mausoleum (IX B), Chashma-Ayub (XII-XIV BB), Kalyan Architectural Ensemble (XII-XVI BB), Mir-Arab Madrasah (XVII B), Magok-Attori Mosque, Madrasah Ulugbek and Abdulazizkhan (XV-XVII BB), complex Lyabi-Hauz and Madrasah Chor Minor (XIX B). Overnight at the hotel.
<br /><br /><br />

Day 5: Bukhara<br />

Trip to the summer residence of the Bukhara emirs Sitorai Mohi Khossa. Continuation of the excursion program in Bukhara.

<br /><br /><br />
Day 6: Bukhara - Shahrisabz - Samarkand<br />

In the morning departure to Samarkand via Shakhrisabz. Stop in Shakhrisabz to see the remains of the Ak-Saray Palace (XIV-XV BB), the mausoleums of Jakhongir and Omar Sheikh (XIV B), and the Dorut-Tilovat mausoleum. After lunch, transfer to Samarkand. Accommodation at the hotel. Overnight at the hotel.

<br /><br /><br />
Day 7: Samarkand<br />

Full day excursions in Samarkand. Visit to Registan Square (15th-17th centuries BB), Gur-Emir Mausoleum (15th century BB), Bibi-Khanum Mosque (14th century BB), Shah-i-Zinda Complex (9th-19th century BB), Ulugbek Observatory (15th century BB). Overnight at the hotel.
<br /><br /><br />

Day 8: Samarkand to Tashkent<br />

Continuation of the excursion. Visit to the Afrosiab Museum, the grave of St. Daniel. Lunch, departure from Samarkand to Tashkent. Arrival, accommodation at the hotel.
<br /><br /><br />

Day 9: Tashkent<br />

Transfer to the airport. Departure from Tashkent. End of the program.
<br /><br /><br />
      `,
      comment: "Not comments yet",
      price: "605$",
      name: "Treasures of Eastern Culture",
    },
    t4: {
      image: tour4,
      content: `
      Day 1: Arrival in Tashkent<br />

Arrival in Tashkent. Transfer from the airport to the hotel. Overnight at the hotel.
<br /><br /><br />

Day 2: Tashkent-Nukus-Muynak-Nukus<br />

Morning flight to Nukus (1255 km, 2 hours 45 minutes flight). Arrival in Nukus and trip to the former fishing town of Muynak (220 km), which was located on the shore of the Aral Sea. On the way, stop at the Mizdakhan archaeological complex. In Muynak, visit the so-called "ship cemetery" - a former port where the skeletons of abandoned ships rust. Then you will visit the Aral Sea Museum of Local History. This is a one-of-a-kind museum, the exposition of which demonstrates the peculiarities of the life of the local population, flora and fauna, and also tells about the tragedy of the Aral Sea that happened half a century ago. In the afternoon, return to Nukus. Night at the hotel.

<br /><br /><br />
Day 3: Nukus-Khiva<br />

Visit to the Savitsky Museum. The famous museum houses the world's second largest collection of Russian avant-garde art and an exhibition of applied art from the peoples of Central Asia, collected by the Russian artist and philanthropist I.V. Savitsky. In the afternoon, drive to Khiva (200 km, 4-5 hours). On the way, visit the archaeological sites of Ancient Khorezm: the settlement of Tuprak Kala and Ayaz Kala, which was the capital of Khorezm in the 3rd century. Arrival in Khiva, accommodation at the hotel. Night at the hotel.
<br /><br /><br />

Day 4: Khiva<br />

Excursion to the Ichan Kala fortress, included in the UNESCO World Heritage List. In this open-air museum city you will visit the Kunya-Ark fortress, the Tash-Khavli palace, the Muhammad Aminhan madrasah, the Muhammad Rahimkhan madrasah, the Kalta-Minor minaret, the Juma mosque, the Pakhlavan Mahmud mausoleum, the Islam Khoja minaret. Free time in the afternoon. Night at the hotel.
<br /><br /><br />

Day 5: Khiva-Bukhara<br />

In the morning you will travel from Khiva to Bukhara (480 km). The modern highway crosses the Kyzylkum desert, repeating the ancient route of the Great Silk Road. Stop along the way, during which you will have the opportunity to enjoy panoramic views of the desert and the Amu Darya River. Arrival in Bukhara in the late afternoon, accommodation and rest at the hotel. Night at the hotel.
<br /><br /><br />

Day 6: Bukhara<br />

Full day of guided tours in the historical center of Bukhara. Visit to the Lyabi-Khauz complex, Magoki-Attori mosque, Chor-Minor madrasah, trading domes, Kalyan minaret, Kalyan mosque and Miri-Arab madrasah, Ulugbek madrasah, Abdulazizkhan madrasah, Ark fortress, Bolo-Khauz mosque, Samanid mausoleum and Chashma-Ayub mausoleum. Overnight at the hotel.

<br /><br /><br />
Day 7: Bukhara
<br />
The second day in Bukhara will begin with a trip out of town to the summer residence of the last Bukhara emir, Sitorai Mohi-Khosa. This is a unique building, the architecture of which combines Eastern and Russian decorative elements. Continuation of the excursion to the mausoleum of Bahauddin Naqshbandi and the necropolis of Chor-Bakr. Free time after the excursions. Night at the hotel.
<br /><br /><br />

Day 8: Bukhara-Shahrisabz-Samarkand<br />

In the morning, drive to Samarkand via Shakhrisabz (275 km). In Shakhrisabz, visit the Mausoleum of Jahongir, the Dorus Saodat memorial complex, the ruins of the Ak-Saray palace, the Dorut Tilavat ensemble with the Kuk Gumbaz mosque and the tomb of Tamerlane's father. In the afternoon, continue to Samarkand (90 km). Arrival in Samarkand, check-in at the hotel. Overnight at the hotel.

<br /><br /><br />
Day 9: Samarkand<br />

A guide and driver will be waiting for you in the hotel lobby. On this day, you will visit the famous Registan Square, which was the center of Samarkand for many centuries, as well as the Bibi-Khanum Cathedral Mosque, the construction of which is associated with many folk legends. You will also stop by the Siab Bazaar, where you can buy oriental sweets, fresh fruits and national souvenirs. In addition, you will visit the observatory of Ulugbek - the grandson of Amir Timur, the ruler of Samarkand and the great scientist of the Middle Ages, the Shokhi-Zinda complex, which is a magnificent ensemble of mausoleums of the Samarkand nobility and the Gur-Emir mausoleum - the burial vault of Amir Timur and the Timurids. Night at the hotel.
<br /><br /><br />

Day 10: Samarkand-Tashkent<br />

Check out of the hotel before 12:00. Continuation of the excursion around Samarkand. You will visit the Afrasiab Museum, visit the tomb of St. Daniel. Then you will go to the village of Konigil, where you can watch the process of making Samarkand paper from mulberry using ancient technology. After the excursion - free time, a car with a driver at your disposal. At 16:00 transfer to the railway station. The high-speed Afrasiab train leaves for Tashkent at 17:00 (300 km) and arrives at 19:10. Here you will be met and taken to the hotel. Night at the hotel.

<br /><br /><br />
Day 11: Tashkent<br />

Guided tour of Tashkent, the capital of Uzbekistan and the largest city in Central Asia. This day includes a visit to the Old City, where the religious center of Tashkent, the Khast-Imam complex, is located. It is here that the famous Koran of Caliph Osman (7th century) is kept. In Khast-Imam, you will visit the Barak-Khan Madrasah, the Tillya-Shaykh Mosque, and the Abu Bakr Kaffal Shashi Mausoleum. Then you will visit one of the oldest bazaars in the city, Chorsu. After sightseeing in the Old City, you will take the Tashkent metro to the center, where Amir Timur Square, Independence Square, and the Museum of Applied Arts are located. Free time in the afternoon. Overnight at the hotel.
<br /><br /><br />

Day 12: Tashkent<br />

Check out from the hotel at 12:00. Free time until transfer to Tashkent airport. Departure.
  
<br /><br /><br />
`,
      comment: "Not comments yet",
      price: "735$",
      name: "Oasis of the Medieval East",
    },
    t5: {
      image: tour5,
      content: `
      Day 1: Tashkent<br />

Arrival in Tashkent. Accommodation at the hotel. City tours - visiting Amir Temur Square, Independence Square, the old part of Tashkent with the Khast Imam complex, Barakhan Madrasah XVI B, the Museum of Applied Arts. Night at the hotel.
<br /><br /><br />

Day 2: Tashkent - Urgench - Khiva<br />

Flight to Urgench. Arrival. Transfer to Khiva. Accommodation at the hotel. Excursions in Khiva. Visit to the fortress Ichan-Kala, madrasah of Muhammad Amin Khan (XVIII B), Muhammad Rahimkhan (XIX B), Kalta Minor, mausoleum of Pakhlavan Makhmud, minaret of Islam Khoja, mosque of Juma, Tash Khauli Harem of Khiva Khan, Caravanserai XIX B. Free time. Night at the hotel.

<br /><br /><br />
Day 3: Khiva-Bukhara<br />

In the morning departure from Khiva to Bukhara. On the way stop at the river. Amu Darya. Arrival in Bukhara. Accommodation at the hotel. Free time. Overnight at the hotel.
<br /><br /><br />

Day 4: Bukhara<br />

Excursions in Bukhara - visit to the Arch Fortress, Samanid Mausoleum (IX B), Chashma-Ayub (XII-XIV BB), Kalyan Architectural Ensemble, Mir-Arab Madrasah (XVII B), Magok-Attori Mosque, Ulugbek and Abdulazizkhan Madrasah (XV-XV) XVII BB), the Lyabi-Khauz complex and madrasa Chor Minor (XIX B). Overnight at the hotel.
<br /><br /><br />

Day 5: Bukhara<br />

Trip to the summer residence of the Bukhara emirs Sitorai Mohi Khossa. Continuation of the excursion program in Bukhara.
<br /><br /><br />

Day 6: Bukhara - Nurata<br />

In the morning departure from Bukhara to the yurt camp located in the Kyzylkum desert. Inspection of rock paintings (petroglyphs) on the Nurata pass. Arrival at the yurt camp "Safari". Camel riding, free time. Dinner by the fire with folk songs of the akyn. Night in the yurt.

<br /><br /><br />
Day 7: Nurata-Samarkand<br />

Trip to Lake Aydarkul, free time. Departure to Samarkand (270 km). Arrival in Samarkand. Accommodation at the hotel. Free time. Overnight at the hotel.
<br /><br /><br />

Day 8: Samarkand<br />

Full day excursions in Samarkand. Visit to Registan Square (15th-17th centuries BB), Gur-Emir Mausoleum (15th century BB), Bibi-Khanum Mosque (14th century BB), Shah-i-Zinda Complex (9th-19th century BB), Ulugbek Observatory (15th century BB). Overnight at the hotel.
<br /><br /><br />

Day 9: Samarkand to Tashkent<br />

Continuation of the excursion. Visit to the Afrosiab Museum, the grave of St. Daniel. Lunch, departure from Samarkand to Tashkent. Arrival, accommodation at the hotel.
<br /><br /><br />

Day 10: Tashkent<br />

Transfer to the airport. Departure from Tashkent. End of the program.
<br /><br /><br />
`,
      comment: "Not comments yet",
      price: "650$",
      name: "Dear ancient caravan",
    },
    t6: {
      image: tour6,
      content: `
      
      Day 1: Tashkent<br />

Arrival in Tashkent. Our driver will meet you and take you to the hotel. Excursion around Tashkent, the capital of Uzbekistan and the largest city in Central Asia. On this day, a visit to the Old City is planned, where the religious center of Tashkent is located – the Khast-Imam complex. It is here that the famous Koran of Caliph Osman (VII century) is kept. In Khast-Imam, you will visit the Barak-Khan madrasah, the Tillya-Sheikh mosque, the Abu Bakr Kaffal Shashi mausoleum and the Imam al-Bukhari Islamic Institute. Then you will visit one of the oldest bazaars in the city – Chorsu. After sightseeing in the Old City, you will take the Tashkent metro to the center, where Amir Timur Square, Independence Square and the Museum of Applied Arts are located. Night at the hotel.

<br /><br /><br />
Day 2: Tashkent/Bukhara<br />

Transfer to the airport. Morning flight to Bukhara. You will be met by the driver and taken to the hotel. Guided tour of the historical center of Bukhara, included in the UNESCO World Heritage List. You will visit the Lyabi-Khauz complex, Magoki Attori Mosque, Chor-Minor Madrasah, trading domes, Ulugbek Madrasah, Abdulaziz Khan Madrasah, Kalyan Minaret, Kalyan Madrasah, Miri-Arab Madrasah, Ark Fortress, Bolo-Khauz Mosque, Samanid Mausoleum and Chashma-Ayub Mausoleum. After the excursions, free time in the Old City. Night at the hotel.
<br /><br /><br />

Day 3: Bukhara/Shahrisabz/Samarkand<br />

In the morning, drive to Samarkand via Shakhrisabz (275 km, 3 hours). In Shakhrisabz, visit the Jakhongir Mausoleum, the Dorus Saodat Memorial Complex, the ruins of the Ak-Saray Palace, the Dorut-Tilavat ensemble with the Kok-Gumbaz Mosque and the tomb of Tamerlane's father. In the afternoon, continue to Samarkand (90 km, 2 hours). Arrival in Samarkand, check-in at the hotel. Overnight at the hotel.

<br /><br /><br />
Day 4: Samarkand<br />

On this day you will visit the famous Registan Square, which was the center of Samarkand for many centuries, as well as the Bibi Khanum Cathedral Mosque, the construction of which is associated with many folk legends. You will also visit the Siab Bazaar, where you can buy oriental sweets, fresh fruits and national souvenirs. In addition, you will visit the observatory of Ulugbek - the grandson of Amir Timur, the ruler of Samarkand and the great scientist of the Middle Ages, the Shakhi-Zinda complex, which is a magnificent ensemble of mausoleums of the Samarkand nobility and the Gur-Emir mausoleum - the burial vault of Amir Timur and the Timurids. Night at the hotel.
<br /><br /><br />

Day 5: Samarkand/Tashkent<br />

Continuation of the excursion around Samarkand. You will visit the Afrosiab Museum, visit the tomb of St. Daniel. Then you will go to the village of Konigul, where you will be able to observe the process of making Samarkand paper from mulberry using ancient technology. After the excursion - free time, a car with a driver at your disposal. At 16:00 transfer to the railway station. The high-speed Afrosiab train leaves for Tashkent at 17:00 (300 km) and arrives at 19:10. Here you will be met and taken to the hotel. Night at the hotel.

<br /><br /><br />
Day 6: Tashkent<br />

Free time before transfer to Tashkent airport. Departure.
<br /><br /><br />
`,
      comment: "Not comments yet",
      price: "480$",
      name: "Welcome to Uzbekistan",
    },
  };

  const tour = tourData[id];

  if (!tour) {
    return <h1>Tour not found!</h1>;
  } else {
    return (
      <section className="tour_page_card">
        <Hero image={tour.image} text={tour.name} />

        <div className="container">
          <h1>{tour.name}</h1>
          <br />
          <div dangerouslySetInnerHTML={{ __html: tour.content }}></div>
        </div>
      </section>
    );
  }
};

export default TourPageCard;