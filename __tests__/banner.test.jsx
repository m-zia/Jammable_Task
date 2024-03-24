import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Banner from '../components/Banner'

describe('Banner', () => {
    it('checking the text elements in the banner render correctly', () => {
        render(<Banner />)
        expect(screen.getByText(/Create song covers using any voice with AI/i)).toBeInTheDocument();
        expect(screen.getByText(/The #1 platform for making high quality AI covers in seconds!/i)).toBeInTheDocument();
        expect(screen.getByAltText(/Vibrant mix of colours that make up the Banner Image/i)).toBeInTheDocument();
    })
})

