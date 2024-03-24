import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
    it('checking the text elements in the navbar render correctly', () => {
        render(<Navbar />)
        expect(screen.getByText(/Voicify/i)).toBeInTheDocument();
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/My Library/i)).toBeInTheDocument();
        expect(screen.getByText(/Community/i)).toBeInTheDocument();
        expect(screen.getByText(/Pricing/i)).toBeInTheDocument();
        expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    })
})

