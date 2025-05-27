import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Recipes {
  id: string;
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
}

const Home = async () => {
  const getRecipes = async (): Promise<Recipes[]> => {
    const res = await fetch("http://localhost:5000/recipes");

    // delay response
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return res.json();
  };

  const recipes = await getRecipes();

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className="flex flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage
                  src={`/images/${recipe.image}`}
                  alt={recipe.title}
                />
                <AvatarFallback>
                  {recipe.title.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} minutes to cook</CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>

            <CardFooter className="flex justify-between items-center">
              <Button className="cursor-pointer text-white">View Recipe</Button>
              {recipe.vegan && <Badge variant="secondary">Vegan</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Home;
