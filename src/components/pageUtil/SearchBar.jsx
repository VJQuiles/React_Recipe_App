import { SearchButton } from "../pageButtons/pageButtons"
import { Form, InputGroup } from "react-bootstrap"

export default function SearchBar({ value, onChange, onSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch()
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="What grub is on your mind?"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <SearchButton />
                </InputGroup>
            </Form>
        </>
    )
}