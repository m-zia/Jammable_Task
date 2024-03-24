import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MoreVoices from '../components/MoreVoices'
import MoreVoicesTitle from '../components/MoreVoicesTitle'
import Card from '../components/Card'

describe('MoreVoices', () => {
    it('checking the text elements in the MoreVoices component', () => {
        render(<MoreVoices />)
        expect(screen.getAllByText(/Michael/i)).toHaveLength(2);
        expect(screen.getAllByText(/Patrick/i)).toHaveLength(4);
        expect(screen.getAllByText(/Taylor/i)).toHaveLength(2);
        expect(screen.getAllByText(/Kanye/i)).toHaveLength(2);
        expect(screen.getAllByText(/Weeknd/i)).toHaveLength(4);
        expect(screen.getAllByText(/45K uses · 1K likes/i)).toHaveLength(16);
    })
})

describe('Card', () => {
    it('checking the text elements in the Card component', () => {
        render(<Card />)
        expect(screen.getByAltText(/Image of AI Voice Character/i)).toBeInTheDocument();
        expect(screen.getByAltText(/favorite icon that looks like a heart/i)).toBeInTheDocument();
    })
})

describe('MoreVoicesTitle', () => {
    it('checking the text elements in the MoreVoicesTitle component', () => {
        render(<MoreVoicesTitle />)
        expect(screen.getByText(/More Voices/i)).toBeInTheDocument();
        expect(screen.getByText(/394/i)).toBeInTheDocument();
    })
})



