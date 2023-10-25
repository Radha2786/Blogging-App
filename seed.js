const mongoose = require('mongoose');
const Blog = require('./models/Blog');
const posts = [
    {
        title: "delicious Dessert Recipe",
        img: "https://img.freepik.com/free-photo/chocolate-brownie-cake-with-scoop-ice-cream_155003-433.jpg?size=626&ext=jpg&uid=R121432296&ga=GA1.1.1160756614.1697645143&semt=sph",
        author: "Radha",
        desc: "If you're a dessert enthusiast like me, there's a good chance you're always on the lookout for the next sweet delight to satisfy your cravings. Well, look no further because today, I'm sharing a recipe for a dessert that's nothing short of pure bliss – Chocolate Lava Cakes.These little gems are renowned for their warm, oozing chocolate center that's a true delight for the senses. Whether you're hosting a dinner party or simply treating yourself, this dessert is a showstopper. Let's dive into how to make this delectable treat.",
    },
    // {
    //     title: "Technology News",
    //     img: "https://img.freepik.com/free-vector/news-concept-landing-page_52683-10026.jpg?size=626&ext=jpg&uid=R121432296&ga=GA1.1.1160756614.1697645143&semt=ais",
    //     author: "dolly",
    //     desc: "If you're a dessert enthusiast like me, there's a good chance you're always on the lookout for the next sweet delight to satisfy your cravings. Well, look no further because today, I'm sharing a recipe for a dessert that's nothing short of pure bliss – Chocolate Lava Cakes. These little gems are renowned for their warm, oozing chocolate center that's a true delight for the senses. Whether you're hosting a dinner party or simply treating yourself, this dessert is a showstopper. Let's dive into how to make this delectable treat."
    // },
    {
        title: "Earn money online ",
        img: "https://img.freepik.com/premium-vector/businessman-sitting-big-money-coins-finance-success-money-wealth_194360-190.jpg",
        author: "Rajesh",
        desc: "The sting of inflation may have you pondering how to make some extra income.NerdWallet rounded up 25 real ways to make money at home, online or out and about. For each potential side job, we list details like what it takes to get started, age requirements and how fast you can get paid. While most people want to make money fast, don’t discount the “slow” gigs, as they may pay more in the long ru If you have the time and energy, you can put your skills and passions to work with a side hustle."
    },
    {
        title: "Fitness",
        img: "https://img.freepik.com/free-vector/healthy-lifestyle-habits-cartoon-composition-with-nonsmoking-woman-practice-stress-relieving-yoga-8h-sleep-diet_1284-59040.jpg",
        author: "Tanishq",
        desc: "In this digital age, there’s no better place than the internet for finding the answers you need. Fitness apps, videos, and influencers can be a great source of information, but there’s one resource which can be a massive help: fitness blogs. If you’re a fitness business owner, you can learn a thing or two from the way some of the best fitness blogs package their content and engage with the reader."
    },
    {
        title: "Lifestyle",
        img: "https://img.freepik.com/free-vector/healthy-lifestyle-stress-managing-circular-cartoon-composition-with-sitting-yoga-lotus-pose-music-meditation_1284-60042.jpg",
        author: "Shubh",
        desc: "It can be challenging to find lifestyle blog post ideas that resonate with both you and your readers!I remember when I started blogging that I found it hard to keep the momentum going with weekly blog posts."
    },
    {
        title: "Spirituality",
        img: "https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg",
        author: "Rudy",
        desc: "Spirituality involves the recognition of a feeling or sense or belief that there is something greater than myself, something more to being human than sensory experience, and that the greater whole of which we are part is cosmic or divine in nature."
    },
]

async function seedDb(){
  await Blog.insertMany(posts);
  console.log("db seeded");
}
module.exports=seedDb;