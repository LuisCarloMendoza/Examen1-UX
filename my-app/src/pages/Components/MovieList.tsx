export interface Movie {
    id: number;
    title: string;
    image: string;
    description: string;
  }
  
  export const movieList: Movie[] = [
    {
      id: 1,
      title: "Better Call Saul",
      image: "/Images/BetterCallSaul.png",
      description: "A fantastic prequel to Breaking Bad."
    },
    {
      id: 2,
      title: "Narcos",
      image: "/Images/Narcos.png",
      description: "The story of Colombia's infamously violent drug cartels."
    },
    {
      id: 3,
      title: "Ozark",
      image: "/Images/Ozark.png",
      description: "A financial planner turned money launderer."
    },
    {
      id: 4,
      title: "Dexter",
      image: "/Images/Dexter.png",
      description: "A forensic expert who leads a double life."
    },
    {
      id: 5,
      title: "DragonBall Daima",
      image: "/Images/dragonball.png",
      description: "Goku's new adventure after Buu is defeated"
    },
    {
      id: 6,
      title: "Baki",
      image: "/Images/baki.png",
      description: "Journey of a boy who seeks strength to fight his father"
    },
    {
      id: 7,
      title: "Cowboy Bebop",
      image: "/Images/cowboy.png",
      description: "Space Mercernaries go through space looking for treasure"
    },
    {
      id: 8,
      title: "Evangelion",
      image: "/Images/evangelion.png",
      description: "Shinji is set up to fight the angels invading Earth"
    },
    {
      id: 9,
      title: "Cyberpunk",
      image: "/Images/cyberpunk.png",
      description: "Life in Night City is hard, where thieves try to survive"
    },
    {
      id: 10,
      title: "3 Body Problem",
      image: "/Images/3body.png",
      description: "Humanity is confronted with the threats of aliens"
    },
    {
      id: 11,
      title: "Stranger Things",
      image: "/Images/strange.png",
      description: "A group of children and their encounter with the paranormal"
    },
    {
      id: 12,
      title: "The Sandman",
      image: "/Images/sandman.png",
      description: "Dream has to travel the mortal realm for his treasures"
    },
    {
      id: 13,
      title: "John Wick",
      image: "/Images/wick.png",
      description: "John walks a path of vengeance for those who hurt him"
    },
    {
      id: 14,
      title: "Mission Impossible",
      image: "/Images/mission.png",
      description: "Spy Ethan once again faces a new threat"
    },
    {
      id: 15,
      title: "F&F: Tokyo Drift",
      image: "/Images/tokyo.png",
      description: "American boy has to prove his worth in Tokyo racing"
    },
    {
      id: 16,
      title: "Edge of Tomorrow",
      image: "/Images/edge.png",
      description: "Days keep repeating for a soldier trying to save the world"
    },
    {
      id: 17,
      title: "Jason Bourne",
      image: "/Images/jason.png",
      description: "People are chasing after a soldier without memory"
    }
    
  ];

  export default function MovieList() {
    return (
      <>
      </>
    );
  }