import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import image from "../../assests/bg/home-bg.jpg";
import taj from "../../assests/bg/taj.jpg";
import kr from "../../assests/bg/kr.jpg";
import tur from "../../assests/bg/tur.jpg";
import kaz from "../../assests/bg/kaz.jpg";
import road from "../../assests/bg/road.jpg";
import Hero from "../hero";

import tour1 from "../../assests/bg/tour1.jpg";
import tour2 from "../../assests/bg/tour2.jpg";

const Destinations = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
      <h1>Uzbekistan</h1> <br />  Uzbekistan is a Central Asian country with more than 31 million inhabitants, a former Soviet republic, an independent state since 31 August 1991, surrounded by Kazakhstan, Kyrgyzstan, Tajikistan, Afghanistan and Turkmenistan. Its capital is Tashkent, a metropolis of 3 million d;habitants.
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
The ceramic                                                                                                                                                                                  The production of pottery in Central Asia was one of the most developed fields of production. The most common forms of ceramics were watering and drying ceramics that had local specificities. The largest centers of pottery production still exist, such as Richtan, Guijdouvan, Samarkand - Gurumsaray, Urgut, Chakhrisabz and Tashkent.
Engraving                                                                                                                                                                       Contemporary masters working with brass and copper manufacture high-quality engraved metal products mentioned above. Masters famous in engraving are the masters of Bukhara who are distinguished by the finesse and richness of the images created. In addition to using traditional forms of engraving, contemporary masters seek to elaborate new forms and styles of engraving.
Embroidery                                                                                                                                                                                   The traditional centers of "suzané" embroidery are located in Nourata, Bukhara, Ferghana, Tashkent and Chakhrisabz. Young people show great interest in this art. It is not by chance that one feels that by feeling the possibility of practical realization and material effect in this art, people are led by creative energy, which in turn leads to prosperity Other traditional arts.
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
