import { useState } from "react"
import CategoryFilter from "/src/components/pageUtil/CategoryFilter.jsx"
import { Container, Row, Col } from "react-bootstrap"
import ContentCard from "/src/components/pageLayout/ContentCard.jsx"
import { mealsByCategory, categories } from "../libs/fakeData"


export default function CategoryPage() {
    const [selectedCategory, setSelectedCategory] = useState("")


    const filteredMeals = selectedCategory
        ? mealsByCategory[selectedCategory] || []
        : Object.values(mealsByCategory).flat()


    const categoryNames = categories.map(cat => cat.strCategory)

    return (
        <Container>
            <h1>Recipes by Category</h1>
            <CategoryFilter
                categories={categoryNames}
                selectedCategory={selectedCategory}
                onChange={setSelectedCategory}
            />
            <Row>
                {filteredMeals.length > 0 ? (
                    filteredMeals.map(meal => (
                        <Col key={meal.idMeal} xs={12} sm={6} md={4} lg={3}>
                            <ContentCard
                                image={meal.strMealThumb}
                                title={meal.strMeal}
                                btnText="Check it Out"
                                link={`/recipes/${meal.idMeal}`}
                            />
                        </Col>
                    ))
                ) : (
                    <p>No recipes found for this category.</p>
                )}
            </Row>
        </Container>
    )
}
