import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsCard from "./NewsCard";
import NavBar from "./NavBar";

export class NewsContainer extends Component {
  static propTypes = {};
  data = [
    {
      source: {
        id: null,
        name: "Investopedia",
      },
      author: "Staff Author",
      title:
        "GM Strikes $18.8B Deal With LG Chem Securing Enough Materials to Produce 5 Million EVs",
      description:
        "General Motors struck an $18.8 billion deal for LG Chem to supply the Big Three automaker with materials used to produce electric vehicle (EV) batteries as GM works to strengthen its position in the EV market.",
      url: "https://www.investopedia.com/gm-strikes-deal-with-lg-chem-securing-enough-materials-to-produce-5-million-evs-8563811",
      urlToImage:
        "https://www.investopedia.com/thmb/jnEqpxHxO8U4RX7zbY7XOWOsSLo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1485183812-533892e172b844d0a5f941a2c8fd2d76.jpg",
      publishedAt: "2024-02-07T19:03:39Z",
      content:
        "<ul><li>General Motors struck an $18.8 billion deal for LG Chem to supply GM with cathode materials used in electric vehicle (EV) battery production.</li><li>Starting in 2026, GM will receive enough … [+2277 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "dailyhodl.com",
      title: "Skyline Digital Makes TradFi Accessible on Web 3.0",
      description:
        "February 7, 2024 – Zug, Switzerland The Swiss-based platform Skyline Digital empowers underbanked Web 3.0 businesses, founders and DAOs to access third-party fiat payments, OTC trades, tokenized real-world assets, vIBANs and on/off-ramping. Web 3.0 businesses…",
      url: "https://biztoc.com/x/767cead0a49c3607",
      urlToImage: "https://c.biztoc.com/p/767cead0a49c3607/s.webp",
      publishedAt: "2024-02-07T19:00:09Z",
      content:
        "February 7, 2024 Zug, SwitzerlandThe Swiss-based platform Skyline Digital empowers underbanked Web 3.0 businesses, founders and DAOs to access third-party fiat payments, OTC trades, tokenized real-wo… [+278 chars]",
    },
    {
      source: {
        id: null,
        name: "Securityaffairs.com",
      },
      author: "Pierluigi Paganini",
      title: "Fortinet addressed two critical FortiSIEM vulnerabilities",
      description:
        "Fortinet warns of two critical OS command injection vulnerabilities in FortiSIEM that could allow remote attackers to execute arbitrary code Cybersecurity vendor Fortinet warned of two critical vulnerabilities in FortiSIEM, tracked as CVE-2024-23108 and CVE-2…",
      url: "https://securityaffairs.com/158813/security/fortinet-addressed-two-critical-fortisiem-vulnerabilities.html",
      urlToImage:
        "https://securityaffairs.com/wp-content/uploads/2019/11/fortinet-logo.jpg",
      publishedAt: "2024-02-07T18:50:02Z",
      content:
        "Fortinet addressed two critical FortiSIEM vulnerabilities\r\n | Experts warn of a critical bug in JetBrains TeamCity On-Premises\r\n | Critical shim bug impacts every Linux boot loader signed in the past… [+43841 chars]",
    },
    {
      source: {
        id: null,
        name: "Jalopnik",
      },
      author: "Andy Kalmowitz",
      title: "It Sure Looks Like Layoffs Are Coming To Tesla",
      description:
        "Tesla staffers are getting ready for potential job cuts after managers at the Austin, Texas-based automaker were asked to let higher-ups know if each of their employees’ positions are critical. I’m sure this will all go just fine for Tesla and its workers.Rea…",
      url: "https://jalopnik.com/it-sure-looks-like-layoffs-are-coming-to-tesla-1851235412",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/13984c8cc934daa39d74d104c47722f0.jpg",
      publishedAt: "2024-02-07T18:50:00Z",
      content:
        "Tesla staffers are getting ready for potential job cuts after managers at the Austin, Texas-based automaker were asked to let higher-ups know if each of their employees positions are critical. Im sur… [+2617 chars]",
    },
    {
      source: {
        id: null,
        name: "The Daily Hodl",
      },
      author: "ChainWire",
      title: "Skyline Digital Makes TradFi Accessible on Web 3.0",
      description:
        "February 7, 2024 – Zug, Switzerland The Swiss-based platform Skyline Digital empowers underbanked Web 3.0 businesses, founders and DAOs to access third-party fiat payments, OTC trades, tokenized real-world assets, vIBANs and on/off-ramping. Web 3.0 businesses…",
      url: "https://dailyhodl.com/2024/02/07/skyline-digital-makes-tradfi-accessible-on-web-3-0/",
      urlToImage:
        "https://dailyhodl.com/wp-content/uploads/2024/02/UPSCALED-Skyline-Digital-Industry-Announcement-Featured-Image-Template.jpg",
      publishedAt: "2024-02-07T18:47:09Z",
      content:
        "February 7, 2024 Zug, Switzerland\r\nThe Swiss-based platform Skyline Digital empowers underbanked Web 3.0 businesses, founders and DAOs to access third-party fiat payments, OTC trades, tokenized real-… [+4264 chars]",
    },
    {
      source: {
        id: null,
        name: "Electrek",
      },
      author: "Reinette LeJeune",
      title:
        "Save $600 on Juiced RipRacer e-bike at $899, Snow Joe electric snow blower now $300, more",
      description:
        "Headlining today’s best deals is a $600 discount on Juiced Bikes’ RipRacer e-bike that returns costs to the $899 all-time low that we haven’t seen since August. It is joined by Snow Joe’s 24V 21-inch Electric Snow Blower for $300, as well as a notable sale on…",
      url: "https://electrek.co/2024/02/07/juiced-ripracer-e-bike-snow-joe-snow-blower-and-more/",
      urlToImage:
        "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/09/juiced-ripracer-review-electric-bike-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-02-07T18:45:56Z",
      content:
        "Headlining today’s best deals is a $600 discount on Juiced Bikes’ RipRacer e-bike that returns costs to the $899 all-time low that we haven’t seen since August. It is joined by Snow Joe’s 24V 21-inch… [+5149 chars]",
    },
    {
      source: {
        id: null,
        name: "Summaryfeeds.com",
      },
      author: "bing_dai",
      title:
        'Show HN: An Open Source "News Feed" for AI-Focused Videos on YouTube',
      description:
        "Source Code: https://github.com/bingdai/summaryfeedsSummary Feeds (https://www.summaryfeeds.com) is a website that:- Fetches transcripts of AI-focused YouTube videos, using the YouTube Transcript API by pypi.org.- Uses OpenAI's GPT-3.5-turbo-16k to summarize …",
      url: "https://www.summaryfeeds.com",
      urlToImage: null,
      publishedAt: "2024-02-07T18:38:15Z",
      content:
        "<li>WebVoyagerIn this tutorial, the speaker demonstrates how to build a vision-enabled web browsing agent using a framework called L-Graph. The agent is built to perform complex tasks solely using vi… [+44829 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Claudia Assis",
      title: "Tesla employees bracing for potential layoffs: report",
      description:
        "Tesla Inc. managers in the U.S. have reportedly been asked which of their employees’ positions are critical, stoking fears the electric automaker is considering layoffs.",
      url: "https://www.marketwatch.com/story/tesla-employees-bracing-for-potential-layoffs-report-c7179713",
      urlToImage: "https://images.mktw.net/im-316936/social",
      publishedAt: "2024-02-07T18:38:00Z",
      content:
        "Tesla Inc. managers in the U.S. have reportedly been asked which of their employees positions are critical, stoking fears the electric-car maker is considering layoffs.According to a Bloomberg report… [+1477 chars]",
    },

    {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "thestreet.com",
        "title": "Elon Musk mimics Big Tech as Tesla delivers harsh warning to workers",
        "description": "Get Free Report shares edged higher Wednesday amid reports that Elon Musk is looking to mimic one of the tech sector's biggest themes, aiming to revive a stock that has shed nearly $200 billion in value over the past six months. Tech-sector layoffs have domin…",
        "url": "https://biztoc.com/x/9d543965d6291f0a",
        "urlToImage": "https://c.biztoc.com/p/9d543965d6291f0a/s.webp",
        "publishedAt": "2024-02-07T17:18:17Z",
        "content": "Get Free Report shares edged higher Wednesday amid reports that Elon Musk is looking to mimic one of the tech sector's biggest themes, aiming to revive a stock that has shed nearly $200 billion in va… [+300 chars]"
        },
        {
        "source": {
        "id": "breitbart-news",
        "name": "Breitbart News"
        },
        "author": "Kurt Zindulka, Kurt Zindulka",
        "title": "EU Politicians Threaten to Sanction Tucker Carlson for Interviewing Vladimir Putin",
        "description": "European Union lawmakers have called for Brussels to impose sanctions on American journalist Tucker Carlson for interviewing Vladimir Putin.",
        "url": "https://www.breitbart.com/europe/2024/02/07/eu-politicians-threaten-to-sanction-tucker-carlson-for-interviewing-vladimir-putin/",
        "urlToImage": "https://media.breitbart.com/media/2024/02/GettyImages-1984375225-1-1-640x335.jpg",
        "publishedAt": "2024-02-07T17:14:29Z",
        "content": "European Union lawmakers have called for Brussels to impose sanctions on American journalist Tucker Carlson for interviewing Russian President Vladimir Putin.\r\nDespite the longstanding tradition of A… [+3408 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Lawyersgunsmoneyblog.com"
        },
        "author": "Erik Loomis",
        "title": "UAW Organizing Moving Ahead",
        "description": "As I’ve stated on several occasions, while the UAW winning that good contract from the Big Three was a huge thing, the future of the union depends on organizing foreign auto and Tesla much more than it does winning good contracts for its current membership. T…",
        "url": "https://www.lawyersgunsmoneyblog.com/2024/02/uaw-organizing-moving-ahead",
        "urlToImage": "https://www.lawyersgunsmoneyblog.com/wp-content/uploads/2023/10/00fain-profile-23-hcpj-videoSixteenByNine3000-1024x576.jpg",
        "publishedAt": "2024-02-07T17:14:00Z",
        "content": "As I’ve stated on several occasions, while the UAW winning that good contract from the Big Three was a huge thing, the future of the union depends on organizing foreign auto and Tesla much more than … [+1381 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "Ciara Linnane",
        "title": "Ford earnings spurs buying of bonds as spreads over U.S. Treasurys tighten",
        "description": "Ford Motor Co.’s stock rose 3% Wednesday after an upbeat earnings report that also spurred buying of its outstanding bonds and helped spreads tighten over U.S. Treasurys.",
        "url": "https://www.marketwatch.com/story/ford-earnings-spurs-buying-of-bonds-as-spreads-over-u-s-treasurys-tighten-862774bf",
        "urlToImage": "https://images.mktw.net/im-82783250/social",
        "publishedAt": "2024-02-07T17:12:00Z",
        "content": "Ford Motor Co.s stock rose 3% Wednesday after an upbeat earnings report that also spurred buying of its outstanding bonds and helped spreads tighten over U.S. Treasurys.The car companys \r\n F,\r\n +4.02… [+1493 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "inc.com",
        "title": "Government Warning: Don’t Drive Wearing a Vision Pro Headset",
        "description": "The caution is obvious, but a recent stunt video showing a Tesla driver racing along a highway on autopilot while sporting Apple's new AR goggles unsettled Transportation Secretary Pete Buttegieg. New tech can be a shock that requires clear guidance.#tesla #a…",
        "url": "https://biztoc.com/x/5c1ca64edc5388e7",
        "urlToImage": "https://c.biztoc.com/p/5c1ca64edc5388e7/s.webp",
        "publishedAt": "2024-02-07T17:10:17Z",
        "content": "The caution is obvious, but a recent stunt video showing a Tesla driver racing along a highway on autopilot while sporting Apple's new AR goggles unsettled Transportation Secretary Pete Buttegieg. Ne… [+128 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "entrepreneur.com",
        "title": "Videos Show Drivers in Tesla Autopilot With Apple Vision Pro",
        "description": "Social media is saturated with videos that seem torn from science fiction: individuals \"driving\" Teslas on Autopilot with Apple Vision Pro headsets concealing their eyes. These scenes have set off alarm bells among federal transportation authorities, though i…",
        "url": "https://biztoc.com/x/af880da444a72bdb",
        "urlToImage": "https://c.biztoc.com/p/af880da444a72bdb/s.webp",
        "publishedAt": "2024-02-07T17:10:07Z",
        "content": "Social media is saturated with videos that seem torn from science fiction: individuals \"driving\" Teslas on Autopilot with Apple Vision Pro headsets concealing their eyes.These scenes have set off ala… [+292 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "investorplace.com",
        "title": "More Bad News for Tesla Stock: Ford and Toyota Are Thriving",
        "description": "Legacy auto stocks are the better bets right now Tesla (NASDAQ:TSLA) investors have had a miserable year. The stock is already down more than 20% in 2024. And it could get worse for Elon Musk before it gets better. That’s because two of the electric vehicle m…",
        "url": "https://biztoc.com/x/4a0cb312f2caecf9",
        "urlToImage": "https://c.biztoc.com/p/4a0cb312f2caecf9/s.webp",
        "publishedAt": "2024-02-07T17:02:48Z",
        "content": "Legacy auto stocks are the better bets right nowTesla (NASDAQ:TSLA) investors have had a miserable year. The stock is already down more than 20% in 2024. And it could get worse for Elon Musk before i… [+289 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "thestreet.com",
        "title": "Ford reveals an aggressive battle plan to fend off Tesla, affordable Chinese EVs",
        "description": "As the field of electric vehicles continues to be dominated by the likes of Tesla (TSLA) - Get Free Report and Chinese manufacturers like BYD, Ford (F) - Get Free Report is in a precarious place despite its role as a heritage household name auto manufacturer.…",
        "url": "https://biztoc.com/x/2e374de685bcda15",
        "urlToImage": "https://c.biztoc.com/p/2e374de685bcda15/s.webp",
        "publishedAt": "2024-02-07T17:02:43Z",
        "content": "As the field of electric vehicles continues to be dominated by the likes of Tesla (TSLA) - Get Free Report and Chinese manufacturers like BYD, Ford (F) - Get Free Report is in a precarious place desp… [+291 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "barchart.com",
        "title": "What’s Wrong With Tesla in 2024, and Will TSLA Stock Recover and Go Back Up?",
        "description": "Tesla is one of the worst-performing S&P 500 stocks in 2024 after having more than doubled last year. What's wrong with TSLA stock, and can it recover from the slump?#tesla",
        "url": "https://biztoc.com/x/5f381bb29d05b2c0",
        "urlToImage": "https://c.biztoc.com/p/5f381bb29d05b2c0/s.webp",
        "publishedAt": "2024-02-07T17:02:39Z",
        "content": "Tesla is one of the worst-performing S&amp;P 500 stocks in 2024 after having more than doubled last year. What's wrong with TSLA stock, and can it recover from the slump?\r\n#tesla\r\nThis story appeared… [+18 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Fark.com"
        },
        "author": null,
        "title": "Tesla employees being prepped to meet with the two Bobs, asked to respond to single question email: What would you say... you do here? [Awkward]",
        "description": "Tesla employees being prepped to meet with the two Bobs, asked to respond to single question email: What would you say... you do here?",
        "url": "https://www.fark.com/comments/13146490/Tesla-employees-being-prepped-to-meet-with-two-Bobs-asked-to-respond-to-single-question-email-What-would-you-say-you-do-here",
        "urlToImage": "https://usrimg-850.fark.net/B/Bn/fark_BnL2sxcFms74NKp8pGb5Alo5uE0.jpg?AWSAccessKeyId=JO3ELGV4BGLFW7Y3EZXN&Expires=1707714000&Signature=QFE1PC6AGIeIqllRJoMtIY9nZSk%3D",
        "publishedAt": "2024-02-07T16:50:16Z",
        "content": "foo monkey:\"I float between Tesla and its sister companies, homeless, high, and getting as many women pregnant as I can.\"\r\nI mean, that's exactly where I'd start if I was looking to trim some staff e… [+7 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Futurism"
        },
        "author": "Victor Tangermann",
        "title": "Tesla Is Officially the Worst-Performing S&P 500 Stock of the Year",
        "description": "Tesla's having an absolutely rotten year so far. Last month, the EV maker's stock tanked, plunging almost 25 percent in January. And this month, the stock isn't faring much better. In fact, the company is the worst-performing stock in the S&P 500, a stock mar…",
        "url": "https://futurism.com/tesla-worst-performing-sp-500-stock-year",
        "urlToImage": "https://wp-assets.futurism.com/2024/02/tesla-worst-performing-sp-500-stock-year.jpg",
        "publishedAt": "2024-02-07T16:41:16Z",
        "content": "Tesla's having an absolutely rotten year so far.\r\nLast month, the EV maker's stock tanked, plunging almost 25 percent in January. And this month it isn't faring much better.\r\nIn fact, as Quartz repor… [+3227 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "asiafinancial.com",
        "title": "China New Energy Vehicle Sales Slow Down Amid Export Frictions",
        "description": "New energy vehicle sales in China saw their first month-on-month drop since August 2023 in January, as demand stuttered in the world’s largest auto market. NEV sales fell 38.8% versus the previous month, industry data showed, while total vehicle sales, includ…",
        "url": "https://biztoc.com/x/2f5728fd631f0434",
        "urlToImage": "https://c.biztoc.com/p/2f5728fd631f0434/s.webp",
        "publishedAt": "2024-02-07T16:40:06Z",
        "content": "New energy vehicle sales in China saw their first month-on-month drop since August 2023 in January, as demand stuttered in the worlds largest auto market.NEV sales fell 38.8% versus the previous mont… [+291 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Disneytouristblog.com"
        },
        "author": "Tom Bricker",
        "title": "New Proxy Fight to Split Disney Into 3 Companies",
        "description": "Blackwells has started yet another proxy fight with Disney, aiming for three nominees on the board supporting transformation efforts under the leadership of the current CEO Bob Iger. These activist investors also suggest a split into three companies, recommen…",
        "url": "https://www.disneytouristblog.com/new-proxy-fight-to-split-disney-into-3-companies/",
        "urlToImage": "https://www.disneytouristblog.com/wp-content/uploads/2021/07/california-grill-aerial-cinderella-castle-magic-kingdom-disney-world-402.jpg",
        "publishedAt": "2024-02-07T16:35:05Z",
        "content": "Blackwells has started yet another proxy fight with Disney, aiming for three nominees on the board supporting transformation efforts under the leadership of the current CEO Bob Iger. These activist i… [+15135 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Inside the Magic"
        },
        "author": "Thomas Hitchen",
        "title": "For Sale? Elon Musk Has the Ultimate Power Move To Get Even With Bob Iger",
        "description": "As the war against The Walt Disney Company rages on, billionaire entrepreneur Elon Musk could play a massive power move and worm his way into the House of Mouse. Over the last few years, Disney has come under fire from outsiders, claiming the company to be he…",
        "url": "https://insidethemagic.net/2024/02/elon-musk-and-disney-bob-iger-sale-th1/",
        "urlToImage": "https://insidethemagic.net/wp-content/uploads/2024/02/bob-iger-elon-musk.jpg",
        "publishedAt": "2024-02-07T16:31:59Z",
        "content": "As the war against The Walt Disney Company rages on, billionaire entrepreneur Elon Musk could play a massive power move and worm his way into the House of Mouse.\r\nCredit: Steve Jurvetson via Wikimedi… [+7336 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Wealthofgeeks.com"
        },
        "author": "John Tallodi",
        "title": "People Are Converting Classic Cars Into Electric Vehicles and There’s Nothing Cooler",
        "description": "Ah, classic cars. Surely there’s no better way to spend an afternoon than to cruise along a coastal road in a stunning classic automobile, listening to your favorite tunes. But like the moments before that perfect Instagram pic, the reality is often rather di…",
        "url": "https://wealthofgeeks.com/converting-classic-electric/",
        "urlToImage": "https://wealthofgeeks.com/wp-content/uploads/2024/02/1280px-Ford_Mustang_Shelby_GT500_Eleanor_34506444244.jpg",
        "publishedAt": "2024-02-07T16:15:32Z",
        "content": "Ah, classic cars. Surely theres no better way to spend an afternoon than to cruise along a coastal road in a stunning classic automobile, listening to your favorite tunes.\r\nBut like the moments befor… [+4550 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "investorplace.com",
        "title": "Tesla Layoffs 2024: What to Know About the Latest TSLA Job Cuts",
        "description": "Tesla layoffs are being talked about by staff Tesla (NASDAQ:TSLA) layoffs may be coming to the electric vehicle (EV) company as investors learn of Elon Musk asking about critical roles. Insider reports claim that the Tesla founder and CEO has started asking m…",
        "url": "https://biztoc.com/x/0ecc4ec2a4f107c1",
        "urlToImage": "https://c.biztoc.com/p/0ecc4ec2a4f107c1/s.webp",
        "publishedAt": "2024-02-07T16:15:22Z",
        "content": "Tesla layoffs are being talked about by staffTesla (NASDAQ:TSLA) layoffs may be coming to the electric vehicle (EV) company as investors learn of Elon Musk asking about critical roles.Insider reports… [+287 chars]"
        },
        {
        "source": {
        "id": "techradar",
        "name": "TechRadar"
        },
        "author": "Leon Poultney, Mark Wilson",
        "title": "Is it actually illegal to drive while wearing an Apple Vision Pro? Surprisingly, it's complicated",
        "description": "Apple Vision Pro users have been spotted wearing headset while driving, but the laws on it remain unclear.",
        "url": "https://www.techradar.com/vehicle-tech/hybrid-electric-vehicles/is-it-actually-illegal-to-drive-while-wearing-an-apple-vision-pro-surprisingly-its-complicated",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/gFVcstep5R4PCUtwMqARM8-1200-80.jpg",
        "publishedAt": "2024-02-07T16:05:57Z",
        "content": "You've probably seen the viral videos this week showing some Apple Vision Pro users wearing their headsets while behind the wheel of cars like the Tesla Cybertruck. These early adopters have been tak… [+6130 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motor Authority"
        },
        "author": "news@motorauthority.com (Joel Feder), Joel Feder",
        "title": "2024 Genesis G70, electric Lamborghinis, 2025 Porsche Taycan: Car News Headlines",
        "description": "We drove the updated 2024 Genesis G70 and found it remains an athletic, fun, compact luxury sport sedan. The standard all-season Michelin tires and lack of a limited-slip differential in back make it hard to put the power down in certain situations, but this …",
        "url": "https://www.motorauthority.com/news/1142234_2024-genesis-g70-electric-lamborghinis-2025-porsche-taycan-car-news-headlines",
        "urlToImage": "https://images.hgmsites.net/hug/porsche-taycan_100917173_h.webp",
        "publishedAt": "2024-02-07T16:00:00Z",
        "content": "We drove the updated 2024 Genesis G70 and found it remains an athletic, fun, compact luxury sport sedan. The standard all-season Michelin tires and lack of a limited-slip differential in back make it… [+1742 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "finance.yahoo.com",
        "title": "Ford Reveals Plans for Small, Cheap EVs After Earnings Beat",
        "description": "Ford Motor Co. is working on inexpensive, small electric vehicles to stem its electric vehicle losses and take on Tesla Inc. and Chinese automakers. • None China Replaces Top Markets Regulator as Xi Tries to End Rout • None Haley Loses Nevada Primary to ‘None…",
        "url": "https://biztoc.com/x/12c3b4aeffe6bfec",
        "urlToImage": "https://c.biztoc.com/p/12c3b4aeffe6bfec/s.webp",
        "publishedAt": "2024-02-07T15:50:07Z",
        "content": "Ford Motor Co. is working on inexpensive, small electric vehicles to stem its electric vehicle losses and take on Tesla Inc. and Chinese automakers.None China Replaces Top Markets Regulator as Xi Tri… [+276 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "aol.com",
        "title": "Tesla is reportedly asking managers to identify which roles are most important in a sign layoffs may be coming",
        "description": "None Tesla is asking managers to identify the most vital roles on their team, Bloomberg reported. • None The company also reportedly canceled some employee performance reviews. Tesla may be preparing for a round of layoffs. The electric carmaker has begun ask…",
        "url": "https://biztoc.com/x/f695e4a93a36aedc",
        "urlToImage": "https://c.biztoc.com/p/f695e4a93a36aedc/s.webp",
        "publishedAt": "2024-02-07T15:48:11Z",
        "content": "None Tesla is asking managers to identify the most vital roles on their team, Bloomberg reported.None The company also reportedly canceled some employee performance reviews.Tesla may be preparing for… [+216 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "aol.com",
        "title": "Elon Musk bankrolls lawsuit of fired ‘Mandalorian’ star Gina Carano against Disney and his nemesis CEO Bob Iger",
        "description": "Elon Musk’s anger at Disney boss Bob Iger for driving his social media company closer to bankruptcy may have found an outlet—one that uses a former Disney star as its vessel. On Tuesday, the billionaire entrepreneur, who took on $13 billion in debt to buy fin…",
        "url": "https://biztoc.com/x/c035f6978860669e",
        "urlToImage": "https://c.biztoc.com/p/c035f6978860669e/s.webp",
        "publishedAt": "2024-02-07T15:48:07Z",
        "content": "Elon Musks anger at Disney boss Bob Iger for driving his social media company closer to bankruptcy may have found an outletone that uses a former Disney star as its vessel.On Tuesday, the billionaire… [+297 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "Paul Ferrier",
        "title": "Indices: From European shores to American ones",
        "description": "(marketscreener.com) The smaller European markets have started the year well. Greece dominates, building on the success of 2024. The Netherlands and Denmark did not disappoint, as each is home to a star of the European stock market: ASML for the former and No…",
        "url": "https://www.marketscreener.com/news/latest/Indices-From-European-shores-to-American-ones-45904550/",
        "urlToImage": "https://www.zonebourse.com/images/ImagesTagged/zbimg_3054814_800.png",
        "publishedAt": "2024-02-07T15:47:52Z",
        "content": "The smaller European markets have started the year well. Greece dominates, building on the success of 2024. The Netherlands and Denmark did not disappoint, as each is home to a star of the European s… [+2318 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "theverge.com",
        "title": "Ford quietly created its own “skunkworks” team to develop low-cost electric vehicles",
        "description": "Ford created a “skunkworks” lab two years ago with the mission of developing affordable electric vehicles, the company’s CEO said in an earnings call Tuesday. The team is being led by Alan Clarke, who worked at Tesla for 12 years before joining Ford as execut…",
        "url": "https://biztoc.com/x/420625496ed6d019",
        "urlToImage": "https://c.biztoc.com/p/420625496ed6d019/og.webp",
        "publishedAt": "2024-02-07T15:42:12Z",
        "content": "Ford created a skunkworks lab two years ago with the mission of developing affordable electric vehicles, the companys CEO said in an earnings call Tuesday. The team is being led by Alan Clarke, who w… [+286 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MobileSyrup"
        },
        "author": "Craig Donaldson",
        "title": "Tesla Model Y Performance gets price cut in Canada, now eligible for federal incentive",
        "description": "Tesla has reduced the price of the Model Y Performance in Canada by $4,300. The electric vehicle (EV) is now available for $69,990. Previously, it was $74,290. This comes just days after Tesla reduced the price of the Model Y Rear-Wheel Drive (RWD) and Long R…",
        "url": "https://mobilesyrup.com/2024/02/07/tesla-model-y-performance-price-cut-canada-eligible-federal-incentive/",
        "urlToImage": "https://cdn.mobilesyrup.com/wp-content/uploads/2023/05/header-Tesla-model-y-tesla-sized-scaled.jpg",
        "publishedAt": "2024-02-07T15:41:24Z",
        "content": "Tesla has reduced the price of the Model Y Performance in Canada by $4,300. The electric vehicle (EV) is now available for $69,990. Previously, it was $74,290. This comes just days after Tesla reduce… [+1542 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Instapundit.com"
        },
        "author": "Stephen Green",
        "title": "OUCH: Hertz went all in on Tesla — and is paying the price. “Hertz, in reporting an adjusted loss",
        "description": "OUCH: Hertz went all in on Tesla — and is paying the price. “Hertz, in reporting an adjusted loss of $1.36 per share, wider than the $0.76 loss expected, was saddled with losses stemming from its decision to sell 20,000 Teslas, representing a third of its EV …",
        "url": "https://instapundit.com/630805/",
        "urlToImage": "https://instapundit.com/wp-content/themes/instapundit/images/opengraph-default.png",
        "publishedAt": "2024-02-07T15:40:28Z",
        "content": "OUCH: Hertz went all in on Tesla and is paying the price. “Hertz, in reporting an adjusted loss of $1.36 per share, wider than the $0.76 loss expected, was saddled with losses stemming from its decis… [+337 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Autoblog"
        },
        "author": "Bloomberg",
        "title": "Ford reveals plans for small, cheap EVs to take on Tesla and China",
        "description": "Filed under:\n Green,Ford,Electric\n Continue reading Ford reveals plans for small, cheap EVs to take on Tesla and China\nFord reveals plans for small, cheap EVs to take on Tesla and China originally appeared on Autoblog on Wed, 7 Feb 2024 10:39:00 EST. Please s…",
        "url": "https://www.autoblog.com/2024/02/07/ford-reveals-plans-for-small-cheap-evs-to-take-on-tesla-and-china/",
        "urlToImage": "https://s.aolcdn.com/images/dims3/GLOB/crop/3600x2025+0+0/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2024/02/07103849/ge_hosts_the_lean_mindset__the_pursuit_of_progress_event_in_nyc.jpeg",
        "publishedAt": "2024-02-07T15:39:00Z",
        "content": "Ford Motor Co. is working on inexpensive, small electric vehicles to stem its electric vehicle losses and take on Tesla and Chinese automakers.\r\nChief Executive Officer Jim Farley revealed the plans … [+5364 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Jalopnik"
        },
        "author": "Tom McParland",
        "title": "You Can Get Polestar's Tesla Fighter For The Price Of An Accord",
        "description": "For many buyers, a major hurdle to EV adoption is cost. For a while, there were limited affordable EV electric options. Now that the pre-owned EV market is seeing massive drops in value, there are more opportunities than ever for a reasonably priced way to go…",
        "url": "https://jalopnik.com/you-can-get-polestars-tesla-fighter-for-the-price-of-an-1851234400",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/c3b8620705d82a53f5205a57c51cf531.png",
        "publishedAt": "2024-02-07T15:35:00Z",
        "content": "For many buyers, a major hurdle to EV adoption is cost. For a while, there were limited affordable EV electric options. Now that the pre-owned EV market is seeing massive drops in value, there are mo… [+2426 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "aol.com",
        "title": "Tesla asks which jobs are critical, stoking layoff fears",
        "description": "Tesla managers have been asked whether each of their employees' positions were critical, stoking layoff fears in the company, Bloomberg News reported on Wednesday. Tesla sent out a single-line query for each job after canceling some employees' biannual perfor…",
        "url": "https://biztoc.com/x/eb3efa9ece9c93e9",
        "urlToImage": "https://c.biztoc.com/p/eb3efa9ece9c93e9/s.webp",
        "publishedAt": "2024-02-07T15:34:06Z",
        "content": "Tesla managers have been asked whether each of their employees' positions were critical, stoking layoff fears in the company, Bloomberg News reported on Wednesday.Tesla sent out a single-line query f… [+228 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Notebookcheck.net"
        },
        "author": "Daniel Zlatev",
        "title": "Ford preps cheap electric car to rival the Model 2 with help by ex-Tesla engineers",
        "description": "Tesla has nearly finished the development of its cheapest electric vehicle, tentatively named the Model 2, and Elon Musk mentioned it would be released next year. Ford may have a direct competitor in a similar timeframe.",
        "url": "https://www.notebookcheck.net/Ford-preps-cheap-electric-car-to-rival-the-Model-2-with-help-by-ex-Tesla-engineers.800819.0.html",
        "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/23_FRD_MME_59702.jpg",
        "publishedAt": "2024-02-07T15:34:00Z",
        "content": "The first mass market electric vehicle by Tesla is fast approaching and the competitors are already mulling direct responses to the Model 2. Ford, in particular, has apparently had a \"skunkworks\" tea… [+1886 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hot Hardware"
        },
        "author": "Ben Funk",
        "title": "Viral Video Of An Apple Vision Pro Owner In A Cybertruck Sparks Government Warning",
        "description": "Whether it's a foolish skit or a serious attempt at multitasking, driving a vehicle while wearing an Apple Vision Pro was bound to happen. It's important to note that the Tesla driver who went viral on X / Twitter for donning Cupertino's augmented reality hea…",
        "url": "https://hothardware.com/news/driver-skit-apple-vision-pro-tesla-autopilot",
        "urlToImage": "https://images.hothardware.com/contentimages/newsitem/63828/content/dont-do-this-at-home.jpg",
        "publishedAt": "2024-02-07T15:32:00Z",
        "content": "Skip to contentWhether it's a foolish skit or a serious attempt at multitasking, driving a vehicle while wearing an Apple Vision Pro was bound to happen. It's important to note that the Tesla driver … [+2493 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Electrek"
        },
        "author": "Fred Lambert",
        "title": "Tesla Semi electric truck spotted handling closed icy road",
        "description": "The California Highway Patrol has shared a video of a Tesla Semi electric truck handling a closed icy road. Electric...",
        "url": "https://electrek.co/2024/02/07/tesla-semi-electric-truck-spotted-handling-closed-icy-road/",
        "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/02/Tesla-Semi-icy-road.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2024-02-07T15:28:15Z",
        "content": "The California Highway Patrol has shared a video of a Tesla Semi electric truck handling a closed icy road.\r\nElectric semi trucks are still quite new and there are a lot of naysayers about them.\r\nBil… [+1477 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "George Glover",
        "title": "Elon Musk's lawyer is helping Adam Neumann as he tries to buy back WeWork",
        "description": "Neumann's lawyer is Alex Spiro, whose other clients include Tesla CEO Elon Musk and the rappers Jay-Z and Megan Thee Stallion.",
        "url": "https://www.businessinsider.com/elon-musk-lawyer-adam-neumann-wework-2024-2",
        "urlToImage": "https://i.insider.com/65c393967a3d2714887876c9?width=1200&format=jpeg",
        "publishedAt": "2024-02-07T15:27:15Z",
        "content": "Former WeWork CEO Adam Neumann is trying to buy back the company he cofounded.Shahar Azran/Getty Images\r\n<ul><li>Adam Neumann is trying to buy back WeWork, the now-bankrupt company he cofounded.</li>… [+2169 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "socialmediatoday.com",
        "title": "X Is Developing an Articles Content Option for Long-Form Posts",
        "description": "Elon Musk wants to make X people’s main source for news updates, repeatedly touting his “everything app” as a competitor to mainstream publishers, and the only platform willing to tell the truth, direct from the public. Which is why, in Elon’s world at least,…",
        "url": "https://biztoc.com/x/4dda999e24cb7c91",
        "urlToImage": "https://c.biztoc.com/p/4dda999e24cb7c91/s.webp",
        "publishedAt": "2024-02-07T15:18:13Z",
        "content": "Elon Musk wants to make X peoples main source for news updates, repeatedly touting his everything app as a competitor to mainstream publishers, and the only platform willing to tell the truth, direct… [+261 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Securityaffairs.com"
        },
        "author": "Pierluigi Paganini",
        "title": "Experts warn of a critical bug in JetBrains TeamCity On-Premises",
        "description": "A new vulnerability in JetBrains TeamCity On-Premises can be exploited by threat actors to take over vulnerable instances. JetBrains addressed a critical security vulnerability, tracked as CVE-2024-23917 (CVSS score 9.8) in its TeamCity On-Premises continuous…",
        "url": "https://securityaffairs.com/158790/hacking/jetbrains-teamcity-on-premises-bug.html",
        "urlToImage": "https://securityaffairs.com/wp-content/uploads/2014/05/russia-and-ukraine.jpg",
        "publishedAt": "2024-02-07T15:13:50Z",
        "content": "Experts warn of a critical bug in JetBrains TeamCity On-Premises\r\n | Critical shim bug impacts every Linux boot loader signed in the past decade\r\n | China-linked APT deployed malware in a network of … [+43779 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Electrek"
        },
        "author": "Peter Johnson",
        "title": "Ford is building a low-cost EV platform with some of the ‘best EV engineers’ to rival Tesla",
        "description": "Ford (F) assembled a “super-talented skunk works team” to build a low-cost EV platform. The small team consisted of “some of the best EV engineers in the world,” according to Ford’s CEO Jim Farley. It will be used to launch several new software-defined electr…",
        "url": "https://electrek.co/2024/02/07/ford-buildin-low-cost-ev-platform-tesla/",
        "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/10/Ford-Tesla-EV-chargers-1.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2024-02-07T15:12:16Z",
        "content": "Ford (F) assembled a “super-talented skunk works team” to build a low-cost EV platform. The small team consisted of “some of the best EV engineers in the world,” according to Ford’s CEO Jim Farley. I… [+3460 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "businessinsider.com",
        "title": "Tesla is reportedly asking managers to identify which roles are most important in a sign layoffs may be coming",
        "description": "Tesla CEO Elon Musk and the Tesla factory in Fremont, California Nathan Howard and Justin Sullivan via Getty Images Tesla is asking managers to identify the most vital roles on their team, Bloomberg reported. The company also reportedly canceled some employee…",
        "url": "https://biztoc.com/x/06c2e739c8511be1",
        "urlToImage": "https://c.biztoc.com/p/06c2e739c8511be1/s.webp",
        "publishedAt": "2024-02-07T15:10:07Z",
        "content": "Tesla CEO Elon Musk and the Tesla factory in Fremont, CaliforniaNathan Howard and Justin Sullivan via Getty ImagesTesla is asking managers to identify the most vital roles on their team, Bloomberg re… [+290 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "gkay@insider.com (Grace Kay)",
        "title": "Tesla is reportedly asking managers to identify which roles are most important in a sign layoffs may be coming",
        "description": "Tesla has also recently canceled some of its employees' performance reviews, according to a new report.",
        "url": "https://www.businessinsider.com/tesla-managers-identify-key-roles-potential-layoffs-sign-report-2024-2",
        "urlToImage": "https://i.insider.com/65c38da743bb77284ba45abc?width=1200&format=jpeg",
        "publishedAt": "2024-02-07T15:05:02Z",
        "content": "The electric carmaker has begun asking managers to identify which employee roles on their team are vital to the company, according to a report from Bloomberg on Wednesday.The company has also recentl… [+1286 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "investing.com",
        "title": "Tesla staff reportedly bracing for possible layoffs, stock gains",
        "description": "Tesla Inc. (NASDAQ: ) employees are preparing for possible layoffs after managers were instructed to evaluate the necessity of each employee's role, Bloomberg News reported on Wednesday. TSLA was up 3% ahead of the market open. In recent days, US managers at …",
        "url": "https://biztoc.com/x/1f994b5b88283e07",
        "urlToImage": "https://c.biztoc.com/p/1f994b5b88283e07/s.webp",
        "publishedAt": "2024-02-07T15:04:07Z",
        "content": "Tesla Inc. (NASDAQ: ) employees are preparing for possible layoffs after managers were instructed to evaluate the necessity of each employee's role, Bloomberg News reported on Wednesday.TSLA was up 3… [+266 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Livemint"
        },
        "author": "Bloomberg",
        "title": "Tesla asks which jobs are critical, stoking layoff fears",
        "description": "Tesla Inc’s US managers had to make the binary assessment of their deputies’ roles in recent days",
        "url": "https://www.livemint.com/companies/news/tesla-asks-which-jobs-are-critical-stoking-layoff-fears-11707316497803.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2024/02/07/1600x900/tesla_1707317787276_1707317787551.jpg",
        "publishedAt": "2024-02-07T15:03:21Z",
        "content": "Tesla Inc. staff are bracing for potential job cuts after managers were asked to affirm whether each of their employees positions is critical. US managers had to make the binary assessment of their d… [+3205 chars]"
        }
  ];

  constructor() {
    super();
    this.state = {
      articles: this.data,
      loading: false,
    };
  }

  render() {
    return (
      <div>
        <h1 className="my-5">Today's Highlights</h1>

        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "1px",
          }}
        >
          {this.state.articles.map((news) => {
            return (
              <NewsCard
                // key={news.url}
                fullArticle={news.url}
                url={news.urlToImage}
                description={news.description}
                title={news.title}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default NewsContainer;
