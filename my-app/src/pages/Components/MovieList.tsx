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
    }
  ];

  export default function MovieList() {
    return (
      <>
      </>
    );
  }