import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Promoted from '../components/Promoted'
import HorizontalCard from '../components/HorizontalCard'
import PromotedCard from '../components/PromotedCard'

describe('Promoted', () => {
    it('checking the text elements in the Promoted component', () => {
        render(<Promoted />)
        expect(screen.getAllByText(/Drizzy/i)).toHaveLength(3);
        expect(screen.getAllByText(/Ariana/i)).toHaveLength(6);
        expect(screen.getByText(/Voicify Drizzy/i)).toBeInTheDocument();
        expect(screen.getAllByText(/Juice/i)).toHaveLength(2);
        expect(screen.getAllByText(/Plankton/i)).toHaveLength(2);
        expect(screen.getAllByText(/45K uses · 1K likes/i)).toHaveLength(12);
    })
})

describe('HorizontalCard', () => {
    it('checking the text elements in the HorizontalCard component', () => {
        render(<HorizontalCard />)
        expect(screen.getByAltText(/Sound Wave Logo/i)).toBeInTheDocument();
        expect(screen.getByAltText(/favorite icon that looks like a heart/i)).toBeInTheDocument();
    })
})

describe('PromotedCard', () => {
    it('checking the text elements in the PromotedCard component', () => {
        render(<PromotedCard />)
        expect(screen.getByAltText(/Image of AI Voice Character/i)).toBeInTheDocument();
        expect(screen.getByAltText(/favorite icon that looks like a heart/i)).toBeInTheDocument();
    })
})

