import { BestRecipesContainer, BestRecipesContent, Card, CardsContainer } from "./styles";

interface RecipeProps {
  id: number;
  title: string;
  image: string;
}

interface BestRecipes {
  recipes: RecipeProps[]
}

export function BestRecipes({ recipes }: BestRecipes) {
  return (
    <BestRecipesContainer>
      <BestRecipesContent>
        <header>
          <h1>
            Our Best Recipes
          </h1>

          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </header>

        <CardsContainer>
          {recipes.map(recipe => {

            return (
              <Card key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} />

                <div>
                  <h3>{recipe.title}</h3>
                  
                  <button type='button'>
                    See Recipe
                  </button>
                </div>
              </Card>
            )
          })}

        </CardsContainer>
      </BestRecipesContent>
    </BestRecipesContainer>
  )
}
