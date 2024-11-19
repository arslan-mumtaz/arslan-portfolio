import self from "../img/self.png"
//import aitravel from "../img/p2.png"
import shopify1 from "../img/p3.png"
import shopify2 from "../img/p4.png"
import shopify3 from "../img/p5.png"
import shopify4 from "../img/p6.png"
import buycyprus from "../img/portfolio/buycyprus.png"
import aitools from "../img/portfolio/aitools.png"
import aicrop from "../img/portfolio/aicrop.png"
import thinklab from "../img/portfolio/ThinkLab.png"
import nftwebsite from "../img/portfolio/nftmarketplace.png"
import propetyportal    from "../img/portfolio/realsetate.png"
import homeandgardenmasters from "../img/portfolio/homegardend.png"
import travelwbesite from "../img/portfolio/TravelVlog.png"
import calmewebsite from "../img/portfolio/calmewebsite.png"
import sunnyswap from "../img/portfolio/sunnuswap.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(33, 212, 253)", "rgb(209, 155, 238)"];
/*
linear-gradient(to right, rgb(118, 119, 47), rgb(39, 238, 7)); green new fav!!!
background: -webkit-linear-gradient(135deg, rgb(33, 212, 253), rgb(209, 155, 238));
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Arslan",
    lastName: "Mumtaz",
    initials: "am", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://arslan-mumtaz.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Pakistan'
        },
        {
            emoji: "💼",
            text: "Full Stack Dev at Mehdi Technologies"
        },
        {
            emoji: "📧",
            text: <a href="mailto:arslan.mumtaz04@gmail.com">arslan.mumtaz04@gmail.com</a>
        }
    ],
    socials: [
        {
            link: "https://www.linkedin.com/in/jack-britton-aka-arsal-281139145/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://github.com/arslan-mumtaz",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://twitter.com/akaarsal",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Arslan.  ⚡ I'm a software engineer focusing on Front-End web and emerging tech such as VR, AR, Web 3.0 and Blockchain. I am deeply committed to staying up-to-date with the latest trends and technologies in the blockchain and Web 3.0 space. Well-versed in the use of smart contracts, decentralized storage solutions, and other cutting-edge tools and technologies.I am also skilled in a range of programming languages including Solidity, JavaScript, Python, and Ruby on Rails.",
       skills:
        {
            proficientWith: ['javascript', 'react', , 'flutter', 'web3.0', 'solidity', 'ethers.js', 'hardhat', 'truffle', 'git', 'github', 'bootstrap', 'html5', 'css3', 'material UI'],
            exposedTo: ['figma', 'adobe xd', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'Soccer',
            emoji: '⚽'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'traveling',
            emoji: '✈️ '
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Buycyprus Property Portal",
            live: "https://www.buycyprus.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/", // this should be a link to the **repository** of the project, where the code is hosted.
            image: buycyprus
        },
        {
            title: "AI Tools Portal",
            live: "#", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/", // this should be a link to the **repository** of the project, where the code is hosted.
            image: aitools
        },
        {
            title: "AI Crops Prediction SaaS",
            live: "#",
            source: "https://github.com/",
            image: aicrop
        },
        {
            title: "AI Think Lab Project",
            live: "https://www.atlgpt.io/",
            source: "https://github.com/",
            image: thinklab
        },
        {
            title: "NFT Website Development",
            live: "https://nf-ts-market-place-2.vercel.app/",
            source: "https://github.com/",
            image: nftwebsite
        },
        {
            title: "Houzing Property Web Portal",
            live: "https://real-estate-page-phmn.vercel.app/",
            source: "https://github.com/",
            image: propetyportal
        },
        {
            title: "Home & Garden Website",
            live: "https://www.homeandgardenmasters.co.uk",
            source: "https://github.com/",
            image: homeandgardenmasters
        },
        {   
            title: "Sunny Swap NFT Trading App",
            live: "https://sunnyswap.io/",
            source: "https://github.com/",
            image: sunnyswap
        },
        {
            title: "CalmMe Website Development",
            live: "https://calmme.ai/",
            source: "https://github.com/",
            image: calmewebsite
        },{
            title: "MERN Stack Travel Portal",
            live: "https://travel-vlog-pink.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/", // this should be a link to the **repository** of the project, where the code is hosted.
            image: travelwbesite
        },
        {
            title: "JulxLabel Shopify Wesbite for Cloting",
            live: "https://jluxlabel.com/",
            source: "https://github.com/",
            image: shopify1
        },
        {
            title: "Shopify Store",
            live: "#",
            source: "https://github.com/",
            image: shopify2
        },
        {
            title: "Shopify Store Rich & Poor",
            live: "https://richandrulerco.com/",
            source: "https://github.com/",
            image: shopify3
        },
        {
            title: "Bridal Dress Shopify Store",
            live: "https://wildwoodbridal.com/",
            source: "https://github.com/",
            image: shopify4
        }

        
    ]
}
