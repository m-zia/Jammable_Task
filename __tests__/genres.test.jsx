import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Genres from '../components/Genres'

describe('Genres', () => {
    it('checking the text elements in the genres component', () => {
        render(<Genres />)

        expect(screen.getByText(/Music/i)).toBeInTheDocument();
        expect(screen.getByText(/Cartoon/i)).toBeInTheDocument();
        expect(screen.getByText(/Anime/i)).toBeInTheDocument();
        expect(screen.getByText(/Gaming/i)).toBeInTheDocument();
        expect(screen.getByText(/German/i)).toBeInTheDocument();
        expect(screen.getByText(/Korean/i)).toBeInTheDocument();
        expect(screen.getByText(/French/i)).toBeInTheDocument();
        expect(screen.getByText(/Public Figure/i)).toBeInTheDocument();
    })
})




