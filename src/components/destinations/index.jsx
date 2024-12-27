import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import image from "../../assests/bg/home-bg.jpg";
import taj from "../../assests/bg/taj.jpg";
import kr from "../../assests/bg/kr.jpg";
import tur from "../../assests/bg/tur.jpg";
import kaz from "../../assests/bg/kaz.jpg";
import road from "../../assests/bg/road.jpg";
import tosh from "../../assests/bg/tosh.jpg";
import khiv from "../../assests/bg/khiv.jpg";
import ter from "../../assests/bg/ter.jpg";
import nur from "../../assests/bg/nur.jpg";
import shak from "../../assests/bg/shak.jpg";
import bukh from "../../assests/bg/bukh.jpg";
import fergana from "../../assests/bg/fergana.jpg";
import kar from "../../assests/bg/kar.jpg";
import Hero from "../hero";

import tour1 from "../../assests/bg/tour1.jpg";
import tour2 from "../../assests/bg/tour2.jpg";

const Destinations = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [id]);

  const tours = [
    {
      id: "t1",
      price: "545$",
      content: "Tour to Uzbekistan from Moscow",
      tour_length: "6 days/5 nights",
      image: tour1,
    },
    {
      id: "t2",
      price: "555$",
      content: "Three pearls of the east",
      tour_length: "7 days/6 nights",
      image: tour2,
    },
  ];

  const destinationsData = {
    uzbekistan: {
      image,
      content: `  
      <h1>Uzbekistan</h1> <br />  Uzbekistan is a Central Asian country with more than 40 million inhabitants, a former Soviet republic, an independent state since 31 August 1991, surrounded by Kazakhstan, Kyrgyzstan, Tajikistan, Afghanistan and Turkmenistan. Its capital is Tashkent, a metropolis of 3 million d;habitants.
With an area of 447,000 square kilometers, divided between the desert plain, the basins and the oases and dominated to the east by the mountains, Uzbekistan stretches 1,425 kilometers from west to east and 930 kilometers north South. Border border to the southwest of Turkmenistan, Kazakhstan and the Aral Sea to the north, Tajikistan and Kyrgyzstan to the east, Uzbekistan is not only one of the largest states of Central Asia, Is also the only one with a common border with the other four. Uzbekistan also shares a border with Afghanistan to the south.
With Liechtenstein, Uzbekistan is the only state in the world to be doubly landlocked, that is to say that it must cross the borders of at least two other states to have access to the world ocean.
Uzbekistan is an essentially desert country of which only 10% of the land is man-made (intensive agricultural crops and irrigated valleys). The Kyzyl-Kum, one of the most extensive deserts of Central Asia, covers much of the territory of western Uzbekistan. A part of the Karakoum desert also crosses the country to the south-west.
Amu-Daria and Syr-Daria are the most important rivers of Uzbekistan and Central Asia and flow into the Aral Sea. The total length of the Amou-Daria is 1,437 km, the Syr-Daria is 2,137 km. To the north-east and south lie the chains of Tian Shan and Hissar-Alai. The highest peaks in the country are the Khazret Sultan, located on the border between Uzbekistan and Tajikistan with 4 643 m of altitude and Adelunga Toghi which culminates in 4 301 m.
The climate is continental, dry and very contrasted, relatively cold in winter (up to -10 ° in some regions), very hot in summer (+ 35 ° to 40 ° or even more).
The Aral Sea, divided between Uzbekistan and Kazakhstan, has been drastically reduced since the 1960s, which is now a veritable ecological disaster for the region. Between 1960, when it covered 68 000 km2, and 2000, its area was divided by two. Current developments point to the total disappearance of the Aral Sea by 2025.
Local and regional authorities have their own representative bodies (governors and territorial assemblies), in particular the Autonomous Republic of Karakalpakistan.
31 August 1991, Uzbekistan declares its independence.  165 States have recognized Uzbekistan, of which 103 have established diplomatic relations with Uzbekistan. More than 40 diplomatic missions are in Tashkent.
Population.                                                                                                                                                                                    The ethnic Uzbeks, a Turkish-speaking people, officially constitute nearly 80% of the population. Ethnic Russians represent the largest minority with 6% (constantly decreasing since the mid-1980s). The other minorities are the Tajiks 5.5%, the Kazakhs 4%, the Tatars 4%, the Karakalpaks 1.9%, the Koreans 1.1%, as well as the Kyrgyz and the Meskhetian Turks. The bulk of the Russian minority lives in Tashkent and other industrial centers. The Tajiks are concentrated in the historical cities of Bukhara and Samarkand. The Karakalpaks reside mainly in the Autonomous Republic of Karakalpakistan. However, various reports (including specialists based in the United States and Europe) claim that the Tajik minority is much more present in Uzbekistan than is officially recognized.
<br />
<br />
Language.                                                                                                                                                                                             The country's official language is Uzbek, spoken by 17 million people in the country (65.6% of the population). Le russe, mainly in Tashkent and in large cities, remains an important language of communication. Tajik and karakalpake languages are also widely used locally. 37% of the Uzbek population lives in cities, 63% in the countryside. It is predominantly young, the working-age population accounts for only 54% of the total (plus 7% of pensioners).
Religion                                                                                                                                                                                          The Muslim religion (Sunni rite) is the majority (about 94% of the population) in Uzbekistan. Shiite Muslims represent 1% of the population (mainly around Samarkand and Tashkent). The other religions represented are Orthodoxy (4%), which is in constant decline due to the return of Russian speakers in their respective countries and very marginally Judaism , Catholicism (the Apostolic Administration of Uzbekistan counts 4,000 Catholics throughout the country) and some recent Baptist communities. Lutheranism, which had been especially present since Stalin's deportation to Uzbekistan from the Soviets of German origin (such as the Volga Germans), has practically disappeared with only two tiny parish communities in the country, that of Tashkent and that of Ferghana. Almost all the Lutherans left Uzbekistan at the opening of the borders in the years 1990-2000. Officially, the country is secular. In reality, the state controls religions and persecutions of Christians are reported by, among others, the NGO Portes Ouvertes.
Food                                                                                                                                                                                       Gastronomy resembles Middle Eastern and Mediterranean cuisines: pilaf-cooked rice, pasta, scented spices, fruits and vegetables, yoghurt, stews and grilled Kebab meat - not to mention pastries The cuisine of the South is distinguished by the delicacy of its sweets). The somsas (samsa) and a great variety of nons are also very common. The national dishes are the plov, of which there is an infinity of variations (with butter, rice, carrots and mutton base), and chachlik (meat and fat brochette served with many onions). Stuffed cabbage is also very popular. Tea, usually served without milk, is omnipresent. After a century of Russian influences, vodka is everywhere. The fact of being a Muslim does not prevent the vast majority of the Uzbeks from drinking, even during Ramadan.
Uzbek culture is one of the most vivid and original cultures of the East. These are inimitable folk music, dances and painting, unique national cuisine and clothing. The Uzbek pop music is characterized by a variety of subjects and genres.
The songs and instrumental pieces                                                                                                                                Songs and instrumental pieces may be divided into two groups according to their functions and forms of existence: performed at a specific time and under the specific circumstances as well as those performed at any time. In the first group are the songs related to the rituals, the work process, the various ceremonies, the spectacular spectacular presentations as well as the games.
<br /><br/>
The Uzbek people are known for their songs                                                                                                    "Kochouk" - it is a daily song of a couplet structure with a melody of a small diapason, made up of one or two stanzas of the poetic text. There are a number of common traits between "kochouk", "lapar" and "yalla" - both of which are also songs of a couplet structure. The genre "yalla" includes two types of songs: a melody of a narrow tuning fork and the solo accompanied by a dance. The popular and professional verses of the poets of the East serve as poetic texts for the songs. The most developed models "achoula" are basically a genre of professional music of oral tradition. A special place in the Uzbek musical heritage occupies the "dastans" - epic legends of lyrical-heroic content. The "makoms" constitute the main classical basis of professional music of oral tradition.
In different parts of Uzbekistan, dances differ from one another                                                                      The dances of Fergana are distinguished by the softness, the suppleness and the expressiveness of the movements, the light sliding pace, the original movements in place and according to the circle. In Khorezm and Bukhara, one dances with "kayrakam" (castanets).
The development of national painting began several centuries ago                                                                         In the 16th-17th centuries, in Bukhara - the capital at the time - and in other urban centers considerable success was achieved in the art of manuscript and binding. The artistic format of the manuscript consisted of refined calligraphy as well as the execution of fine ornaments on the margins using watercolor. In Samarkand and particularly in Bukhara, the Central Asian school of the miniature developed.
The ceramic                                                                                                                                                                                  The production of pottery in Central Asia was one of the most developed fields of production. The most common forms of ceramics were watering and drying ceramics that had local specificities. The largest centers of pottery production still exist, such as Richtan, Guijdouvan, Samarkand - Gurumsaray, Urgut, Shakhrisabz and Tashkent.
Engraving                                                                                                                                                                       Contemporary masters working with brass and copper manufacture high-quality engraved metal products mentioned above. Masters famous in engraving are the masters of Bukhara who are distinguished by the finesse and richness of the images created. In addition to using traditional forms of engraving, contemporary masters seek to elaborate new forms and styles of engraving.
Embroidery                                                                                                                                                                                   The traditional centers of "suzané" embroidery are located in Nourata, Bukhara, Ferghana, Tashkent and Shakhrisabz. Young people show great interest in this art. It is not by chance that one feels that by feeling the possibility of practical realization and material effect in this art, people are led by creative energy, which in turn leads to prosperity Other traditional arts.
<br />
<br />
Production of carpets                                                                                                                                                   Currently, carpet production in Uzbekistan is developing in three directions: hand work, manufacturing in factories and private enterprises. The masters of carpet production, produce high quality carpets, regardless of the place and type of production. The main objective in the production of carpets is the reconstitution of old drawings, the creation of new images of carpets of good quality and, above all, the reconstruction of the technology for the restoration of natural fabric.
The magnanerie                                                                                                                                                                         The rebirth of the magnanerie is linked to the operation of the Yodgorlik factory in Marguilan. Today, the production of national fabrics, such as the atlas, khan-atlas, chakhi-bécassame and bakhmal is fully restored. Ancient traditional models have also been restored, and at the same time special attention is paid to the restoration of natural paintings.
The international music festival "Sharq taronalari" ( "Melodies of the East")                                                    In order to make known the national art of music and song of the peoples of the oriental countries, to preserve and develop the traditions of national music, to inculcate in the younger generation love for art, to sing of the beautiful, true human values To strengthen further the ties of friendship and brotherhood among peoples, to extend the circle of cooperation in the fields of creation, cultural and spiritual relations on an international scale, a decision on the organization of the International Music Festival "Sharq taronalari" was adopted with the adoption of the Order of the Cabinet of Ministers of the Republic of Uzbekistan No. 132 of 11 March 1997. This festival is held every two years in the city of Samarkand.
        `,
    },
    tajikistan: {
      image: taj,
      content: `
<h1>Tajikistan</h1><br />

Tajikistan is a mountainous country of Central Asia, its capital is Dushanbe. The territory of Tajikistan is 143,100 km², and almost 8,000,000 inhabitants. It borders Afghanistan to the south, China to the east, Kyrgyzstan to the north and Uzbekistan to the west. It is the only state in the former Soviet Central Asia where the dominant language is not a Turkish language but Iranian, Tajik. The Tajiks, who make up the majority ethnic group (80% of the population), belong to the family of Iranian peoples. 
<br /><br />
The official language of Tajikistan is Tajik, the Indo-European language family, the Iranian or Persian language group.  
<br /><br />
About 95% of the population is Muslim (90% of Sunnis and 5% of Ismailis). The rest are mainly Baha'i and Christian minorities. A law of 2009 gives a specific role to the Hanefite school of the Muslim fiqh, considered to be more moderate than others. 
<br /><br />
Tajikistan is a landlocked country with no access to the sea and the smallest country in Central Asia by its size. 93% of the Tajik territory is made up of mountains, and more than half of the territory has an altitude of more than 3 000 m. Its highest point is Pic Ismail Samani, former Pic Stalin, then Pic of Communism, 7 495 m.
<br /><br />
The climate of Tajikistan is continental, with temperatures fluctuating seasonally. In January, the temperature varies on average from +2 ° C to -2 ° C in the southwest and north valleys and goes down to -20 ° C on the Pamir highlands. July peaks range from 10 ° C to 15 ° C in the Pamir, 25 ° C to 30 ° C in the valleys. The absolute minimum recorded is -63 ° C in the Pamir (Boulounkoul) and the maximum of 48 ° C in Pyandj-Bas. 
<br /><br />
The only non-mountainous areas of Tajik territory lie at the northern end of the country, which is connected to the important Fergana basin, and to the south-west in the Amu-Daria basin. The center of the country is dominated by large east-west mountain ranges, notably the Alai Mountains, which prevent winter land communications between the capital, Dushanbe and the north. To the east of the country, the Upper Badakhshan region consists of high Tibetan-type plateaus, the Pamir, on the northern edge of which rise the highest peaks. The Pamir glaciers are the main source of water in Central Asia, feeding largely on the Aral Sea by the two rivers of Syr-Daria and Amu-Daria, before the intensive development of intensive farming Of cotton in their basins during the Soviet period.
<br /><br />
Trekking and transport 
<br /><br />
North of Dushanbe, along the magnificent valleys embedded between the rocky mountains, many hiking trails allow the trekkers to join the Leninobod province on stony trails. The valley of Archamaidan is beautiful. One-week tours in the Fansky Mountains to the border of Uzbekistan also uncover extraordinary and unique landscapes, drawn by glacier peaks such as the Chimtard of 5,486 m, the Energuiya of 4.120 m and the Kaznok Of 4.100 m, canyons, lakes with pure waters. Walkers can set up their tent and meet Tajik mountain shepherds with their flocks of goats. Provide several cover clothes for trekking in the country.
<br /><br />
Tajikistan’s climate is continental, with temperatures fluctuating seasonally. In January, the temperature varies on average from +2 ° C to -2 ° C in the southwest and north valleys and goes down to -20 ° C on the Pamir highlands. July peaks range from 10 ° C to 15 ° C in the Pamir, 25 ° C to 30 ° C in the valleys. The absolute minimum recorded is -63 ° C in the Pamir (Boulounkoul) and the maximum of 48 ° C in Pyandj-Bas. 
<br /><br />
Tajikistan’smountains are popular with mountaineers, tourists and lovers of nature. The most famous mountainous regions: Zerafchan Ridge, Fanski Mountains, Guissar Ridge, Pamir Mountains. Tajikistan’s moutains are rich in remarkable landscapes: tumultuous rivers, beautiful multicolored lakes that drown in fir forests. This mountainous country of Tajikistan is called Pamiro-Alaiet and all this beauty extends to Tian-Shan.
<br /><br />
The transportation system of Tajikistan dates back to the Soviet period. Since 2005, a series of major projects have been designed to develop a suitable infrastructure. Priority is given to links between Dushanbe and the north, notoriously insufficient: an important link in this road, the Anzob tunnel, was inaugurated in July 2006. 
<br /><br />
The Pamir Route, which crosses the highlands from Khorugh on the Afghan border to the Kyrgyz border north of Lake Kara-Kul, is once again being maintained. A road link between Murghab, in the heart of Pamir, and China, was inaugurated as of 2004.
      `,
    },
    kyrgyzstan: {
      image: kr,
      content: `
<h1>Kyrgyzstan</h1><br />
Kyrgyzstan is a country in Central Asia. Extremely mountainous, originally populated by nomadic populations, the former republic of the USSR, Kyrgyzstan gained its independence when the latter collapsed in 1991. The inhabitants are called the Kyrgyz and speak Kyrgyz, of Turkish languages. Kyrgyzstan is one of the two former Soviet Socialist Republics, with Kazakhstan, to have kept Russian as its official language. In addition to this, the country added the Kyrgyz language shortly after independence in September 1991. The Kyrgyz language belongs to the Turkish language group. In 1924, an alphabet based on the Arabic alphabet was introduced, replaced by the Latin alphabet in 1928. In 1941, the Cyrillic alphabet was definitively adopted.
According to a 2009 census, the Kyrgyz is at the top of the languages spoken with 71% of native speakers; Uzbek in second place with 15%, despite its status as an official language; Russian occupies only third place with 9% of speakers; the remaining 5% being shared by others.
The main religion is Sunni Islam, from the Hanafi School. But the Muslim religious practice is also marked by the influences of shamanism, existing before Islam, and Sufism.
Its capital, which is also its largest city, is Bishkek. It is bordered by Kazakhstan to the north, Uzbekistan to the west, Tajikistan to the southwest, and China to the southeast and east. Covering an area of 198 500 km2, the country is totally landlocked and has no access to the sea.
The country is almost entirely mountainous. These mountainous zones divide the country into two, the Northeast and the Southwest; these two parts communicate only by passes located at more than 2700 m altitude. Kyrgyzstan's main cities are located in the lowest parts of the country.
To the northeast, Issik Koul Lake forms a small inland sea of 6332 km2 at an altitude of 1620 m. 702 m deep, the lake is slightly salty and does not freeze in winter. Its name, Issik Koul, means in Kyrgyz "hot lake", and is partly fed by hot springs.
To the southeast, the Tian Shan range marks the border with China and culminates at 7439 m with Pobedy Peak (the "Victory" in Russian), which is the climax of the country.
To the west and southwest of the country, the Fergana valley is caught by the Fergana (northeastern valley) and Pamir Alay (or Alai Mountains) chains in the south. The valley is the receptacle of the mighty Naryn River, which crosses the whole country from the height of the Tian Shan in the northeast of the country.
The south (bordered by the Pamir Alay) of the Fergana valley constitutes the other centre of settlement. There are the cities of Osh and Jalal-Abad, as well as the lowest point in Kyrgyzstan, the Kara-Darya valley (the second source or a tributary of the Syr-Darya), at an altitude of 132m.
<br /><br />
Tourism
Since 2012, travelers from forty countries (including France, Belgium and Switzerland) are exempted from visa requirements for tourist and business stays of less than 60 days. Kyrgyzstan bans HIV-positivepeople from obtaining a work permit.
Kyrgyzstan is a destination that has not yet been practiced but is very popular for adventure and nature tourism: mountaineering, paragliding, heliskiing, trekking, horseback riding, rafting, mountain biking and hunting.
<br /><br />
The main tourist attractions are:                                                                                                                                               -Lake Issyk Koul at an altitude of 1600 m in the east of the country;                                                                                            -Son Koul High Lake at 3000 m, Naryn Region;                                                                                                                               -Inylchec Glacier and Pic Pobedy (Russian Victory) peaks at 7439 m and Khan Tengri at 7010 m on the Chinese and Kazakh border;                                                                                                                                                                 -Lenin peak at 7134 m on the border with Tajikistan;                                                                                                                  -the site of the caravanserai of Tach Rabat 3200 m, province of Naryn;                                                                                    -the largest petroglyph site in Central Asia in Saïmaly-Tach, near Kazarman, Jalal-Abad region and Tcholponata on Issyk-Koul lake;                                                                                                                                                             -the village of Arslanbob, in the heart of the unique forest mass of walnut trees, province of Jalal-Abad;
-the cities of Ouzgen and Och, in the south of the country;                                                                                                     -Burana, an archaeological site, the former capital of Central Asia, remains the minaret and foundation of a mausoleum near Tokmak;                                                                                                                                                        -Merzbacher lake, a glacier lake emptying two to four times a year;                                                                               -Syrthes (highlands from 3500 m above sea level), from the east to the west: Syrthe Sary Jaz, Syrthe Ak-Chirak, Syrthe Ak-Sai;                                                                                                                                                               -Konorchek Gorge (Issyk Koul Province);                                                                                                                                    -the Kekemeren Canyon (Naryn Province)
Cultural Identity
Traditionally a nomadic people, the Kyrgyz remains attached to these traditions. They include crafts related to the manufacture and decoration of the yurt, made of thick felt canvas. The horse occupies a great place in art, the imaginary and the collective symbolism. Thus, the Kok-borou and the Oulak tartysh, two variants of the equestrian game of the "skinned goat", remained very popular sports.
The epic and the improvised melodic poem are the artistic expressions par excellence. The latter is accompanied by means of a three-stringed instrument, the komuz, and can be the subject of jousts between two orators, the aisysh. The Manas epic, a literary phenomenon with its volume and emphasis, transmitted and enriched over centuries by oral tradition, is the pride of a people that is currently experiencing a process of reappropriating its historical and mythological roots.

<br /><br />
Literature
Kyrgyz literature remains mainly oral until the twentieth century, with national epics, warriors and lyrics, such as Manas, Kedei-khan or Kurmanbek.
In the field of written literature, there is the figure of Tchinguiz Aitmatov, author of numerous books, translated into several languages, including Jamilia, The First Master, He was a white ship, A day longer than a century and Dreams Of the she-wolf.
      `,
    },
    turkmenistan: {
      image: tur,
      content: `
      <h1>Turkmenistan</h1>
      <br />
Turkmenistan is a country in Central Asia, surrounded by Afghanistan, Iran, the Caspian Sea, Kazakhstan and Uzbekistan. Its area is 488 100 km² and more than 6 million inhabitants, capital is Ashgabat.
<br /><br />

Turkmenistan is located north of the Kopet-Dag mountain range, between the Caspian Sea and the Amu-Daria River. The country has borders with Kazakhstan and Uzbekistan to the north and northeast, with Iran and Afghanistan to the south and south-east. The most significant geographical feature is the Karakoum Desert which covers 80% of the country's surface area. Most of the mountains of Turkmenistan are inaccessible. The vestiges of the ancient Silk Road go from Central China to the Mediterranean coast, passing through Turkmenistan.
The climate is considered to be dry continental, with moderate winters and little rain, sometimes with some snow. The summers are very hot (in the Karakoum desert-black sand) and dry with winds of sand blowing from the north or east. The Karakum region is characterized by violent sandstorms. There are a few mountains and dunes to the south. The highest point is the AyribabaMountain  with an altitude of 3 139 m. There are two climates on this territory. In the regions near the Caspian Sea, the climate is rather humid, while in thedesert the climate is dry. In winter temperatures can reach -25 ° C and in summer the thermometer readily displays 40 ° C.
The country's population is composed of 85% Turkmen, 5% Uzbeks, 4% Russian and 6% belonging to other ethnic groups. According to data announced by the Turkmen authorities in February 2001, the population is composed of 91% Turkmen, 3% Ukrainians and 2% Russian. Between 1989 and 2001, the number of Turkmen in the country doubled (from 2.5 million to 4.9 million), while the number of Russians decreased by two thirds (from 334,000 to just over 100,000) .
89% of the population is Muslim, 9% Christian Orthodox and 2% of unknown belief. Sunni Islam and the Russian Otrhodox Church are registered as legal religious organizations in Turkmenistan. There are also between 5,000 and 10,000 Zoroastrians, especially present to Mary and Merekut (Mereket), and to the Iranian border.
The official language of the country is Turkmen, a Turkic  language of the family of Altaic languages.
<br /><br />

In 2013, Turkmenistan has three World Heritage sites: Nisa Parthian fortresses, Kunya-Urgench and the ancient Merv Historical and Cultural National Park
The capital of Turkmenistan is famous for the Arc of Neutrality, a very recognizable monument that turns on itself to always face the sun. Other monuments such as the Tower of Independence or the Golden Age pyramid built since independence are surprising in their oriental style. Mosques and markets reveal the Russian architecture of this country. Several museums are worthy of interest. The National Museum located on the outskirts of the city has very rare archaeological collections, including the famous Nisarhytons. The Museum of Turkmen Carpet has a unique collection . A visit by permission allows to admire the splendid ahal-tekés of the national stud farms, equestrian centers of world-wide reputation.
All the vestiges are on the outskirts of the desert and in the ancient ruins such as Mery (Marie), east of Ashgabat. You can get there by plane or by car to discover the Gyz Gala, a fortress with the engraved ramparts and the splendid mausoleum of the Sultan Sanjar.
The remains of Nisa, the former Parthian capital, the Memorial of the Battle of GökDepe and its superb mosque built recently are places of predilection. Not far from Nisa, in Gypak on the site of Merv, is the largest mosque in Central Asia.
The remains of the old Silk Road are to be discovered, it is in the north of the country, near the Uzbek border, the medieval city of Kuniya-Ourgencht is worth a visit. The Caspian Coast is accessible to the port of Tûrkmenbasy where you can bathe.
      `,
    },
    kazakhstan: {
      image: kaz,
      content: `
<h1>Kazakhstan</h1> <br />
Kazakhstan is a country mostly located in northern Central Asia and partly in Eastern Europe. A country of steppes once inhabited by nomadic Turkic-speaking cavalry, it was part of the Russian Empire and then of the Union of Soviet Socialist Republics. It is independent since 1991. Its inhabitants are called Kazakhs. Kazakhstan is the 9th largest country in the world with an area of 2,717,300 square kilometers. This country has more, than 18 million people.
Kazakhstan is often referred to as a "Central Asian country" because of its historical, linguistic, cultural and political ties with the other four former Soviet republics of Asia. The extreme west of the country is generally not considered geographically part of Central Asia but of Europe (according to a generally accepted convention, the European continent stops at the Ural Mountains and then at the river of the same name). Kazakhstan is thus located on two continents (although the European part is desert and very sparsely populated).
Kazakhstan is bordered by two closed seas: the Caspian Sea (1,894 km of coastline) and the Aral Sea, now separated into three parts (1,070 km of coastline): the northern part (North Sea of Aral) Seems to be saved from drying up, the southern part (Big Sea) split into two, the western part being drying out very quickly and without viable solution in the long term. The highest point is Khan Tengri at 7,010 meters.
Three sites in Kazakhstan are on the UNESCO World Heritage List: Tamgaly the petroglyph site of the Bronze Age, 120 km west of Almaty, the mausoleum of Khoja Ahmed Yasavi in Turkestan, Tamerlane, and Saryarka, a nature reserve (steppes and lakes).
There are three cities with special status: Almaty, the former capital and Astana, the new capital and Baikonur, the city of the “cosmodrome”.
Astana become a new city and the new capital, after the independence of the country. This city has more than 280 000 inhabitants, which offers very surprising discoveries due to the economic evolutions. The highlights of the city are the art museums, the youth palace and the dramatic theater.
The big city Almaty is very old and very well known in the Central Asia. In this city, there are many tourist curiosities like Park of the 28 guards of Panfilov, Kok-Tobe, Cathedral Zenkov, TV tower etc.
The Park of the 28 guards of Panfilov is a park located in the city center. After the founding of the town of Almaty, this area served as a cemetery. It was transformed into a park in 1870. On the 100th anniversary of the Russian poet Alexander Pushkin, the park was renamed as Pushkin Park, which became the Panfilov Park of 28 Guards in memory of the guards of General Ivan Panfilov. In 1975, the park was renovated and a memorial was added for the soldiers who fell in the Second World War.
Kok-Tobe is a mountain and the highest point of Almaty in Kazakhstan. The KokTobe culminates at 1100 meters above sea level. It is a popular leisure place, where there is a small zoo-attraction for children. It also carries the television tower of Almaty of 372 meters of height. The Kok-Tobe is connected to the city center by a cable car.
The Almaty television tower built between 1975 – 1983 and 371.5 m in height. It is located at the top of KokTobe at the southeast of Almaty. Unlike similar television towers, it has a tubular metallic structure in order to resist systemic shaking. It is the tallest metal tubular structure in the world.
The Zenkov Cathedral with its colorful woodwork offers an interesting and surprising architecture both outside and inside, entirely built of wood without any nails.
Not far from Almaty, after a walk in the park along the Ichim, skier lovers will enjoy the ice rink in the Medeo gorge and the Almaty ski resort, along the Kyrgyz border, 15 km from the city.
Baikonur formerly Leninsk, it is a city of Kazakhstan which was created in 1995 and administered by Russia through a bilateral agreement until 2050. It developed around the Baikonur cosmodrome and was officially renamed Baikonur on 20 December 1995.
<br />
<br />
The actual town of Baikonur is actually a mining town located a few hundred miles northeast of the new Baikonur. The new city was so called to create confusion and to keep secret of the actual location of the cosmodrome from which the Soviet rockets were launched.
      `,
    },
    thegreatsilkroad: {
      image: road,
      content: `
      <h1>
        The Silk Road
      </h1>
      The Silk Road is an ancient network of trade routes between Asia and Europe, linking the city of Chang'an (now Xi'an) in China with the city of Antioch in medieval Syria(today in Turkey). It takes its name from the most precious goods which passed in transit there.merchandise that passes through it: silk.
The Silk Road was a bundle of tracks through which many goods transited, and which monopolized East-West trade for centuries. The oldest known traces of the Silk Road, as a channel of communication with the Western populations, go back to "2000 before our era at least". It developed mainly under the Han dynasty (221 BC - 220 AD), especially Han Wudi. Then under the Tang dynasty (618-907). From the fifteenth century, the silk road was gradually abandoned, the instability of the Turkish-Byzantine wars and the fall of Constantinople led the Westerners to seek a new maritime route to the Indies. The abandonment of the Silk Road thus corresponds to the beginning of the period of "Great Discoveries" during which the techniques of maritime transport are becoming more and more efficient. On the Chinese side, the emperors Ming Yongle, then Ming Xuanzong , at the same time, make the Admiral Zheng He responsible of similar maritime expeditions.
The road owes its name to the most expensive goods which passed in transit there.: silk, of which the Chinese were for a long time the only ones to hold the secret of manufacture. This denomination, created in the nineteenth century, is due to the German geographer Ferdinand von Richthofen.
History
The prehistorian André Leroi-Gourhan considers this road as a space for active exchanges since the Palaeolithic.
<br />
<br />
Like the former Jade Route, which vestiges date of 7,000 years, it is however  evoked in the Chinese chronicles only from the IIth century BC . . This road is also mentionned by Michèle Pirazzoli-t'Serstevens "since 2000 before our era at least" as a way of passage to populations of agro-pastoralists of the Eurasian steppes, especially horse breeders . And studies published in 2012 and 2014 on the culture of Qijia demonstrated that these exchanges concerned the contribution of the technology of the bronze in China. 
This itinerary would be the result of the curiosity of the Chinese Emperor Wudi (141-87 BC) of the Han dynasty for the distant civilized peoples who were told to live in western countries, beyond the  Barbarian tribes.
The Greeks, then the Romans, began to speak of the "Land of the Seres" from the fourth century BC to designate China. By the beginning of the Christian era, the Romans became great lovers of silk after having acquiredit from the Parthians who are then the organizers of this trade.
Many other products travel on the same routes: precious stones, porcelain, linen or woolen materials , jade, amber, ivory, lacquer, spices, glass, coral, precious metals and weapons.
The Sogdians, an Indo-European people of Scythian origin established in Sogdiana,(in the west current  Uzbekistan )and neighboring countries, have assured since the antiquity and especially between the 6th and the 8th century the Routes of Central Asia between China, Persia, the Western world and India, and in particular the Silk Road. Polyglots, they have supplied many spies, translators, or diplomatic agents to whom was willing to employ them. Masters of the Transoxian (region between the Amu-Daria and Syr-Daria rivers), they took  many taxes which enriched their prestigious cities of Samarkand and Bukhara. They took numerous taxes which enriched their prestigious quoted from Samarkand and Bukhara. The majority of the caravanserais of Central Asia were  Sodgian establishments . They also contributed to the broadcasting of religions in China such  as Nestorianisme,  Manicheanism and  Buddhism.

<br />
<br />
Xi'an is, on the Chinese side, the eastern end of the Silk Road. The route was considered officially "opened" by the Chinese general Zhang Qian in the 2nd century BC. The Han emperors besieged by nomadic barbarians (the Xiongnu) decided to open up to commerce and to the outside world the silk, then state monopoly: They indeed need allies and horses.
At the height of the Dynasty Tang (618-907), the capital city of Chang-An (Xi'an) shelters two million inhabitants, ten times more than Constantinople or Cordoba, a thousand times more than Aix-la -Chapelle in the time of Charlemagne.
Caravan convoys leave from Xi'an, Lanzhou or Xining and take the Gansu corridor. They then bypass the desert of the Taklamakan, one of the most arid in the world, either by way of the north or by the south. These two possible routes each have different variants, and are marked out with cities and caravanserais, whose names and importance vary in the course of times. All the tracks progress along a string of oasis-fortresses located on the outskirts of the desert and at the foot of the high mountains of the Tian Shanou of the Kunlun:                                                                       - for the northern route: the sites of Tourfan, Ürümqi, Karachahr, Koutcha, Aksou, Kachgar;                              - for the southern route: the sites of Dunhuang, Miran, Cherchen, Niya, Khotan, Yarkand.
From Kachgar and Yarkand, the trails join Persia or India through the high mountains of Central Asia (Pamir, Hindū-Kūsh and Karakoram), then by Sogdiana (Samarkand, Bukhara, Merv), Bactria (Balkh) or Kashmir (Srinagar). In fact, very few people had the opportunity to travel the entire journey: Marco Polo, his father and his uncle were among them.
Goods from the East and the West are exchanged in the oases, which have become important trading posts frequented not only by merchants but also by pilgrims, soldiers and spies.
<br />
<br />
At its peak, the Silk Road connects the western Empire - the Byzantine Empire - with a vast area ranging from the Three Kingdoms to the territories of the Yuan dynasty in the Chinese zone.
The length of the route, the various intermediaries, the numerous dangers incurred by the travelers on these roads subjected to the incursions of belligerent peoples and the attacks of the brigands (especially after the dislocation of the Mongol empire in the fourteenth century and the opening by the Europeans Of the Spice Maritime Route), will ultimately contribute to the decline of the land route of the "Silk Road". Thus, for example, the region of "Chinese Turkestan" is under the theoretical sovereignty of the emperor of China, but this domination is in reality subject to frequent eclipses, due to its great distance and the difficulty of maintaining sufficient garrisons there.
The extreme rigor of the climate (torrid in summer and icy in winter) complicates the transport which progresses cahin-caha for sometimes more than a year, on yaks or caravans from fifty to thousand camels.
All in all, these factors increase the price of products that transit between the Far East and the Mediterranean basin. These reasons incite the Europeans to seek and practice a sea route (also called spice routes or "perfume routes") to trade with the countries of the East.
On the other hand, Chinese silks are of less interest to Europeans because silk manufacturing is developing in Europe itself.
In the 15th century, the Silk Road was gradually abandoned.
      `,
    },
    tashkent: {
      image: tosh,
      content: `
<h1>Tashkent</h1><br />
Tashkent is one of the ancient cities on the Great Silk Road, with more than 2,200 years of history. The first information about the city appeared in the IIth century BC in oriental sources where it bore different names: Uni, Shash, Shash-Tepa. People began to settle on the site of today’sTashkent several centuries ago in the Stone Age. Thanks to its favorable location and the mild climate, the Tashkent oasis has always been the prey for invaders: shakhinshakhs, Alexander the Great, nomads (yuetchji, white huns), Arabs. For a long time until the Arab conquest in the 8th century. The local inhabitants were Zoroastrians. So far, archaeologists have found monuments of this time - fortified colonies-castles, temples of Fire and Zoroastrian divinities, as well as ossuaries (clay vases full of human bones) on the territory of the capital and beyond its boundaries.The most important monument of that time is the  "Ming Urik", representing ruins of the ancient city Chach,  which existed from the Ith century to the 8th century of our era.
After the destruction of Chach by the armies of Kuteyba ibn Muslim the city was built in another place - on the hill between the modern squares of Khadra, Eski-Djuva and Tchorsu. The main square of the Ancient City - Tchorsu - appeared in the 9th century and became, in time, the original transport hub where trade routes flocked from all the major gates of the city. Today you can buy handmade magnificent souvenirs of clays, metal, khan-atlas, jewelry. But the most essential thing by which Tchorsu is celebrated today is the large market with an abundance of spices, vegetables, fruits, whose disparate and perfumed ranks delight guests with diversity and affordable prices in all seasons of the year.
In the XVI century was built a magnificent monument of medieval architecture - the madrasa Kukeldash, the largest Islamic institute among the 17 such establishments existing in Tashkent. Not far from the madrasa is the Friday mosquee which shines through its cupolas. It bears the name of the most famous action man of the time,Temurides KhodjaAkhrar (1404-1490), chief cheykh of the powerful order of dervishsnakchbandi. Here, not far from Tchorsu, is perhaps the most historical place in Tashkent, the Khast-Imam Square, the religious center of the Old City. The place includes the madrasa Barak-Khan (16th century), where you can find the oldest Koranic manuscript of the Khalif Osman, holy book of the Muslims, the rarest monument in Islamic history and culture from the middle of the VIIth century, the Madrasa Tilla-Cheykh, mausoleum of saint Abu-Bakr Kaffali Shashi, protector of Tashkent, and the Imam al-Bukhari Islamic Institute.
In Tashkent and its surroundings, there are still some mausoleums and ensembles where respected Muslims and just men are buried. One of them is the ensemble Zangi-Ota, composed of the large garden, mosquee, madrasa, minaret and mausoleum of the woman of the saint Ambar Bibi, built in the XIV-XIX centuries. The beginning of the construction of the whole was initiated by Amir Timour (Tamerlane) but its sight of today was only obtained in the beginning of the latest century, when the original minaret was constructed, on the order of  Tamerlane at the end of the 14th century. Another interesting monument was the Cheykhantakhour Ensemble, dedicated to Cheykh Khavendi Takhour, a prominent figure of the Middle Ages, a descendant of the Caliph Omar.
<br />
<br />
Tashkent remembers the time of the blossoming of the Russian Empire when the capital was a part of the governorship of Turkéstan. From this period remains a legacy of architectural monuments of the European masters - the palace of Romanoff, built according to the project of Gueyntselman and Benoit in 1891. The former residence of the exiled prince Nikolai Konstantinovich Romanov is located in the center of the city next to the Square of Amir Temour. Also preserved are such buildings as the Corpus de Cadet, built in 1905 (now the 1st State Institute of Medicine in Tashkent), the Mariinskiy Women's School, built in 1910 (today the building of the Embassy of France in Uzbekistan), Gymnasium feminine, built in 1913 (now Westminster University), Real school, built in 1898 (today the Agency of external economic relations).
The beginning of the reconstruction of Tashkent was marked by the destructive tremor of 1966, which changed the appearance of the city. The single storey clay houses were changed by the Soviet multi-storey buildings and entire living quarters, typical bed-areas. In the years of Independence the global project has transformed several districts of the city into centers with modern infrastructure and transport denouements. The greatest interest of contemporary curiosities is represented by the Independence Square, Squaire, Temuride Museum, Bochech Academy of Opera and Ballet AlisherNavoi (1939), Locomotive Museum, Tashkent Zoo, Memorial Victims of repression and the Bounedkor Square, as well as the parks of distractions and rest: Aquaparc," Tashkent Land ", Botanical Garden.
In truth, Tashkent is a "star of the East”–“the capital of friendship and peoples"!
      `,
    },
    samarkand: {
      image,
      content: `

<h1>Samarkand</h1>
<br />
<br />
Samarkand is located in the valley of the Zarafshan River. It is the second largest city in Uzbekistan and has the same dating as Babylon or Rome. The history of Samarkand began about 2,500 years ago and was an active witness to historical achievements during the conquests of Alexander the Great, the Arab conquests, the invasions of Genghis Khan and later Tamerlane. This is how the culture of Samarkand developed and it is the example of a mix between Iranians, Indians, and Mongols at the confluence of the cultures of the East and the West. The magnificent and majestic Samarkand has a seduction and an extraordinary attractiveness. The poets and historians of antiquity called it "Eastern Rome, the beauty of sublunary countries, the Oriental pearl of the Muslim world." Its advantageous geographical position in the valley of the Zarafshan offered Samarkand the first place of the cities of Central Asia.
Like other similar centers of concentration of human activity - Babylon and Memphis, Athens or Rome, Alexandria or Byzantium-Samarkand experienced great upheavals throughout history.
<br />
<br />
The history of Samarkand has its roots thousands of years ago. Archeological discoveries and dating methods make it possible to establish that men were present in the region thousands of years before Christ. A particularly advantageous geographical location, a relatively temperate climate, an abundance of natural sources, "obi rakhmat "(blessing water), the proximity of mountains with rich game, close to the Zarafshan River - all this always contributes to favorable conditions for the establishment of a society or a human community. Solid walls of fortifications, majestic buildings, sumptuous palaces and solemn temples have been established in Samarkand for several centuries before our era.  Already at that time, Samarkand was an important city with a large population, developing crafts, commerce and culture. It enjoyed citadel renowned impregnable and outer walls of 10 kilometers and a half long.
Thanks to new archaeological discoveries, it was possible to realize that the history of Samarkand dates back much earlier than the Greek victories of the Macedonian. It was already a city developed under the Akhemenides (6-4th centuries BC). This is why the "age" of Samarkand dates chronologically to about 2500 years with its foundation on the hill of Afrosiob, although its history is undoubtedly older. During its history, the city encountered the savages Saks and Massagetes, the iron columns of the Macedonian Greeks, the hordes of the cruel Karakitays, it underwent dramatically the invasions of the fanatical Arab leaders. The sanguinary hordes of Genghis Khan spread in the peace of the houses, bringing with them the fire and the sword. Samarkand became the capital of an immense Temurids empire stretching from the Indus to the shores of the Bosphorus under the mighty and cruel Amir Temur (Tamerlane).
After the death of Tamerlane, his empire went to the hands of his children and grandchildren and broke up. Samarkand and its surroundings were attributed to Ulugbek, the grandson of Temur. Ulugbek conducted Samarkand for 40 years. Ulugbek all this time was a peaceful leader who refused to participate in aggressive campaigns to dominate and expand his state. He visited other countries many times but for an intellectual purpose to learn their traditions, cultures and sciences. He was himself a great scholar, astronomer and mathematician. That is why he invited to his court and surrounded himself with many scholars and foreign scholars.

<br />
<br />
In reality, the grandson of Tamerlane was called Mukhammad Taragay, and his grandmother, the wife of Tamerlane, gave him the name of Ulugbek meaning "the Great" because from his birth he appeared as a boy with great intellectual dispositions.From now on, Samarkand like most of the cities of Central Asia is divided into two parts the ancient Samarkand and the new Samarkand. The most recent is that of administrative centers, industrial as well as cultural, with institutions renowned for their teaching. There are 5 of them, specialized in medicine, agriculture, architecture, commerce and foreign languages. There is also a university with more than 10 faculties.
Welcome to Samarkand in the mirror of the world.
      `,
    },
    bukhara: {
      image: bukh,
      content: `
      <h1>
Bukhara
      </h1>
      <br />
      <br />
Bukhara is a city in Uzbekistan, located in the center-south of the country. There are two hypotheses about the etymology of the word: Buqaraq of Sogdian which means "lucky place" and Vihara in Sanskrit means a Buddhist monastery. It is the capital of the province of Bukhara. It is located on the lower reaches of the Zarafshan River, in the middle of an oasis on the eastern edge of the Kyzyl Kum Desert. It was connected by caravan routes to Merv and to the valleys of the Amu-Daria and Syr-Daria rivers. The city has about 240,000 inhabitants. The Bukhariotes are Turkish-speakers of the Uzbek language, as in the majority of the country, but it is also Tajik language (Persian variant). There is also a Jewish community, called Bukhara Jews, once important, now almost disappeared.
The majority of the population is of Sunni religion with some Shiites. There is a Russian Orthodox minority and a few hundred Catholics in the parish of Saint-André.
At the heart of the Silk Road and the Persian kingdom, Bukhara and Samarkand, Russian protectorates since the mid-nineteenth century, have been linked to Bolshevik Russia in 1920 and the Uzbek Soviet Socialist Republic under Stalin.
The oasis of Bukhara, active since antiquity, soon attracted the covetousness of its neighboring states: already in the 6th century BC. AD, the kings of Persia, of whom later Darius had invaded it; Then in 329 BC. AD, after the invasion of Iran by Alexander the Great, the territory of Sogdiana, of which Bukhara belonged, became a Greek possession until the second century BC. J.-C .. Between the end of the 1st century BC. AD and half of the fourth century, Bukhara is part of the kingdom of Kushan. It was at the beginning of this period that commerce began with the countries of the West and those of the East. In the fifth century, Bukhara was integrated into the State of the Hephtalites. Bukhara was occupied in 710 by the Arab-Islamic troops during the Umayyad Caliphate: General Qutayba ibn Muslim established his authority on a local prince. The heir to the throne of Bukhara Tougchada, quickly rallied to Islam and reign from 710 to 739. The city, which became a great cultural center, then part of Khorasan province, whose capital was Merv . At that time, the city occupied an area of about 30 to 35 hectares and was surrounded by a rampart with seven access gates. The streets were oriented along the cardinal points and organized like a chessboard.
In the ninth century, the city became the capital of the Persian Samanid dynasty (875-999) and the appearance of the city is changed again: eleven gateways are present, "rabad" (suburb) extends around the inner part ( "shakhristan"), the population increases significantly, occupations determine the place of residence, many mosques and mausoleums were built (including Samanids mausoleum).
Scientists, poets, writers lived in Bukhara in the tenth century: the great physician and philosopher Avicenna (Abu Ali Ibn Sina), born near (980-1037), the poet Rudaki and encyclopedic scholar al-Biruni (mathematician, physicist, Astronomer, historian, etc.), born near Khiva (973-1048), who corresponded with Avicenna. Bukhara is the cradle of al-Bukhârî (810-870), an important compiler of hadiths (collections of words attributed to Muhammad).
In 999, the city was invaded by the Qarakhanids. At that time, the monuments still visible today were built: the minaret of Arslan-Khana (Kalyan Minaret) Mosque Magoki-Attari Mosque of Namezgokh, mausoleum ChashmaAyub (the source Of Job).
Genghis Khan seized the city in 1220. The city was integrated into the Timurid Empire in 1370. The city lost its political importance in favor of Samarkand but in 1506 the Chaybanid dynasty seized Bukhara and, In the second half of the 16th century, Abdullah Khan made the city the political center of the khanate of Bukhara.
The khanate of Bukhara (1599-1920), which included Samarkand, was one of the three Uzbek khanates resulting from the dislocation of the khanate of Djaghatai with those of Khiva and Kokand.
      <br />
      <br />
From 1599, a new dynasty began to reign, the Astrakhanides, soon shaken by important internal quarrels. Then, in 1740, the king of Persia Nadir Shah invaded the khanate of Bukhara, appointed as governor Muhammed-Rakhim-Khan; The latter proclaimed himself emir, founded a new dynasty, the Manghit (1753-1920). This period is a period of decline for Bukhara.
Bukhara fell under the regime of the Russian protectorate in 1868, before finally losing its independence with the capture of the city by the Red Army on 2 September 1920.
In the course of its history, Bukhara appears above all as a religious city, less marked by scientific life than Samarkand.
Bukhara is also the generic name for Turkmen carpets, whose main trading center is the Ashgabat Bazaar. These carpets are subdivided into teké and yomouth, names of the two main families of Turkmen tribes. Their very typical style is easily recognizable because the decoration of the field is constituted by the repetition of the same decorative motive , the”goul”, emblem of the tribe of the weaver.
The one hundred and forty monuments protected by UNESCO testify to the historical and cultural richness of this city. After Independence, the city of Bukhara is recognized by the world as "The Pearl of Islam.
      `,
    },
    khiva: {
      image: khiv,
      content: `
      <h1>
Khiva
      </h1>
Khiva is a city of Uzbekistan, located at the north-west of this country in an oasis,at469 kilometers from Bukhara. Its ancient name, Khwarezm (or Khorezm, capital of the ancient Chorésmie of Herodotus), is the one of the historical region from which it was the capital.
Khiva is located 40 km from the Amu-Daria River, at the north of the Urgench region, to the south-east of Turkmenistan. The southern part of the city borders the Karakoum desert. The population of Khiva, whose territory is 883, exceeds 49,200 inhabitants. The climate is continental, marked by the heat of a long summer, the rigor of a short winter and the scarcity of rainfall.
According to the legend, Khiva was founded at the place where Sem (Noah's son) dug the well of Keivah. Khiva was the capital of the khanate of Khiva (which was in the historical region of Khorezm, for a long time vassal kingdom of Persia) from the sixteenth century to the early twentieth century. The khanate of Khiva (1512-1920) was one of the three Uzbek khanates resulting from the dislocation of the khanate of Jaghatai, with those of Bukhara (which included Samarkand) and Kokand.
Thisvery arid region developed a complex irrigation system from the 2nd millennium BC. And was visited by various conquerors: Persians, Greeks, Arabs, Mongols, Uzbeks. Russia established a protectorate of the Khivakhanate in 1873 with the peace agreement of Guendeman.
It is the birthplace of the mathematician Abu Abdallah Muḥammad Ben Mūsa'al-Khuwārizmī (around 780-850), also called al-Khwarizmi, al-Khorezmi (ie "Khorézmien"). It was also in the neighborhood that the great scientistencyclopaedist Al-Biruni was born (973-1048).
<br/>
<br/>
Itchan Kala ( "Inner City", in Uzbek), which covers 26 hectares, is the inner city of Khiva, protected behind brick walls of about ten meters high, and part of the ancient oasis, It was the final stage of the caravaneers before crossing the desert in the direction of the Caspian Sea and Persia. Although it has conserved few ancient monuments, Itchan Kala is a coherent and well preserved example of Central Asian Muslim architecture with remarkable buildings such as the Djouma mosque, mausoleums and medersas, as well as the two magnificent palaces built at the beginning of the XIXth century by the khan Alla-Kouli.
Since 1990, the Itchan Kala district of Khiva has been a UNESCO World Heritage Site. Most organizations and public administrations, including khokimiat (town hall), tchaikhana (tea houses), hotels, banks and post offices, are located on NajmiddinKoubro, Amir Temour or Ferouz streets. Medical facilities such as the central hospital, maternity, pediatric polyclinic, medical college are located at the west of the city.
The carpet factory, the ceramic products factory, the garment factory, the souvenir factory are working there. Twelve high schools, five children's art centers, puppet theater, stadiums, parks are open to accommodate children.
9 villages, territory of 45 773 hectares, belong to the region of Khiva whose population reaches 116 249 inhabitants. The cultivated agricultural area occupies 14,321 hectares of this territory. In the agricultural field of Khorezm, it is mainly the cultivation of cotton and wheat.
<br/>
<br/>
Khiva is also a craft city. The association of craftsmen of Khorezm maintains and develops the crafts of woodcarving and ceramics. The characteristic of Khiva woodcarving is the trimming of doors, columns, furniture. The master sculptors use elm wood and other local trees. For the preservation of the surface, cotton and lin oils are employed. Painting in Khiva is also developed. The masters of this type of art take part in the restoration of historic monuments and in the decoration of modern buildings.
Its monuments obviously allow an important tourism activity, and Khiva is one of the most visited places of the country.
In short, Khiva is an open-air museum city!

      `,
    },
    shakhrisabz: {
      image: shak,
      content: `
      <h1>Shakhrisabz</h1>
      <br /><br />
Shakhrisabz, meaning "green city", is a city in Uzbekistan, the native land of Tamerlane, south of the city of Samarkand. Its ancient name was Kesh.
The historical center of Shakhrisabz has exceptional monumental buildings and ancient districts, testifying to the secular development of the city, especially its peak, under the reign of Tamerlane (Amir Timur) and Timurids, from the 15th to the 16th century.
Since 1993, Shakhrisabz has been a UNESCO World Heritage Site.
      <br /><br />

Formerly known as Kash, Shahrisabz is one of the oldest cities in Central Asia. It was founded more than 2,700 years ago. From the 6th to the 4th century it was part of the Achaemenid Empire.
Ptolemy, general of Alexander the Great, captured Bessos, the satrap of Bactria, and pretended to the throne of Persia, thus putting an end to the Achaemenid Empire. Alexander the Great spent a few winters at Kash; There he met his wife Roxanne in 328-327 BC. J.-C.
In 710, the city was conquered by the Arabs.
      <br /><br />

Shakhrisab, the green city, is the name that Tamerlan gave to the ancient Kash where he was born on April 9, 1336. During the early years of the Timurid dynasty.  However, during the Timurid period, the center of activity moved to Samarkand.
According to legend, the Khan of Bukhara, Abdulla Khan II destroyed the city in a fit of rage following the death of his horse, due to exhaustion, approaching the city.
The city fought for its autonomy during the domination of Bukhara. The Russians assisted the Emir of Bukhara in conquering the city in 1870.
Monuments
Ak Saray (or literally the White Palace) is a palace built at the beginning of the Timurid period, between 1380 and 1396 and 1404, under the orders of Timur.
Dorout Tilavat
This set includes: The Kok Gumbaz Mosque was built in 1437 by Ulugh Beg to pay tribute to his father Shah Rukh. Its name means Blue Dome, in reference to the immense dome, covered with blue ceramic tiles, which caps the building. The main building consists of a square room of about 12 meters of side, which supports the dome by means of corner trunks. Three of the axes of the room overlook openings, the fourth being constituted by the mihrab. The drum of the cupola bears the inscription in white enamelled tiles: "Sovereignty belongs to Allah, wealth belongs to Allah". The mausoleum Chamseddin Kulal was built in 1372-1374 by Timur. Chamseddin Kulal was a Sufi, spiritual adviser to Taragay, Timur’s father.
The Goumbazi-Sayyidan mausoleum (1437-1438) was used to house the sepulture of the parents and descendants of Ulugh Beg. It has the shape of a cube surmounted by a dome resting on a drum. On the main façade, there are remains of mosaics in blue and white bricks, on a background of ordinary bricks in ocher color.
Dorus Saodat
The ensemble Dorus Saodat, the seat of sovereignty, is a group now partially destroyed; It is estimated that the main building was 70 x 90 m. The gate was flanked by two pillars. The left pillar houses the mausoleum of Djahangir, who died in 1376, while the right pillar, which was destroyed, sheltered the tomb of Omar Cheikh, Timur's second son, who died in 1391. The site today includes:
The mausoleum of Djahangir houses the tomb of the eldest son, and preferred son, of Tamerlane, who died at the age of 22 as a result of a horse fall. A conical dome rests on a 16-sided drum.
      <br /><br />

The crypt of Tamerlane was discovered by Soviet archaeologists in 1943. The room consists of a marble sarcophagus on which the inscriptions reveal the intended use of the tomb for Tamerlane (Timur in Turkish languages). The sarcophagus is covered with a marble plaque 11 cm thick, with five rings attached to the corners and middle. The piece is simple, with the exception of Qur'anic quotations on the arches: The supremacy belongs to Allah alone. He is eternal and All good is in the hands of Allah, He is all-powerful.
In fact, Tamerlane was buried in Samarkand, at the Gur Emir mausoleum. His tomb at Shahrisabz contained two bodies, those of a man and a woman, which have not yet been identified.
The Hazrat-i Imam mosque, adjacent to the mausoleum of Djahanjir, takes its name from a venerated person who lived in the eighth century, whose body was brought back from Baghdad by Timur.
The statue of Tamerlane is located behind Ak Saray. Its construction dates only in 2003.
      `,
    },
    karakalpakstan: {
      image: kar,
      content: `
      <h1>
        Noukous
      </h1>
      Noukous is a city in Uzbekistan and the capital of autonomous Republic of Karakalpakistan. Noukous is located in western Uzbekistan, 810 km from Tashkent. It is close to the historical town of Kounya-Urgench, located in present-day Turkmenistan. Noukous is the ancient gateway to the Aral Sea, which original shoreline was 170 km to the north, now increasingly remote because of the gradual decline in the area of Aral sea.
It is best known for its two main museums:
• The Igor Savitsky Museum brings together a collection of modern paintings by Russian artists from the period 1918-1935, taken away from Moscow by the conservative Savitsky, which prevented their destruction by Stalin.
• The Karakalpakistan State Museum presents the archaeological heritage of the region.
<br />
<br />
Ayaz Kala and Tuprak kala
The lands between the town of Urgench, the chief town of Khorezm province, and the Aral Sea were inhabited for millennia by tribes who had created great civilizations. These civilizations could not disappear without leaving the testimony of their culture and today we know their culture well enough thanks to the excavations of the cities and the fortresses and the study of the objects of material culture found during these prospections.
Archaeologists call Kala these "desert castles", the overwhelming majority of which today lies on the right bank of the Amu-Daria, in Karakalpakstan, an autonomous republic that is part of Uzbekistan.
The most interesting Kala and whose access is fairly easy are the following: 
-Toprak Kala (1st century BC - 4th century AD) which was the capital of the region until the end of the 3rd century. The residence of the governors (350x500m), the nucleus of the city, built on an artificial platform, dominated the rectangular city. The excavations made it possible to discover texts written on parchment, copper, wood and clay tablet; Wall paintings depicting dancing figures; Tigers; Griffonts; statues; Etc. Excavations also uncovered three main halls: the Hall of Kings, the Hall of Victories with the status of Nikè, the Hall of the Black Guards whose physical appearance recalls the Indian type.
Toprak Kala is located 10 km west of the town of Bustan.
-Kyzyl Kala, close to Toprak Kala.
-Ayaz Kala (4th-7th centuries AD) is located 40 km from Toprak Kala and consists of a fortress on a natural eminence, a feudal castle and the ruins of a large house . The fortifications of the first two are in very good condition. Not far from Ayaz Kala, a yurt camp offers hospitality to tourists.
The Aral Sea
Fifty years ago, the Aral Sea was the fourth largest lake on the planet. Today, for the first time in 600 years, a part of the basin is dried out.
The Aral Sea is actually ... a lake. A saline lake in Central Asia, straddling Kazakhstan and Uzbekistan. In 1960, this lake fed by the rivers Amu-Daria and Syr-Daria was the fourth largest in the world. Its surface area was 67,300 km2, the equivalent of twice Belgium! Many cities thrived around its shores, notably owing  to fishing. Today, with the reduction of the Aral Sea, there are now only about 4,000 tonnes of fish caught each year, as opposed to several hundred thousand in the 1950s, and many villages have been abandoned .
In 1960, the Soviets decided to cultivate the vast steppes of Kazakhstan and Uzbekistan. Objective: to transform the desert steppes into cotton and wheat fields. They then diverted some of the rivers to irrigate their crops and thus deprived the Aral Sea of 20 to 60 km3 of water each year. By 1970, the Aral Sea had already lost 9 / 10th of its surface. As a result, the salinity rate has increased and millions of fish have died as a result of drying out.

<br />
<br />


In August 2000, two main parts  of water still existed: one in the north in Kazakhstan and the other in the south in Uzbekistan. By 2014, at the same time, the southern lobe has almost completely disappeared. Why ? Drained from exhaustion for irrigation of cotton crops, dependent on increasingly severe droughts and rising temperatures, the lake is no longer inundated by the rains and melting snow that once flowed from the Pamir massif .
In Kazakhstan, however, the lake is getting better and better. Its level has risen six meters since 2005, thanks to the recover project financed by the World Bank. The salinity rate of the northern part of the Aral Sea also declined, again favoring aquatic life.
The twenty-eight endemic fish species of the lake have disappeared, killed by the colossal amounts of pesticides accumulated at the bottom of the basin.
With the evaporation of water, these pesticides now cover the dried bed of the Aral Sea. Trained several kilometers away from the shores by violent sandstorms, they also contaminated the surrounding populations. In this region, the infant mortality rate is one of the highest in the world, cancer and anemia cases are constantly increasing.
      `,
    },
    nurata: {
      image: nur,
      content: `
<h1>
      Nourata
</h1><br/><br/>
      Nourata is a town in the province of Navoi, Uzbekistan. 
      <br/><br/>
      It is located 314 km south-west of Tashkent. Its population is estimated at around 35,000 inhabitants.
      <br/><br/>
Nourata is known for its water source, considered as sacred by the Muslims, and for the ruins of a fortress built by the army of Alexander the Great.
The sacred source Tchachma is still today a place of pilgrimage for Muslims.
<br/><br/>
 This place is famous because of the source that would have appeared when Ali, the son-in-law of the Prophet Muhammad, would have struck the ground with a stick. The complex includes a well, a 16th-century mosque, known as  Panjvakhta (five prayers), built during the reign of Abdullah Khan II and a fourteenth-century Tchil Ustun mosque which has been builtat the exact place of the source. The dome of the mosque, with its 16 meters diameter, is one of the largest in Central Asia. Fishes, considered as sacred, swim with in all the spring spreads.
      `,
    },
    ferghanavalley: {
      image: fergana,
      content: `
      <h1>Ferghana Valley</h1>
Ferghana Valley - it is a unique place in Central Asia, where one can see the mountains, steppes and fields. The valley is completely surrounded by the Tyan Shan Mountains. The only way out of the valley is " The Bekabad Gates", 20 meters wide. The area of the valley is 77.9 m2, and the height is 300 - 1000 m above sea level. The valley consists of three provinces of Uzbekistan: Ferghana, Andijan and Namangan.
Ferghana province located in theEast of Uzbekistan with 182 800 inhabitants in 1999 and 234 700 inhabitants in 2010. With Marguilan city it creates a large agglomeration of more than 500 000 people. The area is rich with tourist attractions, such as: the Ferghana regional museum, the old Ferghana fortress, the regional theater (located in the former residence of the governor), the officers' house (formerly the Military Assembly) and so on.
Kokand is an important city in the Ferghana province.
<br/>
<br/>
It is located in the southwest part of the Ferghana valley. Most of the monuments of this city date from the 18th - 19th centuries at the time of the strong development of the Khanate of Kokand. Kokand is alsofull of monuments,  such asKhodayarkhan Palace, built in the 19th century, which has become the symbol of the whole valley: the Kokand Mosque  is very large and beautiful with the 98 columns.
Marguilan town in Ferghana province of Uzbekistan located in Ferghana valley. It is located 12 km northwest from Ferghana and 223 km southeast from Tashkent. With Ferghana it creates a large agglomeration of more than 500 000 inhabitants. The population of the town was 145,000 in 1994 and 291,713 in 2013. The city is a home for the largest traditional silk factory in Uzbekistan, the Yodgorlik Silk Factory, where more than 2,000 people working. All the silk produced in the traditional way, it is annual production about 250,000 m2 of silk fabric of the highest quality. The neighboring silk factory of Marguilanhas 15,000 working people and modern machinery: it produces about 22 million square meters per year. It is unknown when the secret of the silk manufacture appeared in Ferghana valley, but Marguilan was definitely active in this industry from ancient times.
Richtan is a city in Uzbekistan located in the southwest of Ferghana valley.
<br/>
<br/>
s
It had 49,200 inhabitants in 2013. It is one of the oldest cities of the Silk Road, since it has been first mentioned in the ninth century under the name of Roch or Rech. Richtan located on the southwest of Ferghana Valley in the foothills of the Alai Mountains at the height of 482 meters above sea level on the right bank of the Sokh River, not far from the border with Kyrgyzstan. Richtan is one of the most famous centers of ceramic production in Uzbekistan. It manufacture, according to tradition, was introduced in the 12th century, based on a rich vein of high-quality clay at the depth of about 1.5 m. In addition to clay, Richtan craftsmen use quartz and other minerals found out in the mountains around. At the turn of the nineteenth century and the twentieth century, almost all the workforce lived on pottery. Today, there are about two thousand artisans who produce (using traditional techniques) more than 5 million pieces per year. The typical decoration consists of blue and gray lines that are well known as Iskor.
Andijan province is located in the Ferghana Valley, in the east of the country, near the border with Kyrgyzstan. Its population is estimated at 380,000 inhabitants in 2014.Andijan - the fatherland of Babour - a great poet and politician, one of the last descendants of the Timurid dynasty and founder of the Great Mogul dynasty. There are also historical monuments such as the Djami mosque, the Babour museum, the madrassah and the "hunarmandtchilik" square - an open-air market for artisans working on metal, wood and weavers.

Namangan is a city in Uzbekistan and the administrative capital of Namangan province. It is located in the east of the country, on the northern part of Ferghana valley. Its population is about 449,200 in 2014. The Koradaryo and Naryn rivers merge to form the Syr-Daria at the southern edge of the city. Namangan is 202 km (293 km by road) east of Tashkent, 61 km (67 km by road) west of Andijan and 69 km (85 km by road) to the north of Ferghana. Oil fields have been explored recently near Namangan, which therefore has an oil refinery. There is a large antimony mine (a steel alloy used to make batteries) just outside the city. Cotton cultivation and processing remain the major economic activity of the city. Fruits and vegetables are growing at the foothills around Namangan.
      `,
    },
    termiz: {
      image: ter,
      content: `
      <h1>Termiz</h1>
      <br /><br />

Formerly, Termez played a considerable role in the formation of the culture of the peoples of Central Asia. This city has brought a great contribution in the development of the Great Silk Road. By Termez, the Buddhism spread towards China and Far East. The favorable strategic and geographical position of Termez  drewthe attention of the Lords of several states. The city underwent diverse conquests. She perished and recovered form her ruins.
According to legend, the first king of Baktrii - Zoroastr founded Termez. The Iranian Akhéménides invaded this territory in 6th centuryBC. The city of Termez is one of the most oldest cities of the world. According to searches realized in a Kourgan of Termez, as well as the analysis of the written sources, we know that the city was founded in the middle of thousand-year-old  before JC on the banks of Oks ( Amu-Darya). Business and economic relations were established with former states in Asia, as Sogdiana, Khorezm, Marghiana and Parfiya, as well as with India. From 5th to3rd centuries BC, in place of the ancient fortress of Termez the populations became established on a 10 hectare location. According to the writings of Khofizi Abrouyi, the name of the city comes from the word"Taramastkha" ( "the place on another side »). In other times she was differently called: Antiokhiya, Demetrias, Tarmid, Tarmiz, Tami, Tamo. In Xth s. she found her modern name: Termez.
In 3rdand 2d centuries BC., Termez was one of the most developed political, economic and intellectual centers. According to the archaeological remains, at that time were developed in the city the architecture and craftsmanship (pottery business, molding and metallurgy, the glass factory) that allow to assert that the relations of product - monetary were at a higher level there, that in other edges of Transocéanie.
The civilization of Kouchan left a considerable track in the world history of civilization. At that time Termez is considered as one of the centers of the Buddhism. The chess figurines inivory found to Dalvarzintepa, dated of IIth s before J.C., are the most former in the world today.
<br />
<br />
At the time of the early Middle Ages, Termez represented the separate possession including the city Termez and the territories contiguous to him. In the pre-Islamic period the kings of Termez bore the title of « termzchakh", the last of them reigned in the second half of the 7th century. The city of Termez was the capital of the Termezchakhs. At the time of the conquest of the city by the Arabs (686-704) the territory of the city extended on 70 hectares.
<br />
<br />
In the 10th century,the city was known for its immense market and fortress on the edge of Jaykhoun (of Amu-Daria). From the tenth to the twelfth centuries, Termez was a great prosperous center, thanks to the crafts and commerce of Tokharistan. At that time, the size of the city exceeded 500 hectares. A series of gigantic buildings had been erected in the city, of which only the palace of the Termezchakhs was preserved.
<br />
<br />
Over time, Termez was part of different states: Gaznavides, Karakhanides, Karakhitayais, Saljoukides, Khorezmchakhs. In 1220 Termez was destroyed by the Mongol invasion. In the 15th century, Termez was restored again on the coastal part of the Surkhandarya river.
<br />
<br />
After the seizure of power on the Transocéanie in 1370 by Amir Temour, Termez with the Sourkhandarya was part of the State of Amir Temur. In 1407, according to the decree of Temurides Khalil Sultan, the fortress of Termez was restored. A little later Termez became a big city with the Hotel des Monnaies.
In 1504-1505 the city was taken by the Cheyibbanid dynasty which united the Turkko-Mongol tribes.
<br />
<br />
Towards the second half of the 18th century, following intestine wars, the city was completely destroyed. Only the neighboring kichlaks of Pattakesar and Solikhobod werepreserved.
<br />
<br />
At the end of the 19th century, Termez was occupied by the troops of the Russian Empire, which in 1894, 8 km from the ruins of Termez in the Pattakesar kichlak, built the outpost. In 1916 with the construction of the Bukhara-Karchi-Termez Railway in the region, the economy began to develop. The Surkhandarya region was formed on 6 March 1941 (from 1925 to 1941 it was known as the Sourkhandarya district).

      `,
    },
  };
  const destination = destinationsData[id];

  if (!destination) {
    return <h1>destination not found!</h1>;
  } else {
    return (
      <section>
        <Hero image={destination.image} />
        <br />
        <div className="container">
          <div className="destination_page_card_row">
            <div className="side">
              {destination.content ? (
                <div
                  dangerouslySetInnerHTML={{ __html: destination.content }}
                ></div>
              ) : (
                <center>
                  <p>No content available for this destination.</p>
                </center>
              )}
            </div>
            <div className="side">
              {destination.content ? (
                <>
                  <h2>Tours</h2>
                  {tours.map((tour) => (
                    <div
                      onClick={() => navigate(`/tours/${tour.id}`)}
                      className="tour-card"
                      style={{ width: "250px", marginTop: "10px" }}
                    >
                      <div
                        className="tour-header"
                        style={{
                          backgroundImage: `url(${tour.image})`,
                          width: "250px",
                          height: "250px",
                          objectFit: "cover",
                        }}
                      >
                        <p
                          style={{ marginTop: "200px" }}
                          className="card-price"
                        >
                          {tour.price}
                        </p>
                      </div>
                      <div className="tour-body">
                        <p>{tour.content}</p>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <br />
      </section>
    );
  }
};

export default Destinations;
