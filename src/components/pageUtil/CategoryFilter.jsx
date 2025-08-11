import { Form } from "react-bootstrap"

export default function CategoryFilter({ categories = [], selectedCategory = "", onChange }) {
    return (
        <Form.Group controlId="categoryFilter">
            <Form.Label>Sort By Category</Form.Label>
            <Form.Select
                value={selectedCategory}
                onChange={(e) => onChange(e.target.value)}>
                <option value="">All Categories</option>
                {categories.map((category) => (
                    <option
                        key={category}
                        value={category}>
                        {category}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
    )
}