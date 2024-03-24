import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Socials from '../components/Socials'

describe('Socails', () => {
    it('checking the text elements in the banner socials component', () => {
        render(<Socials />)
        expect(screen.getByText("Voicify generated 100M+ views")).toBeInTheDocument();
        expect(screen.getByAltText(/Tiktok/i)).toBeInTheDocument();
        expect(screen.getByAltText(/Instagram/i)).toBeInTheDocument();
        expect(screen.getByAltText(/Youtube/i)).toBeInTheDocument();

    })
})

