import self from "../img/self1.png"
import mock1 from "../img/blocknotes.png"
import mock2 from "../img/lighthouse.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(33, 212, 253)", "rgb(209, 155, 238)"];
/*
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
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
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
            text: "Full Stack Dev at Octaloop"
        },
        {
            emoji: "📧",
            text: "arslan.mumtaz04@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/arsal_me",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/arslan-mumtaz",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/akaarsal",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Arslan.  ⚡ I'm a software engineer focusing on Front-End web and emerging tech such as VR, AR, Web 3.0 and Blockchain. I am deeply committed to staying up-to-date with the latest trends and technologies in the blockchain and Web 3.0 space. Well-versed in the use of smart contracts, decentralized storage solutions, and other cutting-edge tools and technologies. He is also skilled in a range of programming languages including Solidity, JavaScript, Python, and Ruby on Rails.",
       skills:
        {
            proficientWith: ['javascript', 'react', 'web3.0', 'solidity', 'ethers.js', 'hardhat', 'truffle', 'git', 'github', 'bootstrap', 'html5', 'css3', 'material UI'],
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
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Block Notes ",
            live: "#", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Lisht house",
            live: "#",
            source: "https://github.com/",
            image: mock2
        },
        {
            title: "Project 3",
            live: "#",
            source: "https://github.com/",
            image: mock3
        },
        {
            title: "Project 4",
            live: "#",
            source: "https://github.com/",
            image: mock4
        },
        {
            title: "Project 5",
            live: "#",
            source: "https://github.com/",
            image: mock5
        }
    ]
}