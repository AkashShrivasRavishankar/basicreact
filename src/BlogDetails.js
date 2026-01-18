import { useParams, Link } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();

  const blogs = [
    {
      id: '1',
      title: 'Interests over the years',
      period: '2012–2026',
      body: `When I was 4 years old, I was watching the cricket world cup with my dad. When I saw MS Dhoni hit that final six, I decided that I wanted to be a cricketer. After that, I joined cricket coaching and decided to try for the school team. I played cricket for the school till I was in 6th grade, after which I had to change schools. I realised that the pressure on the field was too much for me to handle and quit cricket after that, but till this date I wonder if I would've become a cricketer if I didn't quit....
      
      
      
      It was 2018 when I was in my 6th grade, I had transferred from Chennai to Mumbai, and after playing the game fortnite when it had released a year back, I became fond of video games. Fortnite's graphics had that appealing look to it and felt amazing to play. I had purchased a nintendo switch and played fortnite with my friends, and just like every dude out there, for a brief period of time I thought I could become an esports player. But that's an out of scope dream in a country like India and in general esports is a very unstable job. So eventually I played games such as fortnite, PUBG, Roblox and CODM just for fun with my friends :)
      
      

      2020 was one of the best years for me, because I built a PC for the first time from scratch and it was an amazing experience. I felt proud of myself for building a potato PC from scratch in the quarantine. Finally building a PC after watching the tutorials felt amazing, and I loved this company known as AMD for their inbuilt graphics in their processors, which were really good for budget PC builds. I had a new interest now; to join AMD in the future. In the coming years, I upgraded my PC from an athlon and gt 1030 to a ryzen 5 and gtx 1650 super, I played a TON of valorant, and reached diamond. I really wanted to get better at valorant and play it at an esports level, but unfortunately my 11th grade was beginning, JEE was coming. It was time to close the chapter.
      
      
      
      
      After the JEE phase got over, I joined MIT Manipal. When I was younger I wanted to join the Massachussets MIT, but I guess that's still a dream for the coming future, along with joining AMD. Anyways, my youtube channel is at the top, if you wish to see my valorant gameplay back in those days. Thank you for reading :D`
    },
    {
      id: '2',
      title: 'How I got hooked to computers',
      period: '2020–2026',
      body: `I had a nintendo switch till 2020 on which I played fortnite. Sure, nintendo had a ton of other games which were nintendo switch exclusive games and known to be really fun. But my obsession with fortnite was too much that I only played fortnite on it mostly. My friends often made fun of me for not buying the playstation 4 because It was a much better choice for fortnite, along with much better games. I have to admit that for sure. But it had been 3 years of playing fortnite on a switch and I wanted to play new games, and play fortnite smoothly. So it was time to pick a new device, PC or PS4 or maybe even an XBOX?
      
      
      
      On a random day, while scrolling youtube I saw a youtube video called "How To Build a PC" which was published around November 2019 by the youtuber TechSource. I saw this video out of pure interest as I had seen desktops in computer labs before, but I've never thought that it could be built by a single person so easily. I watched this video about 10 times, and literally memorised it, because it was that fun to watch. It was like building legos, except it's a real computer which works. The Quarantine had begun and I needed a computer to attend classes, but I also wanted to play heavy games, so I decided I'll build a PC, starting from a potato PC, and then upgrade its parts one by one.
      
      
      
      On the day I built my PC and saw it running, I was at my happiest and the coming years I played valorant and also tried playing in small tournaments with my friends; as of now I'm using the same computer, except the parts are all upgraded and I wish to get into a tech company like AMD and increase my knowledge in software just as much as hardware :)`
    },
    {
      id: '3',
      title: 'Era of Nostalgia',
      period: '2016–2018',
      body: `I'm pretty sure 90% of Gen-Z loved 2016, the nostalgic youtube videos of Sidemen, Dude Perfect, Fidget spinners and Slime videos were amazing! 2016 was the last year before video games dominated the entire internet; we played board games, played with rubix cubes and after all school exams ended we brought UNOs, Cricket Attax, Snakes and Ladders, Monopoly and many other board games to school and had a TON of fun. I remember watching the movie BOLT in my classroom back in 1st grade and 2016 was the last year we got to do these kind of things before moving on to middle school.
      
      
      
      
      2017 was a more memorable year for me because I discovered games which I still play to this date. In early 2017, I played ROBLOX, an open world game where I had met many online friends. Although it wasn't known for graphics and was rather referred to as a kids game, I played roblox with my sister after we both discovered it on the channel SISvsBRO which was a very popular channel in youtube. The same year, I was invited to a friend's birthday party at a gaming cafe, that's when we played fortnite for the first time ever. The graphics of fortnite were so physically appealing, that I was determined to play it somehow in the future. It was a kind of game that would be more fun than anything with the help of voice chat. I still talk to friends that I met on roblox to this date. I never got a victory royale on fortnite till 2018 as fortnite was incredibly hard for me in the early days due to no presence of bots and also me being an absolute noob at the game.
      
      
      
      
      In 2018, I decided to switch servers to NA on squads to meet different people, and I remember meeting 3 teenagers from America who were very kind to me and we ended up getting a victory royale. I see them on my friends list to this date. Finally, in the middle of 2018, I had gotten transferred to Mumbai, and I played fortnite the entire year, after which it got boring and I gradually witnessed the end of the nostalgic era.
      
      
      
      
      Looking back, video games were a pretty huge phase of my life, but those days would've never been that fun without friends, which is why I hope I meet great people in college and do some real life things such as travelling :) Anyway thank you so much for reading this blog!`
    }
  ];

  const blog = blogs.find(b => b.id === id);

  return (
    <div className="blog-details">
      <h2>{blog.title}</h2>
      <p className="blog-period">{blog.period}</p>
      <div className="blog-body">
        {blog.body}
      </div>

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
};

export default BlogDetails;
