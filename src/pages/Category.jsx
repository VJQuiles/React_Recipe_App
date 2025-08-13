import { useState } from "react"
import CategoryFilter from "/src/components/pageUtil/CategoryFilter.jsx"
import { Container, Row, Col, Alert } from "react-bootstrap"
import ContentCard from "/src/components/pageLayout/ContentCard.jsx"
import useFetch from "../hooks/useFetch"
import Spinners from "/src/components/pageUtil/Spinners.jsx"


export default function CategoryPage() {
    const [selectedCategory, setSelectedCategory] = useState("")

    const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"

    const { data, loading, error } = useFetch(url)

    if (loading) {
        return (
            <Spinners animation="border" role="status" />
        )
    }

    if (error) {
        return (
            <Alert variant="danger">Error: {error.message}</Alert>
        )
    }

    const meals = data?.meals || []


    const filteredMeals = selectedCategory
        ? meals[selectedCategory] || []
        : Object.values(meals).flat()


    const categoryNames = meals.map(cat => cat.strCategory)

    console.log(filteredMeals.map(m => m.idMeal))
    console.log()

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
